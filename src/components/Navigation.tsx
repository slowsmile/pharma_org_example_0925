import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-trust-white/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-medical-blue-dark">
                {t('nav.organizationName')}
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-foreground hover:text-medical-blue-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('nav.home')}
              </a>
              <a href="#about" className="text-foreground hover:text-medical-blue-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('nav.about')}
              </a>
              <a href="#services" className="text-foreground hover:text-medical-blue-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('nav.services')}
              </a>
              <a href="#news" className="text-foreground hover:text-medical-blue-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('nav.news')}
              </a>
              <a href="#contact" className="text-foreground hover:text-medical-blue-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('nav.contact')}
              </a>
              
              {/* Language Switcher */}
              <div className="flex items-center space-x-2 ml-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                  className="flex items-center space-x-1"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-xs font-medium">
                    {language === 'en' ? '中文' : 'EN'}
                  </span>
                </Button>
              </div>
              
              <Button variant="professional" className="ml-4">
                {t('nav.joinNow')}
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-trust-white border-t border-border">
            <a href="#home" className="text-foreground hover:text-medical-blue-dark block px-3 py-2 rounded-md text-base font-medium">
              {t('nav.home')}
            </a>
            <a href="#about" className="text-foreground hover:text-medical-blue-dark block px-3 py-2 rounded-md text-base font-medium">
              {t('nav.about')}
            </a>
            <a href="#services" className="text-foreground hover:text-medical-blue-dark block px-3 py-2 rounded-md text-base font-medium">
              {t('nav.services')}
            </a>
            <a href="#news" className="text-foreground hover:text-medical-blue-dark block px-3 py-2 rounded-md text-base font-medium">
              {t('nav.news')}
            </a>
            <a href="#contact" className="text-foreground hover:text-medical-blue-dark block px-3 py-2 rounded-md text-base font-medium">
              {t('nav.contact')}
            </a>
            <div className="px-3 py-2 flex items-center justify-between">
              <Button variant="professional" className="flex-1 mr-2">
                {t('nav.joinNow')}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                className="flex items-center space-x-1"
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs font-medium">
                  {language === 'en' ? '中文' : 'EN'}
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;