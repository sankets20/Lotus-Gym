import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import LogImage from '@/assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#plans', label: 'Membership' },
    { href: '#facilities', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gym-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
<div className="flex items-center gap-3 flex-shrink-0">
  <img 
    src={LogImage} 
    alt="Lotus Gym Logo" 
    className="w-12 h-12 md:w-14 md:h-14 object-contain"
  />
  <h1 className="text-2xl md:text-3xl font-montserrat font-bold">
    <span className="text-primary">LOTUS</span>{' '}
    <span className="text-white">GYM</span>
  </h1>
</div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#plans')}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gym-dark/95 backdrop-blur-sm pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white hover:text-primary transition-colors duration-300 font-medium text-left px-4"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4">
                <Button
                  onClick={() => scrollToSection('#plans')}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-full"
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
