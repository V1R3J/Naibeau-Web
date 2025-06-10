import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeroImage from "/static/Hero.svg";
import SpaIcon from "/static/spa.svg";
import SalonIcon from "/static/salon.svg";
import MakeupIcon from "/static/makeup.svg";
import MaleSpaIcon from "/static/malespa.svg";
import MaleSalonIcon from "/static/malesalon.svg";
import ArrowRed from "/static/ArrowRed.svg";
import ReferImage from "/static/refer.svg";
import maleicon from "/static/maleicon.svg";
import femaleicon from "/static/femaleicon.svg";
import maleiconw from "/static/maleiconw.svg";
import femaleiconw from "/static/femaleiconw.svg";
import Gallery from "../components/Gallery";
import AppD from '/static/AStoreB.svg';
import PlayD from '/static/GplayB.svg';
import Logo from '/static/Logo.svg';
import UScan from '/static/UScan.svg';
import g1 from '/static/g1.svg';
import g2 from '/static/g2.svg';
import g3 from '/static/g3.svg';
import g4 from '/static/g4.svg';
import g5 from '/static/g5.svg';
import g6 from '/static/g6.svg';

export default function Home() {
  const [activeTab, setActiveTab] = useState("Women");

  const services = {
    Women: [
      { icon: SalonIcon, title: "Salon Services" },
      { icon: SpaIcon, title: "Spa Services" },
      { icon: MakeupIcon, title: "Makeup Services" },
    ],
    Men: [
      { icon: MaleSpaIcon, title: "Men's Spa Services" },
      { icon: MaleSalonIcon, title: "Men's Salon Services" },
    ],
  };

  return (
    <div className="px-2 sm:px-4">
      {/* Hero Section */}
      <div
        className="mt-3 max-w-[1500px] w-full h-auto mx-auto rounded-[32px] sm:rounded-[56px] flex flex-col lg:flex-row justify-between items-center p-4 sm:p-6 lg:p-0"
        style={{
          backgroundImage: `url(/static/Vector5.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-5 mx-4 sm:mx-8 lg:ml-20 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-[28px] xs:text-[35px] sm:text-[45px] lg:text-[55px] font-bold leading-tight mt-2">
            Get Your Vibe With <br />
            The Right <span className="bg-gradient-to-r from-red-400 via-red-600 to-black/60 bg-clip-text text-transparent"> Home Salon Partner! </span>
          </h1>
          <p className="text-[#FF0000] font-semibold text-[20px] sm:text-lg mt-4">Secure, Safe, Trustable</p>
          <p className=" text-gray-600 text-[15px] sm:text-[20px] sm:text-md mt-2 max-w-[500px] mx-auto lg:mx-0 ">
            Get <span className="font-bold text-[#FF0000] ">Naibeau</span> for your next booking. We are
            here to help you get your next salon service smooth and convenient.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-center md:items-center  ">
            <NavLink
              to="/download"
              className="bg-[#FF0000] text-white py-2 px-4 sm:px-6 rounded-full font-semibold text-base sm:text-lg hover:bg-[#e60000] w-full sm:w-auto text-center"
            >
              Download The App
            </NavLink>
            <NavLink
              to="/partner"
              className="border border-[#FF0000] text-[#FF0000] py-2 px-4 sm:px-6 rounded-full font-semibold text-base sm:text-lg hover:bg-[#FFEFEF] w-full sm:w-auto text-center"
            >
              Be Our Partner
            </NavLink>
          </div>
        </div>
        <img 
          src={HeroImage} 
          alt="Hero" 
          className="w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] h-auto mx-4 sm:mx-8 lg:mr-5 order-3 -mb-3 sm:mb-0 lg:order-2" 
        />
      </div>

      {/* What We Offer Section */}
      <div
        className="p-4 sm:p-6 lg:p-10 rounded-[32px] sm:rounded-[56px] shadow-lg mt-4 ml-3 mr-3 mx-auto max-w-[1500px]"
        style={{
          backgroundImage: `url(/static/Vector3.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h2 className="mt-3 p-3 font-montserrat font-semibold text-[25px] sm:text-[35px] lg:text-[40px] mb-2">What We Offer!</h2>
          <p className="text-[16px] sm:text-[20px] lg:text-[25px] font-sans text-gray-600 max-w-[800px] mx-auto">
            Discover a wide range of personalized beauty and grooming services tailored just for you.
          </p>
        </div>

        <div className="flex items-center justify-center mt-5">
          <div className="bg-white rounded-full p-2 w-full max-w-[460px] h-[60px] sm:h-[70px] shadow-md flex justify-between items-center mx-4">
            <button
          className={`flex items-center justify-center gap-1 sm:gap-2 flex-1 h-[40px] sm:h-[50px] md:h-[65px] py-2 px-2 sm:px-6 rounded-full font-semibold ${
            activeTab === "Women" ? "bg-[#FF0000] text-white" : "text-gray-700"
          }`}
          onClick={() => setActiveTab("Women")}
        >
          <img
            src={activeTab === "Women" ? femaleiconw : femaleicon}
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            alt="Female Icon"
          />
          <p className="font-montserrat text-[14px] sm:text-[18px] md:text-[24px] lg:text-[30px]">Women</p>
        </button>
        <button
          className={`flex items-center justify-center gap-1 sm:gap-2 flex-1 h-[40px] sm:h-[50px] md:h-[65px] py-2 px-2 sm:px-6 rounded-full font-semibold ${
            activeTab === "Men" ? "bg-[#FF0000] text-white" : "text-gray-700"
          }`}
          onClick={() => setActiveTab("Men")}
        >
          <img
            src={activeTab === "Men" ? maleiconw : maleicon}
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            alt="Male Icon"
          />
          <p className="font-montserrat text-[14px] sm:text-[18px] md:text-[24px] lg:text-[30px]">Men</p>
        </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
          {services[activeTab].map((service, index) => (
            <div
              key={index}
              className="cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110 mx-auto"
              onClick={() => window.location.href = "/download"}
            >
              <div
                className="rounded-[21px] shadow-md bg-[#FFFFFF] p-4 sm:p-6 font-montserrat text-center flex flex-col justify-between
                hover:bg-[#d49a9a]/50 -z-0 hover:border-red-500
                hover:text-black hover:shadow-xl
                transition-all duration-300 ease-in-out w-[280px] h-[320px] sm:w-[350px] sm:h-[400px] lg:w-[400px] lg:h-[450px]"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="mx-auto mb-4 w-auto h-auto max-h-[200px] sm:max-h-[280px] lg:max-h-[350px]
                  hover:filter hover:brightness-75
                  transition duration-300 ease-in-out"
                />
                <p className="font-montserrat text-[20px] sm:text-[25px] lg:text-[30px] font-medium mt-auto">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Refer & Earn Section */}
      <div
        className="flex flex-col lg:flex-row justify-between items-center mx-2 sm:mx-4 p-4 sm:p-6 lg:p-8 rounded-[32px] sm:rounded-[56px] text-white mt-10 max-w-[1500px] mx-auto"
        style={{
          backgroundImage: `url(/static/Vector4.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-1">
          <p className="text-[32px] xs:text-[40px] sm:text-[55px] lg:text-[72px] font-semibold font-montserrat leading-tight">
            Refer <span className="font-norican text-[40px] xs:text-[50px] sm:text-[65px] lg:text-[85px]">&</span> Earn up to
          </p>
          
          {/* Image shown after "Refer & Earn up to" line - Mobile only */}
          <img 
            src={ReferImage} 
            alt="Refer and Earn" 
            className="w-full max-w-[250px] xs:max-w-[300px] sm:max-w-[400px] h-auto mx-auto my-4 lg:hidden" 
          />
          
          <p className="font-montserrat text-[16px] sm:text-[20px] lg:text-[28px] mt-2 max-w-[500px] mx-auto lg:mx-0">
            Share your unique referral code on the app to get ₹150 instant cashback
          </p>
          <div className="mt-6 flex items-center justify-center lg:justify-start">
            <NavLink
              to="/download"
              className="flex items-center bg-white text-[#FF0000] py-2 px-4 sm:px-6 rounded-full font-semibold border-white border-2 text-base sm:text-lg hover:bg-red-600 hover:text-white"
            >
              Refer A Friend
              <img src={ArrowRed} alt="Arrow Icon" className="hover:invert ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </NavLink>
          </div>
        </div>
        
        {/* Image for desktop version - hidden on mobile */}
        <img 
          src={ReferImage} 
          alt="Refer and Earn" 
          className="hidden lg:block w-full max-w-[500px] h-auto order-2 lg:order-2 mb-4 lg:mb-0 lg:-mt-10" 
        />
      </div>

      {/* Our Gallery section */}
      <Gallery />

      {/* What Sets Us Apart Section */}
      <div
        className="bg-[#FFD5D5] border-[#E43844] border-3 mt-6 p-4 sm:mt-8 mb-6 sm:mb-8 rounded-[32px] sm:rounded-[50px] w-full max-w-[1500px] mx-auto h-auto sm:p-4 lg:px-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
        style={{
          backgroundImage: `url(/static/Vector9.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h2 className="col-span-1 sm:col-span-2 text-center mb-3p-3 sm:p-5 font-montserrat text-[24px] sm:text-[30px] lg:text-[40px] font-semibold">
          What Sets Us Apart
        </h2>
        {[g1, g2, g3, g4, g5, g6].map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:z-10"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg"
              style={{
                maxWidth: "98%",
                maxHeight: "98%",
                margin: "auto",
              }}
            />
          </div>
        ))}
      </div>

      {/* App Download Section */}
      <div className="w-full max-w-[1500px] mx-auto mt-6 p-4 sm:mt-8 mb-6 sm:mb-8 bg-[#F4E3E3] border-[#EA9494] border-2 sm:border-4 rounded-[24px] sm:rounded-[40px] lg:rounded-[56px] shadow-md flex flex-col lg:flex-row overflow-hidden">
        {/* Left Section: Logo, Text, and Buttons */}
        <div className="mt-6 mb-4 lg:mb-1 mx-4 sm:mx-6 flex flex-col justify-center text-center lg:text-left flex-1">
          {/* Logo */}
          <img 
            src={Logo} 
            alt="Naibeau Logo" 
            className="max-w-[150px] sm:max-w-[200px] max-h-[40px] sm:max-h-[50px] h-auto w-auto mt-6 lg:mt-10 mb-3 mx-auto lg:mx-8" 
          />
          {/* Text */}
          <h2 className="font-semibold text-[24px] xs:text-[28px] sm:text-[36px] lg:text-[50px] font-montserrat mx-auto lg:mx-8 mt-3 leading-tight">
            Download the 
            <span className="text-[#000000]"> app now !</span>
          </h2>
          <p className="mt-3 mx-auto lg:mx-8 font-semibold text-[18px] sm:text-[22px] lg:text-[28px] text-[#000000] leading-normal">
            Redefine convenience. <br/>Book your next beauty appointment on the Naibeau app.
          </p>

          {/* App Download Buttons */}
          <div className="flex sm:flex-row gap-4 sm:gap-6 mx-auto lg:mx-6 mt-4 lg:mt-1 items-center">
            <a href="https://apps.apple.com/in/app/naibeau/id6743757201" className="cursor-pointer">
              <img src={AppD} alt="App Store" className="w-[180px] sm:w-[200px] lg:w-[250px] h-auto" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.naibeau_user" className="cursor-pointer">
              <img src={PlayD} alt="Google Play" className="w-[180px] sm:w-[200px] lg:w-[250px] h-auto" />
            </a>
          </div>
        </div>

        {/* Right Section: Scan QR Code */}
        <img 
          src={UScan} 
          alt="Scan QR Code" 
          className="hidden lg:block w-[400px] xl:w-[500px] h-auto max-h-[600px] ml-0 xl:ml-20 -mb-12 flex-shrink-0" 
        />
      </div>

      
    </div>
  );
}