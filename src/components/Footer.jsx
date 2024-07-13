import React from "react";
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-6 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] cursor-pointer">REACT.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero
          reiciendis, blanditiis accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} className="cursor-pointer hover:text-[#00df9a]" />
          <FaInstagramSquare size={30} className="cursor-pointer hover:text-[#00df9a]" />
          <FaTwitterSquare size={30} className="cursor-pointer hover:text-[#00df9a]" />
          <FaGithubSquare size={30} className="cursor-pointer hover:text-[#00df9a]" />
          <FaDribbbleSquare size={30} className="cursor-pointer hover:text-[#00df9a]" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:underline">Analytics</li>
            <li className="py-2 text-sm cursor-pointer hover:underline">Marketing</li>
            <li className="py-2 text-sm cursor-pointer hover:underline">Commerce</li>
            <li className="py-2 text-sm cursor-pointer hover:underline">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:underline">Pricing</li>
            <li className="py-2 text-sm cursor-pointer hover:underline">Documentation</li>
            <li className="py-2 text-sm cursor-pointer hover:underline">Guides</li>
            <li className="py-2 text-sm cursor-pointer hover:underline">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:underline">About</li>
            <li className="py-2 text-sm cursor-pointer hover:underline">Blog</li>
            <li className="py-2 text-sm cursor-pointer hover:underline">Jobs</li>
            <li className="py-2 text-sm cursor-pointer hover:underline">Press</li>
            <li className="py-2 text-sm cursor-pointer hover:underline">Creers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:underline">Claim</li>
            <li className="py-2 text-sm cursor-pointer hover:underline">Policy</li>
            <li className="py-2 text-sm cursor-pointer hover:underline">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
