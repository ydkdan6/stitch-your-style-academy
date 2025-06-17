
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              TailorCraft Academy
            </h3>
            <p className="text-gray-400 mb-6">
              Empowering women with professional tailoring skills for personal fulfillment and entrepreneurial success.
            </p>
            <div className="flex items-center text-gray-400">
              <Heart className="h-4 w-4 mr-2 text-tailoring-rose" />
              Made with love for aspiring tailors
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Tailoring Fundamentals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pattern Drafting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advanced Techniques</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Skills</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Live Chat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-400 mb-4">
              Get weekly tips, new pattern releases, and community highlights.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tailoring-purple"
              />
              <Button className="w-full gradient-purple text-white hover:opacity-90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 TailorCraft Academy. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                hello@tailorcraftacademy.com
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                1-800-TAILOR
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
