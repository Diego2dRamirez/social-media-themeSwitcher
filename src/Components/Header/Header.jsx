import React, { useEffect, useState } from "react";

export const Hedaer = () => {

  const [ theme, setTheme ] = useState("light");
  useEffect(() => {
    if(theme == "dark"){
      document.querySelector('html').classList.add("dark");
    } else{
      document.querySelector('html').classList.remove("dark");
    }
  },[theme]);

  const handleChange = () => {
    setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
  }

  return (
    <header className="w-full fixed top-0 p-5 bg-white z-10
    md:flex md:justify-between md:items-center dark:bg-VeryDarkBlue">
      <div className="border-b-[1px] border-DarkGrayishBlue mb-3 pb-4 md:border-none md:mb-0 md:pb-0 ">
        <h1 className="text-VeryDarkBlueLight text-2xl font-bold dark:text-white">Social Media Dahsboard</h1>
        <p className="text-DarkGrayishBlue font-bold text-sm dark:text-DesaturatedBlue">Total Followers: 23,004</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-DarkGrayishBlue font-bold md:mr-5 dark:text-DesaturatedBlue">Dark Mode</p>
        <label className="rounded-3xl w-16 h-7 relative flex items-center justify-center cursor-pointer">
          <input type="checkbox" className="appearance-none" onClick={handleChange}/>
          <span className="absolute left-1 w-5 h-5 rounded-full z-20 bg-white transition ease-in-out duration-500 "></span>
          <b className="absolute inset-0 bg-ToggleLight rounded-3xl transition ease-in-out duration-500"></b>
        </label>
      </div>
    </header>
  );
};