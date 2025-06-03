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
import image1 from "/static/image1.png";
import image2 from "/static/image2.png";
import image3 from "/static/image3.png";
import image4 from "/static/image4.png";
import image5 from "/static/image5.png";


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
        className="w-full h-auto mt-2 mb-2 rounded-3xl flex justify-between items-center bg-[#F8E3E3] p-8"
        style={{
          backgroundImage: `url(/static/Bg1.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[600px]">
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
        <img src={HeroImage} alt="Hero" className="w-[650px] h-[700px]" />
      </div>

      {/* What We Offer Section */}
      <div className="bg-[#F8E3E3] p-10 rounded-[56px] shadow-md mt-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">What we offer!</h2>
          <p className="text-gray-600">
            Discover a wide range of personalized beauty and grooming services tailored just for you.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <div className="bg-white rounded-full p-2 shadow-md flex">
            <button
              className={`py-2 px-6 rounded-full font-semibold ${
                activeTab === "Women" ? "bg-[#FF0000] text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("Women")}
            >
              Women
            </button>
            <button
              className={`py-2 px-6 rounded-full font-semibold ${
                activeTab === "Men" ? "bg-[#FF0000] text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("Men")}
            >
              Men
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {services[activeTab].map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-center">
              <img src={service.icon} alt={service.title} className="mx-auto mb-4" />
              <p className="font-semibold text-lg">{service.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Refer & Earn Section */}
      <div
        className="flex justify-between items-center p-8 rounded-[56px] text-white mt-10"
        style={{
          backgroundImage: `url(/static/star.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#FF5C5C",
        }}
      >
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold">Refer & Earn up to</h3>
          <p className="text-lg mt-7">
            Share your unique referral code on the app to get ₹150 instant cashback
          </p>
          <div className="mt-6 flex items-center">
            <NavLink
              to="/download"
              className="flex items-center bg-white text-[#FF0000] py-2 px-6 rounded-full font-semibold text-lg hover:bg-gray-100"
            >
              Download The App
              <img src={ArrowRed} alt="Arrow Icon" className="ml-2" />
            </NavLink>
          </div>
        </div>
        <img src={ReferImage} alt="Refer and Earn" className="-ml-90 w-[400px] h-[300px]" />
      </div>
          {/* Our Gallery Section */}
        <div className="w-[90%] max-w-[1700px] mt-10 mx-auto bg-[#FF5C5C] p-6 rounded-[32px] shadow-md">
          <h2 className="text-center font-bold text-[36px] md:text-[40px] text-black mb-6">Our Gallery</h2>
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
