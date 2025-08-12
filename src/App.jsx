import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout.jsx';

// Lazy-load pages (automatic code-splitting)
const Home       = lazy(() => import('./pages/Home.jsx'));
const Lab        = lazy(() => import('./pages/Lab.jsx'));
const Craft      = lazy(() => import('./pages/Craft.jsx'));
const Domains    = lazy(() => import('./pages/Domains.jsx'));
const Experience = lazy(() => import('./pages/Experience.jsx'));
const Connect    = lazy(() => import('./pages/Connect.jsx'));

export default function App() {
  return (
    <Suspense fallback={<div className="page-loading">Loading…</div>}>
      <Routes>
        {/* Layout route wraps all pages with shared header/footer */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lab" element={<Lab />} />
          <Route path="craft" element={<Craft />} />
          <Route path="domains" element={<Domains />} />
          <Route path="experience" element={<Experience />} />
          <Route path="connect" element={<Connect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
