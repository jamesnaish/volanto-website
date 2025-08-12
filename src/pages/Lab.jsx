import React, { useState, useEffect, useCallback, useRef } from 'react';
import mission from '../static/img/transmutation.png';

import laura from '../static/img/laura.png';
import james from '../static/img/james.png';
import network from '../static/img/network.png';
import agents from '../static/img/agents.png';
import uspArt from '../static/img/usp.png';

export default function Lab() {
  const people = [
    { name: 'Laura Findley',   img: laura,   blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'James Naish',     img: james,   blurb: 'Product strategist and design lead for rapid validation.' },
    { name: 'Our Network',     img: network, blurb: 'ML engineer turning prototypes into reliable systems.' },
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
      <div className="container lab-grid lab-grid--three">
        <h1 id="lab-title" className="section-title lab-heading">Our Lab</h1>

        {/* LEFT — Mission */}
        <div className="lab-people lab-col">
          <div className="media-frame">
            <img src={mission} alt="The Volanto lab mission illustration" />
          </div>
          <h2 className="subhead">Our Mission</h2>
          <p className="mission-lede">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet est dolore magna aliquam erat.
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

        <div className="v-divider" aria-hidden="true" />

        {/* RIGHT — USP */}
        <aside className="usp-card lab-col" aria-labelledby="usp-title">
          <div className="media-frame">
            <img className="usp-art" src={uspArt} alt="Our USP illustration" />
          </div>
          <h2 id="usp-title" className="subhead">Our USP</h2>
          <ul className="usp-list">
            <li>We’ve walked in your shoes</li>
            <li>We don't tolerate mediocrity. We're driven by excellence.</li>
            <li>We question every assumption and validate every idea.</li>
            <li>World-class legal, tech, and entrepreneurial expertise</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
