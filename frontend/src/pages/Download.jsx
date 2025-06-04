import React from 'react';
import HomeIcon from '/static/HomeIcon.svg';
import M1 from '/static/Mockup1.svg';
import Bene1 from '/static/Bene1.svg';
import PlayD from '/static/PlayD.svg';
import AppD from '/static/AppD.svg';
import Underline from '/static/Underline.svg';

export default function Download() {
  return (
    <div>
      {/* Pink Box Section */}
      <div className="max-w-97% h-[760px] rounded-[56px]  mt-6 mx-6 px-10 py-8 flex justify-between items-center relative shadow-md"
      style={{
          backgroundImage: `url(/static/Vector8.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
        {/* Left Content Section */}
        <div className="flex flex-col justify-center flex-1">
          <div>
            <p className="text-[60px] sm:text-[135px] font-antonio leading-none text-[#FF0000]">
              EXPERT SERVICES
            </p>
            <div className="flex items-center gap-4 mt-2">
              <p className="text-[60px] sm:text-[135px] font-antonio leading-none text-[#FF0000]">AT</p>
              <p className="text-[60px] sm:text-[135px] font-antonio underline leading-none text-[#FF0000]">
                HOME!
              </p>
              {/*<img src={HomeIcon} alt="Home icon" className="w-[40px] h-[40px] sm:w-[135px] sm:h-[135px]" />*/}
            </div>
          </div>

          <p className="w-full sm:w-[589px] text-[12px] sm:text-[20px] mt-10 mb-3 text-[#808285]">
            Why step out when luxury can come to you? Book beauty services from top-rated professionals anytime, at your place.
          </p>

          <div className="mt-4">
            <img src={Bene1} alt="Benefits" className="mb-10 max-w-full h-auto" />
          </div>
        </div>

        {/* Right Image Section 
        <div className="max-w-full h-auto">
          <img src={M1} alt="Mobile mockup" className="w-[550px] h-[650px]" />
        </div> */}
      </div>

      {/* Download Section */}
      <div className="flex flex-col items-center text-center py-10 mt-10 mb-10">
        <div className="relative">
          <h1 className="text-[40px] font-semibold font-montserrat mb-3">
            DOWNLOAD THE APP
          </h1>
          <img
            src={Underline}
            alt="Underline"
            className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-full max-w-[400px]"
          />
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <a
            href="https://play.google.com/store/apps/details?id=com.naibeau_user"
            className="rounded-[45px] flex items-center gap-3 px-6 py-3 border-2 border-black  hover:bg-red-400 hover:text-white transition-colors"
          >
            <img src={PlayD} alt="Play Store" className="w-10 h-10 mr-5" />
            <span className="font-montserrat text-[35px] font-normal ">Get it on play store</span>
          </a>
          <a
            href="#"
            className="rounded-[45px] flex items-center gap-3 px-6 py-3 border-2 border-black hover:bg-red-400 hover:text-white transition-colors"
          >
            <img src={AppD} alt="App Store" className="w-10 h-10 mr-5" />
            <span className="font-montserrat text-[35px] font-normal ">Get it on app store</span>
          </a>
        </div>
      </div>
    </div>
  );
}
