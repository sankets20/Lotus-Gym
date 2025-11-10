const Facilities = () => {
  const facilities = [
    'Academic Training',
    'Modern Lifting Zone',
    'Spacious Studio & Parking',
    '24/7 Customer Services',
    'Smart & Experienced Instructor',
    'Flexible Morning & Evening Timing',
  ];

  return (
    <section id="facilities" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            <span className="text-primary">Facilities</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-primary text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {facility}
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
            With all necessary facilities for fitness to ensure our facility stays at the complete satisfaction level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
