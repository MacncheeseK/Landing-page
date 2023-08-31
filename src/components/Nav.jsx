import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';
import Hamburger from './Hamburger';
const Nav = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false)
  const toggleHamburgerMenu = () => {
    setHamburgerMenu((prev)=> !prev); 
  }

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className="m-0"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className=" font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block relative">
          <button onClick={toggleHamburgerMenu}>
            <img src={hamburger} alt="hamburgerMenu" width={25} height={25} />
          </button>
          {hamburgerMenu && <div>
            <ul className=" flex items-center gap-5 flex-col absolute right-0 bg-white p-3 shadow-lg rounded-md">
              {
                navLinks.map((item) => (
                  <Hamburger href={item.href} label={item.label} />
                ))}
            </ul>
          </div>}
        </div>
      </nav>
    </header>
  );
};
export default Nav;
