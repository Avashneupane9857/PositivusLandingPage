import { logo } from "../assets";

function Navbar() {
  return (
    <div className="p-12 font-serif  gap-96 h-28 w-full flex">
      <div className="">
        <img src={logo} alt="Positivus" />
      </div>
      <div className="  ">
        <ul className="mt-6 gap-14  flex ">
          <li>About Us</li>
          <li>Services </li>
          <li> Use Cases</li>
          <li>Pricing </li>
          <li>Blog</li>
          <div className="pb-72">
            <button className="border-2   hover:bg-black hover:text-white mt-[-5px] border-[#000000] shadow-lg rounded-md w-40 h-9">
              Request a quote
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
