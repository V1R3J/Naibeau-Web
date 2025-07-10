import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuArrowDownToLine } from "react-icons/lu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or when at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`bg-white shadow-sm border-b-2 border-gray-100 z-50 fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3 bg-white">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src="/static/Logo.svg" 
            alt="Naibeau Logo" 
            className="h-7 w-auto" 
            onError={(e) => {
              console.error('Logo failed to load');
              e.target.style.display = 'none';
            }}
          />
        </Link>

        {/* Hamburger for small and medium screens only */}
        <button
          className="block lg:hidden text-black text-3xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            // Close icon (X)
            <span className="block transform rotate-45">&#43;</span>
          ) : (
            // Hamburger icon
            <span>&#9776;</span>
          )}
        </button>

        {/* Navigation for large screens and up */}
        <nav className="hidden lg:flex gap-3 items-center" role="navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-base font-medium rounded-[30px] px-4 py-2 transition-all duration-200 relative z-10 ${
                isActive
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-white text-red-600 hover:bg-red-600 hover:text-white "
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-base font-medium rounded-[30px] px-4 py-2 transition-all duration-200 relative z-10 ${
                isActive
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-white text-red-600 hover:bg-red-600 hover:text-white "
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/partner"
            className={({ isActive }) =>
              `text-base font-medium rounded-[30px] px-4 py-2 transition-all duration-200 relative z-10 ${
                isActive
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-white text-red-600 hover:bg-red-600 hover:text-white "
              }`
            }
          >
            Be Our Partner
          </NavLink>
          
          <NavLink
            to="/download"
            className={({ isActive }) =>
              `text-base font-medium rounded-[30px] px-4 py-2 flex items-center gap-2 transition-all duration-200 relative z-10 ${
                isActive
                  ? "bg-red-600 text-white shadow-md border-2 border-red-600 border-b-4 "
                  : "bg-white text-red-600 hover:bg-red-600 hover:text-white border-2 border-red-600 border-b-4 "
              }`
            }
          >
            Download The App
            <LuArrowDownToLine className="w-4 h-4" />
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu: simple vertical links - show only when open and on smaller than large */}
      <div 
        className={`lg:hidden bg-white shadow-md border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-5 py-4" role="navigation">
          <ul className="flex flex-col gap-3">
            <li>
              <NavLink
                to="/"
                end
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-medium py-2 px-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-red-600 bg-red-50 font-semibold"
                      : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-medium py-2 px-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-red-600 bg-red-50 font-semibold"
                      : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                  }`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/partner"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-medium py-2 px-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-red-600 bg-red-50 font-semibold"
                      : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                  }`
                }
              >
                Be Our Partner
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/download"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-lg font-medium py-2 px-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-red-600 bg-red-50 font-semibold"
                      : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                  }`
                }
              >
                Download The App
                <LuArrowDownToLine className="w-5 h-5" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}