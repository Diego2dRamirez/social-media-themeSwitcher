import React from "react";

export const Hedaer = () => {
  return (
    <header className="w-full fixed top-0 p-5">
      <div className="border-b-[1px] border-DarkGrayishBlue mb-3 pb-4">
        <h1 className="text-VeryDarkBlueLight text-2xl font-bold">Social Media Dahsboard</h1>
        <p className="text-DarkGrayishBlue font-bold text-sm">Total Followers: 23,004</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-DarkGrayishBlue font-bold">Dark Mode</p>
        <label className="rounded-3xl w-16 h-7 relative flex items-center justify-center">
          <input type="checkbox" className="appearance-none checked:bg-blue-500" />
          <span className="absolute left-1 w-5 h-5 rounded-full z-10 bg-white transition ease-in-out duration-500 "></span>
          <b className="absolute inset-0 bg-ToggleLight rounded-3xl transition ease-in-out duration-500"></b>
        </label>
      </div>
    </header>
  );
};