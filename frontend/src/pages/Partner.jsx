import React from 'react';
import Vector1 from '/static/Vector1.svg';
import Partners from '/static/Partners.svg';
import Bene2 from '/static/Bene2.svg';
import AppD from '/static/AStoreB.svg';
import PlayD from '/static/GplayB.svg';
import Logo from '/static/Logo.svg';
import Scan from '/static/Scan.svg';

export default function Partner() {
  return (
    <div>
      {/* Upper Section */}
      <div
        className="w-[1500px] h-[700px] rounded-[56px] bg-[#FFEFEF] mt-3 mx-3 px-10 py-8 flex shadow-md relative"
        style={{
          backgroundImage: `url(${Vector1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Text Content */}
        <div className="flex flex-col justify-start">
          <p className="mt-5 font-montserrat text-[60px] font-semibold">
            Grow with Us <br /> Become our
          </p>
          <p className="underline-offset-8 underline font-montserrat text-[60px] text-[#FF0000] font-semibold">
            Partner!
          </p>
          <p className="w-full sm:w-[589px] text-[12px] sm:text-[20px] mt-5 mb-3 text-[#808285]">
            Join Naibeau’s network of trusted beauty professionals. <br />
            Grow your business and reach more clients right at their doorstep.
          </p>
          <img src={Bene2} alt="Benefits" className="mt-10 mb-10 max-w-full h-auto" />
        </div>

        {/* Partners Image */}
        <div className="flex justify-end items-center">
          <img src={Partners} alt="Partners" className="max-h-[600px] max-w-full" />
        </div>
      </div>

      {/* Phone Number Section */}
      <div className="relative -m-[90px] bg-gradient-to-b from-[#FFEFEF] to-white">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1299px] p-10 shadow-lg bg-[#FFEFEF] border-[#CC1C26] border-2 rounded-[56px] text-center">
          <p className="font-montserrat text-[24px] md:text-[32px] font-medium text-gray-800">
            Share your WhatsApp number, and we will contact you!
          </p>
          <form className="mt-6 flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <img src="https://flagcdn.com/in.svg" alt="India" className="w-8 h-8" />
              <span className="font-montserrat text-[18px] md:text-[24px] font-medium text-gray-700">
                +91
              </span>
            </div>
            <input
              type="tel"
              maxLength={10}
              pattern="[0-9]*"
              placeholder="83453 56783"
              className="w-full max-w-[300px] px-4 py-2 text-[16px] md:text-[18px] text-gray-800 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
              }}
            />
            <button
              type="submit"
              className="px-6 py-2 text-[16px] md:text-[18px] font-medium text-white bg-[#FF0000] rounded-full shadow-md hover:bg-[#e60000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF0000]"
            >
              Join Us
            </button>
          </form>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-60 text-center mx-auto max-w-[900px] px-4">
        <p className="font-montserrat text-[20px] sm:text-[24px]">
          <span className="font-semibold text-black">
            For a life-changing experience, join Naibeau Company.
          </span>
          <br />
          <span className="text-[#808285] text-[24px]">
            An app-based marketplace called Naibeau Company gives professionals like you more leverage.
          </span>
        </p>
      </div>

      {/* App Download Section */}
      <div className="w-[90%] max-w-[1700px] mt-10 mb-3 mx-auto px-6 py-6 bg-[#FFEFEF] rounded-[56px] shadow-md flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section: Logo, Text, and Buttons */}
        <div className="flex flex-col justify-center lg:w-2/3">
          {/* Logo */}
          <img src={Logo} alt="Naibeau Logo" className="mt-4 w-[180px] h-auto mb-6 mx-auto lg:mx-0" />
          
          {/* Text */}
          <h2 className="text-center lg:text-left font-bold text-[36px] md:text-[50px] font-montserrat">
            Download the <br />
            <span className="underline text-[#FF0000]">Partner App now!</span>
          </h2>
          <p className="mt-6 ml-6 mr-6 text-center lg:text-left font-semibold text-[18px] md:text-[24px] text-gray-800 leading-snug">
            Redefine convenience. <br/>Book your next beauty appointment on the Naibeau app.
          </p>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
            <a href="#" className="cursor-pointer">
              <img src={AppD} alt="App Store" className="w-[200px] md:w-[250px] h-auto mx-auto sm:mx-0" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.naibeau" className="cursor-pointer">
              <img src={PlayD} alt="Google Play" className="w-[200px] md:w-[250px] h-auto mx-auto sm:mx-0" />
            </a>
          </div>
        </div>

        {/* Right Section: Scan QR Code */}
        <div className="mt-8 lg:mt-0 lg:ml-auto lg:w-1/3 flex justify-center lg:justify-end">
          <img src={Scan} alt="Scan QR Code" className="w-[300px] md:w-[400px] lg:w-[450px] h-auto" />
        </div>
      </div>



    </div>
  );
}
