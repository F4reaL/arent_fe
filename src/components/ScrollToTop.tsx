import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 300 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed top-1/2 right-[96px] cursor-pointer" onClick={scrollToTop}>
      {isVisible && (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 0.5C36.9787 0.5 47.5 11.0213 47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z"
            fill="white"
            fill-opacity="0.01"
            stroke="#777777"
          />
          <path
            d="M30.5853 28.042L24.0002 21.6579L17.4152 28.042L16.539 27.1925L24.0002 19.959L31.4615 27.1925L30.5853 28.042Z"
            fill="#777777"
          />
        </svg>
      )}
    </div>
  );
};

export default ScrollToTop;
