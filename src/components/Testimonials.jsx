import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const Testimonials = () => {
  return (
    <div className="w-[80%] mx-auto mt-8 font-serif">
      <div className="flex gap-8 ">
        <h1 className="bg-[#B9FF66] p-4 text-xl w-40 rounded-xl text-center font-semibold">
          Testimonial
        </h1>
        <h1>
          Hear from Our Satisfied Clients: Read Our Testimonials <br /> to Learn
          More about Our Digital Marketing Services
        </h1>
      </div>
      <div className="bg-black h-96 rounded-xl flex flex-col justify-center items-center mt-6 ">
        <div className="border-2 border-[#B9FF66] mt-[-10px]  text-white p-2 font-extralight rounded-2xl w-96 h-64">
          <h1 className="p-6">
            {" "}
            We have been working with Positivus for the past year and have seen
            a significant increase in website traffic and leads as a result of
            their efforts. The team is professional, responsive, and truly cares
            about the success of our business. We highly recommend Positivus to
            any company looking to grow their online presence.
          </h1>
        </div>
        <div className="text-white mt-3 pr-36 ">
          <h1 className="text-[#B9FF66]">Jhon Smith</h1>
          <h2>DevOps Engineer</h2>
        </div>
        <div className="text-white flex space-x-96 text-4xl ">
          <button>
            <FaArrowAltCircleLeft />
          </button>
          <button>
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
