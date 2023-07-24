import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { AnimatedCounterProps } from "@/interfaces/ AnimatedCounterProps";

if (typeof window !== 'undefined') {
  const ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ start, end, duration, prefix = '', suffix = '' }) => {
  const countRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (countRef.current) {
      const ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      const countAnimation = gsap.to(countRef.current, {
        textContent: end,
        scrollTrigger: {
          start: "top 80%",
          trigger: countRef.current,
          toggleActions: "restart none none reset",
        },
        roundProps: "textContent",
        duration: duration,
        ease: "power1.out",
      });
    }
  }, []);

  return (
    <div className="font-bold text-7xl font-main">
      {prefix}<span ref={countRef}>{start}</span>{suffix}
    </div>
  );
};

export default AnimatedCounter;
