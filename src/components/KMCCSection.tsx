import { useState } from "react";
import { Users, Award, X, ChevronLeft, ChevronRight } from "lucide-react";
import achievement2 from "@/assets/achievement-2.jpg";
import achievement3 from "@/assets/achievement-3.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const kmccImages = [
  { src: achievement2, alt: "KMCC Event 1" },
  { src: achievement3, alt: "KMCC Event 2" },
  { src: gallery2, alt: "KMCC Event 3" },
];

const KMCCSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + kmccImages.length) % kmccImages.length : null));
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % kmccImages.length : null));

  return (
    <section id="kmcc" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Community Leadership
          </span>
          <h2 className="section-heading mt-4 mb-4">Britain KMCC President</h2>
          <div className="divider-gold mx-auto" />
          <p className="section-subheading mt-6 max-w-2xl mx-auto text-balance">
            Leading community initiatives and fostering unity among the diaspora community in Britain.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="card-elegant p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-accent/10 rounded-xl">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary">President</h3>
                  <p className="text-accent font-medium">Britain KMCC</p>
                </div>
              </div>

              <div className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-6">
                2010 – Present
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                For over 15 years, Hassenar has been serving as the President of Britain KMCC, 
                dedicating his time and efforts to strengthen community bonds, organize cultural events, 
                and support the welfare of the diaspora community in the United Kingdom.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <Award className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-serif font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Years of Leadership</p>
                </div>
                <div className="text-center p-4 bg-secondary/50 rounded-xl">
                  <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-2xl font-serif font-bold text-primary">1000+</p>
                  <p className="text-sm text-muted-foreground">Community Members</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {kmccImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden rounded-xl shadow-card cursor-pointer bg-card focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            src={kmccImages[selectedImage].src}
            alt={kmccImages[selectedImage].alt}
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
            {selectedImage + 1} / {kmccImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default KMCCSection;
