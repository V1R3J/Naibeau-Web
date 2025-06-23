import React, { useState, useEffect } from 'react';

// Typography definitions for easy customization
const typography = {
  mainHeading: "text-4xl lg:text-5xl font-light text-gray-900 leading-tight",
  sectionHeading: "text-3xl lg:text-4xl font-light text-gray-900 border-b border-gray-100 pb-4",
  subHeading: "text-xl lg:text-2xl font-medium text-gray-800",
  bodyText: "text-base lg:text-lg text-gray-600 leading-relaxed",
  largeBodyText: "text-lg text-gray-600 leading-relaxed",
  navButton: "w-full text-left transition-all duration-200 rounded-lg",
  bulletPoint: "flex items-start space-x-4"
};

const BulletPoint = ({ children }) => (
  <li className={`${typography.bodyText} ml-6`}>{children}</li>
);

export default function Privacy() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'customer-policy', 'info-collect', 'info-use', 'data-sharing', 'user-rights', 'security', 'partner-policy', 'partner-info', 'partner-use', 'partner-protection', 'contact'];
      const scrollY = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navigationItems = [
    { id: 'overview', label: 'Overview', level: 0 },
    { id: 'customer-policy', label: 'Customer Privacy Policy', level: 0 },
    { id: 'info-collect', label: '1. Information We Collect', level: 1 },
    { id: 'info-use', label: '2. How We Use Information', level: 1 },
    { id: 'data-sharing', label: '3. Data Sharing & Third Parties', level: 1 },
    { id: 'user-rights', label: '4. User Rights', level: 1 },
    { id: 'security', label: '5. Security & Retention', level: 1 },
    { id: 'partner-policy', label: 'Partner Privacy Policy', level: 0 },
    { id: 'partner-info', label: '1. Partner Information We Collect', level: 1 },
    { id: 'partner-use', label: '2. How We Use Partner Information', level: 1 },
    { id: 'partner-protection', label: '3. Partner Data Protection', level: 1 },
    { id: 'contact', label: 'Contact Us', level: 0 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex max-w-7xl mx-auto bg-white shadow-sm">
        
        {/* Desktop Sidebar Navigation - Hidden on mobile */}
        <div className="hidden lg:block w-80 bg-white sticky top-0 h-screen overflow-y-auto border-r border-gray-200">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-8">Privacy Policy</h3>
            <nav className="space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${typography.navButton} ${
                    item.level === 0 
                      ? `px-4 py-3 text-sm font-medium ${
                          activeSection === item.id 
                            ? 'bg-blue-50 text-red-500 border-l-4 border-red-500 shadow-sm' 
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        }`
                      : `px-6 py-2 text-sm ml-4 ${
                          activeSection === item.id
                            ? 'text-red-600 bg-blue-25'
                            : 'text-gray-600 hover:text-gray-800 hover:bg-gray-25'
                        }`
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
            
            {/* Header */}
            <div id="overview" className="mb-16">
              <div className="border-b border-gray-100 pb-8 mb-8">
                <h1 className={typography.mainHeading}>Privacy Policy</h1>
                <div className="mt-6 w-16 h-1 bg-red-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <p className={typography.largeBodyText}>
                  In compliance with applicable Indian data protection laws, we provide you with the following information about the processing of your personal data on our platform.
                </p>
                <p className={typography.largeBodyText}>
                  This privacy policy applies to the Naibeau platform and services provided by Naiplus Solution Private Limited.
                </p>
                <p className={typography.largeBodyText}>
                  In this legal document, the legally obligatory information on the processing carried out on your personal data in the context of our platform is provided.
                </p>
              </div>
            </div>

            {/* Customer Privacy Policy */}
            <section id="customer-policy" className="mb-20">
              <h2 className={`${typography.sectionHeading} mb-8`}>Customer Privacy Policy</h2>
               <p className={`${typography.largeBodyText} font-medium text-gray-500 mb-2`}>Effective Date: 07/05/2025</p>
              
              <p className={`${typography.largeBodyText} mb-12`}>
                This Privacy Policy explains how Naiplus Solution Private Limited ("Naibeau", "we", "our", or "us") collects, uses, discloses, and protects the personal information of its customers.
              </p>

              <div id="info-collect" className="mb-12">
                <h3 className={`${typography.subHeading} mb-6`}>1. Information We Collect</h3>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li className={typography.bodyText}>Name, contact information, address, gender, and service preferences</li>
                  <li className={typography.bodyText}>Payment information including UPI ID or credit/debit card details</li>
                  <li className={typography.bodyText}>Location data to assign nearby service providers</li>
                  <li className={typography.bodyText}>Service history, ratings, and feedback</li>
                  <li className={typography.bodyText}>Device and log information including IP, cookies, and browser details</li>
                </ol>
              </div>

              <div id="info-use" className="mb-12">
                <h3 className={`${typography.subHeading} mb-6`}>2. How We Use Customer Information</h3>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <BulletPoint>To manage bookings and enable seamless service delivery</BulletPoint>
                  <BulletPoint>To improve user experience through personalization and analytics</BulletPoint>
                  <BulletPoint>To process payments and handle refunds</BulletPoint>
                  <BulletPoint>To send booking confirmations, updates, and offers</BulletPoint>
                  <BulletPoint>To resolve complaints and ensure service quality</BulletPoint>
                </ul>
              </div>

              <div id="data-sharing" className="mb-12">
                <h3 className={`${typography.subHeading} mb-6`}>3. Data Sharing & Third Parties</h3>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <BulletPoint>With verified service providers for fulfilling bookings</BulletPoint>
                  <BulletPoint>With payment gateways for processing transactions</BulletPoint>
                  <BulletPoint>With legal authorities when required by law</BulletPoint>
                </ul>
              </div>

              <div id="user-rights" className="mb-12">
                <h3 className={`${typography.subHeading} mb-6`}>4. User Rights</h3>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <BulletPoint>Access and update your personal data via the app</BulletPoint>
                  <BulletPoint>Request deletion or restriction of data processing</BulletPoint>
                  <BulletPoint>Opt-out of promotional communications at any time</BulletPoint>
                </ul>
              </div>

              <div id="security" className="mb-12">
                <h3 className={`${typography.subHeading} mb-6`}>5. Security & Retention</h3>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <BulletPoint>We use encryption, access control, and secure servers</BulletPoint>
                  <BulletPoint>Customer data is retained only as long as necessary</BulletPoint>
                </ul>
              </div>
            </section>

            {/* Partner Privacy Policy */}
            <section id="partner-policy" className="mb-20">
              <h2 className={`${typography.sectionHeading} mb-8`}>Partner Privacy Policy</h2>
              <p className={`${typography.largeBodyText} font-medium text-gray-500 mb-2`}>Effective Date: 20/05/2025</p>

              
              <p className={`${typography.largeBodyText} mb-12`}>
                This Privacy Policy ("Policy") explains how Naiplus Solution Private Limited ("Naibeau", "we", "our", or "us") collects, uses, discloses, and protects the personal information of its service partners, in compliance with applicable Indian data protection laws.
              </p>

              <div id="partner-info" className="mb-12">
                <h3 className={`${typography.subHeading} mb-6`}>1. Partner Information We Collect</h3>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <BulletPoint>Full name, contact details, Aadhaar, PAN, bank account info.</BulletPoint>
                  <BulletPoint>Photos, certifications, skillsets, and availability.</BulletPoint>
                  <BulletPoint>Customer ratings, service completion history, and complaints.</BulletPoint>
                  <BulletPoint>Device data and location information when using the partner app.</BulletPoint>
                </ul>
              </div>

              <div id="partner-use" className="mb-12">
                <h3 className={`${typography.subHeading} mb-6`}>2. How We Use Partner Information</h3>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <BulletPoint>To onboard, verify, and list service partners on the platform.</BulletPoint>
                  <BulletPoint>To assign customer bookings and process payouts.</BulletPoint>
                  <BulletPoint>To monitor service quality, resolve disputes, and apply penalties.</BulletPoint>
                  <BulletPoint>To promote top-rated professionals and showcase reviews.</BulletPoint>
                </ul>
              </div>

              <div id="partner-protection" className="mb-12">
                <h3 className={`${typography.subHeading} mb-6`}>3. Data Sharing and Third Parties</h3>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <BulletPoint>With customers to facilitate service appointments.</BulletPoint>
                  <BulletPoint>With government or legal bodies upon request.</BulletPoint>
                  <BulletPoint>With analytics or compliance vendors if needed.</BulletPoint>
                </ul>
              </div>
              
              <div className="mb-12">
                <h3 className={`${typography.subHeading} mb-6`}>4. Rights of Service Partners</h3>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <BulletPoint>View and edit your profile details via dashboard.</BulletPoint>
                  <BulletPoint>Raise queries or objections regarding ratings or data use.</BulletPoint>
                  <BulletPoint>Withdraw from platform subject to agreement terms.</BulletPoint>
                </ul>
              </div>
              
              <div className="mb-12">
                <h3 className={`${typography.subHeading} mb-6`}>5. Security and Retention</h3>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <BulletPoint>Data is securely stored with limited access.</BulletPoint>
                  <BulletPoint>Information is retained for compliance and auditing purposes.</BulletPoint>
                </ul>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-16">
              <div className="relative">
                <div className="absolute -top-4 -left-6 lg:-left-12">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-r-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium text-sm">Get in Touch</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 lg:p-12 mt-8 border border-blue-100">
                  <h2 className={`${typography.sectionHeading} border-none pb-0 mb-6`}>Contact Us</h2>
                  <p className={`${typography.largeBodyText} mb-8`}>
                    For questions or concerns regarding this Privacy Policy, please reach out to us:
                  </p>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">Email Support</p>
                        <a 
                          href="mailto:support@naibeau.com" 
                          className="text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium hover:underline"
                        >
                          support@naibeau.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}