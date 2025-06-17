
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Community = () => {
  const navigate = useNavigate();

  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Vibrant Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow tailoring enthusiasts, share your creations, 
            get feedback, and support each other on your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Community Stats */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Users className="h-5 w-5 mr-2 text-tailoring-purple" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-tailoring-purple">2,847</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tailoring-rose">156</div>
                  <div className="text-sm text-gray-600">Projects Shared Today</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tailoring-sage">98%</div>
                  <div className="text-sm text-gray-600">Helpful Responses</div>
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={() => navigate('/forum')}
              className="w-full gradient-purple text-white hover:opacity-90 mb-4"
            >
              Join Discussion
            </Button>
            
            <Button 
              onClick={() => navigate('/forum')}
              variant="outline" 
              className="w-full border-tailoring-purple text-tailoring-purple hover:bg-tailoring-purple hover:text-white"
            >
              Share Your Project
            </Button>
          </div>

          {/* Community Description */}
          <div className="lg:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Connect & Learn Together</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Our community forum is where learning comes alive through shared experiences and mutual support.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-gray-900">Share Your Journey</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Post photos of your completed projects</li>
                      <li>• Ask questions and get expert advice</li>
                      <li>• Share tips and techniques you've learned</li>
                      <li>• Celebrate milestones with fellow crafters</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-gray-900">Get Support</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Troubleshoot challenging techniques</li>
                      <li>• Find study buddies and practice partners</li>
                      <li>• Get feedback on your work</li>
                      <li>• Connect with local tailoring groups</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <p className="text-gray-600 text-center">
                    Ready to connect with fellow tailors? Join our forum and start your first conversation today!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
