import Bene1 from '/static/Bene1.svg';
import PlayD from '/static/PlayD.svg';
import AppD from '/static/AppD.svg';
import Underline from '/static/Underline.svg';
import M1 from '/static/M1.svg';

export default function Download() {
  return (
    <div className="px-4 sm:px-6 lg:px-8" >
      {/* Pink Box Section */}
      <div
        className="mt-4 w-full min-h-[450px] sm:min-h-[550px] lg:min-h-[760px] rounded-[32px] sm:rounded-[40px] lg:rounded-[56px] mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-5 flex flex-col lg:flex-row relative bg-[#FFEFEF] overflow-hidden">
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-6 lg:gap-8 h-full">
          
          {/* Left Content Section */}
          <div className="flex-1 lg:max-w-[65%] flex flex-col justify-center">
            {/* Main Heading */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <span>
                <h1 className="ml-3 text-[28px] uppercase xs:text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[100px] font-antonio font-semibold text-[#FF0000] leading-[0.9] sm:leading-snug">
                  Expert Services<br />at Home! 
                </h1>
                {/* Description */}
                <p className="ml-3 w-full max-w-[589px] text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] mt-4 sm:mt-6 mb-4 sm:mb-6 lg:mb-8 text-[#808285] leading-relaxed">
                  Why step out when luxury can come to you? Book beauty services from top-rated professionals anytime, at your place.
                </p>
                {/* Benefits Image */}
                <div className="w-full max-w-[648px] mb-4 sm:mb-0">
                  <img 
                    src={Bene1} 
                    alt="Service benefits" 
                    className="w-full h-auto object-contain max-h-[60px] sm:max-h-[80px] lg:max-h-[108px]"
                  />
                </div>
              </span>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="flex-shrink-0 lg:flex-1 flex justify-center lg:justify-end items-center lg:items-end h-fit -mt-5 -mb-5">
            <img 
              src={M1} 
              alt="Service professional" 
              className="mt-40 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[600px] h-auto "
            />
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="flex flex-col items-center text-center py-8 sm:py-10 mt-8 sm:mt-10 mb-8 sm:mb-10 px-4 sm:px-6">
        <div className="relative w-full max-w-[400px] mb-6 sm:mb-8">
          <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-semibold font-montserrat mb-3">
            DOWNLOAD THE APP
          </h2>
          <img
            src={Underline}
            alt="Underline decoration"
            className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-full max-w-[350px]"
          />
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-[500px] px-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.naibeau_user"
            className="rounded-[35px] sm:rounded-[45px] flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 border-2 border-black hover:bg-red-400 hover:text-white transition-all duration-300 justify-center group"
          >
            <img 
              src={PlayD} 
              alt="Play Store" 
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" 
            />
            <span className="font-montserrat text-[16px] xs:text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[35px] font-normal text-center">
              Get it on play store
            </span>
          </a>
          <a
            href="#"
            className="rounded-[35px] sm:rounded-[45px] flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 border-2 border-black hover:bg-red-400 hover:text-white transition-all duration-300 justify-center group"
          >
            <img 
              src={AppD} 
              alt="App Store" 
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" 
            />
            <span className="font-montserrat text-[16px] xs:text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[35px] font-normal text-center">
              Get it on app store
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}