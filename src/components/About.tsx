import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Globe, Heart } from "lucide-react";
import researchImage from "@/assets/research-lab.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue-dark mb-4">
            About PharmaPro Alliance
          </h2>
          <p className="text-lg text-professional-gray max-w-3xl mx-auto">
            For over three decades, we've been at the forefront of pharmaceutical advancement, 
            connecting professionals and driving innovation in healthcare.
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
              Leading the Future of Pharmaceutical Science
            </h3>
            <p className="text-foreground leading-relaxed">
              Our organization serves as the premier platform for pharmaceutical professionals 
              to collaborate, learn, and advance the field of healthcare. We bridge the gap 
              between research and practice, fostering innovation that improves patient outcomes globally.
            </p>
            <p className="text-foreground leading-relaxed">
              Through our comprehensive programs, continuing education opportunities, and 
              research initiatives, we empower our members to stay at the cutting edge of 
              pharmaceutical science and contribute to meaningful healthcare advances.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-hero transition-all duration-300">
            <CardContent className="pt-6">
              <Award className="h-12 w-12 text-medical-blue-dark mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-medical-blue-dark mb-2">Excellence</h4>
              <p className="text-foreground text-sm">
                Committed to the highest standards in pharmaceutical practice and research.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-hero transition-all duration-300">
            <CardContent className="pt-6">
              <BookOpen className="h-12 w-12 text-medical-blue-dark mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-medical-blue-dark mb-2">Education</h4>
              <p className="text-foreground text-sm">
                Providing continuous learning opportunities for professional development.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-hero transition-all duration-300">
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 text-medical-blue-dark mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-medical-blue-dark mb-2">Global Impact</h4>
              <p className="text-foreground text-sm">
                Connecting professionals worldwide to address global health challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-hero transition-all duration-300">
            <CardContent className="pt-6">
              <Heart className="h-12 w-12 text-medical-blue-dark mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-medical-blue-dark mb-2">Patient Care</h4>
              <p className="text-foreground text-sm">
                Dedicated to improving patient outcomes through innovative pharmaceutical solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;