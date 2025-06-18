import Registration from '../components/Registration';
import Partners from '/static/Partners.svg';
import Bene2 from '/static/Bene2.svg';
import AppD from '/static/AStoreB.svg';
import PlayD from '/static/GplayB.svg';
import Logo from '/static/Logo.svg';
import PScan from '/static/PScan.svg';

export default function Partner() {
  return (
    <div className="ml-3 mr-3 px-4 sm:px-6 md:px-8 lg:px-8">
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
        <div className="mt-3 ml-7 flex flex-col justify-start flex-1 lg:max-w-[60%]">
          <h1 className=" mt-2 sm:mt-4 md:mt-6 lg:mt-5 font-montserrat text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-semibold leading-tight text-center sm:text-left">
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

      {/* Registration Form Section */}
      <Registration />

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
          
          <p className="mt-3 mx-auto lg:mx-8 font-semibold text-[18px] sm:text-[20px] md:text-[20px] lg:text-[25px] text-[#000000] leading-normal mb-6">
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