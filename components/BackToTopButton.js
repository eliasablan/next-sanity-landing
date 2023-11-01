"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link
      href="#"
      className={`back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 right-4 bottom-4 ${
        showButton ? "block" : "hidden"
      }`}
    >
      <svg
        width="1rem"
        height="1rem"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Link>
  );
};

export default BackToTopButton;
