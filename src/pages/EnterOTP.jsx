import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AuthFormLayout from '../components/auth/AuthFormLayout';
import AuthInput from '../components/auth/AuthInput';
import AuthButton from '../components/auth/AuthButton';

const EnterOTP = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      // Agar email nahi hai toh wapas verify-email page pe bhej do
      navigate('/verify-email');
    }
  }, [email, navigate]);

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://sportmate-backend-i35i.onrender.com/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/signup', { state: { email } }); // OTP verified → go to signup
      } else {
        setError(data.message || 'Invalid OTP');
      }
    } catch (err) {
      console.error('Error verifying OTP:', err);
      setError('Something went wrong. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthFormLayout title="Enter OTP">
      <p className="text-sm text-gray-500 mb-2">OTP sent to <strong>{email}</strong></p>
      
      <AuthInput
        label="Enter OTP"
        type="text"
        value={otp}
        onChange={(e) => {
          setOtp(e.target.value);
          setError('');
        }}
        placeholder="6-digit OTP"
        error={error}
      />

      <AuthButton
        isLoading={isLoading}
        onClick={handleVerifyOTP}
        text="Verify OTP"
        disabled={otp.length !== 6}
      />
    </AuthFormLayout>
  );
};

export default EnterOTP;
