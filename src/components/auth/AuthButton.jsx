const AuthButton = ({ isLoading, onClick, text }) => (
    <button
      className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-105 flex items-center justify-center"
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
      ) : (
        text
      )}
    </button>
  );
  
  export default AuthButton;