import React from "react";
import '../static/css/home.css';

export default function Home() {
  return (
    <main className="alchemy-hero container" role="main" aria-labelledby="alchemy-title">
      <h1 id="alchemy-title" className="alchemy-title">
        Volanto are the <span>technology alchemists</span>
      </h1>

      <figure className="alchemy-atom" aria-label="Gold nugget core with six elements orbiting as electrons">
        <svg
          className="atom-svg"
          viewBox="0 0 800 800"
          role="img"
          aria-labelledby="atomTitle atomDesc"
        >
          <title id="atomTitle">Volanto — technology alchemists</title>
          <desc id="atomDesc">
            A stylised atom with a gold nugget at its centre. Six labelled
            electrons: Technology, Imagination, Knowledge, Experience, Impact, Craftsmanship.
          </desc>

          <defs>
            {/* watercolour soften */}
            <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" />
            </filter>

            {/* gold tones */}
            <radialGradient id="gold" cx="48%" cy="36%" r="60%">
              <stop offset="0%" stopColor="#f4d47a" />
              <stop offset="45%" stopColor="#e0b95e" />
              <stop offset="100%" stopColor="#b88a3a" />
            </radialGradient>

            {/* subtle paper highlight on nugget */}
            <radialGradient id="goldHighlight" cx="32%" cy="28%" r="36%">
              <stop offset="0%" stopColor="rgba(255,255,255,.55)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          {/* orbits (soft watercolor strokes) */}
          <g filter="url(#soft)" strokeLinecap="round" fill="none">
            <ellipse className="orbit orbit--rose"  cx="400" cy="400" rx="320" ry="220" transform="rotate(-18 400 400)" />
            <ellipse className="orbit orbit--lilac" cx="400" cy="400" rx="300" ry="210" transform="rotate(28 400 400)" />
            <ellipse className="orbit orbit--sky"   cx="400" cy="400" rx="270" ry="200" transform="rotate(-2 400 400)" />
            <ellipse className="orbit orbit--fern"  cx="400" cy="400" rx="255" ry="175" transform="rotate(62 400 400)" />
          </g>

          {/* gold nugget core (simple faceted blob) */}
          <g className="nugget">
            <circle cx="400" cy="400" r="88" fill="url(#gold)" />
            {/* a few facets */}
            <path d="M365 355 l35 -18 28 10 -8 22 -24 12 -32 -9z" fill="#f6de97" opacity=".85"/>
            <path d="M430 370 l28 -16 18 20 -10 26 -34 6 -18 -20z" fill="#d3a953" opacity=".9"/>
            <path d="M372 418 l22 -14 30 8 10 22 -26 18 -30 -8z" fill="#c8963c" opacity=".9"/>
            <circle cx="382" cy="372" r="54" fill="url(#goldHighlight)" opacity=".55"/>
          </g>

          {/* electrons + labels (positions chosen to match your image) */}
          <g className="labels">
            {/* Technology */}
            <g transform="translate(150,365)">
              <circle className="electron electron--sky" r="10" />
              <text className="label" x="-20" y="8" textAnchor="end">Technology</text>
            </g>

            {/* Imagination */}
            <g transform="translate(595,210)">
              <circle className="electron electron--lilac" r="10" />
              <text className="label" x="22" y="6">Imagination</text>
            </g>

            {/* Knowledge */}
            <g transform="translate(665,420)">
              <circle className="electron electron--fern" r="10" />
              <text className="label" x="22" y="6">Knowledge</text>
            </g>

            {/* Experience */}
            <g transform="translate(545,565)">
              <circle className="electron electron--slate" r="10" />
              <text className="label" x="22" y="6">Experience</text>
            </g>

            {/* Impact */}
            <g transform="translate(300,615)">
              <circle className="electron electron--rose" r="10" />
              <text className="label" x="-18" y="6" textAnchor="end">Impact</text>
            </g>

            {/* Craftsmanship */}
            <g transform="translate(125,510)">
              <circle className="electron electron--roseDark" r="10" />
              <text className="label" x="-22" y="6" textAnchor="end">Craftsmanship</text>
            </g>
          </g>
        </svg>
      </figure>

      <a className="alchemy-cta" href="/contact" aria-label="Contact Volanto">
        Let the alchemy begin
      </a>
    </main>
  );
}
