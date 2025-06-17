
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseModules from '@/components/CourseModules';
import ProgressTracker from '@/components/ProgressTracker';
import Community from '@/components/Community';
import Resources from '@/components/Resources';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CourseModules />
      <ProgressTracker />
      <Community />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
