
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Video, Image } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: "Basic Dress Pattern Template",
    description: "Downloadable PDF pattern for sizes XS-XXL with detailed instructions.",
    type: "Pattern",
    format: "PDF",
    downloads: 1247,
    icon: FileText,
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "Fabric Selection Guide",
    description: "Comprehensive guide to choosing the right fabric for your projects.",
    type: "Guide",
    format: "PDF",
    downloads: 892,
    icon: FileText,
    difficulty: "All Levels"
  },
  {
    id: 3,
    title: "Advanced Dart Manipulation",
    description: "Video tutorial series on professional dart placement and adjustment techniques.",
    type: "Video Series",
    format: "MP4",
    downloads: 634,
    icon: Video,
    difficulty: "Advanced"
  },
  {
    id: 4,
    title: "Measurement Chart Template",
    description: "Printable measurement chart to ensure perfect fit for all your garments.",
    type: "Template",
    format: "PDF",
    downloads: 1156,
    icon: Image,
    difficulty: "All Levels"
  },
  {
    id: 5,
    title: "Seam Finishing Reference",
    description: "Visual guide to professional seam finishing techniques with step-by-step photos.",
    type: "Reference",
    format: "PDF",
    downloads: 743,
    icon: Image,
    difficulty: "Intermediate"
  },
  {
    id: 6,
    title: "Business Planning Workbook",
    description: "Complete workbook to help you plan and launch your tailoring business.",
    type: "Workbook",
    format: "PDF",
    downloads: 425,
    icon: FileText,
    difficulty: "All Levels"
  }
];

const Resources = () => {
  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Downloadable Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our extensive library of patterns, templates, guides, and reference materials 
            to support your tailoring journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card key={resource.id} className={`hover:shadow-xl transition-all duration-300 animate-fade-in h-full`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-tailoring-cream rounded-lg">
                        <Icon className="h-6 w-6 text-tailoring-purple" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="text-tailoring-purple bg-tailoring-cream">
                          {resource.type}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {resource.format}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Difficulty: {resource.difficulty}</span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-purple text-white hover:opacity-90 transition-opacity">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resource
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-tailoring-purple text-tailoring-purple hover:bg-tailoring-purple hover:text-white">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
