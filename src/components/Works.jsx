import { useState } from "react";

function Works() {
  // Initial data
  const data = [
    {
      id: "01",
      title: "Consultation",
      ans: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "02",
      title: "Research and Strategy Development",
      ans: "We will conduct thorough research to develop a strategic plan that aligns with your business objectives.",
    },
    {
      id: "03",
      title: "Implementation",
      ans: "We will implement the strategy with detailed action plans to achieve measurable goals.",
    },
    {
      id: "04",
      title: "Monitoring and Optimization",
      ans: "We continuously monitor performance and optimize the strategies for better outcomes.",
    },
  ];

  const [visibleAns, setVisibleAns] = useState(null);

  const toggleAns = (id) => {
    if (visibleAns === id) {
      setVisibleAns(null);
    } else {
      setVisibleAns(id);
    }
  };

  return (
    <div className="w-[80%] mx-auto mt-6">
      <div className=" flex font-serif">
        <div className="w-72 flex">
          <h1 className="bg-[#B9FF66] p-2 rounded-lg font-semibold text-[19px]">
            Our Working Process
          </h1>
        </div>
        <div>
          <h1 className="">
            Step-by-Step Guide to Achieving <br /> Your Business Goals
          </h1>
        </div>
      </div>

      {data.map((item) => (
        <div key={item.id} className="bg-[#F3F3F3] rounded-xl mt-10 p-4">
          <div className="flex text-2xl gap-9">
            <h1 className="ml-12">{item.id}</h1>
            <h1>{item.title}</h1>
          </div>

          <div className="flex justify-end mr-24 mt-[-40px]">
            <button
              onClick={() => toggleAns(item.id)}
              className="text-[50px] rounded-full h-16 w-16 border-2 border-black"
            >
              <h1 className="mt-[-14px]">
                {visibleAns === item.id ? "-" : "+"}
              </h1>
            </button>
          </div>

          {visibleAns === item.id && (
            <div className="mt-4 text-xl bg-[#B9FF66] p-4 rounded-md shadow">
              <p>{item.ans}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Works;
