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
      BUCH REALTY is a top Columbus real estate team, recognized in the top 1% of
      Ohio realtors and among the go-to realtor near me choices. As a leading
      real estate agent in the area, we excel in the central Ohio real estate
      market, helping clients buy and sell homes in Columbus with ease and
      efficiency. Our expertise extends across all aspects of real estate,
      allowing our clients to make well-informed decisions, whether they're
      looking to buy or sell a home in Columbus. For a seamless, rewarding Ohio
      real estate experience, trust the BUCH - your trusted local realtor and
      real estate agent
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
    <article className="py-10 sm:[h-673px] bg-dark flex flex-col items-center justify-center">
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
          <div>
            Yuriy is a highly experienced and accomplished realtor specializing
            in the Columbus area. With a strong background in both residential
            and commercial real estate, he offers comprehensive assistance to
            clients looking to buy or sell properties. As a top-tier Columbus
            realtor, Yuriy is dedicated to exceeding his clients' expectations
            and ensuring their satisfaction throughout the entire process. One
            of Yuriy's notable strengths is his commitment to helping immigrant
            families navigate the real estate market in Columbus. He understands
            the unique challenges they may face and strives to make the process
            accessible and straightforward for them. With trilingual
            capabilities, Yuriy can effectively communicate with a diverse
            clientele and provide personalized service. Yuriy's outstanding
            negotiation and sales skills have earned him a well-deserved
            reputation. Consistently ranking in the top 1% of realtors in
            Columbus, he is adept at securing favorable deals for his clients.
            Whether you're buying or selling a home in Columbus, Yuriy's
            extensive experience and expertise ensure a smooth and efficient
            process. Beyond his professional life, Yuriy is happily married to
            his wife, Yana, and they have two sons, Nathan and Jacob. He is
            driven by his personal goal of serving God wholeheartedly and
            leaving a lasting legacy by achieving his full potential in life.
            Yuriy takes great pride in giving back to the Columbus community and
            assisting others in their journey to homeownership.
          </div>
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
