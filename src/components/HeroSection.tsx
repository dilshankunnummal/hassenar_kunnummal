import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import profile1 from "@/assets/profile-1.jpg";
import profile2 from "@/assets/profile-2.jpg";
import profile3 from "@/assets/profile-3.jpg";
import profile4 from "@/assets/achievement-5.jpg";

const heroImages = [profile1, profile2, profile3, profile4];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Hassenar Kunnummal ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/70 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium tracking-wider uppercase mb-6">
              Professional Chef & Britain KMCC President
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Hassenar
            <br />
            <span className="text-accent">Kunnummal</span>
          </h1>
          
          <div className="w-20 h-1 bg-accent mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }} />
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Hassenar Kunnummal, born on 11 April 1971, is a professional chef originally from 
            Moonniyur, Chuzhali, Kerala. He is currently working as Head Chef in the UK and has 
            been serving as the President of Britain KMCC since 2010.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors shadow-elegant"
            >
              Learn More
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-accent w-8" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
