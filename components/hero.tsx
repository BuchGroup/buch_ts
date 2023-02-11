import * as React from "react";
import Image from "next/image";

import BuchLogo from '../public/logos/BuchLogo.webp';
import Facebook from '../public/social-icon/Facebook.webp';
import Instagram from '../public/social-icon/Instagram.webp';
import TikTok from '../public/social-icon/TikTok.webp';
import Youtube from '../public/social-icon/Youtube.webp';

export default function hero() {
  return (
<div className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" />
      <div className="text-white z-[2]">
        <Image loading="lazy" src={BuchLogo} width={461} height={262} alt="Buch Group Logo" />
        <h1 className="text-base sm:text-xl py-5 text-center">CENTRAL OHIO REAL ESTATE</h1>
      </div>
      <div className="flex justify-between z-[5]">
        <a className="pr-4" href="https://www.facebook.com/BuchGroup/">
          <Image src={Facebook} width={32} height={32} alt="Facebook Icon" loading="lazy"/>
        </a>
        <a className="pr-4" href="https://www.instagram.com/thebuchgroup/">
          <Image src={Instagram} width={32} height={32} alt="Instagram Icon" loading="lazy"/>
        </a>
        <a className="pr-4" href="https://www.tiktok.com/@buchcast">
          <Image src={TikTok} width={32} height={32} alt="TikTok Icon" loading="lazy"/>
        </a>
        <a href="https://www.youtube.com/channel/UCxa2vsutgswdGk28sznXyvg">
          <Image src={Youtube} width={32} height={32} alt="Youtube Icon" loading="lazy"/>
        </a>
      </div>
    </div>
  );
}
