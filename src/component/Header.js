
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <a href="/" className="text-xl font-bold">
            Fibery
          </a>
        </div>
        <nav className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            Menu
          </button>
        </nav>
        <nav className={`md:flex space-x-4 ${menuOpen ? "block" : "hidden"}`}>
          <ul className="flex space-x-4 justify-start">
            <li>
              <a href="#" className="text-white">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                ...
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:flex items-center">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white">
                Log in
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Get a demo
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;



