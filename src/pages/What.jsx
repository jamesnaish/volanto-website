import React from "react";
import "../static/css/what.css";

// reuse an existing brand hero (swap if you prefer)
import heroFlask from "../static/img/agentic-service.png";

export default function WhatWeDo() {
  return (
    <section className="wwd container" role="main">
      <h1 className="section-title">What We Do</h1>

      <figure className="wwd-hero">
        <img
          className="wwd-art"
          src={heroFlask}
          alt="A watercolor flask with a rising golden plume"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </figure>

      <p className="wwd-lede">
        We are technology alchemists. It’s that simple. We take challenges, obstacles and blockers, apply our formula of
        technology, expertise, insight and imagination, and turn your challenges into growth/value. 
      </p>

      <p className="wwd-lede">It’s simple. But it’s not easy. </p>

      <p className="wwd-lede">That’s why we only utilise the very best people.</p> 
    </section>
  );
}
