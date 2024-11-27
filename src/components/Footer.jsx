import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2024 Michael. All rights reserved.</p>
        <div className="mt-4 md:mt-0">
          <a href="https://github.com/michaelcwk1" className="text-gray-400 hover:text-white mr-4">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
