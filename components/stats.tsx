import Image from "next/image";

import RealProducers from "@/public/rewards/RealProducers.webp";
import TopOne from "@/public/rewards/Top1.webp";

const stats = () => {
  return (
    <div className="flex-none sm:flex bg-fixed bg-center bg-cover my-20">
      <div className="max-w-1240px mx-auto text-center">
        <h2
          id="h2"
          className="font-bold text-center text-7xl font-main tracking-tighter"
        >
          WHY WORK WITH US
        </h2>
        <div className="flex-col sm:flex sm:flex-row items-center">
          <hr className="invisible sm:visible w-96 h-1 my-8 border-0 rounded bg-neutral-400" />
          <h3 className="ml-0 font-semibold pb-5 sm:ml-5 sm:pb-0 sm:font-semibold text-4xl text-our text-center">
            OUR NUMBERS
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:mt-24">
          <div className="flex flex-col text-center">
            <h3 className="font-bold text-7xl font-main">240</h3>
            <p className="pb-6 pt-0 sm:pt-6 text-our text-2xl font-medium">
              TRANSACTIONS <br /> SINCE 2020
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-7xl font-main">$44m</h3>
            <p className="pb-6 pt-0 sm:pt-6 text-our text-2xl font-medium">
              SALES VOLUME <br /> SINCE 2020
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-7xl font-main">$320k</h3>
            <p className="pb-6 pt-0 sm:pt-6 text-our text-2xl font-medium">
              AVERAGE SALES <br /> PRICE IN 2022
            </p>
          </div>
        </div>
        <div className="flex justify-around flex-col mx-auto sm:flex sm:flex-row pt-10">
          <Image
            className="bg-cover mx-auto"
            src={RealProducers}
            width={140} // The width in pixels that the image should display at.
            height={154} // The height in pixels that the image should display at.
            alt="2022 RP real producers columbus top 500"
            loading="lazy"
          />

          <Image
            className="bg-cover mx-auto pt-10"
            src={TopOne}
            width={140}
            height={140}
            alt="Top 1 in cenrtral ohio"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default stats;
