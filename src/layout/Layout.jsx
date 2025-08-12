import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="viewport-body">
        <Suspense fallback={<div className="page-loading">Loading…</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
