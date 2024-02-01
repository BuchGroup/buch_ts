import React from "react";
import { useRouter } from "next/router";

export default function DreamHome() {
  const router = useRouter();

  const handleIframeClick = () => {
    router.push('https://www.yourcolumbushomeguide.com/');
  };

  return (
    <div className="py-10 container3">
      <h2 className="flex justify-center text-center text-black text-5xl font-team font-bold py-36">
        FIND YOUR DREAM HOME!
      </h2>
      <div className="flex justify-center relative">
        <iframe
          className="container3"
          src="https://www.yourcolumbushomeguide.com/#castle-home"
          height={600}
          width={280}
          scrolling="no"
        ></iframe>
        <div
          className="absolute top-0 left-0 w-full h-full"
          onClick={handleIframeClick}
          style={{ cursor: 'pointer' }}
        ></div>
      </div>
    </div>
  );
}
