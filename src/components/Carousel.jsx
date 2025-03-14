import React, { useState, useEffect } from "react";

const Carousel = () => {
  const quotes = [
    {
      text: "This site is your reminder to step outside, breathe fresh air, and enjoy the thrill of sports. Keep your time here short – the field is calling!",
    },
    {
      text: "Find your rivals and teammates in your area, challenge yourself, and rise to the top. Play hard, connect stronger, and dominate the game!",
    },
    {
      text: "In a world full of screens, sports remind us what it feels like to be alive.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative mt-8 w-full flex justify-center">
      <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden p-6 md:p-12">
        {/* Quote Container */}
        <div className="relative h-48 flex items-center justify-center">
          {quotes.map((quote, index) => (
            <p
              key={index}
              className={`absolute text-lg md:text-2xl font-bold italic text-black text-center px-6 transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              "{quote.text}"
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;