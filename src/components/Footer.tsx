
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">UK-LHD Motors</h3>
            <p className="text-gray-300 mb-4">
              Specializing in premium left-hand drive vehicles for the UK market. 
              Quality cars with exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-motor-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-motor-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-motor-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-motor-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-300 hover:text-motor-red transition-colors">
                  Cars
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-motor-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-motor-red transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/sell-your-car" className="text-gray-300 hover:text-motor-red transition-colors">
                  Sell Your Car
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Premium Drive, London, UK, SW1A 1AA
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+441234567890" className="text-gray-300 hover:text-motor-red transition-colors">
                  +44 (0) 1234 567 890
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@uk-lhd.com" className="text-gray-300 hover:text-motor-red transition-colors">
                  info@uk-lhd.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest stock updates and special offers.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-navy-dark text-white border-gray-600" 
              />
              <Button className="w-full bg-motor-red hover:bg-red-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between">
            <p>© {new Date().getFullYear()} UK-LHD Motors. All rights reserved.</p>
            <div className="space-x-4 mt-2 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-motor-red transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-motor-red transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/cookie-policy" className="hover:text-motor-red transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
