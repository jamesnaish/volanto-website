import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../static/img/volanto-logo.png'; // or '@/assets/volanto_logo.png' if using src/assets

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // v6: add "active" class yourself
  const navCls = ({ isActive }) => (isActive ? 'active' : undefined);
  const ctaCls = ({ isActive }) => `cta${isActive ? ' active' : ''}`;

  return (
    <header className="site-header">
      <div className="container nav" aria-label="Primary">
        <Link className="logo" to="/" aria-label="Volanto home" onClick={close}>
          <img
            src={logo}
            alt="Volanto logo"
            loading="eager"
            decoding="async"
          />
        </Link>

        <button
          className={`menu-toggle${open ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="primaryNav"
          onClick={() => setOpen(!open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav
          id="primaryNav"
          className={`primary${open ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          <NavLink to="/lab" className={navCls} onClick={close}>Our Lab</NavLink>
          <NavLink to="/expertise" className={navCls} onClick={close}>Our Expertise</NavLink>
          <NavLink to="/craft" className={navCls} onClick={close}>Our Craft</NavLink>
          <NavLink to="/domains" className={navCls} onClick={close}>Our Domains</NavLink>
          <NavLink to="/connect" className={ctaCls} onClick={close}>Connect</NavLink>
        </nav>
      </div>
    </header>
  );
}
