import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:underline">Home</li>
        <li className="p-4 cursor-pointer hover:underline">Company</li>
        <li className="p-4 cursor-pointer hover:underline">Resources</li>
        <li className="p-4 cursor-pointer hover:underline">About</li>
        <li className="p-4 cursor-pointer hover:underline">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <IoMdClose size={20} /> : <IoMdMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300"
            : "fixed left-[-100%]"
        }>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className=" uppercase p-4">
          <li className="p-4 cursor-pointer border-b border-b-gray-600">Home</li>
          <li className="p-4 cursor-pointer border-b border-b-gray-600">Company</li>
          <li className="p-4 cursor-pointer border-b border-b-gray-600">Resources</li>
          <li className="p-4 cursor-pointer border-b border-b-gray-600">About</li>
          <li className="p-4 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
