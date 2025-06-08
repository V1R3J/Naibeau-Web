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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (phoneNumber.length !== 10) {
      setMessage('Please enter a valid 10-digit phone number');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/save-phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: `+91${phoneNumber}`,
          timestamp: new Date().toLocaleString()
        }),
      });

      if (response.ok) {
        setMessage('Thank you! Your number has been saved. We will contact you soon!');
        setPhoneNumber('');
      } else {
        throw new Error('Failed to save phone number');
      }
      
      // Clear message after 5 seconds
      setTimeout(() => setMessage(''), 5000);
      
    } catch (error) {
      console.error('Error saving phone number:', error);
      setMessage('Error saving your number. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Upper Section */}
      <div
        className="mt-4 w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[700px] rounded-[24px] sm:rounded-[40px] lg:rounded-[56px] bg-[#FFEFEF] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col lg:flex-row shadow-md relative overflow-hidden"
        style={{
          backgroundImage: `url(/static/Vector6.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Text Content */}
        <div className="flex flex-col justify-start flex-1 lg:max-w-[60%]">
          <h1 className="mt-2 sm:mt-5 font-montserrat text-[28px] sm:text-[40px] lg:text-[60px] font-semibold leading-tight">
            Grow with Us <br /> Become our
          </h1>
          <h2 className="underline-offset-4 sm:underline-offset-8 underline font-montserrat text-[28px] sm:text-[40px] lg:text-[60px] text-[#FF0000] font-semibold">
            Partner!
          </h2>
          <p className="w-full text-[14px] sm:text-[16px] lg:text-[20px] mt-3 sm:mt-5 mb-3 text-[#808285] leading-relaxed">
            Join Naibeau's network of trusted beauty professionals. <br />
            Grow your business and reach more clients right at their doorstep.
          </p>
          <div className="mt-4 sm:mt-6 lg:mt-10 mb-4 sm:mb-6 lg:mb-10">
            <img src={Bene2} alt="Benefits" className="max-w-full h-auto" />
          </div>
        </div>

        {/* Partners Image */}
        <div className="flex justify-center lg:justify-end items-center flex-shrink-0 mt-4 -mb-8 lg:mt-20">
          <img 
            src={Partners} 
            alt="Partners" 
            className="w-full max-w-[250px] sm:max-w-[350px] lg:max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Phone Number Section */}
      <div className="relative mt-8 sm:mt-12 lg:-mt-[90px] mb-8 sm:mb-12 lg:mb-0">
        <div className="mx-auto w-full max-w-[1299px] p-4 sm:p-6 lg:p-10 shadow-lg bg-[#FFEFEF] border-[#CC1C26] border-2 rounded-[24px] sm:rounded-[40px] lg:rounded-[56px] text-center">
          <h3 className="font-montserrat text-[18px] sm:text-[24px] lg:text-[32px] font-medium text-gray-800 mb-4 sm:mb-6">
            Share your WhatsApp number, and we will contact you!
          </h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <img src="https://flagcdn.com/in.svg" alt="India" className="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="font-montserrat text-[16px] sm:text-[18px] lg:text-[24px] font-medium text-gray-700">
                +91
              </span>
            </div>
            
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="83453 56783"
              className="w-full max-w-[250px] sm:max-w-[300px] px-3 sm:px-4 py-2 sm:py-3 text-[14px] sm:text-[16px] lg:text-[18px] text-gray-800 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-transparent"
              required
            />
            
            <button
              type="submit"
              disabled={isSubmitting || phoneNumber.length !== 10}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-white bg-[#FF0000] rounded-full shadow-md hover:bg-[#e60000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF0000] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSubmitting ? 'Saving...' : 'Join Us'}
            </button>
          </form>
          
          {message && (
            <div className={`mt-4 p-3 rounded-lg text-sm sm:text-base ${
              message.includes('Error') 
                ? 'bg-red-100 text-red-700 border border-red-300' 
                : 'bg-green-100 text-green-700 border border-green-300'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-8 sm:mt-12 text-center mx-auto max-w-[900px] px-4">
        <p className="font-montserrat text-[16px] sm:text-[20px] lg:text-[24px] leading-relaxed">
          <span className="font-semibold text-black">
            For a life-changing experience, join Naibeau Company.
          </span>
          <br />
          <span className="text-[#808285] text-[16px] sm:text-[20px] lg:text-[24px]">
            An app-based marketplace called Naibeau Company gives professionals like you more leverage.
          </span>
        </p>
      </div>

      {/* App Download Section */}
      <div className="w-full max-w-[1500px] mx-auto mt-6 sm:mt-8 mb-6 sm:mb-8 bg-[#F4E3E3] border-[#EA9494] border-2 sm:border-4 rounded-[24px] sm:rounded-[40px] lg:rounded-[56px] shadow-md flex flex-col lg:flex-row overflow-hidden">
        {/* Left Section: Logo, Text, and Buttons */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
          {/* Logo */}
          <img 
            src={Logo} 
            alt="Naibeau Logo" 
            className="max-w-[150px] sm:max-w-[200px] max-h-[40px] sm:max-h-[50px] h-auto w-auto mb-4 sm:mb-6" 
          />
          
          {/* Text */}
          <h2 className="text-left font-semibold text-[24px] sm:text-[36px] lg:text-[50px] font-montserrat mb-3 sm:mb-4 leading-tight">
            Download the Partner App now!
          </h2>
          
          <p className="text-left font-semibold text-[16px] sm:text-[20px] lg:text-[28px] text-[#000000] mb-4 sm:mb-6 leading-relaxed">
            Redefine convenience. <br/>Schedule your next beauty appointment on the Naibeau app.
          </p>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6">
            <a href="#" className="cursor-pointer">
              <img 
                src={AppD} 
                alt="App Store" 
                className="w-[180px] sm:w-[200px] lg:w-[250px] h-auto" 
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.naibeau" className="cursor-pointer">
              <img 
                src={PlayD} 
                alt="Google Play" 
                className="w-[180px] sm:w-[200px] lg:w-[250px] h-auto" 
              />
            </a>
          </div>
        </div>

        {/* Right Section: Scan QR Code */}
        <div className="flex-shrink-0 flex justify-center items-center p-4 lg:p-0">
          <img 
            src={PScan} 
            alt="Scan QR Code" 
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}