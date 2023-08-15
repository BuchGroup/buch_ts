import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { SOCIAL_MEDIA_ICONS } from "@/constants";

import BuchLogo from "../public/logos/BuchLogo.webp";
import ColumbusBack from "../public/ColumbusBack.webp";
import BuchRealty from "@/public/Render_00082.gif"

export default function hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-10" />
      {/* <header className="text-white z-20 relative">
        <Image
          src={BuchLogo}
          alt="Buch REALTY Logo"
          layout="intrinsic"
          width={500} // specify your own size here
          height={300} // specify your own size here
          quality={80} // reduce quality to save size
        />
        <h1 className="text-base sm:text-xl py-5 text-center">
          CENTRAL OHIO REAL ESTATE
        </h1>
      </header> */}
      <nav className="flex justify-end z-20 absolute bottom-0 pb-5">
        {SOCIAL_MEDIA_ICONS.map((icon) => (
          <Link
            className="pr-4"
            href={icon.href}
            title={icon.name}
            key={icon.name}
          >
            <Image
              src={icon.src}
              width={32}
              height={32}
              alt={`${icon.name} Icon`}
              loading="lazy"
            />
          </Link>
        ))}
      </nav>
      <Image
        src={BuchRealty}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Columbus Background"
      />
    </div>
  );
}
