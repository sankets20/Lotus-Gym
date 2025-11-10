import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

// ✅ Import your local images
import IMG_1 from '@/assets/IMG_1.jpg';
import IMG_2 from '@/assets/IMG_2.jpg';
import IMG_3 from '@/assets/IMG_3.jpg';
import IMG_4 from '@/assets/IMG_4.jpg';
import IMG_5 from '@/assets/IMG_5.jpg';

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      title: 'Anniversary Celebration 2024',
      subtitle: 'Lotus Gym Turns One!',
      description:
        'A grand celebration with all our members, featuring fitness awards, fun activities, and a special dinner night.',
      img: IMG_2,
    },
    {
      title: 'Lotus Gym Anniversary Moments 2024 ',
      subtitle: 'Celebrating Strength, Unity & a Year of Dedication',
      description:
        'From fun activities and workouts to laughter-filled memories with our gym family, the evening was filled with energy, emotion, and pride.',
      img: IMG_3,
    },
    {
      title: 'Lotus Gym Trip 2025',
      subtitle: 'Stronger Together Beyond the Gym Walls',
      description:
        'Every year, our Lotus Gym family takes a break from the weights and workouts to enjoy moments that strengthen our bond outside the gym',
      img: IMG_1,
    },
    {
      title: 'Powerlifting Championship',
      subtitle: 'Strength Meets Passion',
      description:
        'Our members showcased incredible strength and determination in this thrilling competition.',
      img: IMG_4,
    },
    {
      title: 'Fun Moments at Lotus Gym',
      subtitle: 'Because Fitness is More Fun Together!',
      description:
        'From friendly challenges and group workouts to laughter-filled moments between sets, every day at the gym brings something to smile about.',
      img: IMG_5,
    },
  ];

  // ✅ Auto-slide effect (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [events.length]);

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
          <div className="relative rounded-2xl shadow-2xl overflow-hidden">
            {/* Event Image */}
            <div className="w-full h-[280px] md:h-[360px] bg-gray-800">
              <img
                src={events[currentSlide].img}
                alt={events[currentSlide].title}
                className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
              />
            </div>

            {/* Event Details */}
            <div className="bg-gym-navy/50 p-8 md:p-12 flex flex-col justify-between text-center animate-fade-in">
              <div>
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold">
                  {events[currentSlide].title}
                </h3>
                <p className="text-sm text-primary mt-1 font-semibold">
                  {events[currentSlide].subtitle}
                </p>
              </div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
                {events[currentSlide].description}
              </p>
              <p className="text-gray-400 mt-4 italic text-sm">
                {events[currentSlide].title === 'Anniversary Celebration 2024'
                  ? 'A special moment celebrating Lotus Gym’s first anniversary 🎉'
                  : 'Swipe or click to explore more events.'}
              </p>
            </div>

            {/* ✅ Green Navigation Buttons */}
            <Button
              onClick={prevSlide}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 text-white hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Previous event"
            >
              <ChevronLeft size={28} />
            </Button>
            <Button
              onClick={nextSlide}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 text-white hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Next event"
            >
              <ChevronRight size={28} />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
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
            Check out our last trip to International Expedition where both teachers and students participated.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
