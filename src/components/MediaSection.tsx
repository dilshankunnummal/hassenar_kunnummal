import { useState } from "react";
import { X, Newspaper, FileText } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
import news5 from "@/assets/news-5.jpg";

const newsClippings = [
  { src: news1, alt: "Newspaper Coverage 1" },
  { src: news2, alt: "Newspaper Coverage 2" },
  { src: news3, alt: "Newspaper Coverage 3" },
  { src: news4, alt: "Newspaper Coverage 4" },
  { src: news5, alt: "Newspaper Coverage 5" },
];

const FULL_NEWSPAPER_PDF = "https://drive.google.com/file/d/1S1larfNrFgaoAudftpYFVH7z2w2w9USO/view";

const MediaSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="media" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Press & Publications
          </span>
          <h2 className="section-heading mt-4 mb-4">Media Coverage</h2>
          <div className="divider-gold mx-auto" />
          <p className="section-subheading mt-6 max-w-2xl mx-auto text-balance">
            Featured in various newspapers and media outlets for contributions 
            to the culinary world and community service.
          </p>
        </div>

        {/* News Clippings Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {newsClippings.map((clipping, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(clipping.src)}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-card cursor-pointer bg-card focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <img
                src={clipping.src}
                alt={clipping.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 text-white">
                  <Newspaper size={16} />
                  <span className="text-sm font-medium">View Clipping</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Full Newspaper PDF Link */}
        <div className="text-center">
          <a
            href={FULL_NEWSPAPER_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-elegant hover:shadow-card group"
          >
            <FileText size={24} className="group-hover:scale-110 transition-transform" />
            <span>View Full Newspaper Page (PDF)</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/95 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Newspaper Clipping"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-image animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default MediaSection;
