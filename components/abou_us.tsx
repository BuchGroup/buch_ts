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
      The BUCH GROUP is a top Columbus realtor team, recognized in the top 1% of
      Ohio realtors. We excel in the central Ohio real estate market, helping
      clients buy and sell homes in Columbus with ease and efficiency. With our
      in-depth understanding of the market dynamics, we assist our clients in
      making well-informed decisions, whether they&apos;re looking to buy or
      sell a home in Columbus. Trust the BUCH GROUP for a seamless, rewarding
      Ohio real estate experience.
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
          <div>
            Originally from Ukraine, Yuriy is a seasoned real estate
            professional and a top-tier Columbus Realtor, providing
            comprehensive assistance in both Residential and Commercial Real
            Estate. He has dedicated his career to helping clients navigate the
            process of buying and selling homes in Columbus, always striving to
            exceed their expectations. Yuriy values the trust his clients place
            in him. His expertise is not just in helping clients buy a home in
            Columbus, but also in ensuring that immigrant families, in
            particular, find the process accessible and straightforward. His
            trilingual capabilities further enhance his ability to serve a
            diverse clientele. With a reputation for strong negotiation and
            sales skills, Yuriy consistently ranks in the top 1% of Realtors in
            Columbus. Whether you&apos;re looking to buy or sell a home in
            Columbus, you can be assured of a smooth, efficient process guided
            by Yuriy&apos;s extensive experience and commitment to his clients.
            Outside of his professional life, Yuriy is happily married to his
            wife, Yana, and they have two boys, Nathan and Jacob. His personal
            goal is to serve God wholeheartedly and to leave a legacy by
            achieving his full potential in life. He takes immense pride in
            giving back to the Columbus community and helping others in their
            journey to homeownership.
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
