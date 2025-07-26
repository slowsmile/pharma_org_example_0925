import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New FDA Guidelines for Digital Therapeutics",
      excerpt: "The FDA has released comprehensive guidelines for the approval and regulation of digital therapeutic devices...",
      category: "Regulation",
      date: "January 15, 2024",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Breakthrough in Personalized Medicine",
      excerpt: "Recent advances in pharmacogenomics are revolutionizing how we approach personalized treatment protocols...",
      category: "Research",
      date: "January 12, 2024",
      readTime: "3 min read",
      featured: false
    },
    {
      id: 3,
      title: "2024 Annual Conference Registration Open",
      excerpt: "Join us for the largest gathering of pharmaceutical professionals. Early bird registration now available...",
      category: "Events",
      date: "January 10, 2024",
      readTime: "2 min read",
      featured: false
    },
    {
      id: 4,
      title: "AI in Drug Discovery: Current Trends",
      excerpt: "Artificial intelligence is transforming pharmaceutical research and development processes across the industry...",
      category: "Technology",
      date: "January 8, 2024",
      readTime: "4 min read",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Regulation": "bg-medical-blue text-trust-white",
      "Research": "bg-medical-blue-dark text-trust-white",
      "Events": "bg-secondary text-secondary-foreground",
      "Technology": "bg-accent text-accent-foreground"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <section id="news" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue-dark mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-professional-gray max-w-3xl mx-auto">
            Stay informed with the latest developments in pharmaceutical science and industry news.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Article */}
          <Card className="lg:row-span-2 overflow-hidden hover:shadow-hero transition-all duration-300">
            <div className="h-64 bg-gradient-to-br from-medical-blue to-medical-blue-light flex items-center justify-center">
              <div className="text-center text-trust-white p-8">
                <Badge className="mb-4 bg-trust-white text-medical-blue-dark">
                  {newsItems[0].category}
                </Badge>
                <h3 className="text-2xl font-bold mb-4">{newsItems[0].title}</h3>
                <div className="flex items-center justify-center space-x-4 text-sm opacity-90">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {newsItems[0].date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {newsItems[0].readTime}
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-foreground mb-6 leading-relaxed">
                {newsItems[0].excerpt}
              </p>
              <Button variant="professional" className="group">
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Other Articles */}
          <div className="space-y-6">
            {newsItems.slice(1).map((item) => (
              <Card key={item.id} className="hover:shadow-hero transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getCategoryColor(item.category)}>
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-sm text-professional-gray">
                      <Calendar className="h-3 w-3 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-medical-blue-dark hover:text-medical-blue cursor-pointer transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4 text-sm leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-professional-gray">
                      <Clock className="h-3 w-3 mr-1" />
                      {item.readTime}
                    </div>
                    <Button variant="ghost" size="sm" className="group">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="medical" size="lg">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
