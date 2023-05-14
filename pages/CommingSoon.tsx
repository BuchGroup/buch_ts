import React from "react";
import Image from "next/image";

import Shapes from "@/public/commingSoon/shapes.svg";

export default function CommingSoon() {
  return (
<div className="flex flex-col justify-center items-center h-screen">
  <Image
    src={Shapes}
    alt={""}
    className="absolute w-full bottom-24 animate-blob2"
  />
  <div className="relative z-10 py-6 space-y-16 lg:space-y-32 my-auto text-gray-900">
    <div className="text-center space-y-10">
      <h1 className="text-7xl lg:text-9xl font-extrabold">
        Coming soon
      </h1>
      <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
        We&apos;re under construction. Check back for an update soon. Stay in touch!
      </p>
    </div>
    <form className="relative z-10 mx-10 lg:max-w-xl lg:mx-auto">
      <input
        type="text"
        placeholder="example@gmail.com"
        className="w-full text-2xl font-light text-gray-900 placeholder-gray-500 py-5 pl-5 pr-36 lg:pr-44 rounded-xl"
      />
      <button className="absolute top-1 right-1 bottom-1 px-4 lg:px-10 text-xl font-semibold bg-gray-900 text-white rounded-xl transition ease-in-out duration-500 hover:bg-sembro">
        Notify me
      </button>
    </form>
  </div>
</div>

  );
}
