import React, { useState, useEffect } from "react";
import image1 from "/static/image1.png";
import image2 from "/static/image2.png";
import image3 from "/static/image3.png";
import image4 from "/static/image4.png";
import image5 from "/static/image5.png";
import image6 from "/static/image6.png";
import image7 from "/static/image7.png";
import image8 from "/static/image8.png";

export default function Gallery() {
  const [currentImageSet, setCurrentImageSet] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  // Define multiple sets of images for rotation
  const imageSets = [
    {
      topLeft: image1,
      middle: image2, 
      topRight: image3,
      bottomLeft: image4,
      bottomRight: image5,
    },
    {
      topLeft: image4, // bottom left moves to top left
      middle: image6, // middle scrolls to new image
      topRight: image7, // top right scrolls up to new image
      bottomLeft: image8, // new bottom left
      bottomRight: image5 // bottom right moves to top right (will be used next)
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageSet(prev => (prev + 1) % imageSets.length);
      setAnimationKey(prev => prev + 1); // Force re-animation
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentImages = imageSets[currentImageSet];

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideUpLeft {
          from {
            transform: translateY(100%) translateX(-20%);
            opacity: 0;
          }
          to {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideUpRight {
          from {
            transform: translateY(100%) translateX(20%);
            opacity: 0;
          }
          to {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slideDown {
          animation: slideDown 1s ease-in-out;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-in-out;
        }

        .animate-slideUpLeft {
          animation: slideUpLeft 1s ease-in-out;
        }

        .animate-slideUpRight {
          animation: slideUpRight 1s ease-in-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>

      {/* Our Gallery */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-16">
            Our Gallery
          </h1>

          {/* Gallery Grid */}
          <div className="grid grid-cols-12 grid-rows-8 gap-4 h-[600px] max-w-6xl mx-auto">
            {/* Top Left Image */}
            <div className="col-span-4 row-span-4 relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                key={`topLeft-${animationKey}`}
                src={currentImages.topLeft}
                alt="Gallery Image 1"
                className="w-full h-full object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 animate-fadeIn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Middle Large Image */}
            <div className="col-span-4 row-span-8 relative overflow-hidden rounded-2xl shadow-xl group">
              <img
                key={`middle-${animationKey}`}
                src={currentImages.middle}
                alt="Gallery Image 2"
                className="w-full h-full object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 animate-slideDown"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Top Right Image */}
            <div className="col-span-4 row-span-4 relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                key={`topRight-${animationKey}`}
                src={currentImages.topRight}
                alt="Gallery Image 3"
                className="w-full h-full object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 animate-slideUp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Bottom Left Image */}
            <div className="col-span-4 row-span-4 relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                key={`bottomLeft-${animationKey}`}
                src={currentImages.bottomLeft}
                alt="Gallery Image 4"
                className="w-full h-full object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 animate-slideUpLeft"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Bottom Right Image */}
            <div className="col-span-4 row-span-4 relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                key={`bottomRight-${animationKey}`}
                src={currentImages.bottomRight}
                alt="Gallery Image 5"
                className="w-full h-full object-cover transition-all duration-300 ease-in-out transform group-hover:scale-105 animate-slideUpRight"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {imageSets.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentImageSet(index);
                  setAnimationKey(prev => prev + 1);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImageSet === index 
                    ? 'bg-red-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}