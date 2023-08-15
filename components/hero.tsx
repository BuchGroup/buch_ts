import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { SOCIAL_MEDIA_ICONS } from "@/constants";

import BuchLogo from "../public/logos/BuchLogo.webp";
import ColumbusBack from "../public/ColumbusBack.webp";
import BuchRealty from "@/public/Render_00082.gif";

export default function hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-10" />
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
      <div className="relative h-screen w-full">
        <Image
          src={BuchRealty}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Columbus Background"
        />
      </div>
    </div>
  );
}
