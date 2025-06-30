import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { PiGenderMaleDuotone, PiGenderFemaleDuotone } from "react-icons/pi";

// Add this useEffect after your useState
useEffect(() => {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView();
      }
    }, 100);
  }
}, []);

export default function Services() {
  const [selectedGender, setSelectedGender] = useState('women')

  const servicesData = {
    salon: {
      women: [
        { name: 'Facial & Cleanup', icon: `url(/static/icons/s1.svg)`},
        { name: 'Waxing', icon: `url(/static/icons/s2.svg)` },
        { name: 'Pedicure', icon: `url(/static/icons/s3.svg)` },
        { name: 'Manicure', icon: `url(/static/icons/s4.svg)` },
        { name: 'Threading', icon: `url(/static/icons/s5.svg)` },
        { name: 'Bleach & De-tan', icon: `url(/static/icons/s6.svg)` },
        { name: 'Blow-dry & styling', icon: `url(/static/icons/s7.svg)` },
        { name: 'Cut & Style', icon: `url(/static/icons/s8.svg)` },
        { name: 'Trim & Style', icon: `url(/static/icons/s9.svg)` },
        { name: 'Hair Care', icon: `url(/static/icons/s10.svg)` },
        { name: 'Hair Color', icon: `url(/static/icons/s11.svg)` },
        { name: 'Hair extension', icon: `url(/static/icons/s12.svg)` },
      ],
      men: [
        { name: 'Hair Cut', icon: `url(/static/icons/sm1.svg)` },
        { name: 'Beard Trimming', icon: `url(/static/icons/sm2.svg)` },
        { name: 'Hair Styling', icon: `url(/static/icons/sm3.svg)` },
        { name: 'Hair Wash', icon: `url(/static/icons/sm4.svg)` },
        { name: 'Mustache Grooming', icon: `url(/static/icons/sm5.svg)` },
        { name: 'Wedding Grooming', icon: `url(/static/icons/sm6.svg)` }
      ]
    },
    spa: {
      women: [
        { name: 'Post Natal', icon: `url(/static/icons/s13.svg)` },
        { name: 'Stress Relief', icon: `url(/static/icons/s14.svg)` },
        { name: 'Body Scrub', icon: `url(/static/icons/s15.svg)` },
        { name: 'Pain Relief', icon: `url(/static/icons/s16.svg)` },
      ],
      men: [
        { name: 'Pain Relief', icon: `url(/static/icons/sm7.svg)` },
        { name: 'Stress Relief', icon: `url(/static/icons/sm8.svg)` },
        { name: 'Post-Workout', icon: `url(/static/icons/sm9.svg)` },
      ]
    },
    makeup: {
      women: [
        { name: 'Bridal Makeup', icon: `url(/static/icons/s17.svg)` },
        { name: 'Traditional Makeup', icon: `url(/static/icons/s18.svg)` }
      ],
      men: [
        { name: 'Groom Makeup', icon: `url(/static/icons/sm10.svg)` },
        { name: 'Pre-Wedding Shoot', icon: `url(/static/icons/sm11.svg)` },
      ]
    }
  }

  return (
    <div className="px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Hero Section */}
      <div 
        className="mt-4 w-full min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] mb-8 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[48px] border-red-300 border-2 mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 flex flex-col lg:flex-row justify-between items-center relative bg-[#FFF0F0] overflow-hidden"
        style={{
          backgroundImage: `url(/static/Vector10.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Content Section */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-4xl lg:max-w-[50%] mx-auto lg:mx-0 mb-8 lg:mb-0">
          {/* Main Heading */}
          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] xl:text-[72px] font-bold leading-tight text-[#3B3B3B] mb-4 sm:mb-6">
            Our Services
          </h1>
          
          {/* Description */}
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#3B3B3B] leading-relaxed mb-6 sm:mb-8 max-w-[600px]">
            Explore our wide range of professional beauty and wellness services tailored to your needs. From haircuts to facials, enjoy expert care in the comfort of your home.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <NavLink to="/download" className="bg-[#ef3636] text-white py-3 px-6 sm:px-8 rounded-full font-semibold text-base sm:text-lg hover:bg-[#e60000] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Download The App
            </NavLink>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="mt-3 flex justify-center lg:justify-end lg:max-w-[50%]">
          <img 
            src="/static/service.svg" 
            alt="Service illustration" 
            className="w-full max-w-[300px] h-auto sm:max-w-[400px] md:max-w-[500px] lg:max-w-[625px] lg:h-[585px] lg:object-cover"
          />
        </div>
      </div>
      

      {/* Gender Toggle */}
      <div className="flex items-center justify-center mt-5 mb-5">
        <div className="bg-white rounded-full p-1 w-full border-2 max-w-[450px] h-[55px] sm:h-[65px] shadow-md flex justify-between items-center mx-4 relative">
          {/* Sliding Background Indicator */}
          <div 
            className={`absolute top-1 bottom-1 w-[calc(50%)] bg-[#FF0000] rounded-full 
                        transition-all duration-500 ease-in-out shadow-md z-0
                        ${selectedGender === "women" ? "left-1" : "left-[calc(49%)]"}`}
          />
          
          {/* Women Button */}
          <button className={`flex items-center justify-center gap-1 sm:gap-2 flex-1 h-[40px] sm:h-[50px] py-2 px-3 sm:px-5 rounded-full font-semibold z-10 relative transition-all duration-500 ease-in-out
                        ${
                          selectedGender === "women" 
                            ? "text-white" 
                            : "text-gray-700 hover:text-gray-900"
                        }`}
            onClick={() => setSelectedGender("women")}
          >
           <PiGenderFemaleDuotone
              className={`text-[14px] sm:text-[16px] lg:text-[25px] transition-transform duration-500 ${
                selectedGender === "women" ? "rotate-[360deg]" : "rotate-0"
              }`}
            />
            <p className="font-montserrat text-[14px] sm:text-[16px] lg:text-[25px] 
                          transition-all duration-500 ease-in-out font-medium">
              Women
            </p>
          </button>

          {/* Men Button */}
          <button
            className={`flex items-center justify-center gap-1 sm:gap-2 flex-1 h-[40px] sm:h-[50px] 
                        py-2 px-3 sm:px-5 rounded-full font-semibold z-10 relative
                        transition-all duration-500 ease-in-out
                        ${
                          selectedGender === "men" 
                            ? "text-white" 
                            : "text-gray-700 hover:text-gray-900"
                        }`}
            onClick={() => setSelectedGender("men")}
          >
            <PiGenderMaleDuotone
              className={`text-[14px] sm:text-[16px] lg:text-[25px] transition-transform duration-500 ${
                selectedGender === "men" ? "rotate-[360deg]" : "rotate-0"
              }`}
            />
            <p className="font-montserrat text-[14px] sm:text-[16px] lg:text-[25px] 
                          transition-all duration-500 ease-in-out font-medium">
              Men
            </p>
          </button>

        </div>
      </div>

      {/* Services Sections */}
      <div className="space-y-12 sm:space-y-16 md:space-y-20">
        
        {/* Salon Section */}
        <section id="salon" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-center text-[#3B3B3B] mb-8 sm:mb-12">
              Salon Services
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {servicesData.salon[selectedGender].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 border-2 border-gray-400 hover:shadow-lg shadow-md border-b-8 transition-all duration-300 transform hover:scale-110 flex flex-col justify-center items-center p-1 mx-auto"
                >
                  <div 
                    className="w-12 h-12 md:w-15 md:h-15 lg:w-20 lg:h-20  mb-1 bg-no-repeat bg-center bg-contain"
                    style={{ 
                      backgroundImage: service.icon,
                      filter: 'brightness(0) saturate(100%) invert(25%) sepia(74%) saturate(4289%) hue-rotate(344deg) brightness(93%) contrast(97%)'
                    }}
                  />
                  <h3 className="text-xs sm:text-md font-semibold text-[#3B3B3B] text-center leading-tight">
                    {service.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spa Section */}
        <section id="spa" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-center text-[#3B3B3B] mb-8 sm:mb-12">
              Spa Services
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {servicesData.spa[selectedGender].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 border-2 border-gray-400 shadow-md border-b-8 transition-all duration-300 transform hover:scale-110 flex flex-col justify-center items-center p-1 mx-auto"
                >
                  <div 
                    className="w-12 h-12 md:w-15 md:h-15 lg:w-20 lg:h-20  mb-1 bg-no-repeat bg-center bg-contain"
                    style={{ 
                      backgroundImage: service.icon,
                      filter: 'brightness(0) saturate(100%) invert(25%) sepia(74%) saturate(4289%) hue-rotate(344deg) brightness(93%) contrast(97%)'
                    }}
                  />
                  <h3 className="text-xs sm:text-md font-semibold text-[#3B3B3B] text-center leading-tight">
                    {service.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

         {/* Makeup Section */}
        <section id="makeup" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-center text-[#3B3B3B] mb-8 sm:mb-12">
              Makeup Services
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {servicesData.makeup[selectedGender].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 border-2 border-gray-400 shadow-md border-b-8 transition-all duration-300 transform hover:scale-110 flex flex-col justify-center items-center p-1 mx-auto"
                >
                  <div 
                    className="w-12 h-12 md:w-15 md:h-15 lg:w-20 lg:h-20  mb-1 bg-no-repeat bg-center bg-contain"
                    style={{ 
                      backgroundImage: service.icon,
                      filter: 'brightness(0) saturate(100%) invert(25%) sepia(74%) saturate(4289%) hue-rotate(344deg) brightness(93%) contrast(97%)'
                    }}
                  />
                  <h3 className="text-xs sm:text-md font-semibold text-[#3B3B3B] text-center leading-tight">
                    {service.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Spacing */}
      <div className="pb-12 sm:pb-16 md:pb-20"></div>
    </div>
  )
}