import IMAGE_1 from '@/assets/IMAGE_4.jpg';
import IMAGE_2 from '@/assets/IMAGE_2.jpg';
import IMAGE_3 from '@/assets/IMAGE_3.jpg';

const WhyChoose = () => {
  const reasons = [
    {
      title: 'Modern Equipment & Clean Environment',
      description:
        'At Lotus Gym, we focus on providing a premium workout experience. Our gym features modern, high-quality fitness machines and a clean, spacious environment that keeps you motivated every single day. From cardio to strength training, everything is designed to help you perform your best.',
      image: IMAGE_1,
      imagePosition: 'right',
    },
    {
      title: 'Personal Guidance & Basic Diet Support',
      description:
        'We believe that proper guidance makes all the difference. At Lotus Gym, you’ll always find support whether it’s learning correct workout techniques or getting basic diet tips for your goals.Our friendly team ensures you train smart, safe, and effectively.',
      image: IMAGE_2,
      imagePosition: 'left',
    },
    {
      title: 'Friendly & Supportive Fitness Community',
      description:
        'Lotus Gym isn’t just a place to work out it’s a fitness community that motivates each other to grow stronger. Our members celebrate progress, share energy, and create a positive environment that keeps you consistent and confident every day.',
      image: IMAGE_3,
      imagePosition: 'right',
    },
  ];

  return (
    <section id="why-choose" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Why Choose <span className="text-primary">Lotus Gym</span> ?
          </h2>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                reason.imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* ✅ Image Section */}
              <div className="flex-1 w-full">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full aspect-video object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
