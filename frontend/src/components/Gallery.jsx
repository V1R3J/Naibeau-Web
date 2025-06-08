import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const slider = [
    {
      title: "Priya S.",
      description: "Expert in traditional bridal makeup and contemporary styling. ",
      image: "/static/image1.png",
      rating: 4.8
    },
    {
      title: "Ananya P.", 
      description: "Master of hair artistry and color transformation.",
      image: "/static/image2.png",
      rating: 4.6
    },
    {
      title: "Kavya R.",
      description: "Skincare specialist and facial expert offering rejuvenating treatments.", 
      image: "/static/image3.png",
      rating: 4.9
    },
    {
      title: "Meera G.",
      description: "Professional nail artist and spa therapist.",
      image: "/static/image4.png",
      rating: 4.7
    },
    {
      title: "Aishwarya S.",
      description: "Celebrity makeup artist specializing in photoshoot and event makeup.",
      image: "/static/image5.png",
      rating: 4.5
    }
  ];

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slider.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, slider.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slider.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);
  };

  const getSlidePosition = (index) => {
    const diff = index - currentSlide;
    if (diff === 0) return 'translate-x-0 scale-110 z-30';
    if (diff === 1 || diff === -(slider.length - 1)) return 'translate-x-24 scale-90 z-20';
    if (diff === -1 || diff === slider.length - 1) return '-translate-x-24 scale-90 z-20';
    if (diff === 2 || diff === -(slider.length - 2)) return 'translate-x-48 scale-75 z-10';
    if (diff === -2 || diff === slider.length - 2) return '-translate-x-48 scale-75 z-10';
    return 'translate-x-96 scale-50 opacity-0';
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={`full-${i}`} className="fas fa-star text-yellow-400"></i>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <i key="half" className="fas fa-star-half-alt text-yellow-400"></i>
      );
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>
      );
    }

    return stars;
  };

  return (
    <>
      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      
      <div 
        className="relative w-full min-h-screen bg-white overflow-hidden px-8 lg:px-16"
        style={{ 
          backgroundImage: `url(/static/vector2.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Background overlay for better text visibility */}
        <div className="absolute inset-0 bg-white/80"></div>
        
        <div className="container mx-auto py-8 lg:py-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-screen lg:min-h-0">
            
            {/* Content Section */}
            <div className="flex-1 max-w-lg">
              <span className="text-red-500 uppercase tracking-widest text-sm font-medium">
                discover our
              </span>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mt-2 mb-6">
                <span className="bg-gradient-to-r from-red-500 to-black bg-clip-text text-transparent">
                  Home Salon Partners
                </span>
              </h1>
              <div className="w-24 h-1 bg-red-500 mb-8"></div>
              <p className="text-black leading-relaxed text-lg mb-8">
                Unveiling Elegance: Explore the Beauty Beyond the Frame
              </p>
              <button 
                className="inline-block px-8 py-3 border-2 border-red-500 text-red-500 bg-white
                         uppercase tracking-wider rounded-full hover:bg-red-500 hover:text-white
                         transition-all duration-300 ease-in-out"
                onClick={() => setIsAutoplay(!isAutoplay)}
              >
                {isAutoplay ? 'Pause Slideshow' : 'Play Slideshow'}
              </button>
            </div>

            {/* Slider Section */}
            <div className="flex-1 relative">
              <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
                
                {/* Navigation Buttons */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 z-40 w-12 h-12 bg-white/90 rounded-full 
                           flex items-center justify-center shadow-lg hover:bg-white 
                           transition-all duration-300 border-2 border-red-500"
                  onMouseEnter={() => setIsAutoplay(false)}
                  onMouseLeave={() => setIsAutoplay(true)}
                >
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 z-40 w-12 h-12 bg-white/90 rounded-full 
                           flex items-center justify-center shadow-lg hover:bg-white 
                           transition-all duration-300 border-2 border-red-500"
                  onMouseEnter={() => setIsAutoplay(false)}
                  onMouseLeave={() => setIsAutoplay(true)}
                >
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Slides */}
                {slider.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute w-72 h-96 lg:w-80 lg:h-[450px] transition-all duration-400 ease-in-out cursor-pointer ${getSlidePosition(index)}`}
                    onClick={() => goToSlide(index)}
                    onMouseEnter={() => setIsAutoplay(false)}
                    onMouseLeave={() => setIsAutoplay(true)}
                  >
                    <div 
                      className="w-full h-full bg-cover bg-center rounded-2xl shadow-2xl relative overflow-hidden"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    >
                      {/* Overlay for active slide */}
                      <div className={`absolute inset-0 bg-black/5 flex flex-col justify-end p-6 transition-opacity duration-400 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-white text-semibold text-2xl font-normal tracking-wide">
                            {slide.title}
                          </h2>
                          <div className="flex items-center gap-1">
                            {renderStars(slide.rating)}
                            <span className="text-yellow-400 text-sm font-medium ml-1">
                              {slide.rating}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-200 text-sm leading-relaxed mb-4">
                          {slide.description}
                        </p>
                        <a 
                          href="/download"
                          className="self-start px-6 py-2 border-2 border-red-500 text-white bg-red-500
                                   uppercase tracking-wider rounded-full text-sm
                                   hover:bg-white hover:text-red-500 
                                   transition-all duration-400"
                        >
                          book appointment
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {slider.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-400 ${
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
    </>
  );
};

export default Gallery;