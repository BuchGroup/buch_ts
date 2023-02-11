import React from "react";

export default function offer() {
  return (
    <div className="pt-20 container1">
      <div className="grid justify-between grid-cols-1 sm:grid-cols-3 gap-3 ">
        <div className="w-26 h-[19rem] box">
          <div className="icon">
            <img className="fa" loading="lazy" src="/offer-icon/ClientCare.png" alt="" />
          </div>
          <div className="content">
            <h3>CLIENT CARE</h3>
            <p className="text-sm font-offer sm:font-offer">
              We know how frustrating it could be without knowing where to turn
              to with the questions you may have. We are here for you at every
              step of the process.
            </p>
          </div>
        </div>
        <div className="w-26 h-[19rem] box">
          <div className="icon">
            <img className="fa" loading="lazy" src="/offer-icon/Search.png" alt="" />
          </div>
          <div className="content">
            <h3>HOME SEARCH</h3>
            <p className="text-sm font-offer sm:font-offer">
              It&apos;s easier than ever to find your ideal home in Central Ohio.
              Define your criteria to see what&apos;s available on the market today.
            </p>
          </div>
        </div>
        <div className="w-26 h-[19rem] box">
          <div className="icon">
            <img className="fa" loading="lazy" src="/offer-icon/Staging.png" alt="" />
          </div>
          <div className="content">
            <h3>STAGING</h3>
            <p className="text-sm font-offer sm:font-offer">
              We offer Staging! Our expert will recommend the most aesthetic
              orientation of furniture and decorations in your home. This
              service really captivates and secures potential home buyers.
            </p>
          </div>
        </div>
        <div className="w-26 box sm:w-23 h-[19rem] box">
          <div className="icon">
            <img className="fa" loading="lazy" src="/offer-icon/Marketing.png" alt="" />
          </div>
          <div className="content">
            <h3>MARKETING TEAM</h3>
            <p className="text-sm font-offer sm:font-offer">
              You have a team of experienced professionals behind you! We work
              together to make you successful throughout your home selling
              process.
            </p>
          </div>
        </div>
        <div className="w-26 h-[19rem] box">
          <div className="icon">
            <img className="fa" loading="lazy" src="/offer-icon/Cleaning.png" alt="" />
          </div>
          <div className="content">
            <h3>FREE CLEANING</h3>
            <p className="text-sm font-offer sm:font-offer">
              We know how necessary it is to prepare your home to hit the
              market. That is why we’ll send a cleaner to have your house ready
              for pictures and showings.
            </p>
          </div>
        </div>
        <div className="w-26 h-[19rem] box">
          <div className="icon">
            <img className="fa" loading="lazy" src="/offer-icon/Strategy.png" alt="" />
          </div>
          <div className="content">
            <h3>Marketing Strategy</h3>
            <p className="text-sm font-offer sm:font-offer">
              Our team tailors a custom strategy for your home to reach a target
              audience with the most exposure. Things like Professional Photos,
              Custom Postcards, and Network Exposure. These results in you
              getting top dollar for your home.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-20">
        <p className="pb-4 text-center font-normal text-2xl">
          Ask us about any of these services when <br /> Buying or Selling your
          Home!
        </p>
        <hr className="w-80 h-1 border-0 rounded bg-black m-auto"></hr>
      </div>
    </div>
  );
}
