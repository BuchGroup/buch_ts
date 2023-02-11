import * as React from "react";
import Image from "next/image";

export default function contact() {
  return (
<footer className="align-items-center bg-light-black text-white text-center py-4">
  <div className="flex justify-center mb-3">
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
  <div>&copy; 2023: BuchGroup</div>
</footer>
  );
}
