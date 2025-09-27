import { useLanguage } from "@/contexts/LanguageContext";

const Sponsors = () => {
  const { t } = useLanguage();

  const sponsors = [
    { id: 1, name: "BioTech Solutions", logo: "🧬" },
    { id: 2, name: "MedLife Corp", logo: "🏥" },
    { id: 3, name: "PharmAdvance", logo: "💊" },
    { id: 4, name: "HealthTech Inc", logo: "🔬" },
    { id: 5, name: "Global Pharma", logo: "🌍" },
    { id: 6, name: "Research Labs", logo: "⚗️" },
    { id: 7, name: "Medical Innovations", logo: "🧪" },
    { id: 8, name: "BioPharma Group", logo: "🔬" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-medical-blue/5 to-trust-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t('sponsors.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('sponsors.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="group flex flex-col items-center justify-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {sponsor.logo}
              </div>
              <div className="text-xs text-muted-foreground text-center font-medium">
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;