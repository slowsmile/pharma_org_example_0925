import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Microscope } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/pharma-hero.jpg";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Pharmaceutical research laboratory" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-blue-light/90 to-medical-blue/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-medical-blue-dark mb-6 leading-tight">
            {t('hero.title1')}
            <span className="block bg-gradient-to-r from-medical-blue-dark to-medical-blue bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="professional" size="lg" className="group">
              {t('hero.becomeMember')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="medical" size="lg">
              {t('hero.exploreMission')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-trust-white/80 backdrop-blur-sm rounded-lg shadow-card">
              <Shield className="h-12 w-12 text-medical-blue-dark mb-4" />
              <h3 className="text-2xl font-bold text-medical-blue-dark mb-2">{t('hero.stat1')}</h3>
              <p className="text-foreground text-center">{t('hero.stat1Label')}</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-trust-white/80 backdrop-blur-sm rounded-lg shadow-card">
              <Users className="h-12 w-12 text-medical-blue-dark mb-4" />
              <h3 className="text-2xl font-bold text-medical-blue-dark mb-2">{t('hero.stat2')}</h3>
              <p className="text-foreground text-center">{t('hero.stat2Label')}</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-trust-white/80 backdrop-blur-sm rounded-lg shadow-card">
              <Microscope className="h-12 w-12 text-medical-blue-dark mb-4" />
              <h3 className="text-2xl font-bold text-medical-blue-dark mb-2">{t('hero.stat3')}</h3>
              <p className="text-foreground text-center">{t('hero.stat3Label')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;