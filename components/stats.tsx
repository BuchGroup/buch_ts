import * as React from "react";

export default function stats() {
  return (
<div className="flex-none sm:flex bg-fixed bg-center bg-cover my-20">
  <div className="max-w-1240px mx-auto text-center">
    <h2 className="font-bold text-center text-7xl font-main tracking-tighter">
      WHY WORK WITH US
    </h2>
    <div className="flex-col sm:flex items-center">
      <hr className="w-96 h-1 my-8 border-0 rounded bg-neutral-400" />
      <h3 className="font-semibold text-4xl text-our text-center ml-5">
        OUR NUMBERS
      </h3>
    </div>
    <div className="flex flex-col sm:flex-row sm:justify-between sm:mt-24">
      <div className="flex flex-col text-center">
        <h3 className="font-bold text-7xl font-main">240</h3>
        <p className="pb-6 pt-0 sm:pt-6 text-our text-2xl font-medium">TRANSACTIONS <br /> SINCE 2020</p>
      </div>
      <div className="text-center">
        <h3 className="font-bold text-7xl font-main">$44m</h3>
        <p className="pb-6 pt-0 sm:pt-6 text-our text-2xl font-medium">SALES VOLUME <br /> SINCE 2020</p>
      </div>
      <div className="text-center">
        <h3 className="font-bold text-7xl font-main">$320k</h3>
        <p className="pb-6 pt-0 sm:pt-6 text-our text-2xl font-medium">AVERAGE SALES <br /> PRICE IN 2022</p>
      </div>
    </div>
  </div>
</div>
  );
}
