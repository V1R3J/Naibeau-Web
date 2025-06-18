import Bene1 from '/static/Bene1.svg';
import PlayD from '/static/PlayD.svg';
import AppD from '/static/AppD.svg';
import Underline from '/static/Underline.svg';
import M1 from '/static/M1.svg';

export default function Download() {
  return (
    <div className="ml-3 mr-3 px-4 sm:px-6 md:px-8 lg:px-8" >
      {/* Pink Box Section */}
      <div
        className="mt-4 w-full min-h-[450px] sm:min-h-[550px] md:min-h-[570px] lg:h-[630px] rounded-[32px] sm:rounded-[36px] md:rounded-[48px] lg:rounded-[56px] border-red-300 border-2 mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-5 sm:py-6 md:py-7 flex flex-col lg:flex-row relative bg-[#FFEFEF] overflow-hidden">
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row w-full gap-2 sm:gap-4 md:gap-6 lg:gap-8 h-full">
          
          {/* Left Content Section */}
          <div className="flex-1 lg:max-w-[65%] flex flex-col justify-center">
            {/* Main Heading */}
            <div className="mb-4 sm:mb-6 md:mb-7 lg:mb-8">
              <span>
                <h1 className="ml-3 text-[35px] uppercase xs:text-[36px] sm:text-[42px] md:text-[56px] lg:text-[80px] xl:text-[100px] font-antonio font-semibold text-[#FF0000] leading-1.5 sm:leading-normal text-center md:text-center lg:text-left">
                  Expert Services at Home! 
                </h1>
                {/* Description */}
                <p className="ml-3 w-full max-w-[589px] text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-4 sm:mt-5 md:mt-6 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-[#808285] leading-relaxed text-center md:text-center lg:text-left">
                  Why step out when luxury can come to you? Book beauty services from top-rated professionals anytime, at your place.
                </p>
                {/* Benefits Image */}
                <div className="w-full max-w-[648px] mb-2 sm:mb-0 text-center md:text-center lg:text-left">
                  <img 
                    src={Bene1} 
                    alt="Service benefits" 
                    className="w-full h-auto object-contain max-h-[60px] sm:max-h-[70px] md:max-h-[90px] lg:max-h-[108px] mx-auto lg:mx-0"
                  />
                </div>
              </span>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="flex-shrink-0 lg:flex-1 flex justify-center lg:justify-end items-center lg:items-end h-fit -mt-2 -mb-5 sm:-mt-3 md:-mt-4 lg:-mt-5">
            <img 
              src={M1} 
              alt="Service professional" 
              className="mt-0 sm:mt-20 md:mt-30 lg:mt-35 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[600px] xl:max-w-[600px] h-auto "
            />
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="flex flex-col items-center text-center py-8 sm:py-9 md:py-10 mt-8 sm:mt-9 md:mt-10 mb-8 sm:mb-9 md:mb-10 px-4 sm:px-6 md:px-8">
        <div className="relative w-full max-w-[400px] md:max-w-[480px] mb-6 sm:mb-7 md:mb-8">
          <h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[35px] font-semibold  mb-3">
            Download the app
          </h2>
          <img
            src={Underline}
            alt="Underline decoration"
            className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-[200px] xs:w-[100px] sm:w-[320px] md:w-[360px] lg:w-full max-w-[350px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[250px] h-auto" />
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-full max-w-[500px] md:max-w-[600px] px-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.naibeau_user"
            className="rounded-[35px] sm:rounded-[40px] md:rounded-[45px] flex items-center gap-3 sm:gap-4 md:gap-5 px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 border-2 border-black hover:scale-110 hover:shadow-2xl transform transition-transform duration-300 hover:z-10 justify-center"
          >
            <img 
              src={PlayD} 
              alt="Play Store" 
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex-shrink-0" 
            />
            <span className="text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px] xl:text-[35px] font-normal text-center">
              Get it on Google Play
            </span>
          </a>
          <a
            href="https://apps.apple.com/in/app/naibeau/id6743757201"
            className="rounded-[35px] sm:rounded-[40px] md:rounded-[45px] flex items-center gap-3 sm:gap-4 md:gap-5 px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 border-2 border-black hover:scale-110 hover:shadow-2xl transform transition-transform duration-00 hover:z-10 justify-center"
          >
            <img 
              src={AppD} 
              alt="App Store" 
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex-shrink-0" 
            />
            <span className="text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px] xl:text-[35px] font-normal text-center">
              Get it on App Store
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}