import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 backdrop-blur-sm py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          © {currentYear} SPYNAD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 