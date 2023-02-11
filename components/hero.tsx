import * as React from "react";
import Image from "next/image";

export default function hero() {
  return (
<div className="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" />
      <div className="text-white z-[2]">
        <Image loading="lazy" src="/logos/BuchLogo.png" width={461} height={262} alt="Buch Group Logo" />
        <h1 className="text-base sm:text-xl py-5 text-center">CENTRAL OHIO REAL ESTATE</h1>
      </div>
      <div className="flex justify-between z-[5]">
        <a className="pr-4" href="https://www.facebook.com/BuchGroup/">
          <Image src="/social-icon/Facebook.png" width={32} height={32} alt="Facebook Icon" loading="lazy"/>
        </a>
        <a className="pr-4" href="https://www.instagram.com/thebuchgroup/">
          <Image src="/social-icon/Instagram.png" width={32} height={32} alt="Instagram Icon" loading="lazy"/>
        </a>
        <a className="pr-4" href="https://www.tiktok.com/@buchcast">
          <Image src="/social-icon/TikTok.png" width={32} height={32} alt="TikTok Icon" loading="lazy"/>
        </a>
        <a href="https://www.youtube.com/channel/UCxa2vsutgswdGk28sznXyvg">
          <Image src="/social-icon/Youtube.png" width={32} height={32} alt="Youtube Icon" loading="lazy"/>
        </a>
      </div>
    </div>
  );
}
