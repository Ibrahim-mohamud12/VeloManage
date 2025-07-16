import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Benefits = () => {
  const benefitsList = [
    "Reduce incident response time by 60%",
    "Streamline fleet management operations",
    "Improve customer satisfaction scores",
    "Minimize vehicle downtime",
    "Enhance regulatory compliance"
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img  
              className="w-full h-auto rounded-2xl shadow-2xl" 
              alt="Fleet management analytics dashboard"
             src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Transform Your{' '}
              <span className="gradient-text">Fleet Operations</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of dealerships and fleet managers who have revolutionized 
              their operations with our comprehensive management platform.
            </p>
            
            <div className="space-y-4">
              {benefitsList.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;