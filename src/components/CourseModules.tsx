
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, CheckCircle } from 'lucide-react';

const modules = [
  {
    id: 1,
    title: "Tailoring Fundamentals",
    description: "Master the basics of tailoring including fabric selection, tools, and essential measurements.",
    duration: "4 weeks",
    lessons: 12,
    level: "Beginner",
    progress: 0,
    gradient: "gradient-purple"
  },
  {
    id: 2,
    title: "Pattern Drafting & Design",
    description: "Learn to create your own patterns from basic blocks to complex designs.",
    duration: "6 weeks",
    lessons: 18,
    level: "Intermediate",
    progress: 0,
    gradient: "gradient-rose"
  },
  {
    id: 3,
    title: "Advanced Sewing Techniques",
    description: "Professional finishing methods, complex construction, and couture techniques.",
    duration: "8 weeks",
    lessons: 24,
    level: "Advanced",
    progress: 0,
    gradient: "gradient-sage"
  },
  {
    id: 4,
    title: "Business & Entrepreneurship",
    description: "Turn your tailoring skills into a successful business with marketing and client management.",
    duration: "4 weeks",
    lessons: 15,
    level: "All Levels",
    progress: 0,
    gradient: "gradient-purple"
  }
];

const CourseModules = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Learning Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner basics to advanced techniques, our structured curriculum 
            guides you through every aspect of professional tailoring.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <Card key={module.id} className={`overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className={`h-2 ${module.gradient}`}></div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-tailoring-purple bg-tailoring-cream">
                    {module.level}
                  </Badge>
                  {module.progress > 0 && (
                    <Badge variant="default" className="bg-green-100 text-green-700">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {module.progress}% Complete
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {module.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {module.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {module.lessons} lessons
                  </div>
                </div>
                
                {module.progress > 0 ? (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{module.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-tailoring-purple h-2 rounded-full transition-all duration-300"
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                    <Button className="w-full mt-4 gradient-purple text-white hover:opacity-90">
                      Continue Learning
                    </Button>
                  </div>
                ) : (
                  <Button className="w-full gradient-purple text-white hover:opacity-90 transition-opacity">
                    Start Module
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseModules;
