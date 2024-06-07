import React from "react";

export const SocialCards = (props) => {
  return (
    <article className={`w-80 m-auto ${props.background} pt-1 rounded-md`}>

      <section className="bg-VeryPaleBlue w-full h-full  flex flex-col items-center mb-7 rounded-br-md rounded-bl-md shadow-md p-4">
        <div className="flex gap-2">
          <i className={`${props.text} text-2xl`}>
            <ion-icon name={props.logo}></ion-icon>
          </i>
        
          <span className="text-DarkGrayishBlue font-semibold">{props.user}</span>
        
        </div>
        
        <h2 className="text-VeryDarkBlueLight font-bold text-6xl">{props.number}</h2>
        
        <p className="text-DarkGrayishBlue uppercase text-[12px]  tracking-[5px] my-2">Followers</p>
        
        <div className={`${props.color} mt-3 text-sm font-bold flex gap-2 items-center`}>
          <i className="">
            <ion-icon name={props.arrow}>
            </ion-icon>
          </i>
          <span>{props.today} Today</span>
        </div>
        
      </section>
    </article>
  );
};