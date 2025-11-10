// import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import Plans from '@/components/Plans';
// import WhyChoose from '@/components/WhyChoose';
// import Facilities from '@/components/Facilities';
// import Events from '@/components/Events';
// import Testimonials from '@/components/Testimonials';
// import Contact from '@/components/Contact';
// import Footer from '@/components/Footer';


import Contact from "@/components/Contact";
import About from "../components/About";
import Events from "../components/Events";
import Facilities from "../components/Facilities";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Plans from "../components/Plans";
import Testimonials from "../components/Testimonials";
import WhyChoose from "../components/WhyChoose";
import Footer from "../components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <WhyChoose />
      <Facilities />
      <Events />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
