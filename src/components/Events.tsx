import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      title: 'Annual Fitness Challenge 2024',
      description: 'Join our biggest fitness competition of the year with amazing prizes and recognition.',
    },
    {
      title: 'Transformation Success Stories',
      description: "Celebrating our members' incredible fitness journeys and achievements.",
    },
    {
      title: 'Wellness Workshop Series',
      description: 'Expert-led sessions on nutrition, mental health, and holistic fitness.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section id="events" className="py-16 md:py-24 bg-gym-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Events & <span className="text-primary">Achievements</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Carousel Content */}
          <div className="relative bg-gym-navy/50 rounded-2xl p-8 md:p-12 min-h-[300px] flex items-center justify-center shadow-2xl">
            <div className="text-center space-y-4 animate-fade-in" key={currentSlide}>
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold">
                {events[currentSlide].title}
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {events[currentSlide].description}
              </p>
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary hover:bg-white/10"
            >
              <ChevronLeft size={32} />
            </Button>
            <Button
              onClick={nextSlide}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary hover:bg-white/10"
            >
              <ChevronRight size={32} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-primary w-8' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <p className="text-center text-gray-300 mt-8 italic">
            Check out our last trip to International Expedition where both teachers and students  participated.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
