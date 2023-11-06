"use client";
import Typed from "typed.js";
import { useEffect, useRef, useContext } from "react";

import { AppContext } from "./providers";

function HeroTypedHeader() {
  const sanityData = useContext(AppContext).filter(
    (obj) => obj._type == "heroHeaderMessage",
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
    <h1 className="mb-4 text-4xl font-bold leading-normal text-black">
      We are a Digital Agency
      <br />
      serve <span ref={el} />
    </h1>
  );
}

export default HeroTypedHeader;
