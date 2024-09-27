import { amazon, dribble, hubspot, netflix, notion, zoom } from "../assets";

export const Company = () => {
  return (
    <div className="flex gap-12 px-11  w-full">
      <div className="h-20 w-44">
        <img src={netflix} alt="" />
      </div>
      <div className="h-20 mt-4 w-44">
        <img src={amazon} alt="" />
      </div>
      <div className="h-20 mt-[-10px] w-44">
        <img src={dribble} alt="" />
      </div>
      <div className="h-20 w-44">
        {" "}
        <img src={zoom} alt="" />
      </div>
      <div className="h-22 mt-[-10px] w-44">
        <img src={hubspot} alt="" />
      </div>
      <div className="h-14 mt-4 w-44">
        <img src={notion} alt="" />
      </div>
    </div>
  );
};
