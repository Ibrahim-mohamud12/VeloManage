import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Car className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold gradient-text">CMIS</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:text-blue-400">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="btn-primary">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;