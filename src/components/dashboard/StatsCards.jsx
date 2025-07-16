import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, AlertTriangle, Clock, CheckCircle } from 'lucide-react';

const StatsCards = ({ stats }) => {
  const statItems = [
    { title: "Total Incidents", value: stats.total, icon: <BarChart3 className="h-8 w-8 text-blue-500" />, color: "text-white" },
    { title: "Open", value: stats.open, icon: <AlertTriangle className="h-8 w-8 text-red-500" />, color: "text-red-400" },
    { title: "In Progress", value: stats.inProgress, icon: <Clock className="h-8 w-8 text-yellow-500" />, color: "text-yellow-400" },
    { title: "Resolved", value: stats.resolved, icon: <CheckCircle className="h-8 w-8 text-green-500" />, color: "text-green-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
    >
      {statItems.map((item, index) => (
        <Card key={index} className="glass-effect border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{item.title}</p>
                <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
              </div>
              {item.icon}
            </div>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
};

export default StatsCards;