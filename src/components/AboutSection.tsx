import { GraduationCap, Award, Users, Heart } from "lucide-react";

const educationTimeline = [
  { year: "Primary", title: "AM LP School Palathingal" },
  { year: "Upper Primary", title: "Panikar UP School, Chiramangalam" },
  { year: "High School", title: "SNMHSS Parappanangadi" },
  { year: "Leadership", title: "MSF School Leader (8th & 10th standard)" },
  { year: "Public Speaking", title: "School Speaker (9th standard)" },
  { year: "Graduation", title: "Tagore College, Parappanangadi" },
  { year: "Achievement", title: "Individual Champion (1st year)" },
  { year: "Leadership", title: "Chairman, Tagore College Union (2nd year)" },
  { year: "Specialization", title: "Travel and Tourism - Home Science School of Engineering, Calicut" },
];

const familyMembers = [
  { name: "Sajla Koormath", role: "Wife" },
  { name: "Fathima Nasli", role: "Daughter" },
  { name: "Irene Aysha", role: "Daughter" },
  { name: "Ines Maryam", role: "Daughter" },
  { name: "Doona Misr", role: "Daughter" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Background & Journey
          </span>
          <h2 className="section-heading mt-4 mb-4">About Hassenar</h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-primary">
                Education & Leadership
              </h3>
            </div>
            
            <div className="space-y-4">
              {educationTimeline.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-accent rounded-full group-hover:scale-125 transition-transform" />
                    {index < educationTimeline.length - 1 && (
                      <div className="w-0.5 h-full min-h-[40px] bg-accent/20" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-sm text-accent font-medium mb-1">{item.year}</p>
                    <p className="text-foreground font-medium">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Family & Values */}
          <div className="space-y-8">
            {/* Family Card */}
            <div className="card-elegant p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary">
                  Family
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {familyMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                  >
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Origin Card */}
            <div className="card-elegant p-8 bg-gradient-to-br from-primary to-navy-dark text-primary-foreground">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold">
                  Roots & Heritage
                </h3>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Originally from Moonniyur, Chuzhali, Kerala, Hassenar carries the rich 
                cultural heritage of his homeland while making an impact globally through 
                his culinary expertise and community leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
