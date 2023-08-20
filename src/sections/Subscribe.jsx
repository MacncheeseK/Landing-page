import Button from '../components/button';
const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className=" max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
        <h2 className="text-4xl font-palanquin font-bold text-center leading-[68px] lg:max-w-md">
          Sign Up for <samp className="text-coral-red ">Updates</samp> &
          Newsletter
        </h2>
      <div className=" lg:max-w-[40%] w-full flex items-center max-sm:flex-col sm:border sm:border-slate-gray rounded-full p-2.5 gap-5 ">
        <input
          type="text"
          className=" input"
          placeholder="subscribe@nike.com"
        ></input>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
