"use client";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

function HeroTypedHeader() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Online Marketing",
        "Web Design",
        "Mobile Apps",
        "Brand Identity",
        "Social Content",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: !0,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <h1 className="text-4xl leading-normal text-black font-bold mb-4">
      We are a Digital Agency
      <br />
      serve <span ref={el} />
    </h1>
  );
}

export default HeroTypedHeader;
