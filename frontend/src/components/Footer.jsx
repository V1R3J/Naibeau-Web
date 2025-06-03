import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin, FaPhone, FaEnvelopeOpen } from 'react-icons/fa';
import LogoW from '/static/LogoW.svg';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-10 py-12">
      {/* Top Section */}
      <div className="max-w-screen-xl  mx-auto flex flex-col md:flex-row justify-between gap-10 flex-wrap">
        
        {/* Logo & About */}
        <div className="max-w-md">
          <Link to="/">
            <img src={LogoW} alt="Naibeau Logo" className="w-36 mb-4" />
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
          <p className="flex items-center gap-2 mb-2 text-gray-300">
            <FaEnvelopeOpen className="text-red-600" /> support@naibeau.com
          </p>
          <p className="flex items-center gap-2 mb-4 text-gray-300">
            <FaPhone className="text-red-600" /> +91 00000 00000
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-600 mt-10 mb-6" />

      {/* Bottom Row */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4 text-red-600 text-xl">
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
        <p className="text-sm text-gray-400 text-center md:text-right">
          HealNet &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
