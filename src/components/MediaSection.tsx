import { FileText, Newspaper, ExternalLink } from "lucide-react";

// const FULL_NEWSPAPER_PDF = "https://drive.google.com/file/d/1S1larfNrFgaoAudftpYFVH7z2w2w9USO/view";
const FULL_NEWSPAPER_PDF = "https://drive.google.com/file/d/1XZn10dYC0xDQ9uU0AJRvjixIDV0DOXuj/view?usp=sharing";

const MediaSection = () => {
  return (
    <section id="media" className="py-20 lg:py-32 bg-background">
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

        {/* Featured Media Card */}
        <div className="max-w-2xl mx-auto">
          <div className="card-elegant p-8 lg:p-12 text-center bg-gradient-to-br from-card to-secondary/30">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Newspaper className="w-10 h-10 text-accent" />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Featured Newspaper Coverage
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              View the complete newspaper feature covering Hassenar's culinary journey, 
              achievements at Hush Restaurant, and his leadership role in the community.
            </p>
            
            <a
              href={FULL_NEWSPAPER_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-elegant hover:shadow-card group"
            >
              <FileText size={24} className="group-hover:scale-110 transition-transform" />
              <span>View Full Newspaper Page</span>
              <ExternalLink size={18} className="opacity-70" />
            </a>
            
            <p className="text-sm text-muted-foreground mt-4">
              Opens in a new browser tab (PDF)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;