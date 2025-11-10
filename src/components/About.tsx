import { Button } from "./ui/button";

const About = () => {
  const scrollToPlans = () => {
    const element = document.querySelector('#plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            We are <span className="text-primary">Lotus Gym</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium mb-6">
            Our Journey: From Passion to Power
          </p>
          <p className="text-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            Dedicated and skilled, Lotus Gym is driven by a commitment to excellence. A result-oriented
            fitness center with years of experience, we carefully craft training programs that are high-quality,
            compelling, and memorable. Over the years, Lotus Gym has delivered successful transformations, turning
            dreams into reality and creating a community of fitness enthusiasts.
          </p>
          <p className="text-muted-foreground italic mb-8">
            2 Years Fitness Together
          </p>
          <Button
            onClick={scrollToPlans}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Try Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
