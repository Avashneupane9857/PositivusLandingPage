const CaseStudies = () => {
  return (
    <div className="mt-20  w-[80%] mx-auto  ">
      <div className=" flex font-serif gap-14 ">
        <div className="w-36 flex  ">
          <h1 className="bg-[#B9FF66] rounded-xl p-2  font-semibold text-[19px]">
            Case Studies
          </h1>
        </div>
        <div>
          <h1 className="">
            Explore Real-Life Examples of Our Proven Digital Marketing <br />{" "}
            Success through Our Case Studies
          </h1>
        </div>
      </div>
      <div className="bg-black rounded-lg mt-4 flex justify-evenly p-7">
        <div className="text-white text-[15px] w-[25%]">
          For a local restaurant, we implemented a targeted PPC campaign that
          resulted in a 50% increase in website traffic and a 25% increase in
          sales.
          <div className="text-[#B9FF66] mt-6">Learn More</div>
        </div>
        <div className="bg-white text-black w-[1px]"></div>
        <div className="text-white text-[15px] w-[25%]">
          For a B2B software company, we developed an SEO strategy that resulted
          in a first page ranking for key keywords and a 200% increase in
          organic traffic.
          <div className="text-[#B9FF66]">Learn More</div>
        </div>
        <div className="bg-white text-black w-[1px] shadow-xl"></div>
        <div className="text-white text-[15px] w-[25%]">
          For a national retail chain, we created a social media marketing
          campaign that increased followers by 25% and generated a 20% increase
          in online sales.
          <div className="text-[#B9FF66]">Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
