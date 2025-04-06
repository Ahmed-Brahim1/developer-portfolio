"use client"; // Ensure this component is client-side only

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true when the component is mounted on the client

    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };

    if (isClient) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (isClient) {
        window.removeEventListener("scroll", handleScroll, { passive: true });
      }
    };
  }, [isClient]); // Only run after client-side render

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!isClient) {
    return null; // Return nothing on the server side to prevent rendering errors
  }

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
