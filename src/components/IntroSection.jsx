import React, { useState, useEffect } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  const [text, setText] = useState('');
  const [cursor, setCursor] = useState(true);
  const welcomeText = "Welcome to My Portfolio";

  useEffect(() => {
    const typeWriter = async () => {
      for (let i = 0; i < welcomeText.length; i++) {
        setText((prevText) => prevText + welcomeText.charAt(i));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    };

    // Toggle cursor visibility every 500ms
    const blinkCursor = setInterval(() => {
      setCursor((prevCursor) => !prevCursor);
    }, 500);

    typeWriter();

    // Clear interval when component unmounts
    return () => clearInterval(blinkCursor);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/backg.jpg)` }}>
      {/* Use a black gradient background instead of a plain black overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-60"></div>

      <div className="text-center space-y-4 relative z-10 text-white">
        <h1 className="text-4xl font-bold mb-4">
          {/* Add a span element for the cursor */}
          {text}<span className={cursor ? 'inline-block w-2 h-6 bg-white' : 'hidden'}></span>
        </h1>
        <p className="text-lg mb-4">
          Aspiring I.C.T Professional & Frontend Developer.
        </p>

        <div className="flex items-center mb-6 mt-6">
          <img src={process.env.PUBLIC_URL + "/frank.jpg"} alt="Profile" className="rounded-full w-20 h-20 object-cover mr-4" />
          <div>
            <p className="text-lg font-bold text-center">Frank Muthomi.</p>
            <p className="text-lg">Web Developer</p>
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          <a href="tel:+254797887378" className="text-blue-600 hover:text-blue-700">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
              Call Me
            </button>
          </a>
        </div>
      </div>

      <div className="text-center mt-8 text-white relative z-10">
        <p className="text-lg mt-4 mb-8">Powered by the latest technologies</p>
        <div className="flex space-x-4">
          <FaReact className="text-5xl text-blue-500 hover:text-blue-600" />
          <FaJs className="text-5xl text-yellow-500 hover:text-yellow-600" />
          <FaHtml5 className="text-5xl text-orange-500 hover:text-orange-600" />
          <FaCss3 className="text-5xl text-blue-300 hover:text-blue-400" />
        </div>
      </div>

      {/* Add social media links or contact form to your portfolio */}
      <div className="text-center mb-8 text-white relative z-10">
        <p className="text-lg mt-4 mb-8">Connect with me</p>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/frank-muthomi-0275a21a1" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-5xl text-blue-600 hover:text-blue-700" />
          </a>
          <a href="mailto:frankmuthomi30@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope className="text-5xl text-red-600 hover:text-red-700" />
          </a>
          {/* Add WhatsApp icon here */}
          <a href="https://wa.me/+254797887378" target="_blank" rel="noreferrer">
            <FaWhatsapp className="text-5xl text-green-600 hover:text-green-700" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
