import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">&copy; 2023 Fibery. All rights reserved.</p>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <li>
              <a href="#" className="text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
