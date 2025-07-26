import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Twitter, Facebook, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-medical-blue-dark text-trust-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{t('nav.organizationName')}</h3>
            <p className="text-medical-blue-light text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-trust-white hover:text-medical-blue hover:bg-trust-white p-2">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-trust-white hover:text-medical-blue hover:bg-trust-white p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-trust-white hover:text-medical-blue hover:bg-trust-white p-2">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-medical-blue-light hover:text-trust-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-medical-blue-light hover:text-trust-white transition-colors">Services</a></li>
              <li><a href="#news" className="text-medical-blue-light hover:text-trust-white transition-colors">News</a></li>
              <li><a href="#contact" className="text-medical-blue-light hover:text-trust-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-medical-blue-light hover:text-trust-white transition-colors">Membership</a></li>
              <li><a href="#" className="text-medical-blue-light hover:text-trust-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.resources')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-medical-blue-light hover:text-trust-white transition-colors">Research Publications</a></li>
              <li><a href="#" className="text-medical-blue-light hover:text-trust-white transition-colors">Clinical Guidelines</a></li>
              <li><a href="#" className="text-medical-blue-light hover:text-trust-white transition-colors">CE Programs</a></li>
              <li><a href="#" className="text-medical-blue-light hover:text-trust-white transition-colors">Member Portal</a></li>
              <li><a href="#" className="text-medical-blue-light hover:text-trust-white transition-colors">Event Calendar</a></li>
              <li><a href="#" className="text-medical-blue-light hover:text-trust-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.stayUpdated')}</h4>
            <p className="text-medical-blue-light text-sm">
              {t('footer.newsletterDesc')}
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-trust-white text-medical-blue-dark border-none"
              />
              <Button variant="secondary" className="w-full group">
                <Mail className="mr-2 h-4 w-4" />
                {t('footer.subscribe')}
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-medical-blue" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-medical-blue-light">
            {t('footer.copyright')}
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-medical-blue-light hover:text-trust-white transition-colors">
              {t('footer.privacyPolicy')}
            </a>
            <a href="#" className="text-medical-blue-light hover:text-trust-white transition-colors">
              {t('footer.termsOfService')}
            </a>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToTop}
              className="text-trust-white hover:text-medical-blue hover:bg-trust-white p-2"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;