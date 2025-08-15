import React from "react";
import '../static/css/why.css';
// Drop your artwork in /static/img (PNG/SVG both fine)
import whyTree from "../static/img/with-volanto.png";
import notFitRoad from "../static/img/without-volanto.png";

function Point({ children, tone = "pro" }) {
  return <li className={`why-point ${tone}`}>{children}</li>;
}

export default function Why() {
  return (
    <section className="why-page" aria-labelledby="why-title" role="main">
      <div className="container">
        <header className="why-head">
          <h1 className="section-title">Why We're Different</h1>
        </header>

        <div className="why-grid">
          {/* Left: Why choose Volanto */}
          <article className="why-card" aria-labelledby="why-choose">
            <h2 id="why-choose" className="why-title">Why choose Volanto</h2>

            <div className="why-artwrap">
              <img className="why-art" src={whyTree} alt="A golden path leading to a thriving tree" />
            </div>

            <ul className="why-points" role="list">
              <Point>Straight path to measurable ROI.</Point>
              <Point>Hands-on architects who design &amp; ship.</Point>
              <Point>Modernisation without chaos; automation that sticks.</Point>
              <Point>Craftsmanship, velocity, and accountability.</Point>
            </ul>
          </article>

          {/* Right: When we're not a fit */}
          <article className="why-card" aria-labelledby="why-not">
            <h2 id="why-not" className="why-title">When we're not a fit</h2>

            <div className="why-artwrap">
              <img className="why-art" src={notFitRoad} alt="A forked road with a signpost in muted tones" />
            </div>

            <ul className="why-points" role="list">
              <Point tone="con">You want staff augmentation, not outcomes.</Point>
              <Point tone="con">You’re buying a boxed tool, not solving a problem.</Point>
              <Point tone="con">DIY exploration with no timeline or ownership.</Point>
              <Point tone="con">Optimising for the lowest rate over value.</Point>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
