import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-primary via-navy to-navy-dark text-primary-foreground">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Let's Connect
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-4 mb-4">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-primary-foreground/70 text-lg mt-6 max-w-xl mx-auto text-balance">
            Whether you'd like to collaborate, discuss opportunities, or simply connect, 
            feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-serif font-semibold mb-2">Phone</h3>
            <p className="text-primary-foreground/70">+44 XXX XXX XXXX</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-serif font-semibold mb-2">Email</h3>
            <p className="text-primary-foreground/70">hassenar@example.com</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors">
            <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-serif font-semibold mb-2">Location</h3>
            <p className="text-primary-foreground/70">London, United Kingdom</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-primary-foreground/70 mb-6">Follow on Social Media</p>
          <div className="flex items-center justify-center gap-4">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Linkedin, label: "LinkedIn" },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
