
import React from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-emmell-navy text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="bg-white p-2 inline-block rounded">
              <img src="/lovable-uploads/12759a3e-6c88-4260-a4a4-59bcbfcaad8b.png" alt="Emmell Ground Worx, LLC Logo" className="h-16" />
            </div>
            <p className="text-gray-300 mt-4 max-w-xs">
              Professional excavation and groundwork services with precision, reliability, and excellence.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-emmell-orange pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-emmell-orange transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-emmell-orange transition-colors">
                  Services
                </a>
              </li>
              <li>
                
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-emmell-orange transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-emmell-orange pb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:8284716511" className="text-gray-300 hover:text-emmell-orange transition-colors flex items-center">
                  <span className="font-medium">(828) 471-6511</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@emmellgroundworx.com" className="text-gray-300 hover:text-emmell-orange transition-colors">
                  info@emmellgroundworx.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-400">
            © {currentYear} Emmell Ground Worx, LLC. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-emmell-orange transition-colors mx-2">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-emmell-orange transition-colors mx-2">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
