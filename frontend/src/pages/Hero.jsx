// src/components/Hero.js
import Header from '../components/Header';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('../public/front.avif')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Logo at the top-left corner */}
      <div className="absolute top-4 left-4 z-20">
        <img
          src="./src/assets/logo.webp"
          alt="App Logo"
          className="h-12 sm:h-16 md:h-20 rounded-b-lg" // Adjust logo size for small screens, medium, and large screens
        />
      </div>

      {/* Login Button at the top-right corner */}
      <div className="absolute top-4 right-4 z-20">
        <Button text="Login" onClick={() => alert('Login clicked')} />
      </div>

      <div className="relative text-white text-center space-y-6 z-10">
        <Header />
        <Link
          to={'/main'}
        >
          <Button text = "Getting Started"/>
        </Link>
        
      </div>
    </div>
  );
};

export default Hero;
