import { useState } from "react";
import { X } from "lucide-react";
import achievement1 from "@/assets/achievement-1.jpg";
import achievement2 from "@/assets/achievement-2.jpg";
import achievement3 from "@/assets/achievement-3.jpg";
import achievement4 from "@/assets/achievement-4.jpg";
import achievement5 from "@/assets/achievement-5.jpg";

const achievements = [
  { src: achievement1, alt: "Achievement 1" },
  { src: achievement2, alt: "Achievement 2" },
  { src: achievement3, alt: "Achievement 3" },
  { src: achievement4, alt: "Achievement 4" },
  { src: achievement5, alt: "Achievement 5" },
];

const AchievementsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="achievements" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Recognition & Honors
          </span>
          <h2 className="section-heading mt-4 mb-4">Achievements</h2>
          <div className="divider-gold mx-auto" />
          <p className="section-subheading mt-6 max-w-2xl mx-auto text-balance">
            Celebrating milestones and recognitions earned through years of 
            dedicated service to the culinary arts and community.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(achievement.src)}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-card cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <img
                src={achievement.src}
                alt={achievement.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">Click to view</p>
              </div>
            </button>
          ))}
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
            alt="Achievement"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-image animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;
