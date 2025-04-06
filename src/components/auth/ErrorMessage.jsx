const ErrorMessage = ({ error }) => (
    error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
  );
  
  export default ErrorMessage;