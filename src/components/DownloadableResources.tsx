
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Video, Image } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface Resource {
  id: string;
  title: string;
  description: string;
  file_url: string;
  file_type: string;
  category: string;
  downloads_count: number;
}

const DownloadableResources = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    const { data, error } = await supabase
      .from('resources')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to load resources",
        variant: "destructive"
      });
    } else {
      setResources(data || []);
    }
  };

  const handleDownload = async (resource: Resource) => {
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to download resources",
        variant: "destructive"
      });
      return;
    }

    // Increment download count
    await supabase
      .from('resources')
      .update({ downloads_count: resource.downloads_count + 1 })
      .eq('id', resource.id);

    // Create a download link
    const link = document.createElement('a');
    link.href = resource.file_url;
    link.download = resource.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download started",
      description: `${resource.title} is being downloaded`
    });

    fetchResources(); // Refresh to update download count
  };

  const getIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return FileText;
      case 'video':
      case 'mp4':
        return Video;
      case 'image':
      case 'jpg':
      case 'png':
        return Image;
      default:
        return FileText;
    }
  };

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
            const Icon = getIcon(resource.file_type);
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
                          {resource.category}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {resource.file_type}
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
                      <span>{resource.downloads_count} downloads</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full gradient-purple text-white hover:opacity-90 transition-opacity"
                    onClick={() => handleDownload(resource)}
                  >
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

export default DownloadableResources;
