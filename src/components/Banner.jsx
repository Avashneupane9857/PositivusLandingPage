import { bannerPic } from "../assets";

function Banner() {
  return (
    <div className="bg-[#F3F3F3] w-[80%] font-serif h-80 rounded-2xl flex justify-between mx-auto">
      <div className="pl-11 mt-12">
        <h1 className="text-[30px]">Let’s make things happen</h1>
        <h1 className="text-[16px] mt-8">
          Contact us today to learn more about how our digital <br />
          marketing services can help your business grow and <br /> succeed
          online.
        </h1>
        <button className="bg-black mt-8 p-3 w-60 text-white rounded-md">
          Get Your Proposal
        </button>
      </div>
      <div>
        <img className="mt-[-30px]" src={bannerPic} alt="" />
      </div>
    </div>
  );
}

export default Banner;
