import { Button } from './ui/button';
import { ChevronDown, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-gym.jpg';

const Hero = () => {
  const scrollToPlans = () => {
    const element = document.querySelector('#plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gym-dark/80 via-gym-dark/70 to-gym-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-montserrat font-extrabold mb-6 leading-tight">
          <span className="text-white">LOTUS</span>
          <br />
          <span className="text-primary">GYM</span>
        </h1>
        <Button
          onClick={scrollToPlans}
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
        >
          Explore Plans
        </Button>
      </div>

      {/* WhatsApp Button */}
      <a
  href="https://wa.me/9657976305?text=Hi%20Lotus%20Gym%20Team!%20I%20have%20a%20query%20about%20Something."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
  aria-label="Contact us on WhatsApp"
>
  <MessageCircle size={28} />
</a>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;
