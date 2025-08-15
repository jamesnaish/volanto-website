import React from "react";
import '../static/css/home.css';
import heroImg from "../static/img/volanto-elements-hero.png"; // Adjust the path as necessary

export default function Home() {
  return (
    <section className="v-hero container" aria-labelledby="v-hero-title">
      <div className="v-hero-grid">
        {/* LEFT: headline + lede + CTA */}
        <div className="v-copy">
          <h1 id="v-hero-title" className="v-title">
            Volanto:
            <br className="br-md" />
            the technology
            <br className="br-md" />
            alchemists
          </h1>

          <p className="v-lede">3× your profits. 10× your valuation.</p>

          <a className="v-cta" href="/contact">
            Let the alchemy begin
          </a>
        </div>

        {/* RIGHT: exact poster image */}
        <figure className="v-art" aria-hidden="true">
          <img
            src={heroImg}
            alt=""
            loading="eager"
            decoding="async"
            draggable="false"
          />
        </figure>
      </div>
    </section>
  );
}
