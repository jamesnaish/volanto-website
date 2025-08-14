import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../static/css/about.css';
import mission from '../static/img/transmutation.png';

import laura from '../static/img/laura.png';
import james from '../static/img/james.png';
import network from '../static/img/network.png';
import agents from '../static/img/agents.png';
import uspArt from '../static/img/usp.png';

export default function About() {
  const people = [
    { name: 'Laura Findley',   img: laura,   blurb: 'A true polyglot, Laura brings a vast array of experience and insight to the team. Educated in Oxford, Kings and York, she has practised as a barrister, grown multiple businesses from start up to exit, raised VC funding, built global brands and developed products. Oh, and of course she can also build neural networks, design algorithms and architect enterprise level software solutions. Because she couldn’t be a technology alchemist without that.' },
    { name: 'James Naish',     img: james,   blurb: 'James is a true technologist. He operates at the forefront of technology but has a rare ability to switch from detail-focus to big picture thinking. He completed a PhD in AI back in 2012, before AI was a buzzword. He has scaled and managed software engineering teams of 50+, architected enterprise level software solutions, developed technology that led to 5x value buyouts, raised VC funding, worked in pretty much every industry from startups to big fintech firms and solved preciously ‘impossible’ AI problems.' },
    { name: 'Our Network',     img: network, blurb: 'Over the decades we have worked with hundreds of software professionals from developer, to analysts, testers to data scientists. We know who are the best in the business and we have them on speed dial. So we can get them, fast.' },
    { name: 'AI Tools & Agents', img: agents, blurb: 'ML engineer turning prototypes into reliable systems.' },
  ];

  const [idx, setIdx] = useState(0);
  const person = people[idx];
  const slideRef = useRef(null);

  const prev = useCallback(() => setIdx(i => (i - 1 + people.length) % people.length), [people.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % people.length), [people.length]);
  const goTo = (i) => setIdx(i);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  // touch swipe
  useEffect(() => {
    let startX = 0;
    const el = slideRef.current;
    if (!el) return;

    const onStart = (e) => { startX = (e.touches?.[0]?.clientX ?? 0); };
    const onEnd   = (e) => {
      const endX = (e.changedTouches?.[0]?.clientX ?? 0);
      const dx = endX - startX;
      if (Math.abs(dx) > 32) (dx > 0 ? prev() : next());
    };

    el.addEventListener('touchstart', onStart, { passive: true });
    el.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onStart);
      el.removeEventListener('touchend', onEnd);
    };
  }, [prev, next]);

  return (
    <section className="lab-page" aria-labelledby="lab-title">
      <div className="container lab-grid">
        <h1 id="lab-title" className="section-title lab-heading">Our Lab</h1>

        {/* LEFT — Mission */}
        <div className="lab-people lab-col">
          <div className="media-frame">
            <img src={mission} alt="The Volanto lab mission illustration" />
          </div>
          <h2 className="subhead">Our Company</h2>
          <p className="mission-lede">
            We are a boutique team of heavy hitting, A+ personalities, driven to take any challenge and find the silver lining.
            Oh wait, I mean the gold of course.
          </p>
          <p className="mission-lede">
            Because we are a boutique team you will always have access to the best people. And you will always be our priority.
          </p>
        </div>

        <div className="v-divider" aria-hidden="true" />

        {/* MIDDLE — Profile carousel */}
        <aside className="profile-card lab-col" aria-label="Lab team carousel">
          <div
            ref={slideRef}
            className="media-frame profile-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label="Lab team"
          >
            <img className="profile-avatar" src={person.img} alt={person.name} />
            <button className="car-btn prev" onClick={prev} aria-label="Previous person" />
            <button className="car-btn next" onClick={next} aria-label="Next person" />
          </div>

          <h3 className="profile-name">{person.name}</h3>
          <p className="profile-blurb">{person.blurb}</p>

          <div className="car-dots" role="tablist" aria-label="Select person">
            {people.map((p, i) => (
              <button
                key={p.name}
                className={`dot${i === idx ? ' active' : ''}`}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === idx}
                aria-label={`Show ${p.name}`}
              />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
