import React from "react";

export const Overview = (props) => {
  return (
    <section className="w-80 bg-VeryPaleBlue mt-5 m-auto shadow-md rounded-md p-5 lg:mt-10 lg:w-60 lg:h-32 xl:w-80 hover:bg-LightGrayishBlue cursor-pointer dark:bg-VeryDarkBlue2 dark:hover:bg-DarkDesaturatedBlue dark:shadow-DarkGrayishBlue 2xl:w-96">

      <div className="flex justify-between items-center">
        <h3 className="capitalize text-DarkGrayishBlue font-bold text-sm dark:text-DesaturatedBlue">{props.subTitle}</h3>
        <img src={props.img} alt="icon-logo" />
      </div>

      <div className="flex justify-between items-center mt-7">
        <p className="text-3xl text-VeryDarkBlueLight font-bold dark:text-white">{props.number}</p>
        <i className="flex items-center gap-[3px]">
          <img src={props.arrow} alt="icon-arrow" />
          <span className={`${props.color} text-xs font-bold`}>{props.percentage}%</span>
        </i>
      </div>

    </section>
  );
};