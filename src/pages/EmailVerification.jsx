import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthFormLayout from '../components/auth/AuthFormLayout';
import AuthInput from '../components/auth/AuthInput';
import AuthButton from '../components/auth/AuthButton';

const EmailVerification = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log("Email otp bhejne wala function called from frontend")
    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      // Send OTP via API to your deployed backend
      const response = await fetch('https://sportmate-backend-i35i.onrender.com/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/signup', { state: { email } }); // Pass email to signup page
      } else {
        setError(data.message || 'Failed to send OTP');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthFormLayout title="Verify Email">
      <AuthInput
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError('');
        }}
        placeholder="ahujapulkit0202@gmail.com"
        error={error}
      />
      
      <AuthButton
        isLoading={isLoading}
        onClick={handleSubmit}
        text="Send OTP"
        disabled={!email}
      />
    </AuthFormLayout>
  );
};

export default EmailVerification;