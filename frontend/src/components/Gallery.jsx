import React, { useState, useEffect, useRef } from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { TiBrush } from "react-icons/ti";
import { BsScissors } from "react-icons/bs";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showExperience, setShowExperience] = useState({});

  const slider = [
    {
        title: "Arjun M.",
        description: "Barber and grooming specialist with expertise in classic and modern styles.",
        image: "/static/image1.png",
        rating: 4.8,
        experience: "5+ yrs",
        expertise: ["salon"]
    },
    {
        title: "Ananya P.", 
        description: "Master of hair artistry and color transformation.",
        image: "/static/image2.png",
        rating: 4.6,
        experience: "8+ yrs",
        expertise: ["salon"]
    },
    {
        title: "Rahul V.",
        description: "Expert in men's skincare and beard styling offering a rejuvenating experience.", 
        image: "/static/image3.png",
        rating: 4.9,
        experience: "12+ yrs",
        expertise: ["salon"]
    },
    {
        title: "Vikram K.",
        description: "Professional barber specializing in precision cuts and fades.",
        image: "/static/image4.png",
        rating: 4.7,
        experience: "6+ yrs",
        expertise: ["salon"]
    },
    {
        title: "Aishwarya S.",
        description: "Celebrity makeup artist specializing in photoshoot and event makeup.",
        image: "/static/image5.png",
        rating: 4.5,
        experience: "10+ yrs",
        expertise: ["makeup", "salon"],
    },
    {
        title: "Sneha M.",
        description: "Eyebrow and eyelash extension specialist with precision artistry.",
        image: "/static/image6.png",
        rating: 4.8,
        experience: "7+ yrs",
        expertise: ["makeup"]
    },
    {
        title: "Riya K.",
        description: "Advanced skincare consultant and anti-aging treatment expert.",
        image: "/static/image7.png",
        rating: 4.9,
        experience: "15+ yrs",
        expertise: ["makeup"]
    }
  ];

  // Autoplay functionality - 1.5 seconds
  useEffect(() => {
    if (!isAutoplay || isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slider.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isAutoplay, slider.length, isDragging]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % slider.length;
    goToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + slider.length) % slider.length;
    goToSlide(newIndex);
  };

  const getSlidePosition = (index) => {
    const diff = index - currentSlide;
    if (diff === 0) return 'translate-x-0 scale-100 sm:scale-110 z-30';
    if (diff === 1 || diff === -(slider.length - 1)) return 'translate-x-16 sm:translate-x-24 scale-90 z-20';
    if (diff === -1 || diff === slider.length - 1) return '-translate-x-16 sm:-translate-x-24 scale-90 z-20';
    if (diff === 2 || diff === -(slider.length - 2)) return 'translate-x-32 sm:translate-x-48 scale-75 z-10';
    if (diff === -2 || diff === slider.length - 2) return '-translate-x-32 sm:-translate-x-48 scale-75 z-10';
    return 'translate-x-64 sm:translate-x-96 scale-50 opacity-0';
  };

  // Mouse/Touch event handlers for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoplay(false);
    setStartX(e.pageX || e.touches?.[0]?.pageX || 0);
    setScrollLeft(currentSlide);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX || e.touches?.[0]?.pageX || 0;
    const walk = (startX - x) / 100;
    
    if (Math.abs(walk) > 0.5) {
      if (walk > 0) {
        const newIndex = (scrollLeft + 1) % slider.length;
        setCurrentSlide(newIndex);
        setScrollLeft(newIndex);
        setStartX(x);
      } else {
        const newIndex = (scrollLeft - 1 + slider.length) % slider.length;
        setCurrentSlide(newIndex);
        setScrollLeft(newIndex);
        setStartX(x);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoplay(true), 1000);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    setIsAutoplay(false);
    
    if (e.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    
    setTimeout(() => setIsAutoplay(true), 1000);
  };

  const handleBadgeClick = (slideIndex, e) => {
    e.stopPropagation();
    setShowExperience(prev => ({
      ...prev,
      [slideIndex]: !prev[slideIndex]
    }));
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="text-yellow-400 text-xs sm:text-sm" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-400 text-xs sm:text-sm" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaRegStar key={`empty-${i}`} className="text-yellow-400 text-xs sm:text-sm" />
      );
    }

    return stars;
  };

  const renderExpertiseBadges = (expertiseArray) => {
    return (
      <div className="flex items-center gap-1 flex-wrap">
        {expertiseArray.map((expertise, index) => (
          <div key={index} className="flex items-center gap-1 bg-red-500/90 px-1.5 py-0.5 rounded-full shrink-0">
            {expertise === 'makeup' ? (
              <TiBrush className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
            ) : (
              <BsScissors className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
            )}
            <span className="hidden sm:inline text-white text-xs font-bold capitalize whitespace-nowrap">
              {expertise === 'makeup' ? 'Makeup' : 'Salon'}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div 
      className="w-[97%] max-w-[1470px] mt-4 sm:mt-6 mb-6 sm:mb-8 mx-2 sm:mx-6 lg:mx-3 
                 bg-white border-red-400 border-2 rounded-[24px] sm:rounded-[40px] lg:rounded-[56px] 
                 shadow-lg overflow-hidden"
      style={{ 
        backgroundImage: `url(/static/vector2.svg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="bg-white/85 backdrop-blur-sm min-h-full">
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Content Section */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-6">
              <span className="text-red-500 uppercase tracking-widest text-xs sm:text-sm font-medium">
                discover our
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-red-500 to-black bg-clip-text text-transparent">
                  Home Salon Partners
                </span>
              </h1>
              
              <div className="w-16 sm:w-24 h-1 bg-red-500 mx-auto lg:mx-0"></div>
              
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                Unveiling Elegance: Explore the Beauty Beyond the Frame
              </p>
              
              <button 
                className="inline-block px-4 sm:px-6 lg:px-8 py-2 sm:py-3 border-2 border-red-500 
                         text-red-500 bg-white uppercase tracking-wider rounded-full 
                         hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out 
                         text-xs sm:text-sm lg:text-base font-medium"
                onClick={() => setIsAutoplay(!isAutoplay)}
              >
                {isAutoplay ? 'Pause Slideshow' : 'Play Slideshow'}
              </button>
            </div>

            {/* Slider Section */}
            <div className="relative w-full">
              {/* 3D Carousel View with Scroll/Drag Support */}
              <div 
                className="relative h-64 sm:h-80 lg:h-96 xl:h-[450px] flex items-center justify-center 
                         cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
                onWheel={handleWheel}
              >
                
                <button 
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 z-40 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 
                           bg-white/90 rounded-full flex items-center justify-center shadow-lg 
                           hover:bg-white transition-all duration-300 border-2 border-red-500"
                  onMouseEnter={() => setIsAutoplay(false)}
                  onMouseLeave={() => setIsAutoplay(true)}
                >
                  <svg className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 z-40 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 
                           bg-white/90 rounded-full flex items-center justify-center shadow-lg 
                           hover:bg-white transition-all duration-300 border-2 border-red-500"
                  onMouseEnter={() => setIsAutoplay(false)}
                  onMouseLeave={() => setIsAutoplay(true)}
                >
                  <svg className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {slider.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute w-36 h-48 sm:w-48 sm:h-64 md:w-60 md:h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-[400px] 
                              transition-all duration-500 ease-in-out cursor-pointer ${getSlidePosition(index)}`}
                    onClick={() => goToSlide(index)}
                    onMouseEnter={() => setIsAutoplay(false)}
                    onMouseLeave={() => setIsAutoplay(true)}
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center rounded-xl sm:rounded-2xl shadow-2xl 
                               relative overflow-hidden border-2"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                      
                      <div className="absolute bottom-1 sm:bottom-2 md:bottom-3 left-1 sm:left-2 md:left-3 right-1 sm:right-2 md:right-3 z-40">
                        <div className="bg-gradient-to-t from-black/60 via-black/50 to-black/70 backdrop-blur-sm px-1 sm:px-2.5 md:px-3 py-1 sm:py-2 md:py-2.5 rounded-md sm:rounded-xl md:rounded-2xl shadow-lg border border-white/10">
                          
                          <div className="flex items-center justify-between mb-0.5 sm:mb-1.5">
                            <h2 className="text-white text-xs sm:text-sm lg:text-base font-bold truncate">
                              {slide.title}
                            </h2>
                            <div 
                              className="flex items-center gap-0.5 sm:gap-1 bg-blue-500/90 px-0.5 sm:px-1.5 py-0.5 rounded-full shrink-0 cursor-pointer hover:bg-blue-600/90 transition-colors"
                              onClick={(e) => handleBadgeClick(index, e)}
                            >
                              <BiSolidBadgeCheck className="text-white text-xs" />
                              <span className="hidden sm:inline text-white text-xs font-bold">
                                {slide.experience}
                              </span>
                              {/* Mobile: Show experience only when clicked */}
                              {showExperience[index] && (
                                <span className="sm:hidden text-white text-xs font-bold animate-pulse">
                                  {slide.experience}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-0.5 sm:mb-1.5 gap-0.5 sm:gap-1">
                            <div className="flex items-center gap-1">
                              <div className="sm:hidden flex items-center gap-1">
                                <FaStar className="text-yellow-400 text-xs" />
                                <span className="text-yellow-400 text-xs font-bold">
                                  {slide.rating}
                                </span>
                              </div>
                              <div className="hidden sm:flex items-center gap-1">
                                {renderStars(slide.rating)}
                                <span className="text-yellow-400 text-xs font-bold ml-1">
                                  {slide.rating}
                                </span>
                              </div>
                            </div>
                            
                            {renderExpertiseBadges(slide.expertise)}
                          </div>

                          <p className="hidden sm:block text-gray-300 text-xs leading-tight mb-1 sm:mb-1.5 md:mb-2 line-clamp-1 sm:line-clamp-2">
                            {slide.description}
                          </p>
                          
                          <button 
                            className="w-full px-1 sm:px-2 py-0.5 sm:py-1.5 md:py-2 border border-red-500 text-white bg-red-500 uppercase 
                                     tracking-wider rounded-sm sm:rounded-lg text-xs hover:bg-white hover:text-red-500 transition-all duration-300
                                     font-bold"
                          >
                            book now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 space-x-2">
                {slider.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 rounded-full 
                              transition-all duration-400 ${
                      index === currentSlide 
                        ? 'bg-red-500 shadow-lg scale-110' 
                        : 'bg-white border-2 border-red-500 hover:bg-red-100'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;