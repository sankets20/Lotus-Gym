import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import LogImage from '@/assets/Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gym-dark text-white py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-10 md:mb-8">
          
          {/* Logo and Description */}
          <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <img 
              src={LogImage} 
              alt="Lotus Gym Logo" 
              className="w-20 h-20 object-contain"
            />
            <h3 className="text-2xl font-montserrat font-bold mt-2">
              LOTUS <span className="text-primary">GYM</span>
            </h3>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Transform your body and mind with our world-class fitness facilities and expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-montserrat font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#plans" className="text-gray-400 hover:text-primary transition-colors">
                  Membership
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-gray-400 hover:text-primary transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-montserrat font-semibold text-white">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/lotusgymandfitness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Lotus Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
