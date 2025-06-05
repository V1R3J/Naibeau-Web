import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const galleryItems = [
    { src: "/static/image1.png", alt: "Gallery Item 1" },
    { src: "/static/image2.png", alt: "Gallery Item 2" },
    { src: "/static/image3.png", alt: "Gallery Item 3" },
    { src: "/static/image4.png", alt: "Gallery Item 4" },
    { src: "/static/image5.png", alt: "Gallery Item 5" },
    { src: "/static/image1.png", alt: "Gallery Item 6" },
  ];

  useEffect(() => {
    // Trigger the main container animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Start auto-scrolling after 5 seconds
    const autoScrollTimer = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoScrollTimer);
    };
  }, []);

  useEffect(() => {
    if (isAutoScrolling) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % (galleryItems.length - 2));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoScrolling, galleryItems.length]);

  const nextSlide = () => {
    setIsAutoScrolling(false);
    setCurrentIndex(prev => (prev + 1) % (galleryItems.length - 2));
  };

  const prevSlide = () => {
    setIsAutoScrolling(false);
    setCurrentIndex(prev => prev === 0 ? galleryItems.length - 3 : prev - 1);
  };

  const getVisibleItems = () => {
    return [
      galleryItems[currentIndex],
      galleryItems[currentIndex + 1],
      galleryItems[currentIndex + 2]
    ];
  };

  return (
    <div
      className={`w-[97%] h-[900px] mx-auto mt-5 mb-5 rounded-[56px] shadow-md border-2 border-[#FE4D4D] p-10 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
      }`}
      style={{
        backgroundImage: `url(/static/Vector2.svg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h2 className={`text-center font-bold text-[36px] md:text-[40px] text-black mb-12 transition-all duration-800 ease-out delay-200 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
      }`}>
        Our Gallery
      </h2>
      
      <div className="relative flex items-center justify-center h-[600px]">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-8 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-[#FE4D4D]" />
        </button>

        {/* Gallery Cards Container */}
        <div className="flex items-end justify-center gap-8 transition-all duration-700 ease-in-out">
          {getVisibleItems().map((item, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-out hover:scale-105 group ${
                index === 1 
                  ? 'w-[400px] h-[500px] transform scale-110 z-10' 
                  : 'w-[320px] h-[400px]'
              } ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${300 + (index * 150)}ms`
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              
              {/* Red Gradient Overlay */}
              <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-600/80 via-red-500/60 to-transparent transition-all duration-300 ${
                index === 1 ? 'from-red-700/90 via-red-600/70' : ''
              }`}></div>
              
              {/* Highlight Ring for Middle Card */}
              {index === 1 && (
                <div className="absolute inset-0 rounded-2xl ring-4 ring-red-400/50 ring-offset-2 ring-offset-white/20"></div>
              )}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-8 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-[#FE4D4D]" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: galleryItems.length - 2 }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoScrolling(false);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#FE4D4D] scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Auto-scroll indicator */}
      {isAutoScrolling && (
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600 bg-white/70 px-3 py-1 rounded-full">
            Auto-scrolling...
          </span>
        </div>
      )}
    </div>
  );
};

export default Gallery;