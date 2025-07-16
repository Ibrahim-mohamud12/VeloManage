import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Plus } from 'lucide-react';
import IncidentCard from './IncidentCard';
import { Button } from '@/components/ui/button';

const IncidentList = ({ incidents, filteredIncidents, openCreateModal, handleEdit, handleDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="space-y-4"
    >
      {filteredIncidents.length === 0 ? (
        <Card className="glass-effect border-slate-700">
          <CardContent className="p-12 text-center">
            <Car className="h-16 w-16 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No incidents found</h3>
            <p className="text-gray-400 mb-6">
              {incidents.length === 0 
                ? "Create your first incident report to get started."
                : "Try adjusting your search or filter criteria."
              }
            </p>
            {incidents.length === 0 && (
              <Button onClick={openCreateModal} className="btn-primary">
                <Plus className="h-4 w-4 mr-2" />
                Create First Incident
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        filteredIncidents.map((incident) => (
          <IncidentCard 
            key={incident.id} 
            incident={incident} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        ))
      )}
    </motion.div>
  );
};

export default IncidentList;