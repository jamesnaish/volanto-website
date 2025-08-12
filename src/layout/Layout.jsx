import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="viewport-body">
        <Outlet /> {/* the active page renders here */}
      </main>
    </>
  );
}
