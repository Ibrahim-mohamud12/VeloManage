import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatsCards from '@/components/dashboard/StatsCards';
import IncidentControls from '@/components/dashboard/IncidentControls';
import IncidentList from '@/components/dashboard/IncidentList';
import IncidentModal from '@/components/dashboard/IncidentModal';

const Dashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [incidents, setIncidents] = useState([]);
  const [filteredIncidents, setFilteredIncidents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIncident, setEditingIncident] = useState(null);
  
  const initialFormData = {
    vehicleId: '',
    description: '',
    severity: 'medium',
    status: 'open',
    location: '',
    latitude: '',
    longitude: ''
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (user) {
      loadIncidents();
    }
  }, [user]);

  useEffect(() => {
    filterIncidents();
  }, [incidents, searchTerm, statusFilter]);
  
  const loadIncidents = () => {
    if (!user) return;
    const storedIncidents = localStorage.getItem(`cmis_incidents_${user.id}`);
    if (storedIncidents) {
      setIncidents(JSON.parse(storedIncidents));
    }
  };

  const saveIncidents = (newIncidents) => {
    localStorage.setItem(`cmis_incidents_${user.id}`, JSON.stringify(newIncidents));
    setIncidents(newIncidents);
  };

  const filterIncidents = () => {
    let filtered = incidents;
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(incident =>
        incident.vehicleId.toLowerCase().includes(lowercasedTerm) ||
        incident.description.toLowerCase().includes(lowercasedTerm) ||
        incident.location.toLowerCase().includes(lowercasedTerm)
      );
    }
    if (statusFilter !== 'all') {
      filtered = filtered.filter(incident => incident.status === statusFilter);
    }
    setFilteredIncidents(filtered);
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Geolocation Not Supported",
        description: "Your browser doesn't support geolocation.",
        variant: "destructive",
      });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData(prev => ({
          ...prev,
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString()
        }));
        toast({
          title: "Location Added",
          description: "Current location has been added to the incident.",
        });
      },
      () => {
        toast({
          title: "Location Error",
          description: "Unable to get current location. Please enter manually.",
          variant: "destructive",
        });
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingIncident) {
      const updatedIncidents = incidents.map(incident =>
        incident.id === editingIncident.id
          ? { ...incident, ...formData, updatedAt: new Date().toISOString() }
          : incident
      );
      saveIncidents(updatedIncidents);
      toast({
        title: "Incident Updated",
        description: "The incident has been successfully updated.",
      });
    } else {
      const newIncident = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      saveIncidents([...incidents, newIncident]);
      toast({
        title: "Incident Created",
        description: "New incident has been successfully created.",
      });
    }
    
    closeModal();
  };
  
  const openCreateModal = () => {
    setEditingIncident(null);
    setFormData(initialFormData);
    setIsModalOpen(true);
  };

  const handleEdit = (incident) => {
    setEditingIncident(incident);
    setFormData(incident);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingIncident(null);
    setFormData(initialFormData);
  };

  const handleDelete = (incidentId) => {
    const updatedIncidents = incidents.filter(incident => incident.id !== incidentId);
    saveIncidents(updatedIncidents);
    toast({
      title: "Incident Deleted",
      description: "The incident has been successfully deleted.",
    });
  };

  const stats = {
    total: incidents.length,
    open: incidents.filter(i => i.status === 'open').length,
    inProgress: incidents.filter(i => i.status === 'in-progress').length,
    resolved: incidents.filter(i => i.status === 'resolved').length
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - CMIS Car Management System</title>
        <meta name="description" content="Manage your car incidents, track fleet status, and monitor vehicle reports in your CMIS dashboard." />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        <DashboardHeader />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back, {user?.firstName}!
            </h1>
            <p className="text-gray-400">
              Manage your fleet incidents and track vehicle status from your dashboard.
            </p>
          </motion.div>

          <StatsCards stats={stats} />

          <IncidentControls 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            openCreateModal={openCreateModal}
          />

          <IncidentList
            incidents={incidents}
            filteredIncidents={filteredIncidents}
            openCreateModal={openCreateModal}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </main>
        
        <IncidentModal
          isOpen={isModalOpen}
          setIsOpen={closeModal}
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
          getCurrentLocation={getCurrentLocation}
          isEditing={!!editingIncident}
        />
      </div>
    </>
  );
};

export default Dashboard;