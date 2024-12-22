// src/components/Button.js
const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 focus:outline-none transition duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
