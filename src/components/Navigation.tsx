import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-trust-white/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-medical-blue-dark">
                PharmaPro Alliance
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-foreground hover:text-medical-blue-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-medical-blue-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#services" className="text-foreground hover:text-medical-blue-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#news" className="text-foreground hover:text-medical-blue-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                News
              </a>
              <a href="#contact" className="text-foreground hover:text-medical-blue-dark px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
              <Button variant="professional" className="ml-4">
                Join Now
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
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-medical-blue-dark block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-medical-blue-dark block px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="#news" className="text-foreground hover:text-medical-blue-dark block px-3 py-2 rounded-md text-base font-medium">
              News
            </a>
            <a href="#contact" className="text-foreground hover:text-medical-blue-dark block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
            <div className="px-3 py-2">
              <Button variant="professional" className="w-full">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;