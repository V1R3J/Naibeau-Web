import { useState } from "react";
import { NavLink } from "react-router-dom";
import HeroImage from "/static/Hero.svg";
import SpaIcon from "/static/spa.svg";
import SalonIcon from "/static/salon.svg";
import MakeupIcon from "/static/makeup.svg";
import MaleSpaIcon from "/static/malespa.svg";
import MaleSalonIcon from "/static/malesalon.svg";
import ReferImage from "/static/refer.svg";
import Gallery from "../components/Gallery";
import Faq from "../components/Faq";
import AppD from '/static/AStoreB.svg';
import PlayD from '/static/GplayB.svg';
import Logo from '/static/Logo.svg';
import UScan from '/static/UScan.svg';
import { FaShieldAlt, FaLock, FaHeart } from 'react-icons/fa';
import { IoPersonAddSharp } from "react-icons/io5";
import { PiGenderMaleDuotone, PiGenderFemaleDuotone } from "react-icons/pi";

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

  const features = [
    {
      title: "Wide Selection Of Service Partners",
      description: "Explore a wide range of trusted service partners to meet your needs",
      icon: "/static/g1.svg"
    },
    {
      title: "Affordable Deals",
      description: "Affordable deals designed to fit your budget.",
      icon: "/static/g2.svg"
    },
    {
      title: "Compare And Choose",
      description: "Explore a wide range of trusted service partners to meet your needs",
      icon: "/static/g3.svg"
    },
    {
      title: "Find The Nearest Service Provider",
      description: "Quick, easy access to the nearest service you need, exactly when you need it.",
      icon: "/static/g4.svg"
    },
    {
      title: "Trusted Reviews And Ratings",
      description: "Transparent reviews and ratings to help you decide",
      icon: "/static/g5.svg"
    },
    {
      title: "Certified And Reliable Providers",
      description: "Our trusted partners are verified for quality and reliability, so you can rest easy.",
      icon: "/static/g6.svg"
    }
  ];

  // Handle service card click with error handling
  const handleServiceClick = () => {
    try {
      window.location.href = "/download";
    } catch (error) {
      console.error("Navigation error:", error);
      // Fallback navigation
      window.open("/download", "_self");
    }
  };

  return (
    <div className="ml-3 mr-3 px-2 sm:px-4">
      {/* Hero Section */}
      <div
        className="mt-3 max-w-[1500px] w-full lg:h-[640px] h-auto mx-auto rounded-[32px] sm:rounded-[56px] flex flex-col lg:flex-row justify-between items-center p-4 sm:p-6 lg:p-0"
        style={{
          backgroundImage: `url(/static/Vector5.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-5 mx-4 sm:mx-8 lg:ml-20 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-[28px] xs:text-[35px] text-[#3B3B3B] sm:text-[45px] lg:text-[55px] font-bold leading-tight mt-2">
            Get your vibe with <br />
            the right <span className="bg-gradient-to-r from-red-400 via-red-600 to-black/60 bg-clip-text text-transparent"> Home Salon Partner! </span>
          </h1>
          
          <div className="mt-6 mb-4">
            {/* Mobile Version - Simple Row */}
            <div className="flex lg:hidden justify-center items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="text-white text-xs" />
                </div>
                <span className="text-gray-700 font-semibold text-sm">Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <FaLock className="text-white text-xs" />
                </div>
                <span className="text-gray-700 font-semibold text-sm">Safe</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                  <FaHeart className="text-white text-xs" />
                </div>
                <span className="text-gray-700 font-semibold text-sm">Trustable</span>
              </div>
            </div>

            {/* Desktop Version - Simple Icon + Text */}
            <div className="hidden lg:flex justify-start items-center space-x-8">
              {/* Secure */}
              <div className="group flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300 shadow-lg">
                  <FaShieldAlt className="text-white text-lg" />
                </div>
                <span className="text-gray-700 group-hover:text-gray-900 font-bold text-[25px] transition-colors duration-300">
                  Secure
                </span>
              </div>
              
              {/* Safe */}
              <div className="group flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300 shadow-lg">
                  <FaLock className="text-white text-lg" />
                </div>
                <span className="text-gray-700 group-hover:text-gray-900 font-bold text-[25px] transition-colors duration-300">
                  Safe
                </span>
              </div>
              
              {/* Trustable */}
              <div className="group flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center group-hover:bg-pink-600 transition-colors duration-300 shadow-lg">
                  <FaHeart className="text-white text-lg" />
                </div>
                <span className="text-gray-700 group-hover:text-gray-900 font-bold text-[25px] transition-colors duration-300">
                  Trustable
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 text-[15px] sm:text-[20px] text-[#3B3B3B] sm:text-md mt-2 max-w-[500px] mx-auto lg:mx-0">
            Get <span className="font-bold text-[#FF0000]">naibeau</span> for your next booking. We are
            here to help you get your next salon service smooth and convenient.
          </p>
          
          <div className="mt-10 mb-3 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
            <NavLink
              to="/download"
              className="bg-[#ef3636] text-white border-[1px] hover:scale-110 py-2 px-4 sm:px-6 rounded-full font-semibold text-base sm:text-xl hover:bg-[#e60000] w-full sm:w-auto text-center duration-300 transition-transform"
            >
              Download the app
            </NavLink>
            <NavLink
              to="/partner"
              className=" border-[#FF0000] border-[2px] hover:scale-110 text-[#FF0000] py-2 px-4 sm:px-6 rounded-full font-semibold text-base sm:text-xl hover:opacity-80 w-full sm:w-auto text-center transition-transform duration-300"
            >
              Be our partner
            </NavLink>
          </div>
        </div>
        
        <img 
          src={HeroImage} 
          alt="Hero" 
          className="flex-wrap overflow-hidden w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px] lg:max-h-[600px] xs:max-h-[300px] sm:-mb-4 mt-4 -mb-4 mx-4 sm:mx-8 lg:mr-0 order-3 lg:order-2 object-cover rounded-[32px] sm:rounded-[56px]" 
          fetchPriority="high"
        />
      </div>

      {/* What We Offer Section */}
      <div
        className="border-red-200 border-2 mt-3 max-w-[1500px] w-full h-auto mx-auto rounded-[32px] sm:rounded-[56px] justify-between items-center p-4 sm:p-6 lg:p-0"
        style={{
          backgroundImage: `url(/static/Vector3.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h2 className="mt-3 font-semibold text-[28px] sm:text-[35px] lg:text-[42px] mb-3">What we offer!</h2>
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 max-w-[800px] mx-auto">
            Discover a wide range of personalized beauty and grooming services tailored just for you.
          </p>
        </div>

        {/* Gender Toggle */}
        <div className="flex items-center justify-center mt-5">
          <div className="bg-white rounded-full p-1 w-full border-2 border-gray-300 max-w-[450px] h-[55px] sm:h-[65px] shadow-md flex justify-between items-center mx-4 relative">
            {/* Sliding Background Indicator */}
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%)] bg-[#FF0000] rounded-full 
                          transition-all duration-500 ease-in-out shadow-md z-0
                          ${activeTab === "Women" ? "left-1" : "left-[calc(49%)]"}`}
            />
            
            {/* Women Button */}
            <button 
              className={`flex items-center justify-center gap-1 sm:gap-2 flex-1 h-[40px] sm:h-[50px] py-2 px-3 sm:px-5 rounded-full font-semibold z-10 relative transition-all duration-500 ease-in-out
                          ${activeTab === "Women" 
                            ? "text-white" 
                            : "text-gray-700 hover:text-gray-900"
                          }`}
              onClick={() => setActiveTab("Women")}
            >
              <PiGenderFemaleDuotone
                className={`text-[14px] sm:text-[16px] lg:text-[25px] transition-transform duration-500 ${
                  activeTab === "Women" ? "rotate-[360deg]" : "rotate-0"
                }`}
              />
              <p className="text-[14px] sm:text-[16px] lg:text-[25px] transition-all duration-500 ease-in-out font-medium">
                Women
              </p>
            </button>

            {/* Men Button */}
            <button
              className={`flex items-center justify-center gap-1 sm:gap-2 flex-1 h-[40px] sm:h-[50px] 
                          py-2 px-3 sm:px-5 rounded-full font-semibold z-10 relative
                          transition-all duration-500 ease-in-out
                          ${activeTab === "Men" 
                            ? "text-white" 
                            : "text-gray-700 hover:text-gray-900"
                          }`}
              onClick={() => setActiveTab("Men")}
            >
              <PiGenderMaleDuotone
                className={`text-[14px] sm:text-[16px] lg:text-[25px] transition-transform duration-500 ${
                  activeTab === "Men" ? "rotate-[360deg]" : "rotate-0"
                }`}
              />
              <p className="text-[14px] sm:text-[16px] lg:text-[25px] transition-all duration-500 ease-in-out font-medium">
                Men
              </p>
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-10">
          {services[activeTab].map((service, index) => (
            <div
              key={index}
              className="cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110 mx-auto"
              onClick={handleServiceClick}
            >
              <div
                className="rounded-[24px] shadow-lg bg-[#FFFFFF] p-4 sm:p-6 lg:p-7 text-center flex flex-col justify-between
                -z-0 border-1 border-red-400 transition-all duration-500 ease-in-out 
                w-[280px] h-[320px] sm:w-[320px] sm:h-[380px] lg:w-[310px] lg:h-[390px]"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="mx-auto mb-3 w-auto h-auto max-h-[200px] sm:max-h-[250px] lg:max-h-[320px]
                  hover:filter transition duration-300 ease-in-out object-contain"
                />
                <p className="text-[18px] sm:text-[22px] lg:text-[26px] font-semibold mt-auto text-gray-800">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Refer & Earn Section */}
      <div
        className="flex flex-col lg:flex-row justify-between items-center p-4 sm:p-6 lg:p-8 rounded-[32px] sm:rounded-[56px] text-white mt-3 mb-3 max-w-[1600px]"
        style={{
          backgroundImage: `url(/static/Vector4.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-1">
          <p className="text-[32px] xs:text-[40px] sm:text-[55px] lg:text-[72px] font-semibold leading-tight">
            Refer <span className="text-[40px] xs:text-[50px] sm:text-[65px] lg:text-[85px]">&</span> Earn up to
          </p>
          
          {/* Image shown after "Refer & Earn up to" line - Mobile only */}
          <img 
            src={ReferImage} 
            alt="Refer and Earn" 
            className="w-full max-w-[250px] xs:max-w-[300px] sm:max-w-[405px] h-auto mx-auto my-4 lg:hidden" 
          />
          
          <p className="text-[16px] sm:text-[20px] lg:text-[28px] mt-2 max-w-[500px] mx-auto lg:mx-0">
            Share your unique referral code on the app to get ₹150 instant cashback
          </p>
          <div className="mt-6 flex items-center justify-center lg:justify-start">
            <NavLink
              to="/download"
              className="h-[50px] w-auto flex items-center gap-3 bg-white text-[#FF0000] py-4 px-4 sm:px-8 rounded-2xl font-semibold border-white border-2 text-xl sm:text-3xl hover:bg-red-600 hover:text-white"
            >
              <p>Refer a friend</p><IoPersonAddSharp />
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
        className="bg-[#FFD5D5] border-[#E43844] border-2 mt-6 p-4 sm:mt-8 mb-6 sm:mb-8 rounded-[32px] sm:rounded-[50px] w-full max-w-[1500px] mx-auto h-auto sm:p-4 lg:px-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
        style={{
          backgroundImage: `url(/static/Vector9.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h2 className="col-span-1 sm:col-span-2 text-center mb-3 p-3 sm:p-5 text-[24px] sm:text-[30px] lg:text-[40px] font-semibold">
          What Sets Us Apart
        </h2>
        
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl transform transition-all duration-300 hover:scale-110 hover:z-10 p-4 sm:p-6 lg:p-6 bg-pink-50 border-2 border-red-900 text-red-900 shadow-lg hover:shadow-2xl cursor-pointer"
            aria-label={`Feature: ${feature.title}`}
            role="article"
            tabIndex={0}
          >
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 border-2 border-red-900 rounded-full flex items-center justify-center bg-white">
                  <img
                    src={feature.icon}
                    alt="icons"
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-10 lg:h-10"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base sm:text-lg lg:text-2xl xl:text-2xl mb-2 sm:mb-3 lg:mb-4 leading-tight text-red-900">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg xl:text-lg text-red-800 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Frequently Asked Questions Section */}
      <Faq />

      {/* App Download Section */}
      <div className="w-full max-w-[1500px] mx-auto mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-10 bg-[#F4E3E3] border-[#EA9494] border-2 sm:border-2 md:border-2 rounded-[24px] sm:rounded-[32px] md:rounded-[48px] lg:rounded-[56px] shadow-md flex flex-col lg:flex-row overflow-hidden">
        {/* Left Section: Logo, Text, and Buttons */}
        <div className="mt-6 mb-4 lg:mb-1 mx-4 sm:mx-6 md:mx-8 flex flex-col justify-center text-center lg:text-left flex-1">
          {/* Logo */}
          <img 
            src={Logo} 
            alt="Naibeau Logo" 
            className="max-w-[150px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[200px] max-h-[40px] sm:max-h-[45px] md:max-h-[55px] lg:max-h-[50px] h-auto w-auto mt-6 md:mt-8 lg:mt-10 mb-3 mx-auto lg:mx-8" 
          />
          
          {/* Text */}
          <h2 className="font-semibold text-[24px] xs:text-[28px] sm:text-[32px] md:text-[42px] lg:text-[50px] mx-auto lg:mx-8 mt-3 leading-tight">
            Download the App now!
          </h2>
          
          <p className="mt-3 mx-auto lg:mx-8 font-semibold text-[18px] sm:text-[20px] md:text-[20px] lg:text-[25px] text-[#000000] leading-normal mb-12 xs:mb-4">
            Redefine convenience. <br/>Book your next beauty appointment on the Naibeau app.
          </p>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mx-auto lg:mx-6 mt-4 md:mt-6 lg:mt-1 items-center">
            <a 
              href="https://apps.apple.com/in/app/naibeau/id6743757201" 
              className="cursor-pointer transform hover:scale-105 transition-transform duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={AppD} 
                alt="Download on App Store" 
                className="w-[180px] sm:w-[200px] md:w-[230px] lg:w-[250px] h-auto" 
              />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.naibeau_user" 
              className="cursor-pointer transform hover:scale-105 transition-transform duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={PlayD} 
                alt="Get it on Google Play" 
                className="w-[180px] sm:w-[200px] md:w-[230px] lg:w-[250px] h-auto" 
              />
            </a>
          </div>
        </div>

        {/* Right Section: Scan QR Code */}
        <div className="flex-shrink-0 flex justify-center items-center lg:p-0">
          <img 
            src={UScan} 
            alt="Scan QR Code to Download App" 
            className="hidden md:block w-[350px] lg:w-[400px] xl:w-[500px] h-auto max-h-[500px] md:max-h-[550px] lg:max-h-[600px] ml-0 md:ml-4 lg:ml-8 xl:ml-20 -mb-8 md:-mb-10 lg:-mb-12 flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
}