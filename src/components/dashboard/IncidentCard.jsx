import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, AlertTriangle, CheckCircle, Clock, Edit, Trash2 } from 'lucide-react';

const IncidentCard = ({ incident, onEdit, onDelete }) => {
  const getStatusBadge = (status) => {
    const statusClasses = {
      open: 'status-badge status-open',
      'in-progress': 'status-badge status-in-progress',
      resolved: 'status-badge status-resolved'
    };
    return statusClasses[status] || statusClasses.open;
  };

  const getSeverityColor = (severity) => {
    const colors = {
      low: 'text-green-400',
      medium: 'text-yellow-400',
      high: 'text-red-400'
    };
    return colors[severity] || colors.medium;
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'open':
        return <AlertTriangle className="h-4 w-4" />;
      case 'in-progress':
        return <Clock className="h-4 w-4" />;
      case 'resolved':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  return (
    <Card className="incident-card">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-slate-700 ${getSeverityColor(incident.severity)}`}>
              {getStatusIcon(incident.status)}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Vehicle {incident.vehicleId}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className={getStatusBadge(incident.status)}>
                  {incident.status.replace('-', ' ')}
                </span>
                <span className={`text-sm font-medium ${getSeverityColor(incident.severity)}`}>
                  {incident.severity.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onEdit(incident)}
              className="text-blue-400 hover:text-blue-300"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onDelete(incident.id)}
              className="text-red-400 hover:text-red-300"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <p className="text-gray-300 mb-4">{incident.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2 text-gray-400">
            <MapPin className="h-4 w-4" />
            <span>{incident.location}</span>
          </div>
          {incident.latitude && incident.longitude && (
            <div className="flex items-center space-x-2 text-gray-400">
              <span>📍</span>
              <span>{incident.latitude}, {incident.longitude}</span>
            </div>
          )}
          <div className="flex items-center space-x-2 text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>{new Date(incident.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncidentCard;