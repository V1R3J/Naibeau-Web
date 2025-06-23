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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`bg-white shadow-sm border-1.5 z-50 fixed top-0 left-0 right-0 overflow-y-auto transition-transform duration-300 ease-in-out ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between px-5 py-3 bg-white shadow-sm border-black">
        {/* Logo */}
        <Link to="/">
          <img src="/static/Logo.svg" alt="Naibeau Logo" className="h-7 w-30" />
        </Link>

        {/* Hamburger for small and medium screens only */}
        <button
          className="block lg:hidden text-black text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>

        {/* Navigation for large screens and up */}
        <nav className="hidden lg:flex gap-3 items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-md border-2 border-red-400 font-medium rounded-[30px] px-4 py-2 transition relative z-10 ${
                isActive
                  ? "bg-red-600 text-white"
                  : "bg-white text-red-600 hover:bg-red-600 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/partner"
            className={({ isActive }) =>
              `text-md border-2 border-red-400 font-medium rounded-[30px] px-4 py-2 transition relative z-10 ${
                isActive
                  ? "bg-red-600 text-white"
                  : "bg-white text-red-600 hover:bg-red-600 hover:text-white"
              }`
            }
          >
            Be Our Partner
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-md border-2 border-red-400 font-medium rounded-[30px] px-4 py-2 flex items-center gap-2 transition relative z-10 ${
                isActive
                  ? "bg-red-600 text-white"
                  : "bg-white text-red-600 hover:bg-red-600 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Services
              </>
            )}
          </NavLink>
          
          <NavLink
            to="/download"
            className={({ isActive }) =>
              `text-md border-2 border-red-400 font-medium rounded-[30px] px-4 py-2 flex items-center gap-2 transition relative z-10 ${
                isActive
                  ? "bg-red-600 text-white"
                  : "bg-white text-red-600 hover:bg-red-600 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Download The App
                <LuArrowDownToLine className="w-5 h-5"/>
              </>
            )}
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu: simple vertical links - show only when open and on smaller than large */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white shadow-md border-t border-gray-200 px-5 py-4">
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-red-600 text-lg font-medium hover:text-red-800"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/partner"
                onClick={() => setIsMenuOpen(false)}
                className="text-red-600 text-md font-medium hover:text-red-800"
              >
                Be Our Partner
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-red-600 text-md font-medium hover:text-red-800"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/download"
                onClick={() => setIsMenuOpen(false)}
                className="text-red-600 text-md font-medium hover:text-red-800 flex items-center gap-2"
              >
                Download The App
                <LuArrowDownToLine className="w-6 h-6"/>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}