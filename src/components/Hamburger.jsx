const Hamburger = (props) => {
  return (
    
      <li key={props.label} className="block  py-2 text-center w-full no-underline" >
        <a
          href={props.href}
          className=" font-montserrat leading-normal text-lg text-slate-gray bg-black"
        >
          {props.label}
        </a>
      </li>
  );
}
export default Hamburger