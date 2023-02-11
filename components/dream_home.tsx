import * as React from "react";

export default function dream_home() {
  return (
    <div className="py-10">
      <div className="text-center text-5xl py-10">Find Your Dream Home!</div>
      <div className="flex justify-center">
        <iframe
          className="w-full md:w-10/12"
          src="https://yuriyboot.red1realty.com/index.php?homesearchmore=1#advanced_search_form"
          height={650}
        ></iframe>
      </div>
    </div>
  );
}
