const Hamburger = (props) => {
  return (
    
      <li key={props.label} className="  py-2 text-center no-underline hover:bg-slate-300 hover:rounded-md" >
        <a
          href={props.href}
          className="block font-montserrat leading-normal text-xl text-slate-gray "
        >
          {props.label}
        </a>
      </li>
  );
}
export default Hamburger