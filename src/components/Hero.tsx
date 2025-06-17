
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-tailoring-cream via-tailoring-rose to-tailoring-lavender">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Master the Art of 
              <span className="text-gradient block">Tailoring</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Learn professional tailoring techniques from basic stitches to advanced pattern drafting. 
              Create beautiful, custom-fitted clothing for yourself or start your own tailoring business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="gradient-purple text-white hover:opacity-90 transition-opacity">
                <Play className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="border-tailoring-purple text-tailoring-purple hover:bg-tailoring-purple hover:text-white">
                Browse Courses
              </Button>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-tailoring-purple" />
                Self-paced learning
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-tailoring-purple" />
                Active community
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-square bg-gradient-to-br from-tailoring-purple to-tailoring-lavender rounded-xl flex items-center justify-center text-white text-6xl font-bold">
                ✂️
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Interactive Lessons</h3>
                <p className="text-gray-600 mt-2">Step-by-step video tutorials with downloadable patterns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
