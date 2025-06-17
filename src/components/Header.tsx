
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gradient">TailorCraft Academy</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#courses" className="text-gray-700 hover:text-tailoring-purple transition-colors">Courses</a>
            <a href="#community" className="text-gray-700 hover:text-tailoring-purple transition-colors">Community</a>
            <a href="#resources" className="text-gray-700 hover:text-tailoring-purple transition-colors">Resources</a>
            <a href="#progress" className="text-gray-700 hover:text-tailoring-purple transition-colors">My Progress</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
            <Button className="gradient-purple text-white hover:opacity-90 transition-opacity">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
