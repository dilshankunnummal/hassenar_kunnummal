import { ChefHat, Briefcase, Users } from "lucide-react";

const careerData = [
  {
    icon: ChefHat,
    title: "Head Chef",
    company: "Hush Restaurant",
    period: "2006 – 2020",
    description: "Led culinary operations and crafted exceptional dining experiences for over 14 years.",
  },
  {
    icon: ChefHat,
    title: "Head Chef",
    company: "Pearl Restaurant, Beckenham",
    period: "2020 – Present",
    description: "Currently leading the kitchen team, bringing innovative culinary creations to diners.",
  },
  {
    icon: Users,
    title: "President",
    company: "Britain KMCC",
    period: "2010 – Present",
    description: "Leading community initiatives and fostering unity among the diaspora community in Britain.",
  },
];

const CareerSection = () => {
  return (
    <section id="career" className="py-20 lg:py-32 bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Professional Journey
          </span>
          <h2 className="section-heading mt-4 mb-4">Career & Service</h2>
          <div className="divider-gold mx-auto" />
          <p className="section-subheading mt-6 max-w-2xl mx-auto text-balance">
            From moving to England to becoming a respected Head Chef and community leader, 
            Hassenar's journey exemplifies dedication and excellence.
          </p>
        </div>

        {/* Career Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerData.map((item, index) => (
            <div
              key={index}
              className="group card-elegant p-8 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-accent font-medium">{item.company}</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "18+", label: "Years in UK" },
            { value: "15+", label: "Years as KMCC President" },
            { value: "2", label: "Prestigious Restaurants" },
            { value: "1000+", label: "Community Members Served" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-secondary/50 rounded-xl"
            >
              <p className="text-3xl md:text-4xl font-serif font-bold text-accent mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
