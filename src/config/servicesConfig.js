import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const SERVICES = [
  {
    id: 'rental',
    title: 'Generator Rental',
    slug: 'rental',
    shortDescription: 'Flexible rental options for all capacities (5kVA to 1250kVA)',
    icon: <LocalShippingIcon sx={{ fontSize: 64 }} />,
    features: ['Short-term & Long-term', 'All capacities available', 'Quick delivery'],
    path: '/generator-for-rent-chennai',
  },
  {
    id: 'sales',
    title: 'Generator Sales',
    slug: 'sales',
    shortDescription: 'Used & certified generators — Kirloskar, Mahindra, Ashok Leyland, Cummins',
    icon: <BuildIcon sx={{ fontSize: 64 }} />,
    features: ['Kirloskar', 'Cummins', 'Mahindra', 'Ashok Leyland'],
    path: '/used-generator-for-sale-chennai',
  },
  {
    id: 'repair',
    title: 'Generator Repair',
    slug: 'repair',
    shortDescription: '24/7 breakdown service and repair',
    icon: <SettingsIcon sx={{ fontSize: 64 }} />,
    features: ['Fast response', 'Expert technicians', 'Genuine spare parts'],
    path: '/services/repair',
  },
  {
    id: 'amc',
    title: 'AMC & Service',
    slug: 'amc',
    shortDescription: 'Annual Maintenance Contracts for worry-free operation',
    icon: <AssignmentIcon sx={{ fontSize: 64 }} />,
    features: ['Preventive maintenance', 'Regular check-ups', 'Priority service'],
    path: '/generator-amc-service-chennai',
  },
];
