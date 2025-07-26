import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, FileText, Stethoscope, ArrowRight } from "lucide-react";
import conferenceImage from "@/assets/conference.jpg";
import manufacturingImage from "@/assets/manufacturing.jpg";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-trust-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue-dark mb-4">
            Our Services & Programs
          </h2>
          <p className="text-lg text-professional-gray max-w-3xl mx-auto">
            Comprehensive support for pharmaceutical professionals at every stage of their career.
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
                Continuing Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                Stay current with the latest developments in pharmaceutical science through our 
                comprehensive continuing education programs, workshops, and certification courses.
              </p>
              <ul className="text-sm text-professional-gray space-y-2 mb-4">
                <li>• Accredited CE programs</li>
                <li>• Online and in-person workshops</li>
                <li>• Professional certifications</li>
                <li>• Industry expert speakers</li>
              </ul>
              <Button variant="medical" className="group">
                Learn More
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
                Professional Networking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                Connect with peers, mentors, and industry leaders through our exclusive networking 
                events, forums, and collaborative research opportunities.
              </p>
              <ul className="text-sm text-professional-gray space-y-2 mb-4">
                <li>• Annual conferences</li>
                <li>• Regional meetups</li>
                <li>• Online community forums</li>
                <li>• Mentorship programs</li>
              </ul>
              <Button variant="medical" className="group">
                Join Network
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
                Research Publications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                Access cutting-edge research, publish your findings, and contribute to the 
                advancement of pharmaceutical knowledge through our peer-reviewed publications.
              </p>
              <Button variant="outline" size="sm">
                View Publications
              </Button>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-hero transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-medical-blue-dark">
                <Stethoscope className="h-6 w-6 mr-2" />
                Clinical Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                Evidence-based clinical guidelines and best practices to support optimal 
                patient care and pharmaceutical interventions in various healthcare settings.
              </p>
              <Button variant="outline" size="sm">
                Access Guidelines
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;