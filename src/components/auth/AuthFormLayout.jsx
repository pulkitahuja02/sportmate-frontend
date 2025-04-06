const AuthFormLayout = ({ title, children }) => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white font-poppins">
      {/* Logo Section */}
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-green-600 mb-4">SportMate</h1>
        <p className="text-lg text-black italic">
          "Bring Back the Game, Bring Back the Passion."
        </p>
      </div>
  
      {/* Form Container */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
  
  export default AuthFormLayout;