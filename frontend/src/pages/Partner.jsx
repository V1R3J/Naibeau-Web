import React, { useState } from 'react';
import Vector1 from '/static/Vector1.svg';
import Partners from '/static/Partners.svg';
import Bene2 from '/static/Bene2.svg';
import AppD from '/static/AStoreB.svg';
import PlayD from '/static/GplayB.svg';
import Logo from '/static/Logo.svg';
import PScan from '/static/PScan.svg';

export default function Partner() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission removed - frontend only
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-8">
      {/* Upper Section */}
      <div
        className="mt-4 w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] rounded-[24px] sm:rounded-[32px] md:rounded-[48px] lg:rounded-[56px] bg-[#FFEFEF] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-6 sm:py-8 md:py-10 flex flex-col lg:flex-row shadow-md relative overflow-hidden"
        style={{
          backgroundImage: `url(/static/Vector6.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Text Content */}
        <div className="flex flex-col justify-start flex-1 lg:max-w-[60%]">
          <h1 className="mt-2 sm:mt-4 md:mt-6 lg:mt-5 font-montserrat text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-semibold leading-tight text-center sm:text-left">
            Grow with Us <br /> Become our
          </h1>
          <h2 className="underline-offset-4 text-center sm:text-left sm:underline-offset-6 md:underline-offset-8 underline font-montserrat text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] text-[#FF0000] font-semibold">
            Partner!
          </h2>
          <p className="text-center sm:text-left w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-3 sm:mt-4 md:mt-5 mb-3 text-[#808285] leading-relaxed">
            Join Naibeau's network of trusted beauty professionals. <br />
            Grow your business and reach more clients right at their doorstep.
          </p>
          <div className="text-center sm:text-left mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <img src={Bene2} alt="Benefits" className="max-w-full h-auto" />
          </div>
        </div>

        {/* Partners Image */}
        <div className="flex justify-center lg:justify-end items-center flex-shrink-0 mt-4 -mb-8 md:-mb-6 lg:mt-20">
          <img 
            src={Partners} 
            alt="Partners" 
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>

      
      {/* Phone Number Section */}
      <div className="relative -mt-20 sm:-mt-16 md:-mt-24 lg:-mt-[90px] mb-8 sm:mb-10 md:mb-12 lg:mb-0">
        <div className="mx-auto w-[329px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-full max-w-[1299px] p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg bg-[#FFEFEF] border-[#CC1C26] border-2 rounded-[24px] sm:rounded-[32px] md:rounded-[48px] lg:rounded-[56px] text-center">
          <h3 className="font-montserrat text-[15px] sm:text-[20px] md:text-[28px] lg:text-[32px] font-medium text-gray-800 mb-4 sm:mb-5 md:mb-6">
            Share your WhatsApp number, and we will contact you!
          </h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5">
            <div className="flex items-center gap-2 sm:gap-2 md:gap-3">
              <img src="https://flagcdn.com/in.svg" alt="India" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              <span className="font-montserrat text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-medium text-gray-700">
                +91
              </span>
              <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="83453 56783"
              className="w-full max-w-[250px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] text-gray-800 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
              required
            />
            </div>
            
            
            
            <button
              type="submit"
              disabled={phoneNumber.length !== 10}
              className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-medium text-white bg-[#FF0000] rounded-full shadow-md hover:bg-[#e60000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF0000] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              Join Us
            </button>
          </form>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-8 sm:mt-10 md:mt-12 text-center mx-auto max-w-[900px] md:max-w-[1100px] px-4">
        <p className="font-montserrat text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] leading-relaxed">
          <span className="font-semibold text-black">
            For a life-changing experience, join Naibeau Company.
          </span>
          <br />
          <span className="text-[#808285] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px]">
            An app-based marketplace called Naibeau Company gives professionals like you more leverage.
          </span>
        </p>
      </div>

      {/* App Download Section */}
      <div className="w-full max-w-[1500px] mx-auto mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-10 bg-[#F4E3E3] border-[#EA9494] border-2 sm:border-3 md:border-4 rounded-[24px] sm:rounded-[32px] md:rounded-[48px] lg:rounded-[56px] shadow-md flex flex-col lg:flex-row overflow-hidden">
        {/* Left Section: Logo, Text, and Buttons */}
        <div className="mt-6 mb-4 lg:mb-1 mx-4 sm:mx-6 md:mx-8 flex flex-col justify-center text-center lg:text-left flex-1">
          {/* Logo */}
          <img 
            src={Logo} 
            alt="Naibeau Logo" 
            className="max-w-[150px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[200px] max-h-[40px] sm:max-h-[45px] md:max-h-[55px] lg:max-h-[50px] h-auto w-auto mt-6 md:mt-8 lg:mt-10 mb-3 mx-auto lg:mx-8" 
          />
          
          {/* Text */}
          <h2 className="font-semibold text-[24px] xs:text-[28px] sm:text-[32px] md:text-[42px] lg:text-[50px] font-montserrat mx-auto lg:mx-8 mt-3 leading-tight">
            Download the Partner App now!
          </h2>
          
          <p className="mt-3 mx-auto lg:mx-8 font-semibold text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-[#000000] leading-normal">
            Redefine convenience. <br/>Schedule your next beauty appointment on the Naibeau app.
          </p>

          {/* App Download Buttons */}
          <div className="flex sm:flex-row gap-4 sm:gap-6 md:gap-8 mx-auto lg:mx-6 mt-4 md:mt-6 lg:mt-1 items-center">
            <a href="https://apps.apple.com/in/app/naibeau-partner/id6743756318" className="cursor-pointer">
              <img 
                src={AppD} 
                alt="App Store" 
                className="w-[180px] sm:w-[200px] md:w-[230px] lg:w-[250px] h-auto hover:scale-105 transition-transform duration-200" 
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.naibeau" className="cursor-pointer">
              <img 
                src={PlayD} 
                alt="Google Play" 
                className="w-[180px] sm:w-[200px] md:w-[230px] lg:w-[250px] h-auto hover:scale-105 transition-transform duration-200" 
              />
            </a>
          </div>
        </div>

        {/* Right Section: Scan QR Code */}
        <div className="flex-shrink-0 flex justify-center items-center lg:p-0">
          <img 
            src={PScan} 
            alt="Scan QR Code" 
            className="hidden md:block w-[350px] lg:w-[400px] xl:w-[500px] h-auto max-h-[500px] md:max-h-[550px] lg:max-h-[600px] ml-0 md:ml-4 lg:ml-8 xl:ml-20 -mb-8 md:-mb-10 lg:-mb-12 flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
}