import React, { useState } from 'react';
import Vector1 from '/static/Vector1.svg';
import Partners from '/static/Partners.svg';
import Bene2 from '/static/Bene2.svg';
import AppD from '/static/AStoreB.svg';
import PlayD from '/static/GplayB.svg';
import Logo from '/static/Logo.svg';
import PScan from '/static/PScan.svg';

export default function Partner() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });
  
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateFirstName = (name) => {
    if (!name.trim()) return 'First name is required';
    if (name.trim().length < 2) return 'First name must be at least 2 characters';
    if (!/^[a-zA-Z\s]+$/.test(name)) return 'First name should only contain letters';
    return '';
  };

  const validateLastName = (name) => {
    if (!name.trim()) return 'Last name is required';
    if (!/^[a-zA-Z\s]+$/.test(name)) return 'Last name should only contain letters';
    return '';
  };

  const validatePhoneNumber = (phone) => {
    if (!phone) return 'Phone number is required';
    if (phone.length !== 10) return 'Phone number must be exactly 10 digits';
    if (!/^[6-9][0-9]{9}$/.test(phone)) return 'Please enter a valid Indian mobile number';
    return '';
  };

  const handleInputChange = (field, value) => {
    let processedValue = value;
    
    if (field === 'phoneNumber') {
      processedValue = value.replace(/[^0-9]/g, '');
      if (processedValue.length > 10) return;
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: processedValue
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }

    // Hide success message when user modifies form
    if (showSuccess) {
      setShowSuccess(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const firstNameError = validateFirstName(formData.firstName);
    const lastNameError = validateLastName(formData.lastName);
    const phoneError = validatePhoneNumber(formData.phoneNumber);
    
    setErrors({
      firstName: firstNameError,
      lastName: lastNameError,
      phoneNumber: phoneError
    });

    if (!firstNameError && !lastNameError && !phoneError) {
      try {
        // Simulate API call - replace with your actual API endpoint
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setShowSuccess(true);
        console.log('Form submitted:', formData);
        
        // Optional: Reset form after successful submission
        // setFormData({ firstName: '', lastName: '', phoneNumber: '' });
        
      } catch (error) {
        console.error('Submission error:', error);
        // Handle submission error here
      }
    }
    
    setIsSubmitting(false);
  };

  const isFormValid = () => {
    return formData.firstName.trim() && 
           formData.lastName.trim() && 
           formData.phoneNumber.length === 10 &&
           !errors.firstName && 
           !errors.lastName && 
           !errors.phoneNumber;
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

      {/*Form Section */}
      <div className="relative -mt-20 sm:-mt-16 md:-mt-24 lg:-mt-[90px] mb-8 sm:mb-10 md:mb-12 lg:mb-0">
        <div className="mx-auto h-auto w-full max-w-[1250px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg bg-[#FFEFEF] border-[#CC1C26] border-2 rounded-[24px] sm:rounded-[32px] md:rounded-[48px] lg:rounded-[56px] text-center">
          <h3 className="font-montserrat text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium text-gray-800 mb-6 sm:mb-8">
            Share your details, and we will contact you!
          </h3>
          
          <div className="max-w-4xl mx-auto">
            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-800 font-montserrat font-semibold text-lg">Thank you! We will contact you soon on WhatsApp.</span>
                </div>
              </div>
            )}

            {/* Form Container */}
            <div className="space-y-6">
              {/* Name Fields Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* First Name Field */}
                <div className="relative">
                  <label className="block text-left text-md font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Enter your first name"
                    autoComplete="given-name"
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-[16px] sm:text-[18px] text-gray-800 bg-white border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.firstName 
                        ? 'border-red-400 focus:ring-red-500 focus:border-red-500' 
                        : formData.firstName && !errors.firstName
                        ? 'border-green-400 focus:ring-green-500 focus:border-green-500'
                        : 'border-gray-300 focus:ring-[#FF0000] focus:border-[#FF0000]'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600 text-left flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name Field */}
                <div className="relative">
                  <label className="block text-left text-md font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Enter your last name"
                    autoComplete="family-name"
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-[16px] sm:text-[18px] text-gray-800 bg-white border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.lastName 
                        ? 'border-red-400 focus:ring-red-500 focus:border-red-500' 
                        : formData.lastName && !errors.lastName
                        ? 'border-green-400 focus:ring-green-500 focus:border-green-500'
                        : 'border-gray-300 focus:ring-[#FF0000] focus:border-[#FF0000]'
                    }`}
                    disabled={isSubmitting}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600 text-left flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone Number Field */}
              <div className="relative">
                <label className="block text-left text-lg font-medium text-gray-700 mb-2">
                  Enter Your WhatsApp Number
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-3 sm:py-4 border border-gray-50 rounded-lg flex-shrink-0">
                    <img 
                      src="https://flagcdn.com/in.svg" 
                      alt="India" 
                      className="w-6 h-6" 
                    />
                    <span className="font-medium text-gray-700">+91</span>
                  </div>
                  <div className="flex-1">
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      placeholder="Enter 10-digit mobile number"
                      autoComplete="tel"
                      maxLength="10"
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-[16px] sm:text-[18px] text-gray-800 bg-white border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                        errors.phoneNumber 
                          ? 'border-red-400 focus:ring-red-500 focus:border-red-500' 
                          : formData.phoneNumber.length === 10 && !errors.phoneNumber
                          ? 'border-green-400 focus:ring-green-500 focus:border-green-500'
                          : 'border-gray-300 focus:ring-[#FF0000] focus:border-[#FF0000]'
                      }`}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-600 text-left flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.phoneNumber}
                  </p>
                )}
                <p className="mt-1 text-sm text-gray-500 text-left">
                  We'll contact you on WhatsApp for partnership details
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className={`w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-[16px] sm:text-[18px] font-medium text-white rounded-lg shadow-md transition-all duration-200 flex items-center justify-center ${
                    isFormValid() && !isSubmitting
                      ? 'bg-[#FF0000] hover:bg-[#e60000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF0000] cursor-pointer hover:shadow-lg transform hover:-translate-y-0.5'
                      : 'bg-gray-400 cursor-not-allowed opacity-50'
                  }`}
                  disabled={!isFormValid() || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Join Our Partner Network
                      <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
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
            <a 
              href="https://apps.apple.com/in/app/naibeau-partner/id6743756318" 
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
              href="https://play.google.com/store/apps/details?id=com.naibeau" 
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
            src={PScan} 
            alt="Scan QR Code to Download App" 
            className="hidden md:block w-[350px] lg:w-[400px] xl:w-[500px] h-auto max-h-[500px] md:max-h-[550px] lg:max-h-[600px] ml-0 md:ml-4 lg:ml-8 xl:ml-20 -mb-8 md:-mb-10 lg:-mb-12 flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
}