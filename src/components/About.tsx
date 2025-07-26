import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Globe, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import researchImage from "@/assets/research-lab.jpg";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue-dark mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-professional-gray max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={researchImage} 
              alt="Pharmaceutical research" 
              className="rounded-lg shadow-professional w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-medical-blue-dark">
              {t('about.sectionTitle')}
            </h3>
            <p className="text-foreground leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-foreground leading-relaxed">
              {t('about.description2')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-hero transition-all duration-300">
            <CardContent className="pt-6">
              <Award className="h-12 w-12 text-medical-blue-dark mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-medical-blue-dark mb-2">{t('about.excellence')}</h4>
              <p className="text-foreground text-sm">
                {t('about.excellenceDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-hero transition-all duration-300">
            <CardContent className="pt-6">
              <BookOpen className="h-12 w-12 text-medical-blue-dark mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-medical-blue-dark mb-2">{t('about.education')}</h4>
              <p className="text-foreground text-sm">
                {t('about.educationDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-hero transition-all duration-300">
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 text-medical-blue-dark mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-medical-blue-dark mb-2">{t('about.globalImpact')}</h4>
              <p className="text-foreground text-sm">
                {t('about.globalImpactDesc')}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-hero transition-all duration-300">
            <CardContent className="pt-6">
              <Heart className="h-12 w-12 text-medical-blue-dark mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-medical-blue-dark mb-2">{t('about.patientCare')}</h4>
              <p className="text-foreground text-sm">
                {t('about.patientCareDesc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;