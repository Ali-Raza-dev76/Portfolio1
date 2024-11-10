'use client';

import { useState } from 'react';

export default function PopupMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the popup visibility
  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div className="popup-container">
      {/* Hamburger icon with dots */}
      <button onClick={togglePopup} className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </button>

      {/* Popup menu */}
      {isOpen && (
        <div className="popup-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}

      <style jsx>{`
        .popup-container {
          position: relative;
        }
        .hamburger-menu {
          background: none;
          border: none;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 30px;
          height: 30px;
          padding: 0;
          cursor: pointer;
          position: fixed;
          top: 40px;
          right: 20px;
          z-index: 100;
        }

        .dot {
          width: 5px;
          height: 5px;
          background-color: #333;
          border-radius: =100%;  /* This makes the dots circular */
          transition: transform 0.3s, opacity 0.3s;
        }

        .hamburger-menu.open .dot:nth-child(1) {
          transform: translateY(6px) scale(0.7);
        }
        .hamburger-menu.open .dot:nth-child(2) {
          opacity: 0;
        }
        .hamburger-menu.open .dot:nth-child(3) {
          transform: translateY(-6px) scale(0.7);
        }

        .popup-menu {
          position: fixed;
          top: 10%;
          right: 10px;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 20px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          z-index: 99;
        }

        .popup-menu ul {
          list-style: none;
          padding: 0;
        }

        .popup-menu li {
          margin: 10px 0;
        }

        .popup-menu a {
          color: white;
          text-decoration: none;
        }

        .popup-menu a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
