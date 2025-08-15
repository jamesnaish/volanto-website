import React from "react";
import "../static/css/who.css";

/* Drop your final PNG/SVGs here */
import heroImage from "../static/img/help.png";
import marketEdge from "../static/img/star.png";
import customers from "../static/img/magnet.png";
import customerExperience from "../static/img/cx-gui.png";
import profitableRelationships from "../static/img/scales.png";
import processes from "../static/img/agent-headset.png";
import risk from "../static/img/shield.png";
import integratedAcquisitions from "../static/img/plug.png";


const PROBLEMS = [
  {
    icon: marketEdge,
    title: "Create Market Edge",
    blurb:
      "Achieve market leadership and take share by differentiating with data, design, and AI."
  },
  {
    icon: customers,
    title: "Attract and Retain Customers",
    blurb:
      "Win more of the right customers and keep them with better solutions and service throughout the lifecycle."
  },
  {
    icon: customerExperience,
    title: "Enhance the Customer's Experience",
    blurb:
      "Remove friction and make every interaction faster, clearer, and more helpful; self-serve where it delights."
  },
  {
    icon: profitableRelationships,
    title: "Ensure Relationships Are Profitable",
    blurb:
      "Price, package, and serve each segment so every account is net-profitable and primed for expansion."
  },
  {
    icon: processes,
    title: "Streamline and Automate Process",
    blurb:
      "Eliminate manual work and compress cycle times—especially quote-to-cash—to cut cost and speed cash flow."
  },
  {
    icon: risk,
    title: "Reduce Risk",
    blurb:
      "Build in regulatory compliance, operational resilience, cybersecurity, and tech reliability to prevent losses and downtime."
  },
  {
    icon: integratedAcquisitions,
    title: "Successfully Integrate Acquisitions",
    blurb:
      "Rapidly unify data, systems, and ways of working to capture synergies and accelerate growth."
  }
];

export default function Who() {
  return (
    <main className="help page-shell">
      <div className="container help-grid">
        {/* LEFT */}
        <section className="help-left">
          <h1 className="section-title">Who we help</h1>

          <div className="help-content-wrapper">
            <img 
              className="help-hero-image" 
              src={heroImage} 
              alt=""
              aria-hidden="true"
            />

            <div className="help-text-content">
              <p className="help-lede">
                We don’t help everyone, because we will only take on work where we know we can add real value. We’re alchemists, after all.
              </p>

              <p className="help-lede">
                Because we focus on challenges and the ways we can craft growth from them, we are not limited to set industries, although we will have some industry specific web pages coming soon. 
              </p>
              <p className="help-lede">
                We categorise clients by the problems they are facing, rather than simply the industry they are in. Because obstacles to growth are never industry specific.
              </p>
              <p className="help-lede">
                If you are facing a challenge that doesn’t fit into these categories, don’t worry. Contact us, we can have a quick call and then we will tell you how we can turn your challenge into growth. And if we can’t, we’ll tell you that too. Heck, we’ll even refer you on to someone who can. 
                (You will never waste money on us. Because we are even more driven to deliver results for you than you are.)
              </p>

              <p className="help-lede">
                Find out if you are a good fit for us by taking our quiz here. It only takes 3 minutes to complete, and we’ll send you some great insights straight after.
              </p>

              <p className="help-lede">
                Or, if that’s not your thing, book a call here instead. 
              </p>

              <div className="help-ctas">
                <a className="btn btn-gradient" href="/contact">Book a call</a>
                <a className="btn btn-ghost" href="/quiz">Take our quiz</a>
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="v-divider" aria-hidden="true" />

        {/* RIGHT */}
        <aside className="help-right">
          <ul className="solve-list" role="list">
            {PROBLEMS.map(p => (
              <li className="solve-card" key={p.title}>
                <img className="solve-icon" src={p.icon} alt="" aria-hidden="true" />
                <div className="solve-copy">
                  <h3 className="solve-title">{p.title}</h3>
                  <p className="solve-blurb">{p.blurb}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
