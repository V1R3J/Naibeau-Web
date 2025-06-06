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


{/*
  Vector 1: 
  Vector 2: Our Gallery Bg
  Vector 3: What We Offer Bg
  Vector 4: Referral Bg
  Vector 5: Hero Section Bg
  Vector 9: What Sets us apart Bg
  */}

export default function Home() {
  const [activeTab, setActiveTab] = useState("Women");

  const services = {
    Women: [
      { icon: SpaIcon, title: "Spa Services" },
      { icon: SalonIcon, title: "Salon Services" },
      { icon: MakeupIcon, title: "Makeup Services" },
    ],
    Men: [
      { icon: MaleSpaIcon, title: "Men's Spa Services" },
      { icon: MaleSalonIcon, title: "Men's Salon Services" },
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="max-w-[1500px] w-auto h-auto ml-2 mr-2 mt-2 rounded-[56px] flex justify-between items-center"
        style={{
          backgroundImage: `url(/static/Vector5.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-5 ml-20">
          <p className="text-[#FF0000] font-bold text-xl">Welcome</p>
          <h1 className="text-[55px] font-bold leading-tight mt-2">
            Get Your Vibe With <br />
            The Right <span className="text-[#FF0000]">Beauty</span> Partner!
          </h1>
          <p className="text-[#FF0000] font-semibold text-lg mt-4">Secure, Safe, Trustable.</p>
          <p className="text-gray-600 text-md mt-2">
            Get <span className="font-bold text-[#FF0000]">NAIBEAU</span> for your next booking. We are
            here to help you get your next salon service smooth and convenient.
          </p>
          <div className="mt-6 flex space-x-4">
            <NavLink
              to="/download"
              className="bg-[#FF0000] text-white py-2 px-6 rounded-full font-semibold text-lg hover:bg-[#e60000]"
            >
              Download The App
            </NavLink>
            <NavLink
              to="/partner"
              className="border border-[#FF0000] text-[#FF0000] py-2 px-6 rounded-full font-semibold text-lg hover:bg-[#FFEFEF]"
            >
              Be Our Partner
            </NavLink>
          </div>
        </div>
        <img src={HeroImage} alt="Hero" className="w-[650px] h-[700px] mr-5" />
      </div>

      {/* What We Offer Section */}
      <div
        className="p-10 rounded-[56px] shadow-md mt-3"
        style={{
          backgroundImage: `url(/static/Vector3.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h2 className="font-montserrat font-semibold text-[40px] mb-2">What We Offer!</h2>
          <p className="text-[25px] font-sans text-gray-600">
            Discover a wide range of personalized beauty and grooming services tailored just for you.
          </p>
        </div>

        <div className="flex items-center justify-center mt-5">
          <div className="bg-white rounded-full p-2 w-[460px] h-[70px] shadow-md flex justify-between items-center">
            <button
              className={`flex items-center justify-center gap-2 w-[223px] h-[65px] py-2 px-6 rounded-full font-semibold ${
                activeTab === "Women" ? "bg-[#FF0000] text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("Women")}
            >
              <img
                src={activeTab === "Women" ? femaleiconw : femaleicon}
                className="w-10 h-10"
                alt="Female Icon"
              />
              <p className="font-montserrat text-[30px]">Women</p>
            </button>
            <button
              className={`flex items-center justify-center gap-2 w-[223px] h-[65px] py-2 px-6 rounded-full font-semibold ${
                activeTab === "Men" ? "bg-[#FF0000] text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("Men")}
            >
              <img
                src={activeTab === "Men" ? maleiconw : maleicon}
                className="w-10 h-10"
                alt="Male Icon"
              />
              <p className="font-montserrat text-[30px]">Men</p>
            </button>
          </div>
        </div>

        <div
          className={`mt-8 ${
            activeTab === "Men" ? "flex justify-center gap-6" : "grid grid-cols-1 sm:grid-cols-3 gap-6"
          }`}
        >
          {services[activeTab].map((service, index) => (
            <div
              key={index}
              className="p-[3px] bg-[#E7E7E7] rounded-[21px] cursor-pointer hover:"
              style={{ width: "406px", height: "456px" }}
              onClick={() => window.location.href = "/download"}
            >
              <div
                className="rounded-[21px] shadow-md bg-[#FFFFFF] p-6 font-montserrat text-center flex flex-col justify-between
                hover:bg-[#FFD3D3] hover:bg-opacity-60
                hover:text-white
                transition-colors duration-300 ease-in-out"
                style={{ width: "400px", height: "450px" }}
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="mx-auto mb-4
                  hover:filter hover:brightness-75
                  transition duration-300 ease-in-out"
                />
                <p className="font-montserrat text-[30px] font-medium mt-auto">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Refer & Earn Section */}
      <div
        className="flex justify-between items-center ml-4 mr-5 p-8 rounded-[56px] text-white mt-10"
        style={{
          backgroundImage: `url(/static/Vector4.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center">
          <p className="text-[72px] font-semibold font-montserrat">
            Refer <span className="font-norican text-[85px]">&</span> Earn up to
          </p>
          <p className="font-montserrat text-[28px] mt-2">
            Share your unique referral code on the app to get ₹150 instant cashback
          </p>
          <div className="mt-6 flex items-center">
            <NavLink
              to="/download"
              className="flex items-center bg-white text-[#FF0000] py-2 px-6 rounded-full font-semibold border-white border-2 text-lg hover:bg-red-500 hover:text-white"
            >
              Refer A Friend
              <img src={ArrowRed} alt="Arrow Icon" className="ml-2" />
            </NavLink>
          </div>
        </div>
        <img src={ReferImage} alt="Refer and Earn" className="-mt-10 w-[500px] h-[300px]" />
      </div>

      {/*Our Gallery section */}
      <Gallery />




      {/* What Sets Us Apart Section */}
      <div
        className="bg-[#FFD5D5] border-[#E43844] border-3 mx-3 mb-3 rounded-[50px] w-full max-w-[1500px] h-auto p-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
        style={{
          backgroundImage: `url(/static/Vector9.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h2 className="col-span-1 sm:col-span-2 text-center p-5 font-montserrat text-[30px] sm:text-[40px] font-semibold">
          What Sets Us Apart
        </h2>
        {/** Images with hover effect */}
        {[g1, g2, g3, g4, g5, g6].map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:z-10">
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



      {/*------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* App Download Section */}
      <div className="max-w-[1500px] w-auto max-h-[600px] h-auto mt-5 ml-3 mr-3 mb-5 bg-[#F4E3E3] border-[#EA9494] border-4 rounded-[56px] shadow-md flex ">
          {/* Left Section: Logo, Text, and Buttons */}
          <div className="mt-6 mb-1 mr-6 ml-6 flex flex-col justify-center ">
            {/* Logo */}
            <img src={Logo} alt="Naibeau Logo" className="max-w-[200px] max-h-[50px] h-auto w-auto mt-10 mb-3 ml-8 mr-3" />
            {/* Text */}
            <h2 className="text-left font-semibold text-[36px] md:text-[50px] font-montserrat ml-8 mr-3 mt-3">
              Download the 
              <span className=" text-[#000000]"> app now !</span>
            </h2>
            <p className="mt-3 ml-8 mr-3 text-left font-semibold text-[28px] text-[#000000] ">
              Redefine convenience. <br/>Book your next beauty appointment on the Naibeau app.
            </p>

            {/* App Download Buttons */}
            <div className="flex flex-row gap-6  ml-6 mt-1">
              <a href="#" className="cursor-pointer">
                <img src={AppD} alt="App Store" className="w-[200px] md:w-[250px] h-auto mx-auto sm:mx-0" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.naibeau_user" className="cursor-pointer">
                <img src={PlayD} alt="Google Play" className="w-[200px] md:w-[250px] h-auto mx-auto sm:mx-0" />
              </a>
            </div>
          </div>

          {/* Right Section: Scan QR Code */}
          <img src={UScan} alt="Scan QR Code" className=" w-[500px] h-[600px] ml-20 -mt-1 align-baseline" />
          
        </div>


      </div>
  );
}
