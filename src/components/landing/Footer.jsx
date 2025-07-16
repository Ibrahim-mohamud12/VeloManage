import React from 'react';
import { Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold gradient-text">CMIS</span>
            </div>
            <p className="text-gray-400">
              Smart car incident management for modern fleets and dealerships.
            </p>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Product</span>
            <div className="space-y-2">
              <p className="text-gray-400">Features</p>
              <p className="text-gray-400">Pricing</p>
              <p className="text-gray-400">API</p>
              <p className="text-gray-400">Documentation</p>
            </div>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Company</span>
            <div className="space-y-2">
              <p className="text-gray-400">About</p>
              <p className="text-gray-400">Blog</p>
              <p className="text-gray-400">Careers</p>
              <p className="text-gray-400">Contact</p>
            </div>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Support</span>
            <div className="space-y-2">
              <p className="text-gray-400">Help Center</p>
              <p className="text-gray-400">Privacy Policy</p>
              <p className="text-gray-400">Terms of Service</p>
              <p className="text-gray-400">Status</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 CMIS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;