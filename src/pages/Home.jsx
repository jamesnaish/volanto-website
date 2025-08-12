import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../static/img/hero-smokey-arrow.png'; // adjust if you used .webp

export default function Home() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="home-title">
            <span className="break">We bring</span>
            <span className="break">magic.</span>
            <span className="break">You get gold.</span>
          </h1>

          <p className="lede">
            3x your profits. 10x your valuation.
          </p>

          <div className="hero-cta">
            <Link to="/connect" className="btn btn-gradient">
              Get Started
            </Link>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <img src={arrow} alt="" loading="eager" decoding="async" />
        </div>
      </div>
    </section>
  );
}
