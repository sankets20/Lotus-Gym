import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { useToast } from './ui/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [sending, setSending] = useState(false);

  // ✅ handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Missing Information',
        description: 'Please fill out your name, email, and message.',
        variant: 'destructive',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }

    setSending(true);

    try {
      // get keys from .env
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // parameters must match your EmailJS template
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: 'Message Sent!',
        description: "We'll get back to you soon.",
      });

      // clear form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: 'Failed to Send',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Locate <span className="text-primary">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info + Form */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <MapPin className="text-primary" size={24} />
                <span>Lotus Gym, Near Gajanan Mandir, Kalmeshwar- 441501</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Phone className="text-primary" size={24} />
                <span>+91 8793420352</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Mail className="text-primary" size={24} />
                <span>lotusfitnessgym@gmail.com</span>
              </div>
            </div>

            {/* ✅ Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mt-8">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-background"
              />

              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-background"
              />

              <Input
                type="tel"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="bg-background"
              />

              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="min-h-[120px] bg-background"
              />

              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
              >
                {sending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Map Section */}
         {/* Map Section */}
          <div>
          <div className="w-full h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://maps.google.com/maps?q=Lotus%20Gym%20Near%20Gajanan%20Mandir%20Kalmeshwar%20441501&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lotus Gym Location"
            />
          </div>

  {/* ✅ Green “Get Directions” button aligned right */}
        <div className="flex justify-end mt-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Lotus%20Gym%20Near%20Gajanan%20Mandir%20Kalmeshwar%20441501"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-primary/90 transition-colors duration-200"
          >
            <MapPin size={20} /> Get Directions
          </a>
         </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
