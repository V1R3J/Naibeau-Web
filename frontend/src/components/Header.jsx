import { Link, NavLink } from 'react-router-dom';
import ArrowWhite from '/static/ArrowWhite.svg';
import ArrowRed from '/static/ArrowRed.svg';


export default function Header() {
  return (
    <header className="bg-white shadow-md ">
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
        <ul className="flex gap-3 items-center">
          <NavLink to="/"     
            className={({ isActive }) =>
              `text-lg border-2 border-red-400 font-medium pt-3 pr-3 pl-3 pb-3 px-4 py-2 rounded-[30px] transition sm:inline flex flex-wrap ${
                isActive
                  ? 'bg-red-600 text-white hover:bg-red-600'
                  : 'bg-white text-red-600 hover:bg-red-600 hover:text-white'
              }`
            }>
              Home
          </NavLink>

      {/*To Partner page*/}
          <NavLink to="/partner" 
            className={({ isActive}) => 
            `text-lg border-2 border-red-400 font-medium pt-3 pl-3 pr-3 pb-3 px-4 py-2 rounded-[30px] transition sm:inline flex flex-wrap ${
              isActive
              ? 'bg-red-600 text-white hover:bg-red-600'
              : 'bg-white text-red-600 hover:bg-red-600 hover:text-white'
            }`
          }>
          Be Our Partner
          </NavLink>
      {/*To Download page*/}
      <NavLink to="/download"
        className={({ isActive }) =>
          `text-lg border-2 border-red-400 font-medium pt-3 pl-3 pr-3 pb-3 px-4 py-2 rounded-[30px] transition sm:inline flex items-center ${
            isActive
              ? 'bg-red-600 text-white hover:bg-red-600' 
              : 'bg-white text-red-600 hover:bg-red-600 hover:text-white'
          }`
        }
      >
        {({ isActive }) => (
        <span className="flex gap-3 items-center focus:outline-none">
          Download The App
      <img
        src={isActive ? ArrowWhite : ArrowRed}
        alt="Download icon"
        className="w-5 h-5"
      /></span>)}
        </NavLink>
        </ul>
      </div>
    </header>
  );
}
