import { Link, NavLink } from 'react-router-dom';
import ArrowWhite from '/static/ArrowWhite.svg';
import ArrowRed from '/static/ArrowRed.svg';


export default function Header() {
  return (
    <header className="bg-white shadow-md sticky  z-50">
      <div className="pt-5 pr-5 pl-5 pb-5 flex-wrap flex items-center justify-between px-5 py-3 bg-white shadow-sm">
        {/* Logo */}
        <Link to="/">
          <img
            src="/static/Logo.svg"
            alt="Naibeau Logo"
            className="w-145 h-30"
          />
        </Link>

        {/* Navigation Buttons */}
        <nav>
          <ul className="flex gap-3 items-center">
            <li>
              <NavLink 
                to="/"
                end
                className={({ isActive }) =>
                  `text-lg border-2 border-red-400 font-medium pt-3 pr-3 pl-3 pb-3 px-4 py-2 rounded-[30px] transition relative z-10 ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-red-600 hover:bg-red-600 hover:text-white'
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/partner"
                className={({ isActive }) => 
                  `text-lg border-2 border-red-400 font-medium pt-3 pl-3 pr-3 pb-3 px-4 py-2 rounded-[30px] transition relative z-10 ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-red-600 hover:bg-red-600 hover:text-white'
                  }`
                }
              >
                Be Our Partner
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/download"
                className={({ isActive }) => 
                  `text-lg border-2 border-red-400 font-medium pt-3 pl-3 pr-3 pb-3 px-4 py-2 rounded-[30px] transition flex items-center gap-3 relative z-10 ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-red-600 hover:bg-red-600 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    Download The App
                    <img
                      src={isActive ? ArrowWhite : ArrowRed}
                      alt="Download icon"
                      className="w-5 h-5"
                    />
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}