// Footer.jsx
import React from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaReact, FaHtml5, FaCss3, FaJsSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Import your profile image
import profileImage from './frank.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="p-8 bg-gray-900 text-white"
    >
      {/* Social Links */}
      <div className="flex justify-center items-center mb-6 space-x-4">
        <a href="https://wa.me/+254797887378" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-2xl hover:text-green-500" />
        </a>
        <a href="mailto:frankmuthomi30@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-2xl hover:text-red-500" />
        </a>
        <a href="https://www.linkedin.com/in/frank-muthomi-0275a21a1" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-500" />
        </a>
      </div>

      {/* Powered by Section */}
      <div className="flex justify-center items-center mb-6 space-x-4">
        <span className="text-lg">Powered by:</span>
        <FaReact className="text-2xl text-blue-300" />
        <FaHtml5 className="text-2xl text-red-500" />
        <FaCss3 className="text-2xl text-blue-500" />
        <FaJsSquare className="text-2xl text-yellow-400" />
      </div>

      {/* Icons and Form Handling Attribution */}
      <div className="text-center mb-6 space-y-2 text-sm">
        <p>
          Icons by{' '}
          <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer" className="underline">
            React Icons
          </a>
        </p>
        <p>
          Form handling by{' '}
          <a href="https://www.freeforms.com/" target="_blank" rel="noopener noreferrer" className="underline">
            Freeforms
          </a>
        </p>
      </div>

      {/* Profile Image and Name */}
      <div className="flex flex-col items-center mb-6">
        <img src={profileImage} alt="Your Profile" className="w-16 h-16 rounded-full mb-2" />
        <p className="text-lg font-bold">Frank Muthomi Mbauni</p>
      </div>

      {/* Year and Copyright */}
      <div className="text-center text-sm text-gray-300">
        &copy; {currentYear} Frank Muthomi. All Rights Reserved.
      </div>
    </motion.div>
  );
};

export default Footer;
