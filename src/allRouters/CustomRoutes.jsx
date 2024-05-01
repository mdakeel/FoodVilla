import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Error } from '../components/Error';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { AppLayout } from './AppLayout';
import { Body } from '../components/Body';
import { RestaurantCardDetails } from '../components/RestaurantCardDetails';

export default function CustomRoutes() {
  return (
    <Routes>
    {/* Home Route */}
      <Route path="/" element={<AppLayout><Body /></AppLayout>} />
      
    {/* About Route */}
      <Route path="/about" element={<AppLayout><About /></AppLayout>} />

    {/* Contact Route */}
      <Route path="/contact" element={<AppLayout><Contact /></AppLayout>} />

    {/* Contact Route */}
     <Route path="/restaurant/:id" element={<AppLayout><RestaurantCardDetails /></AppLayout>} />

    {/* Error Route */}
      <Route path="*" element={<Error />} />

    </Routes>
  );
}

// 


