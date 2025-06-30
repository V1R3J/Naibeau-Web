import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin, FaPhone, FaEnvelopeOpen, FaMapMarkerAlt } from 'react-icons/fa';
import LogoW from '/static/LogoW.svg';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img 
                src={LogoW} 
                alt="Naibeau Logo" 
                className="w-32 h-7 sm:w-36 sm:h-8 mb-4" 
              />
            </Link>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Naibeau is the ultimate app for affordable, on-demand home salon and wellness services in Ahmedabad. We connect you with top professionals and services, ensuring a premium and convenient experience tailored to your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li><Link to="/" className="hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link to="/partner" className="hover:text-red-500 transition-colors">Be Our Partner</Link></li>
              <li><Link to="/services" className="hover:text-red-500 transition-colors">Services</Link></li>
              <li><Link to="/download" className="hover:text-red-500 transition-colors">Download The App</Link></li>
              <li><Link to="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Services</h2>
            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
              <li>
                <a 
                  href="/services#salon" 
                  className="hover:text-red-500 transition-colors"
                >
                  Salon Services
                </a>
              </li>
              <li>
                <a 
                  href="/services#spa" 
                  className="hover:text-red-500 transition-colors"
                >
                  Spa Services
                </a>
              </li>
              <li>
                <a 
                  href="/services#makeup" 
                  className="hover:text-red-500 transition-colors"
                >
                  Makeup Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-3">
              <a 
                href="mailto:support@naibeau.com" 
                className="flex items-center gap-2 hover:text-red-500 text-gray-300 transition-colors text-sm sm:text-base"
              >
                <FaEnvelopeOpen className="text-red-600 flex-shrink-0" /> 
                <span className="break-all">support@naibeau.com</span>
              </a>
              
              <a 
                href="tel:+919227177657" 
                className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors text-sm sm:text-base"
              >
                <FaPhone className="text-red-600 flex-shrink-0" /> 
                +91 92271 77657
              </a>
              
              <a 
                href="https://maps.app.goo.gl/EPWDrDi8towehc4j7" 
                className="flex items-start gap-2 text-gray-300 hover:text-red-500 transition-colors text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="text-red-600 flex-shrink-0 mt-1" /> 
                <span className="leading-relaxed">
                  2nd Floor, Innovation Hub, Prajna Puram, KCG Campus, opp. PRL, 
                  Navrangpura, Ahmedabad, Gujarat 380015
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-600 mt-8 sm:mt-10 mb-6" />

      {/* Bottom Row */}
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 text-red-600 text-2xl sm:text-3xl order-2 sm:order-1">
            <a 
              href="https://www.instagram.com/naibeau.official/" 
              aria-label="Instagram" 
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61563181074987" 
              aria-label="Facebook" 
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://wa.me/919227177657" 
              aria-label="WhatsApp" 
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a 
              href="https://www.linkedin.com/company/naibeau/" 
              aria-label="LinkedIn" 
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          
          <p className="text-xs sm:text-sm text-gray-400 text-center order-1 sm:order-2">
            Naiplus Solutions pvt. ltd. &copy; 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}