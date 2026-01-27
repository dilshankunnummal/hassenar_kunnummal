import profile1 from "@/assets/profile-1.jpg";
import profile2 from "@/assets/profile-2.jpg";
import profile3 from "@/assets/profile-3.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-cream-dark" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-up">
            <div className="inline-block mb-4">
              <span className="text-accent font-medium tracking-wider uppercase text-sm">
                Professional Chef & Community Leader
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-primary leading-tight mb-6">
              Hassenar
              <br />
              <span className="text-accent">Kunnummal</span>
            </h1>
            <div className="divider-gold mx-auto lg:mx-0 mb-6" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-balance">
              Born on 11 April 1971, Hassenar Kunnummal is a professional chef and respected 
              community leader originally from Moonniyur, Chuzhali, Kerala. With decades of 
              culinary excellence and dedicated community service.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-elegant"
              >
                Learn More
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Image Grid */}
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:max-w-none">
              {/* Main Large Image */}
              <div className="col-span-2 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-image">
                  <img
                    src={profile1}
                    alt="Hassenar Kunnummal"
                    className="w-full h-full object-cover image-hover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              </div>
              
              {/* Two Smaller Images */}
              <div className="relative animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <div className="aspect-square rounded-xl overflow-hidden shadow-card">
                  <img
                    src={profile2}
                    alt="Hassenar Kunnummal"
                    className="w-full h-full object-cover image-hover"
                  />
                </div>
              </div>
              <div className="relative animate-fade-up" style={{ animationDelay: "0.6s" }}>
                <div className="aspect-square rounded-xl overflow-hidden shadow-card">
                  <img
                    src={profile3}
                    alt="Hassenar Kunnummal"
                    className="w-full h-full object-cover image-hover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-card rounded-xl shadow-card p-4 hidden xl:block animate-fade-up" style={{ animationDelay: "0.8s" }}>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-accent">15+</p>
                <p className="text-sm text-muted-foreground">Years as<br />KMCC President</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
