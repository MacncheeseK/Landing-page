import { navLinks } from "../constants";
import Hamburger from "./Hamburger";

const HamburgerMenu = (props) => {
  return (
    <section className=" hidden max-lg:block max-lg:pt-[88px] px-3 max-lg:mb-[-69px]">
      {props.hamburgerMenu && (
        <ul className=" bg-gray-300 list-none m-0 p-0 rounded-md shadow-xl z-10 ">
          {navLinks.map((item) => (
            <Hamburger href={item.href} label={item.label} />
          ))}
        </ul>
      )}
    </section>
  );
}
export default HamburgerMenu