import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, FileText, Stethoscope, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import conferenceImage from "@/assets/conference.jpg";
import manufacturingImage from "@/assets/manufacturing.jpg";

const Services = () => {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-20 bg-trust-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue-dark mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-professional-gray max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden hover:shadow-hero transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={conferenceImage} 
                alt="Professional conference" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center text-medical-blue-dark">
                <GraduationCap className="h-6 w-6 mr-2" />
                {t('services.continuingEducation')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                {t('services.continuingEducationDesc')}
              </p>
              <ul className="text-sm text-professional-gray space-y-2 mb-4">
                <li>{t('services.continuingEducationFeature1')}</li>
                <li>{t('services.continuingEducationFeature2')}</li>
                <li>{t('services.continuingEducationFeature3')}</li>
                <li>{t('services.continuingEducationFeature4')}</li>
              </ul>
              <Button variant="medical" className="group">
                {t('services.learnMore')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-hero transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={manufacturingImage} 
                alt="Manufacturing facility" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center text-medical-blue-dark">
                <Users className="h-6 w-6 mr-2" />
                {t('services.networking')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                {t('services.networkingDesc')}
              </p>
              <ul className="text-sm text-professional-gray space-y-2 mb-4">
                <li>{t('services.networkingFeature1')}</li>
                <li>{t('services.networkingFeature2')}</li>
                <li>{t('services.networkingFeature3')}</li>
                <li>{t('services.networkingFeature4')}</li>
              </ul>
              <Button variant="medical" className="group">
                {t('services.joinNetwork')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 hover:shadow-hero transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-medical-blue-dark">
                <FileText className="h-6 w-6 mr-2" />
                {t('services.research')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                {t('services.researchDesc')}
              </p>
              <Button variant="outline" size="sm">
                {t('services.viewPublications')}
              </Button>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-hero transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-medical-blue-dark">
                <Stethoscope className="h-6 w-6 mr-2" />
                {t('services.guidelines')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                {t('services.guidelinesDesc')}
              </p>
              <Button variant="outline" size="sm">
                {t('services.accessGuidelines')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;