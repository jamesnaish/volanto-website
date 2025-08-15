// HowWeWork.jsx
import React from "react";
import "../static/css/how.css";

// Art
import machine from "../static/img/transmutation-machine.png";

// Step icons (PNG)
import distilPng from "../static/img/distillation.png";
import illuminatePng from "../static/img/lighthouse.png";
import synthesisePng from "../static/img/synthesis.png";
import transformPng from "../static/img/transformation.png";

const STEPS = [
  {
    title: "Distil",
    blurb:
      "Extract signal from noise—goals, constraints, and real system limits—until the brief is crystal clear.",
    icon: distilPng,
  },
  {
    title: "Illuminate",
    blurb:
      "Surface options & risks quickly. Small proofs and working demos light the straight path to value.",
    icon: illuminatePng,
  },
  {
    title: "Synthesise",
    blurb:
      "Product, data, and architecture converge into the smallest plan that actually wins.",
    icon: synthesisePng,
  },
  {
    title: "Transform",
    blurb:
      "Ship in tight loops, automate the boring, measure ROI, and harden what lasts.",
    icon: transformPng,
  },
];

export default function How() {
  return (
    <section className="how container" role="main">
      <h1 className="how-title">How we work</h1>

      <div className="how-grid">
        {/* LEFT: steps */}
        <div className="how-steps" role="list">
          {STEPS.map((s, i) => (
            <article className="how-step" role="listitem" key={s.title}>
              <img className="how-ico" src={s.icon} alt="" aria-hidden="true" />

              <div className="how-copy">
                <h3 className="how-step-title">
                  <span className="how-step-num">
                    {String(i + 1)}. {s.title}
                  </span>
                </h3>
                <p className="how-step-blurb">{s.blurb}</p>
              </div>
            </article>
          ))}
        </div>

        {/* MIDDLE: divider */}
        <div className="v-divider" aria-hidden="true" />

        {/* RIGHT: machine */}
        <aside className="how-right">
          <h2 className="how-subhead">Our Transmutation Machine</h2>
          <p className="how-lead">
            Raw input goes in: legacy systems, brittle workflows, scattered data.
            We tune five levers—speed, clarity, quality, automation, and platform—
            so what comes out is gold: simpler architectures, faster delivery, and measurable ROI.
          </p>
          <img
            className="machine-art"
            src={machine}
            alt="Volanto transmutation machine"
            loading="eager"
            decoding="async"
          />
        </aside>
      </div>
    </section>
  );
}
