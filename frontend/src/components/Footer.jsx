import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin, FaPhone, FaEnvelopeOpen, FaHome, FaMapMarked, FaMapMarker, FaMapMarkerAlt, FaMapMarkedAlt } from 'react-icons/fa';
import LogoW from '/static/LogoW.svg';
import AppD from '/static/AStoreB.svg';
import PlayD from '/static/GplayB.svg';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-10 py-12">
      {/* Top Section */}
      <div className="max-w-screen-xl  mx-auto flex flex-col md:flex-row justify-between gap-10 flex-wrap">
        
        {/* Logo & About */}
        <div className="max-w-md">
          <Link to="/">
            <img src={LogoW} alt="Naibeau Logo" className="text-left sm:w-36 sm:h-8 w-25 h-5 mb-4" />
          </Link>
          <p className="text-base text-gray-300 leading-relaxed">
            Naibeau is your go-to app for seamless beauty and wellness bookings. We connect you with top professionals and services, ensuring a premium and convenient experience tailored to your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-base text-gray-300">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
            <li><Link to="/partner" className="hover:text-red-500">Be Our Partner</Link></li>
            <li><Link to="/download" className="hover:text-red-500">Download The App</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-base text-gray-300">
            <li>Salon Services</li>
            <li>Spa Services</li>
            <li>Makeup Services</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <a href="mailto:support@naibeau.com" className="flex items-center gap-2 mb-4 text-gray-300">
            <FaEnvelopeOpen className="text-red-600" /> support@naibeau.com
          </a>
          <a href="tel: 92271 77657" className="flex items-center gap-2 mb-4 text-gray-300">
            <FaPhone className="text-red-600" /> +91 92271 77657
          </a>
          <a href="https://maps.app.goo.gl/oaXKcqGVD9zuuL2HA" className="flex items-center gap-2 mb-4 text-gray-300 text-[15px]">
            <FaMapMarkedAlt className="text-red-600 h-[20px] w-[20px]"/> 
            Office 4, Cradle, EDII, Gandhinagar-Ahmedabad Road, <br/> Near Apollo Hospital, Bhat, Ahmedabad, Gujarat 382428
          </a>
        </div>
        <h2>Download the App</h2>
        {/* App Download Buttons */}
        <div className="flex gap-4">
          <a href="https://apps.apple.com/in/app/naibeau/id6743757201" className="cursor-pointer">
            <img src={AppD} alt="App Store" className="h-[90px] w-[90px]" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.naibeau_user" className="cursor-pointer">
            <img src={PlayD} alt="Google Play" className="h-[90px] w-[90px]" />
          </a>
        </div>          
      </div>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-600 mt-10 mb-6" />

      {/* Bottom Row */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4 text-red-600  text-3xl">
          <a href="https://www.instagram.com/naibeau.official/" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=61563181074987#" aria-label="Facebook" className="hover:text-white"><FaFacebook /></a>
          <a href="https://wa.me/naibeau" aria-label="WhatsApp" className="hover:text-white"><FaWhatsapp /></a>
          <a href="https://www.linkedin.com/company/naibeau/" aria-label="LinkedIn" className="hover:text-white"><FaLinkedin /></a>
        </div>
        <p className="text-sm text-gray-400 text-center md:text-right">
          Naiplus Solutions pvt. ltd. &copy; 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}