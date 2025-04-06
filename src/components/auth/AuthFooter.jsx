const AuthFooter = ({ text, linkText, onClick }) => (
    <p className="text-center mt-4 text-gray-700">
      {text} <span 
        className="text-green-600 cursor-pointer hover:underline" 
        onClick={onClick}
      >
        {linkText}
      </span>
    </p>
  );
  
  export default AuthFooter;