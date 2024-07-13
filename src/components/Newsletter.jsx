import React from "react";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="md:col-span-2 my-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl">Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input type="email" placeholder="Enter Email" className="p-3 flex w-full rounded-md text-black" />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 py-3 text-black">
              Notify me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] cursor-pointer hover:underline">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
