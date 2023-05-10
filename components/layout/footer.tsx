import * as React from "react";
import Image from "next/image";

import { SOCIAL_MEDIA_ICONS } from "@/constants";

export default function Contact() {
  return (
    <footer className="align-items-center bg-light-black text-white text-center py-4">
      <div className="flex justify-center py-4">
        {SOCIAL_MEDIA_ICONS.map((icon) => (
          <a className="px-2" href={icon.href} key={icon.name}>
            <Image
              src={icon.src}
              width={32}
              height={32}
              alt={`${icon.name} Icon`}
              loading="lazy"
            />
          </a>
        ))}
      </div>
      <p>&copy; 2023: BuchGroup</p>
    </footer>
  );
}
