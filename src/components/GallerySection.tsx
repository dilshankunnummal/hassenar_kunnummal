import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryImages = [
  { src: gallery1, alt: "Gallery Image 1" },
  { src: gallery2, alt: "Gallery Image 2" },
  { src: gallery3, alt: "Gallery Image 3" },
  { src: gallery4, alt: "Gallery Image 4" },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Visual Journey
          </span>
          <h2 className="section-heading mt-4 mb-4">Gallery</h2>
          <div className="divider-gold mx-auto" />
          <p className="section-subheading mt-6 max-w-2xl mx-auto text-balance">
            A collection of memorable moments from events, gatherings, 
            and special occasions.
          </p>
        </div>

        {/* Masonry-style Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => {
            // Vary sizes for visual interest
            const isLarge = index === 0 || index === 3;
            return (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`group relative rounded-xl overflow-hidden shadow-card cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                  isLarge ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className={`${isLarge ? "aspect-square" : "aspect-[4/3]"}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">Click to view</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/95 p-4 animate-fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 md:left-8 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          <img
            src={galleryImages[selectedIndex].src}
            alt={galleryImages[selectedIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-image animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {selectedIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
