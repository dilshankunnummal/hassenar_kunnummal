import { useState } from "react";
import { ChefHat, Award, Trophy, X, ChevronLeft, ChevronRight } from "lucide-react";
import achievement4 from "@/assets/achievement-4.jpg";
import achievement1 from "@/assets/achievement-1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
import news5 from "@/assets/news-5.jpg";

const careerImages = [
  { src: achievement4, alt: "Career Image 1" },
  { src: achievement1, alt: "Career Image 2" },
  { src: gallery1, alt: "Career Image 3" },
  { src: gallery3, alt: "Career Image 4" },
  { src: gallery4, alt: "Career Image 5" },
  { src: news1, alt: "Career Image 6" },
  { src: news2, alt: "Career Image 7" },
  { src: news3, alt: "Career Image 8" },
  { src: news4, alt: "Career Image 9" },
  { src: news5, alt: "Career Image 10" },
];

const awardDishes = [
  "Chicken Masala with Porotta",
  "Prawn Ricotto",
];

const CareerSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + careerImages.length) % careerImages.length : null));
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % careerImages.length : null));

  return (
    <section id="career" className="py-20 lg:py-32 bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Professional Journey
          </span>
          <h2 className="section-heading mt-4 mb-4">Culinary Career</h2>
          <div className="divider-gold mx-auto" />
        </div>

        {/* Main Career Card - Hush Restaurant */}
        <div className="card-elegant p-8 lg:p-12 mb-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-accent/10 rounded-xl">
                  <ChefHat className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary">
                    Head Chef
                  </h3>
                  <p className="text-xl text-accent font-medium">Hush Restaurant, London</p>
                </div>
              </div>
              
              <div className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-6">
                April 2006 – December 2020
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Served as Head Chef for over 14 years, leading culinary operations and 
                crafting exceptional dining experiences at one of London's finest establishments.
              </p>

              {/* Award Highlight */}
              <div className="bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-xl mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-6 h-6 text-accent" />
                  <h4 className="text-lg font-serif font-semibold text-primary">
                    2014 – Best Restaurant Award, London
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Award-winning dishes created by Hassenar:</p>
                <div className="flex flex-wrap gap-3">
                  {awardDishes.map((dish, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border"
                    >
                      <Award className="w-4 h-4 text-accent" />
                      <span className="font-medium text-foreground">{dish}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="lg:w-64 flex lg:flex-col gap-4">
              <div className="flex-1 text-center p-6 bg-primary text-primary-foreground rounded-xl">
                <p className="text-3xl font-serif font-bold text-accent mb-1">14+</p>
                <p className="text-sm opacity-80">Years of Excellence</p>
              </div>
              <div className="flex-1 text-center p-6 bg-secondary rounded-xl">
                <p className="text-3xl font-serif font-bold text-accent mb-1">2014</p>
                <p className="text-sm text-muted-foreground">Best Restaurant Award</p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Position */}
        <div className="card-elegant p-8 bg-gradient-to-br from-primary to-navy-dark text-primary-foreground mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/10 rounded-xl">
                <ChefHat className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold">Head Chef</h3>
                <p className="text-accent font-medium">Pearl Restaurant, Beckenham</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm opacity-70">Current Position</p>
              <p className="text-lg font-medium">2020 – Present</p>
            </div>
          </div>
        </div>

        {/* Career Image Gallery */}
        <div>
          <h3 className="text-xl font-serif font-semibold text-primary mb-6 text-center">
            Career Highlights Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {careerImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-card cursor-pointer bg-card focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/40 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/95 p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
          
          <img
            src={careerImages[selectedImage].src}
            alt={careerImages[selectedImage].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-image animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {selectedImage + 1} / {careerImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default CareerSection;
