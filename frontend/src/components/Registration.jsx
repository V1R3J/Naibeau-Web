import React, { useState } from 'react';

export default function Registration() {
  // Since react-hook-form isn't available, we'll simulate its functionality
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: ''
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  // Validation rules (similar to react-hook-form)
  const validationRules = {
    name: {
      required: 'Please enter your name',
      minLength: {
        value: 2,
        message: 'Name should be at least 2 characters'
      },
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: 'Name can only contain letters and spaces'
      }
    },
    phoneNumber: {
      required: 'Please enter your phone number',
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: 'Please enter a valid 10-digit mobile number'
      }
    }
  };

  // Validate function (similar to react-hook-form validation)
  const validateField = (fieldName, value) => {
    const rules = validationRules[fieldName];
    
    if (rules.required && !value.trim()) {
      return rules.required;
    }
    
    if (rules.minLength && value.trim().length < rules.minLength.value) {
      return rules.minLength.message;
    }
    
    if (rules.pattern && value.trim() && !rules.pattern.value.test(value.trim())) {
      return rules.pattern.message;
    }
    
    return '';
  };

  // Handle input change (similar to react-hook-form register)
  const handleInputChange = (fieldName, value) => {
    // Clear submit status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
    }

    // For phone number, only allow digits and limit to 10
    if (fieldName === 'phoneNumber') {
      const cleanValue = value.replace(/\D/g, '');
      if (cleanValue.length <= 10) {
        setFormData(prev => ({
          ...prev,
          [fieldName]: cleanValue
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [fieldName]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: ''
      }));
    }
  };

  // Handle blur (validation trigger)
  const handleBlur = (fieldName) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));

    const error = validateField(fieldName, formData[fieldName]);
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
  };

  // Check if form is valid
  const isFormValid = () => {
    const nameError = validateField('name', formData.name);
    const phoneError = validateField('phoneNumber', formData.phoneNumber);
    
    return !nameError && !phoneError && formData.name.trim() && formData.phoneNumber.length === 10;
  };

  // Handle form submission (similar to react-hook-form handleSubmit)
  const handleSubmit = async () => {
    // Validate all fields
    const nameError = validateField('name', formData.name);
    const phoneError = validateField('phoneNumber', formData.phoneNumber);
    
    const newErrors = {
      name: nameError,
      phoneNumber: phoneError
    };
    
    setErrors(newErrors);
    setTouched({ name: true, phoneNumber: true });
    
    if (!nameError && !phoneError) {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log('Registration Data:', {
          name: formData.name,
          phone: `+91${formData.phoneNumber}`
        });
        
        // Set success status
        setSubmitStatus('success');
        
        // Reset form after a delay
        setTimeout(() => {
          setFormData({
            name: '',
            phoneNumber: ''
          });
          setErrors({});
          setTouched({});
          setSubmitStatus(null);
        }, 5000);
        
      } catch (error) {
        console.error('Registration failed:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="relative -mt-20 sm:-mt-16 md:-mt-24 lg:-mt-[90px] mb-8 sm:mb-10 md:mb-12 lg:mb-0">
      <div
        className="mx-auto h-auto w-full max-w-[1250px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg bg-[#FFEFEF] border-[#CC1C26] border-2 rounded-[24px] sm:rounded-[32px] md:rounded-[48px] lg:rounded-[56px]"
        style={{
          backgroundImage: `url(/static/Vector3.svg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-montserrat font-semibold text-black mb-6 text-center">
             Share your details, and we will contact you!
          </h2>
          
          {/* Success/Error Messages */}
          {submitStatus && (
            <div className={`mb-6 p-4 rounded-lg border-2 ${
              submitStatus === 'success' 
                ? 'bg-green-50 border-green-300 text-green-800' 
                : 'bg-red-50 border-red-300 text-red-800'
            }`}>
              <div className="flex items-center">
                {submitStatus === 'success' ? (
                  <svg className="w-6 h-6 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 mr-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                )}
                <div>
                  {submitStatus === 'success' ? (
                    <div>
                      <h3 className="font-semibold text-lg">Partner Successfully Registered</h3>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-semibold text-lg">Registration Failed</h3>
                      <p className="mt-1">There was an error processing your registration. Please try again.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* Form Container */}
          <div className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <label className="block text-left text-md font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                placeholder="Enter your full name"
                autoComplete="name"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-[16px] sm:text-[18px] text-gray-800 bg-white border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.name && touched.name
                    ? 'border-red-400 focus:ring-red-500 focus:border-red-500' 
                    : formData.name && !errors.name
                    ? 'border-green-400 focus:ring-green-500 focus:border-green-500'
                    : 'border-gray-300 focus:ring-[#FF0000] focus:border-[#FF0000]'
                }`}
                disabled={isSubmitting}
              />
              {errors.name && touched.name && (
                <p className="mt-1 text-sm text-red-600 text-left flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.name}
                </p>
              )}
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
                    onBlur={() => handleBlur('phoneNumber')}
                    placeholder="Enter 10-digit mobile number"
                    autoComplete="tel"
                    maxLength="10"
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-[16px] sm:text-[18px] text-gray-800 bg-white border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.phoneNumber && touched.phoneNumber
                        ? 'border-red-400 focus:ring-red-500 focus:border-red-500' 
                        : formData.phoneNumber.length === 10 && !errors.phoneNumber
                        ? 'border-green-400 focus:ring-green-500 focus:border-green-500'
                        : 'border-gray-300 focus:ring-[#FF0000] focus:border-[#FF0000]'
                    }`}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              {errors.phoneNumber && touched.phoneNumber && (
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
                    ? 'bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 cursor-pointer hover:shadow-lg transform hover:-translate-y-0.5'
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
  );
}