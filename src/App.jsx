import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout.jsx';

const Home       = lazy(() => import('./pages/Home.jsx'));
const About        = lazy(() => import('./pages/About.jsx'));
const Craft      = lazy(() => import('./pages/Craft.jsx'));
const Domains    = lazy(() => import('./pages/Domains.jsx'));
const Expertise = lazy(() => import('./pages/Expertise.jsx'));
const Connect    = lazy(() => import('./pages/Connect.jsx'));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="expertise" element={<Expertise />} />
        <Route path="craft" element={<Craft />} />
        <Route path="domains" element={<Domains />} />
        <Route path="connect" element={<Connect />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
