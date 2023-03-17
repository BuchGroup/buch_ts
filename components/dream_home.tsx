import * as React from "react";

export default function dream_home() {
  return (
    <div className="py-10 container3">
      <h2 className="flex justify-center text-center text-black text-5xl font-team font-bold py-36">FIND YOUR DREAM HOME!</h2>
      <div className="flex justify-center">
        <iframe
          className="container3"
          src="https://yuriyboot.red1realty.com/index.php?homesearchmore=1#advanced_search_form"
          height={650}
        ></iframe>
      </div>
    </div>
  );
}
