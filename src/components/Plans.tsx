import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

import { Button } from './ui/button';
import { Check } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: '₹2,699',
      period: '3 months',
      features: [
        'Access to gym equipment',
        'Cardio access',
        'Free fitness assessment',
        'Basic training guidance',
      ],
    },
    {
      title: 'Premium Plan',
      price: '₹4,499',
      period: '6 months',
      featured: true,
      features: [
        'All Basic Plan features',
        'Personal trainer sessions',
        'Nutrition consultation',
        'Access to group classes',
        'Supplements discount',
      ],
    },
    {
      title: 'Elite Plan',
      price: '₹6,999',
      period: '12 months',
      features: [
        'All Premium Plan features',
        'Some PT sessions',
        'Advanced nutrition planning',
        'Priority class booking',
        'Massage therapy sessions',
      ],
    },
  ];

  return (
    <section id="plans" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Our <span className="text-primary">Plans</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up ${
                plan.featured
                  ? 'border-primary border-2 shadow-xl'
                  : 'border-border'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold">
                  Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat">{plan.title}</CardTitle>
                <CardDescription className="text-3xl font-bold text-foreground mt-4">
                  {plan.price}
                  <span className="text-sm text-muted-foreground font-normal"> {plan.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="text-primary mr-2 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
               <Button
                  onClick={() => {
                    const message = `Hello Lotus Gym , I’m interested in joining and would like to purchase the ${plan.title} for my gym membership. Please share the registration details and next steps.`;
                    const encodedMessage = encodeURIComponent(message);
                    window.open(`https://wa.me/9657976305?text=${encodedMessage}`, '_blank');
                  }}
                  className={`w-full font-semibold ${
                    plan.featured
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                  }`}
                >
                  Get Started
                </Button>

              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mt-8 italic">
          ⭐ Get Extra Offers From our Membership team! ⭐
        </p>
      </div>
    </section>
  );
};

export default Plans;
