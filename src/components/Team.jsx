import { pic1, pic2, pic4 } from "../assets";

function Team() {
  return (
    <div className="w-[80%] mx-auto mt-9 font-serif">
      <div className="flex gap-8 text-center">
        <h1 className="bg-[#B9FF66] w-32 p-2 rounded-lg font-semibold text-[25px]">
          Team
        </h1>
        <h2 className="line-clamp-6">
          Meet the skilled and experienced team behind <br /> our successful
          digital marketing strategies
        </h2>
      </div>
      <div className="flex flex-wrap justify-evenly">
        <div className="border-2   w-[30%] h-68 rounded-lg shadow-2xl mt-6">
          <div className="flex gap-7  pl-16">
            <img className=" mt-10 rounded-full h-14 w-14" src={pic4} alt="" />
            <div className="mt-10">
              <h1 className="font-semibold">Avash Neupane</h1>
              <h1>DevOps Engineer</h1>
            </div>
          </div>
          <div className="bg-black h-[1px] w-[80%]  mt-7 mx-auto "></div>
          <h1 className="mt-7 pl-10">
            10+ years of experience in digital marketing. Expertise in SEO, PPC,
            and content strategy
          </h1>
        </div>
        <div className="border-2   w-[30%] h-68 rounded-lg shadow-2xl mt-6">
          <div className="flex gap-7  pl-16">
            <img className=" mt-10 rounded-full h-14 w-14" src={pic1} alt="" />
            <div className="mt-10">
              <h1 className="font-semibold">Avash Neupane</h1>
              <h1>Frontend Engineer</h1>
            </div>
          </div>
          <div className="bg-black h-[1px] w-[80%]  mt-7 mx-auto "></div>
          <h1 className="mt-7 pl-10">
            2+ years of experience in writing and editing Skilled in creating
            compelling, SEO-optimized content for various industries
          </h1>
        </div>
        <div className="border-2   w-[30%] h-68 rounded-lg shadow-2xl mt-6">
          <div className="flex gap-7  pl-16">
            <img className=" mt-10 rounded-full h-14 w-14" src={pic2} alt="" />
            <div className="mt-10">
              <h1 className="font-semibold">Avash Neupane</h1>
              <h1>Figma Designer</h1>
            </div>
          </div>
          <div className="bg-black h-[1px] w-[80%]  mt-7 mx-auto "></div>
          <h1 className="mt-7 pl-10">
            4+ years of experience in social media marketing. Proficient in
            creating and scheduling content, analyzing metrics, and building
            engagement
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Team;
