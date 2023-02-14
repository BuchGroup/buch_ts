import * as React from "react";
import Image from "next/image";

import YuriyBoot from "../public/team/YuriyBoot.webp";

export default function about_us() {
  return (
    <div className="pb-30   flex flex-col bg-contain bg-fixed bg-center white-city">
      <div>
        <h2 className="flex justify-center text-black py-10 text-4xl font-team font-bold">
          ABOUT US
        </h2>
        <p className="text-black w-[40rem] text-xs mx-auto sm:text-base leading-normal py-6">
          BUCH GROUP is dedicated to serving the central Ohio real estate
          market. Last year, we were one of the top real estate teams with over
          240 transactions and $44 million in sales volume, putting us in the
          top 1% of the real estate market. We strive to provide the most value
          to our clients and make their home selling experience as smooth and
          exciting as possible.
        </p>
      </div>
      <div className="sm:flex justify-center pt-20 container2">
        <Image
          className="bg-cover"
          src={YuriyBoot}
          width={550}
          height={650}
          alt="Yuriy Boot"
          loading="lazy"
        />
        <div className="py-10 sm:[h-673px] bg-light-black flex flex-col items-center justify-center">
          <div className="max-w-6xl w-9/12">
            <h2 className="text-white text-3xl font-bold sm:text-7xl">
              YURIY <span className="text-our">BOOT</span>
            </h2>
            <div className="flex">
               <hr />
               <h3 className="text-white text-2xl font-semibold mx-0">
               Real Estate Broker
               </h3>
            </div>
            <p className="text-white font-light tracking-wider my-8 mx-0 leading-8">
              &quot;I love Real Estate and have a passion for helping
              people&quot;
            </p>
            <p className="text-white font-light tracking-wider my-8 mx-0 leading-normal">
              Originally from Ukraine, Yuriy is a seasoned real estate
              professional helping clients in all areas of Real Estate,
              including Residential and Commercial. He values the trust his
              clients place in him and strives to exceed their expectations.
              Yuriy is trilingual and has helped several immigrant families
              navigate through the home buying process. His strengths are his
              negotiation and sales skills. He consistently ranks in the top 1%
              of Realtors. Yuriy is married to the love of his life, Yana, and
              they have two boys, Nathan and Jacob. His goal is to serve God
              wholeheartedly and leave a legacy by achieving his full potential
              in life. He takes pride in giving back to the community and
              helping others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
