import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {

  

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} className='m-0' />
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
        <div className='hidden max-lg:block'>
            <img src={hamburger} alt='hamburgerMenu' width={25} height={25} onClick={hamburger}/>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
