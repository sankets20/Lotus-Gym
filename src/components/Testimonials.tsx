import { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    // Check if the Elfsight script already exists
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            <span className="text-primary">Testimonials</span>
          </h2>
          {/* <p className="text-gray-500">
            What our members say about Lotus Gym
          </p> */}
        </div>

        {/* ✅ Elfsight Google Reviews Widget */}
        <div className="max-w-6xl mx-auto animate-slide-up">
          <div
            className="elfsight-app-4dd4caae-ba85-4951-b81c-587fed432cce"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
