import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';

const WelcomeOnBoard: NextPage = () => {
  return (
    <>
      <Head>
        <title>WOB — Welcome OnBoard | Midhun Madhavan</title>

        <meta
          name="description"
          content="WOB (Welcome OnBoard) is an offline industry orientation programme designed to help Computer Science and IT students understand the real-world software industry through direct interaction with industry professionals."
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="wob-container">
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <div className="logo-container">
              <Image
                src="/w-o-b-logo.png"
                alt="Welcome OnBoard Logo"
                width={600}
                height={600}
                priority
                className="wob-logo"
              />
            </div>

            <div className="programme-label">
              <span className="label-text">
                Offline Industry Orientation Programme
              </span>
            </div>

            <div className="hero-subtitle">
              A professionally designed industry exposure initiative that helps
              Computer Science and IT students understand the real-world
              software industry before entering it.
            </div>

            <div className="consultant-info">
              <div className="consultant-name">
                Designed & Coordinated by Midhun Madhavan
              </div>

              <div className="consultant-description">
                Software Consultant, Technologist, Industry Trainer & Product
                Strategist
              </div>
            </div>
          </div>
        </section>

        {/* CORE INSIGHT */}
        <section className="core-insight">
          <div className="insight-content">
            <div className="insight-label">Core Observation</div>

            <blockquote className="insight-quote">
              &quot;Many students graduate knowing technologies, but without
              understanding how the software industry actually functions.&quot;
            </blockquote>

            <p className="insight-explanation">
              WOB exists to bridge the gap between academic learning and
              real-world industry understanding through direct interaction with
              professionals actively working across different technology domains.
            </p>
          </div>
        </section>

        {/* WHY WOB */}
        <section className="why-wob">
          <div className="section-content">
            <h2 className="section-title">Why WOB Exists</h2>

            <p className="section-intro">
              Most students are familiar with only a few software industry roles
              such as Developer or Tester.
            </p>

            <p className="section-paragraph">
              However, the modern software ecosystem contains a much wider
              network of roles including DevOps Engineering, ERP Systems,
              Business Analysis, Cloud Infrastructure, Technical Support,
              Database Engineering, Cybersecurity, Product Operations, Data
              Analytics, and more.
            </p>

            <p className="section-paragraph">
              As a result, many students enter placements without understanding:
            </p>

            <div className="awareness-grid">
              <div className="awareness-card">
                How software companies actually operate
              </div>

              <div className="awareness-card">
                What different professionals do daily
              </div>

              <div className="awareness-card">
                How recruitment processes work
              </div>

              <div className="awareness-card">
                What skills companies truly expect
              </div>

              <div className="awareness-card">
                Which career path suits them best
              </div>

              <div className="awareness-card">
                What workplace culture feels like
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAM STRUCTURE */}
        <section className="program-structure">
          <div className="section-content">
            <h2 className="section-title">Programme Structure</h2>

            <p className="section-intro">
              WOB is designed as a fully offline/live interactive experience
              conducted directly inside educational institutions.
            </p>

            <div className="process-statement">
              The objective is not merely to conduct sessions — but to simulate
              real industry interaction inside campuses.
            </div>

            <div className="domains-section">
              <h3 className="subsection-title">
                Featured Industry Domains
              </h3>

              <div className="domains-grid">
                {[
                  'Software Development',
                  'QA & Testing',
                  'Mobile Development',
                  'DevOps & Cloud',
                  'Database Systems',
                  'ERP Platforms',
                  'Business Analysis',
                  'Technical Support',
                  'Cybersecurity',
                ].map((domain) => (
                  <div key={domain} className="domain-card">
                    {domain}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STUDENT BENEFITS */}
        <section className="benefits">
          <div className="section-content">
            <h2 className="section-title">Student Outcomes</h2>

            <div className="outcomes-grid">
              <div className="outcome-card">
                <div className="outcome-title">
                  Career Clarity
                </div>

                <div className="outcome-description">
                  Understand multiple IT career paths and identify suitable
                  domains of interest.
                </div>
              </div>

              <div className="outcome-card">
                <div className="outcome-title">
                  Industry Awareness
                </div>

                <div className="outcome-description">
                  Gain exposure to real workflows, workplace culture, and
                  software team structures.
                </div>
              </div>

              <div className="outcome-card">
                <div className="outcome-title">
                  Placement Readiness
                </div>

                <div className="outcome-description">
                  Learn recruitment expectations, interview processes, and
                  preparation strategies.
                </div>
              </div>

              <div className="outcome-card">
                <div className="outcome-title">
                  Professional Confidence
                </div>

                <div className="outcome-description">
                  Reduce uncertainty and build confidence regarding entering the
                  software industry.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSTITUTION BENEFITS */}
        <section className="positioning">
          <div className="section-content">
            <h2 className="section-title">
              Benefits For Educational Institutions
            </h2>

            <div className="positioning-statement">
              <p>
                WOB helps institutions strengthen practical industry exposure
                among students through structured professional interaction.
              </p>

              <p>
                The programme supports placement readiness, industry awareness,
                and career clarity while exposing students to modern software
                ecosystems and evolving technology domains.
              </p>

              <p>
                It also helps institutions create stronger industry-academia
                engagement culture beyond traditional classroom-oriented
                learning.
              </p>
            </div>
          </div>
        </section>

        {/* OFFLINE PHILOSOPHY */}
        <section className="philosophy">
          <div className="philosophy-content">
            <div className="philosophy-label">
              Why WOB Is Conducted Offline
            </div>

            <div className="philosophy-statement">
              The software industry is fundamentally collaborative,
              communication-driven, and interaction-oriented.
            </div>

            <div className="philosophy-rationale">
              <div className="rationale-item">
                <span className="rationale-label">Because</span>

                <span className="rationale-text">
                  real confidence develops through direct interaction
                </span>
              </div>

              <div className="rationale-item">
                <span className="rationale-label">Because</span>

                <span className="rationale-text">
                  authentic discussions happen better physically
                </span>
              </div>

              <div className="rationale-item">
                <span className="rationale-label">Because</span>

                <span className="rationale-text">
                  industry culture is experienced — not merely explained
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL */}
        <section className="final-statement">
          <div className="statement-content">
            <p className="statement-text">
              WOB helps students understand the software industry before
              becoming part of it.
            </p>
          </div>
        </section>

        <style jsx>{`
          :root {
            --color-ink: #1a1a1a;
            --color-ink-light: #2d2d2d;
            --color-paper: #fdfcfa;
            --color-accent: #1f4f7a;
            --color-accent-light: #497aa8;
            --color-border: #d4cfc4;
            --color-subtle: #666;
            --font-serif: 'Libre Baskerville', serif;
            --font-sans: 'IBM Plex Sans', sans-serif;
          }

          .wob-container {
            min-height: 100vh;
            background-color: var(--color-paper);
            color: var(--color-ink);
            font-family: var(--font-sans);
            line-height: 1.7;
          }

          .hero {
            padding: 8rem 2rem 6rem;
            border-bottom: 2px solid var(--color-border);
            background: linear-gradient(
              180deg,
              #fdfcfa 0%,
              #f4f7fb 100%
            );
          }

          .hero-content {
            max-width: 900px;
            margin: 0 auto;
            animation: fadeInUp 0.8s ease-out;
          }

          .logo-container {
            display: flex;
            justify-content: center;
            margin-bottom: 3rem;
          }

          .wob-logo {
            width: 100%;
            max-width: 420px;
            height: auto;
          }

          .programme-label {
            margin-bottom: 2rem;
          }

          .label-text {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--color-accent);
            font-weight: 600;
            border: 1px solid var(--color-accent);
            display: inline-block;
            padding: 0.75rem 1.25rem;
          }

          .hero-subtitle {
            font-size: clamp(1.1rem, 2vw, 1.35rem);
            line-height: 1.7;
            color: var(--color-ink-light);
            margin-bottom: 3rem;
            font-weight: 300;
          }

          .consultant-info {
            padding-top: 2rem;
            border-top: 1px solid var(--color-border);
          }

          .consultant-name {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          .consultant-description {
            font-size: 0.95rem;
            color: var(--color-subtle);
          }

          .core-insight {
            padding: 6rem 2rem;
            background-color: var(--color-ink);
            color: var(--color-paper);
          }

          .insight-content {
            max-width: 800px;
            margin: 0 auto;
          }

          .insight-label {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--color-accent-light);
            font-weight: 600;
            margin-bottom: 2rem;
          }

          .insight-quote {
            font-family: var(--font-serif);
            font-size: clamp(1.5rem, 3vw, 2.1rem);
            line-height: 1.5;
            margin-bottom: 2rem;
            border-left: 3px solid var(--color-accent-light);
            padding-left: 2rem;
          }

          .insight-explanation {
            font-size: 1.05rem;
            color: #d4cfc4;
          }

          .section-content {
            max-width: 1100px;
            margin: 0 auto;
            padding: 6rem 2rem;
          }

          .section-title {
            font-family: var(--font-serif);
            font-size: clamp(2rem, 4vw, 3rem);
            margin-bottom: 2rem;
          }

          .section-intro,
          .section-paragraph {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--color-ink-light);
            margin-bottom: 2rem;
          }

          .awareness-grid,
          .domains-grid,
          .outcomes-grid {
            display: grid;
            gap: 1.5rem;
            margin-top: 3rem;
          }

          .awareness-grid,
          .domains-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }

          .outcomes-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }

          .awareness-card,
          .domain-card {
            padding: 1.75rem;
            background-color: #f8f6f2;
            border: 1px solid var(--color-border);
          }

          .process-statement {
            font-family: var(--font-serif);
            font-size: 1.4rem;
            font-style: italic;
            color: var(--color-accent);
            margin: 3rem 0;
            padding: 2rem 0;
            border-top: 1px solid var(--color-border);
            border-bottom: 1px solid var(--color-border);
          }

          .subsection-title {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }

          .benefits {
            background-color: #f8f6f2;
          }

          .outcome-card {
            background-color: var(--color-paper);
            border: 1px solid var(--color-border);
            border-top: 3px solid var(--color-accent);
            padding: 2rem;
          }

          .outcome-title {
            font-family: var(--font-serif);
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }

          .outcome-description {
            color: var(--color-subtle);
          }

          .positioning {
            background: linear-gradient(
              135deg,
              #2d2d2d 0%,
              #1a1a1a 100%
            );
            color: var(--color-paper);
          }

          .positioning .section-title {
            color: var(--color-paper);
          }

          .positioning-statement p {
            font-size: 1.2rem;
            line-height: 1.8;
            color: #d4cfc4;
            margin-bottom: 1.5rem;
          }

          .philosophy {
            padding: 6rem 2rem;
            background: linear-gradient(
              135deg,
              #1f4f7a 0%,
              #497aa8 100%
            );
            color: var(--color-paper);
          }

          .philosophy-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }

          .philosophy-label {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            margin-bottom: 2rem;
          }

          .philosophy-statement {
            font-family: var(--font-serif);
            font-size: clamp(1.5rem, 3vw, 2.2rem);
            line-height: 1.6;
            margin-bottom: 3rem;
          }

          .philosophy-rationale {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .rationale-item {
            padding: 1.5rem;
            background-color: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .rationale-label {
            display: block;
            font-size: 0.75rem;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
            opacity: 0.8;
          }

          .rationale-text {
            font-family: var(--font-serif);
            font-size: 1.1rem;
          }

          .final-statement {
            padding: 6rem 2rem;
          }

          .statement-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }

          .statement-text {
            font-family: var(--font-serif);
            font-size: clamp(1.6rem, 3vw, 2.2rem);
            line-height: 1.7;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .hero {
              padding: 5rem 1.5rem 4rem;
            }

            .section-content {
              padding: 4rem 1.5rem;
            }

            .awareness-grid,
            .domains-grid,
            .outcomes-grid {
              grid-template-columns: 1fr;
            }

            .insight-quote {
              padding-left: 1.5rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default WelcomeOnBoard;