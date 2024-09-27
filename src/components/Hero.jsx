import { hero } from "../assets";

function Hero() {
  return (
    <div className="p-12 flex font-serif">
      <div className="w-[50%]">
        {" "}
        <h1 className="text-5xl leading-snug tracking-widest">
          Navigating the <br />
          digital landscape <br /> for success
        </h1>
        <h2 className="text-lg mt-9 font-thin text-slate-600">
          Our digital marketing agency helps businesses grow and <br /> succeed
          online through a range of services including SEO,
          <br /> PPC, social media marketing, and content creation.
        </h2>
        <button className="bg-black text-white rounded-md w-48 h-10 mt-9 hover:text-black hover:bg-white hover:border-2 ">
          Book a Consultation
        </button>
      </div>
      <div className="pl-56">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}
export default Hero;
