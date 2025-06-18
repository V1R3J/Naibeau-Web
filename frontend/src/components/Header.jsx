import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ArrowWhite from "/static/ArrowWhite.svg";
import ArrowRed from "/static/ArrowRed.svg";
import { LuArrowDownToLine } from "react-icons/lu";



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md top-0 z-50">
      <div className="flex flex-wrap items-center justify-between px-5 py-3 bg-white shadow-sm">
        {/* Logo */}
        <Link to="/">
          <img src="/static/Logo.svg" alt="Naibeau Logo" className="sm:w-36 sm:h-8 w-25 h-5" />
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
              `text-lg border-2 border-red-400 font-medium rounded-[30px] px-4 py-2 transition relative z-10 ${
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
              `text-lg border-2 border-red-400 font-medium rounded-[30px] px-4 py-2 transition relative z-10 ${
                isActive
                  ? "bg-red-600 text-white"
                  : "bg-white text-red-600 hover:bg-red-600 hover:text-white"
              }`
            }
          >
            Be Our Partner
          </NavLink>
          
          <NavLink
            to="/download"
            className={({ isActive }) =>
              `text-lg border-2 border-red-400 font-medium rounded-[30px] px-4 py-2 flex items-center gap-2 transition relative z-10 ${
                isActive
                  ? "bg-red-600 text-white"
                  : "bg-white text-red-600 hover:bg-red-600 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Download the app
                <LuArrowDownToLine className="w-6 h-6"/>
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
                className="text-red-600 text-lg font-medium hover:text-red-800"
              >
                Be Our Partner
              </Link>
            </li>
            <li>
              <Link
                to="/download"
                onClick={() => setIsMenuOpen(false)}
                className="text-red-600 text-lg font-medium hover:text-red-800 flex items-center gap-2"
              >
                Download The App
                <img src={ArrowRed} alt="Download icon" className="w-3 h-3 items-center" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
