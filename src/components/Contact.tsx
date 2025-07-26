import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-trust-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue-dark mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-professional-gray max-w-3xl mx-auto">
            Ready to join our community or have questions? We're here to help you advance your pharmaceutical career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-medical-blue-dark mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-medical-blue rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-trust-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-blue-dark mb-1">Email</h4>
                    <p className="text-foreground">info@pharmaproalliance.org</p>
                    <p className="text-foreground">membership@pharmaproalliance.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-medical-blue rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-trust-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-blue-dark mb-1">Phone</h4>
                    <p className="text-foreground">+1 (555) 123-4567</p>
                    <p className="text-foreground">Toll Free: +1 (800) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-medical-blue rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-trust-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-medical-blue-dark mb-1">Address</h4>
                    <p className="text-foreground">
                      123 Medical Plaza<br />
                      Suite 500<br />
                      Healthcare City, HC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-medical-blue to-medical-blue-light p-6 rounded-lg text-trust-white">
              <h4 className="font-semibold mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 2:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-professional">
            <CardHeader>
              <CardTitle className="text-medical-blue-dark">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="john.doe@example.com" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <Input type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input placeholder="How can we help you?" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..." 
                  className="min-h-[120px]"
                />
              </div>

              <Button variant="professional" className="w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;