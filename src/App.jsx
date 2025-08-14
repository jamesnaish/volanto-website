import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout.jsx';

const Home       = lazy(() => import('./pages/Home.jsx'));
const About        = lazy(() => import('./pages/About.jsx'));
const What      = lazy(() => import('./pages/What.jsx'));
const Who    = lazy(() => import('./pages/Who.jsx'));
const Why = lazy(() => import('./pages/Why.jsx'));
const Contact    = lazy(() => import('./pages/Contact.jsx'));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="what" element={<What />} />
        <Route path="who" element={<Who />} />
        <Route path="about" element={<About />} />
        <Route path="why" element={<Why />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
