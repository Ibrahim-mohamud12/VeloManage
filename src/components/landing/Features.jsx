import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Clock, MapPin, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Real-Time Inventory",
      description: "Track your entire fleet with live updates and comprehensive vehicle status monitoring."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Maintenance Logs",
      description: "Smart scheduling and automated reminders for preventive maintenance and repairs."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "GPS Tracking",
      description: "Precise geolocation tracking for incidents with detailed mapping capabilities."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Accounts",
      description: "Enterprise-grade security with role-based access and data encryption."
    }
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Powerful Features for{' '}
            <span className="gradient-text">Fleet Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to manage your fleet efficiently and keep your 
            operations running smoothly with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="feature-card h-full p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;