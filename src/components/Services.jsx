import { five, four, one, six, three, two } from "../assets";
import { MdArrowOutward } from "react-icons/md";
function Services() {
  const data = [
    { id: 1, titles: ["Search", " Optimization"], imgsrc: one, bg: "#D9D9D9" },
    {
      id: 2,
      titles: ["Pay-per-click", " Pay-per-click"],
      imgsrc: two,
      bg: "#B9FF66",
    },
    {
      id: 3,
      titles: ["Social Media", " Marketing"],
      imgsrc: three,
      bg: "#000000",
    },
    { id: 4, titles: [" Email", " Marketing"], imgsrc: four, bg: "#D9D9D9" },
    { id: 5, titles: [" Content", " Creation"], imgsrc: five, bg: "#B9FF66" },
    {
      id: 6,
      titles: [" Analytics and ", " Tracking"],
      imgsrc: six,
      bg: "#000000",
    },
  ];
  return (
    <>
      <div className="p-12 font-serif  ">
        <div className="flex gap-7">
          <div className="bg-[#B9FF66] text-4xl font-medium text-center rounded-md  w-40">
            Services
          </div>
          <h1 className="tracking-widest">
            At our digital marketing agency, we offer a range of services to{" "}
            <br />
            help businesses grow and succeed online. These services include:
          </h1>
        </div>
      </div>
      <div className="p-12">
        <div className="flex flex-wrap gap-11 justify-between">
          {data.map((item) => (
            <div
              key={item.id}
              style={{ backgroundColor: item.bg }}
              className=" w-[40%] h-80 border-spacing-1 flex rounded-2xl  gap-28 shadow-lg"
            >
              <div className="pl-11 mt-12 text-center">
                <h1 className="bg-[#B9FF66] w-36 h-7 text-xl rounded-md font-semibold">
                  {item.titles[0]}
                </h1>
                <h1 className="bg-[#B9FF66] w-32 h-8 text-xl rounded-md font-semibold ">
                  {item.titles[1]}
                </h1>
                <div className="flex gap-4 mt-24">
                  <div className="bg-black text-[#B9FF66] text-3xl text-center rounded-full w-8 h-8">
                    <MdArrowOutward />
                  </div>
                  <h1 className="text-lg font-serif ">Learn More</h1>
                </div>
              </div>
              <div className="flex justify-center items-center w-80">
                <img src={item.imgsrc} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Services;
