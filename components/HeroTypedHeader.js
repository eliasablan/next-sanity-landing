"use client";
import Typed from "typed.js";
import { useEffect, useRef, useContext } from "react";

import { AppContext } from "./providers";

function HeroTypedHeader() {
  const sanityData = useContext(AppContext).filter(
    (obj) => obj._type == "heroHeaderMessage"
  );

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const strings = sanityData.map((obj) => obj.text);
    const typed = new Typed(el.current, {
      strings,
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
