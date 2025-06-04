import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HeroImage from "/static/Hero.svg";
import SpaIcon from "/static/spa.svg";
import SalonIcon from "/static/salon.svg";
import MakeupIcon from "/static/makeup.svg";
import MaleSpaIcon from "/static/malespa.svg";
import MaleSalonIcon from "/static/malesalon.svg";
import ArrowRed from "/static/ArrowRed.svg";
import ReferImage from "/static/refer.svg";
import image1 from "/static/image1.png";
import image2 from "/static/image2.png";
import image3 from "/static/image3.png";
import image4 from "/static/image4.png";
import image5 from "/static/image5.png";
import maleicon from "/static/maleicon.svg";
import femaleicon from "/static/femaleicon.svg";
import maleiconw from "/static/maleiconw.svg";
import femaleiconw from "/static/femaleiconw.svg";

{/*
  Vector 1: 
  Vector 2: Our Gallery Bg
  Vector 3: What We Offer Bg
  Vector 4: Referral Bg
  Vector 5: Hero Section Bg
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
      <div className="max-w-[1500px] max-h-[550px] w-auto h-auto ml-2 mr-2 mt-2 mb-0 rounded-[56px] flex justify-between items-center "
        style={{
          backgroundImage: `url(/static/Vector5.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-5 ml-20 mr-5 ">
          <p className="text-[#FF0000] font-bold text-xl">Welcome</p>
          <h1 className="text-[55px] font-bold leading-tight mt-2">
            Get Your Vibe With <br />
            The Right <span className="text-[#FF0000]">Beauty</span> Partner!
          </h1>
          <p className="text-[#FF0000] font-semibold text-lg mt-4">Secure, Safe, Trustable.</p>
          <p className="text-gray-600 text-md mt-2">
            Get <span className="font-bold text-[#FF0000]">NAIBEAU</span> for your next booking. We are here
            to help you get your next salon service smooth and convenient.
          </p>
          <div className="mt-6 flex space-x-4">
            <NavLink to="/download" className="bg-[#FF0000] text-white py-2 px-6 rounded-full font-semibold text-lg hover:bg-[#e60000]"> Download The App </NavLink>
            <NavLink to="/partner" className="border border-[#FF0000] text-[#FF0000] py-2 px-6 rounded-full font-semibold text-lg hover:bg-[#FFEFEF]"> Be Our Partner </NavLink>
          </div>
        </div>
        <img src={HeroImage} alt="Hero" className="w-[650px] h-[700px] mr-5" />
      </div>





      {/* What We Offer Section */}
      <div className=" p-10 rounded-[56px] shadow-md mt-3"
      style={{
          backgroundImage: `url(/static/Vector3.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}  
      >
        <div className="text-center">
          <h2 className="font-montserrat font-semibold text-[40px] mb-2">What we offer !</h2>
          <p className="text-[25px] font-sans text-gray-600"> Discover a wide range of personalized beauty and grooming services tailored just for you.</p>
        </div>
        <div className="flex items-center justify-center mt-5">

          {/*Slider*/}
          <div className="bg-white rounded-full p-2 w-[460px] h-[90px] shadow-md flex justify-between items-center">
          <button
            className={`flex items-center justify-center gap-2 w-[223px] h-[85px] py-2 px-6 rounded-full font-semibold ${
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
            className={`flex items-center justify-center gap-2 w-[223px] h-[85px] py-2 px-6 rounded-full font-semibold ${
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

        {/*Services offered cards*/}
        <div
          className={`mt-8 ${
            activeTab === "Men" ? "flex justify-center gap-6" : "grid grid-cols-1 sm:grid-cols-3 gap-6"
          }`}
        >
          {services[activeTab].map((service, index) => (
            <div
              key={index}
              className="p-[3px] bg-[#E7E7E7] rounded-[21px]"
              style={{ width: "406px", height: "456px" }} // Adding padding to maintain card dimensions
            >
              <div
                className="rounded-[21PX] shadow-md bg-[#FFFFFF] p-6 font-montserrat font-[5px] text-center flex flex-col justify-between"
                style={{ width: "400px", height: "450px" }}
              >

                <img src={service.icon} alt={service.title} className="mx-auto mb-4" />
                <p className="font-montserrat text-[30px] font-medium mt-auto">{service.title}</p>
              </div>
            </div>
          ))}
        </div>        
      </div>

      {/* Refer & Earn Section */}
      <div
        className="flex justify-between items-center m-7 p-8 rounded-[56px] text-white mt-10"
        style={{
          backgroundImage: `url(/static/Vector4.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center">
          <p className="text-[72px] font-semibold font-montserrat">
            Refer{' '}
            <span className="font-norican text-[85px]">&</span>{' '}Earn up to</p>
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
        <img src={ReferImage} alt="Refer and Earn" className="-mt-10 -ml-90 w-[500px] h-[300px]" />
      </div>


      
          {/* Our Gallery Section */}
        <div className="w-[1429px] h-[900px] mt-10 mx-auto p-6 rounded-[56px] shadow-md"
        style={{
          backgroundImage: `url(/static/Vector2.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
          <h2 className="text-center font-bold text-[36px] md:text-[40px] text-black font-montserrat mb-6">Our Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Column */}
            <div className="row-span-2">
              <img src={image1} alt="Gallery Image 1" className="w-full h-auto rounded-lg" />
            </div>

            {/* Second Column */}
            <div className="grid gap-6">
              <div>
                <img src={image2} alt="Gallery Image 2" className="w-full h-auto rounded-lg" />
              </div>
              <div>
                <img src={image3} alt="Gallery Image 3" className="w-full h-auto rounded-lg" />
              </div>
            </div>

            {/* Third Column */}
            <div className="grid gap-6">
              <div>
                <img src={image4} alt="Gallery Image 4" className="w-full h-auto rounded-lg" />
              </div>
              <div>
                <img src={image5} alt="Gallery Image 5" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>




          
        </div>
    </div>
  );
}
