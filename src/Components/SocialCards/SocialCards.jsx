import React from "react";

export const SocialCards = (props) => {
  return (
    <section className={`w-80 m-auto ${props.background} pt-1 rounded-md lg:h-64 xl:w-80 2xl:w-96`}>

      <article className="bg-VeryPaleBlue w-full h-full  flex flex-col items-center mb-7 rounded-br-md rounded-bl-md shadow-md p-4 lg:mb-0 lg:py-10 hover:bg-LightGrayishBlue cursor-pointer dark:bg-VeryDarkBlue2 dark:hover:bg-DarkDesaturatedBlue dark:shadow-DarkGrayishBlue">
        <div className="flex gap-2 mb-2 items-center">          
            <img src={props.img} alt="icon"/>
          <span className="text-DarkGrayishBlue font-semibold dark:text-DesaturatedBlue">{props.user}</span>
        </div>
        
        <h2 className="text-VeryDarkBlueLight font-bold text-6xl my-4 dark:text-white">{props.number}</h2>
        
        <p className="text-DarkGrayishBlue uppercase text-[12px]  tracking-[5px] my-2 dark:text-DesaturatedBlue">{props.text}</p>
        
        <div className={`${props.color} mt-3 text-sm font-bold flex gap-2 items-center`}>
         <img src={props.arrow} alt="" />
          <span>{props.today} Today</span>
        </div>
        
      </article>
    </section>
  );
};