import * as React from "react";
import Image from "next/image";

import WhiteSkyline from "@/public/White_City.webp";
import YuriyBoot from "@/public/team/YuriyBoot.webp";

const AboutUsIntro = () => (
  <header>
    <h2 className="text-black pb-12 pt-36 text-5xl font-team font-bold text-center">
      ABOUT US
    </h2>
    <p className="w-[20rem] sm:w-[40rem] text-black text-center text-xl font-semibold mx-auto">
      BUCH GROUP is dedicated to serving the central Ohio real estate market.
      Last year, we were one of the top real estate teams with over 240
      transactions and $44 million in sales volume, putting us in the top 1% of
      the real estate market. We strive to provide the most value to our clients
      and make their home selling experience as smooth and exciting as possible.
    </p>
  </header>
);

const YuriyBootBio = () => (
  <section className="sm:flex justify-center py-36 container2">
    <Image
      className="bg-cover"
      src={YuriyBoot}
      width={550}
      height={650}
      alt="Yuriy Boot"
      loading="lazy"
    />
    <article className="py-10 sm:[h-673px] bg-light-black flex flex-col items-center justify-center">
      <div className="max-w-6xl w-9/12">
        <h3 className="text-white text-3xl font-bold sm:text-7xl">
          YURIY BOOT
        </h3>
        <div className="flex items-center">
          <p className="text-2xl text-our font-semibold mx-0">
            REAL ESTATE BROKER
          </p>
        </div>
        <p className="text-white font-light tracking-wider my-8 mx-0 leading-8">
          &quot;I love Real Estate and have a passion for helping people&quot;
        </p>
        <p className="text-white font-light tracking-wider my-8 mx-0 leading-normal">
          Originally from Ukraine, Yuriy is a seasoned real estate professional
          helping clients in all areas of Real Estate, including Residential and
          Commercial. He values the trust his clients place in him and strives
          to exceed their expectations. Yuriy is trilingual and has helped
          several immigrant families navigate through the home buying process.
          His strengths are his negotiation and sales skills. He consistently
          ranks in the top 1% of Realtors. Yuriy is married to the love of his
          life, Yana, and they have two boys, Nathan and Jacob. His goal is to
          serve God wholeheartedly and leave a legacy by achieving his full
          potential in life. He takes pride in giving back to the community and
          helping others.
        </p>
      </div>
    </article>
  </section>
);

export default function about_us() {
  return (
    <main className="py-30 flex flex-col relative">
      <div className="absolute inset-0">
        <Image src={WhiteSkyline} alt="White Skyline" />
      </div>
      <div className="relative z-10">
        <AboutUsIntro />
        <YuriyBootBio />
      </div>
    </main>
  );
}
