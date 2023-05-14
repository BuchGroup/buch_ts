import React from "react";
import Image from "next/image";

import { OFFER_DATA } from "@/constants";

export default function Offer() {
  return (
    <div id="background" className="gradient_back">
      <div>
        <h2 className="flex text-center justify-center text-black pb-12 pt-36 text-5xl font-team font-bold">
          WHAT WE OFFER
        </h2>
        <p className="w-[20rem] sm:w-[40rem] text-black text-center text-xl font-semibold mx-auto">
          Ask us about any of these services when Buying or Selling your Home!
        </p>
      </div>
      <div className="pt-36 container1">
        <div className="grid justify-between grid-cols-1 sm:grid-cols-3 gap-3 ">
          {OFFER_DATA.map(({ icon, title, description }, index) => (
            <div key={index} className="w-26 h-[19rem] box">
              <div className="icon">
                <Image className="fa" loading="lazy" src={icon} alt={title} width={40} height={40}/>
              </div>
              <div className="content">
                <h3>{title}</h3>
                <p className="text-sm font-offer sm:font-offer">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
