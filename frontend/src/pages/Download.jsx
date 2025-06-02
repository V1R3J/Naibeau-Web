import HomeIcon from '/static/HomeIcon.svg';
import M1 from '/static/Mockup1.svg';
import M2 from '/static/M2.svg';
import Bene1 from '/static/Bene1.svg'

export default function Download() {
  return (
    <div className="max-w-full rounded-[56px] bg-[#FFEFEF] mt-3 mr-3 ml-3 mb-3 opacity-100 flex justify-between items-center px-10 py-8 shadow-md">
      {/* Left Content Section */}
      <div className="flex flex-col justify-center ml-10 flex-1">
        <div className="mb-6">
          <p className="text-[145px] font-antonio leading-none" style={{ color: '#FF0000' }}>EXPERT SERVICES</p>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-[145px] font-antonio leading-none" style={{ color: '#FF0000' }}>AT</p>
            <p className="text-[145px] font-antonio underline leading-none" style={{ color: '#FF0000' }}>HOME!</p>
            <img src={HomeIcon} alt="Home icon" className="w-[145px] h-[145px]" />
          </div>
        </div>
        
        <p className="w-[589px] text-[24px] mb-8" style={{ color: '#808285' }}>
          Why step out when luxury can come to you? Book beauty services from top-rated professionals anytime, at your place.
        </p>
        
        <div className="mt-4">
          <img src={Bene1} alt="Benefits" className="max-w-full h-auto" />
        </div>
      </div>
      
      {/* Right Image Section */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <img src={M1} alt="Mobile mockup" className="max-w-full h-auto" />
      </div>
    </div>
  );
}