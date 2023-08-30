const Hamburger = (props) => {
  return (
    
      <li key={props.label}>
        <a
          href={props.href}
          className=" font-montserrat leading-normal text-lg text-slate-gray"
        >
          {props.label}
        </a>
      </li>
  );
}
export default Hamburger