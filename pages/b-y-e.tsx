import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';
import type { NextPage } from 'next';

const BeforeYouExecute: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Before You Execute - Pre-Execution Risk Auditing | Midhun Madhavan
        </title>

        <meta
          name="description"
          content="Before You Execute (B.Y.E) is a strategic pre-execution audit framework focused on identifying operational, strategic, technical, and execution-level risks before irreversible commitments are made."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bye-container">

        {/* Floating Home Button */}
<Link
  href="/"
  className="
    fixed
    bottom-6
    right-6
    z-50
    w-14
    h-14
    rounded-full
    bg-black
    text-white
    flex
    items-center
    justify-center
    shadow-xl
    hover:scale-105
    hover:bg-black/90
    transition-all
    duration-300
  "
>
  <Home size={24} />
</Link>

        {/* Hero */}
        <section className="hero">
          <div className="hero-content">

            <div className="logo-container">
              <Image
                src="/b-y-e-logo.png"
                alt="Before You Execute Logo"
                width={600}
                height={600}
                priority
                className="bye-logo"
              />
            </div>

            <div className="programme-label">
              <span className="label-text">
                PRE-EXECUTION RISK AUDITING FRAMEWORK
              </span>
            </div>

            <h1 className="hero-title">
              Validate Before You Build.
              <br />
              Audit Before You Scale.
            </h1>

            <div className="hero-subtitle">
              Before You Execute is a strategic pre-execution audit framework
              designed to identify operational, strategic, technical, and
              execution-level risks before irreversible commitments are made.
            </div>

            <div className="consultant-info">
              <div className="consultant-name">
                Led by Midhun Madhavan
              </div>

              <div className="consultant-description">
                Specialized in execution strategy design, technical feasibility
                assessment, operational risk analysis, and early-stage decision
                validation.
              </div>
            </div>
          </div>
        </section>

        {/* Why BYE Exists */}
        <section className="why-bye">
          <div className="section-content">
            <div className="why-statement">
              Many initiatives fail not because of poor execution, but because
              critical assumptions were never challenged before execution began.
            </div>
          </div>
        </section>

        {/* Core Insight */}
        <section className="core-insight">
          <div className="insight-content">

            <div className="insight-label">
              CORE INSIGHT
            </div>

            <blockquote className="insight-quote">
              “Most business and product failures are not caused during
              execution, but are embedded in the assumptions, decisions, and
              blind spots that exist <em>before</em> execution even begins.”
            </blockquote>

            <p className="insight-explanation">
              Before You Execute introduces a structured intervention layer that
              identifies, challenges, and neutralizes those risks before capital,
              teams, systems, and momentum become difficult to redirect.
            </p>
          </div>
        </section>

        {/* When To Engage */}
        <section className="when-engage">
          <div className="section-content">

            <h2 className="section-title">
              When to Engage
            </h2>

            <p className="section-intro">
              Organizations and founders typically engage with this framework
              when approaching a major operational or strategic decision
              threshold.
            </p>

            <div className="scenarios-grid">

              <div className="scenario-card">
                <div className="scenario-number">01</div>
                <div className="scenario-text">
                  Evaluating a new business initiative
                </div>
              </div>

              <div className="scenario-card">
                <div className="scenario-number">02</div>
                <div className="scenario-text">
                  Planning a new digital product or platform
                </div>
              </div>

              <div className="scenario-card">
                <div className="scenario-number">03</div>
                <div className="scenario-text">
                  Structuring or redesigning a service model
                </div>
              </div>

              <div className="scenario-card">
                <div className="scenario-number">04</div>
                <div className="scenario-text">
                  Preparing for market expansion or scale
                </div>
              </div>

              <div className="scenario-card">
                <div className="scenario-number">05</div>
                <div className="scenario-text">
                  Improving market performance without launching new products
                </div>
              </div>

              <div className="scenario-card">
                <div className="scenario-number">06</div>
                <div className="scenario-text">
                  Restructuring operations, policies, or strategic direction
                </div>
              </div>

            </div>

            <p className="section-note">
              Instead of moving directly into execution, Before You Execute
              introduces a structured audit layer that rigorously evaluates the
              initiative from operational, strategic, technical, and market
              perspectives.
            </p>

          </div>
        </section>

        {/* Process */}
        <section className="process">
          <div className="section-content">

            <h2 className="section-title">
              The Process
            </h2>

            <p className="section-intro">
              The framework systematically breaks down the initiative across key
              dimensions including assumption integrity, execution feasibility,
              operational dependency mapping, market alignment, strategic
              coherence, and resource efficiency.
            </p>

            <div className="process-statement">
              The objective is not to validate optimism, but to stress-test it.
            </div>

            <div className="discoveries-section">

              <h3 className="subsection-title">
                Key Risk Areas Identified
              </h3>

              <div className="discoveries-list">

                <div className="discovery-item">
                  <div className="discovery-content">
                    <strong>Hidden assumptions</strong> that may collapse under
                    real-world conditions.
                  </div>
                </div>

                <div className="discovery-item">
                  <div className="discovery-content">
                    <strong>Strategic gaps</strong> that weaken positioning,
                    differentiation, or long-term sustainability.
                  </div>
                </div>

                <div className="discovery-item">
                  <div className="discovery-content">
                    <strong>Market misalignment</strong> between what is being
                    built and what users actually value.
                  </div>
                </div>

                <div className="discovery-item">
                  <div className="discovery-content">
                    <strong>Execution bottlenecks</strong> that could introduce
                    delays, inefficiencies, or operational instability.
                  </div>
                </div>

                <div className="discovery-item">
                  <div className="discovery-content">
                    <strong>Structural inefficiencies</strong> in planning,
                    prioritization, sequencing, or allocation.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section className="positioning">
          <div className="section-content">

            <h2 className="section-title light">
              Strategic Positioning
            </h2>

            <div className="positioning-statement">

              <p>
                Unlike conventional consulting models that operate either at a
                high-level advisory stage or during execution, Before You
                Execute is positioned precisely before irreversible commitment.
              </p>

              <p>
                It functions as a strategic intervention point where critical
                decisions can still be refined without significant operational
                or financial cost.
              </p>

            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="audience">
          <div className="section-content">

            <h2 className="section-title">
              Who This Is For
            </h2>

            <div className="audience-grid">

              <div className="audience-card">
                <h3>Startups</h3>
                <p>
                  Validate product direction, execution feasibility, and
                  strategic assumptions before deployment.
                </p>
              </div>

              <div className="audience-card">
                <h3>Institutions</h3>
                <p>
                  Evaluate transformation initiatives, restructuring plans, and
                  strategic programs before rollout.
                </p>
              </div>

              <div className="audience-card">
                <h3>Founders & Teams</h3>
                <p>
                  Reduce operational uncertainty and improve execution clarity
                  before committing resources.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Outcomes */}
        <section className="outcomes">
          <div className="section-content">

            <h2 className="section-title">
              Client Outcomes
            </h2>

            <div className="outcomes-grid">

              <div className="outcome-card">
                <div className="outcome-title">
                  Eliminate Avoidable Risks
                </div>

                <div className="outcome-description">
                  Address high-impact failure scenarios before they materialize.
                </div>
              </div>

              <div className="outcome-card">
                <div className="outcome-title">
                  Improve Resource Efficiency
                </div>

                <div className="outcome-description">
                  Reduce waste, misallocation, and execution inefficiencies.
                </div>
              </div>

              <div className="outcome-card">
                <div className="outcome-title">
                  Strengthen Strategic Clarity
                </div>

                <div className="outcome-description">
                  Move into execution with validated decision confidence.
                </div>
              </div>

              <div className="outcome-card">
                <div className="outcome-title">
                  Build Execution Resilience
                </div>

                <div className="outcome-description">
                  Improve readiness, adaptability, and long-term operational
                  stability.
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Philosophy */}
        <section className="philosophy">
          <div className="philosophy-content">

            <div className="philosophy-label">
              CORE PHILOSOPHY
            </div>

            <div className="philosophy-statement">
              Before You Execute functions as a strategic pre-mortem framework —
              anticipating failure scenarios before they become operationally
              expensive.
            </div>

            <div className="philosophy-rationale">

              <div className="rationale-item">
                <span className="rationale-label">
                  Because
                </span>

                <span className="rationale-text">
                  once execution begins, change becomes expensive
                </span>
              </div>

              <div className="rationale-item">
                <span className="rationale-label">
                  Before That
                </span>

                <span className="rationale-text">
                  it is still strategic
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* Final Statement */}
        <section className="final-statement">
          <div className="statement-content">

            <p className="statement-text">
              Before You Execute ensures that when execution begins, it begins
              with clarity, precision, alignment, and strategic intent —
              not assumption.
            </p>

          </div>
        </section>

        {/* CTA */}
        <section className="contact-section">

          <p className="cta-label">
            Discuss Your Initiative
          </p>

          <h2 className="cta-heading">
            Request a Strategic Pre-Execution Assessment
          </h2>

          <a href="tel:+918129584938" className="contact-button">
            +91 8129584938
          </a>

        </section>

        <style jsx>{`

          :root {
            --color-ink: #141414;
            --color-ink-light: #2f2f2f;
            --color-paper: #fdfcf9;
            --color-accent: #8b4513;
            --color-border: rgba(0,0,0,0.06);
            --color-subtle: #666;
            --font-sans: 'Inter', sans-serif;
          }

          * {
            box-sizing: border-box;
          }

          .bye-container {
            min-height: 100vh;
            font-family: var(--font-sans);
            color: var(--color-ink);
            line-height: 1.7;
            overflow-x: hidden;

            background:
              radial-gradient(circle at top left,
              rgba(139,69,19,0.04), transparent 30%),
              radial-gradient(circle at bottom right,
              rgba(0,0,0,0.03), transparent 35%),
              #fdfcf9;
          }

          .bye-container::before {
            content: '';
            position: fixed;
            inset: 0;
            background-image:
              linear-gradient(rgba(0,0,0,0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px);
            background-size: 40px 40px;
            pointer-events: none;
            z-index: 0;
          }

          .bye-container > * {
            position: relative;
            z-index: 1;
          }

          .floating-home {
            position: fixed;
            right: 24px;
            bottom: 24px;
            width: 56px;
            height: 56px;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;

            color: white;

            backdrop-filter: blur(14px);
            background: rgba(0,0,0,0.82);
            border: 1px solid rgba(255,255,255,0.12);

            box-shadow:
              0 10px 30px rgba(0,0,0,0.18);

            transition:
              transform 0.3s ease,
              background 0.3s ease;
          }

          .floating-home:hover {
            transform: translateY(-2px) scale(1.03);
            background: rgba(0,0,0,0.9);
          }

          section {
            position: relative;
          }

          .hero {
            padding: 8rem 2rem 7rem;
          }

          .hero-content {
            max-width: 1100px;
            margin: 0 auto;
          }

          .logo-container {
            display: flex;
            justify-content: center;
            margin-bottom: 3rem;
          }

          .bye-logo {
            width: 100%;
            max-width: 500px;
            height: auto;
            filter: drop-shadow(0 10px 25px rgba(0,0,0,0.08));
          }

          .programme-label {
            margin-bottom: 2rem;
            text-align: center;
          }

          .label-text {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            padding: 0.75rem 1rem;

            border-radius: 999px;

            background: rgba(139,69,19,0.08);
            border: 1px solid rgba(139,69,19,0.15);

            font-size: 0.8rem;
            letter-spacing: 0.14em;
            font-weight: 600;

            color: var(--color-accent);
          }

          .hero-title {
            text-align: center;

            font-size: clamp(3rem, 7vw, 6rem);
            line-height: 1.05;
            letter-spacing: -0.04em;

            font-weight: 800;

            margin: 0 auto 2rem;
            max-width: 1000px;
          }

          .hero-subtitle {
            font-size: 1.2rem;
            color: var(--color-ink-light);

            max-width: 760px;
            margin: 0 auto;

            text-align: center;
            line-height: 1.8;
          }

          .consultant-info {
            margin-top: 4rem;
            padding-top: 2rem;

            border-top: 1px solid var(--color-border);

            text-align: center;
          }

          .consultant-name {
            font-size: 1rem;
            font-weight: 700;
            margin-bottom: 0.6rem;
          }

          .consultant-description {
            color: var(--color-subtle);
            max-width: 700px;
            margin: 0 auto;
          }

          .why-bye {
            padding: 5rem 2rem;
          }

          .why-statement {
            font-size: clamp(1.5rem, 3vw, 2.2rem);
            line-height: 1.5;
            font-weight: 500;
            max-width: 900px;
          }

          .core-insight {
            padding: 7rem 2rem;

            background:
              linear-gradient(
                135deg,
                rgba(22,22,22,1) 0%,
                rgba(35,35,35,1) 100%
              );

            color: white;
          }

          .insight-content {
            max-width: 900px;
            margin: 0 auto;
          }

          .insight-label,
          .philosophy-label {
            font-size: 0.78rem;
            letter-spacing: 0.14em;
            font-weight: 700;
            opacity: 0.75;
            margin-bottom: 2rem;
          }

          .insight-quote {
            margin: 0 0 2rem;

            font-size: clamp(1.6rem, 3vw, 2.3rem);
            line-height: 1.55;
            font-weight: 500;

            border-left: 3px solid rgba(255,255,255,0.25);
            padding-left: 2rem;
          }

          .insight-explanation {
            max-width: 760px;
            color: rgba(255,255,255,0.75);
          }

          .section-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 7rem 2rem;
          }

          .section-title {
            font-size: clamp(2.2rem, 5vw, 4rem);
            line-height: 1.05;
            letter-spacing: -0.04em;

            margin-bottom: 2rem;
            font-weight: 800;
          }

          .section-title.light {
            color: white;
          }

          .section-intro,
          .section-note,
          .positioning-statement,
          .statement-text {
            max-width: 760px;
          }

          .section-intro {
            font-size: 1.15rem;
            color: var(--color-ink-light);
            margin-bottom: 3rem;
          }

          .section-note {
            margin-top: 3rem;
            color: var(--color-subtle);
          }

          .when-engage,
          .outcomes {
            border-top: 1px solid var(--color-border);
            border-bottom: 1px solid var(--color-border);
          }

          .scenarios-grid,
          .outcomes-grid,
          .audience-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }

          .scenario-card,
          .outcome-card,
          .discovery-item,
          .audience-card {
            background: rgba(255,255,255,0.72);

            backdrop-filter: blur(12px);

            border: 1px solid rgba(0,0,0,0.06);

            border-radius: 24px;

            box-shadow:
              0 10px 30px rgba(0,0,0,0.04),
              0 2px 8px rgba(0,0,0,0.03);

            transition:
              transform 0.35s ease,
              box-shadow 0.35s ease,
              border-color 0.35s ease;
          }

          .scenario-card:hover,
          .outcome-card:hover,
          .discovery-item:hover,
          .audience-card:hover {
            transform: translateY(-4px);
          }

          .scenario-card {
            display: flex;
            gap: 1.5rem;
            padding: 2rem;
          }

          .scenario-number {
            font-size: 1.4rem;
            font-weight: 800;
            color: var(--color-accent);
            flex-shrink: 0;
          }

          .scenario-text {
            font-size: 1.05rem;
            color: var(--color-ink-light);
          }

          .process-statement {
            margin: 4rem 0;

            padding: 2rem 0;

            border-top: 1px solid var(--color-border);
            border-bottom: 1px solid var(--color-border);

            font-size: 1.8rem;
            line-height: 1.5;

            font-weight: 500;
            color: var(--color-accent);
          }

          .discoveries-section {
            margin-top: 4rem;
          }

          .subsection-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 2rem;
          }

          .discoveries-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .discovery-item {
            padding: 2rem;
          }

          .discovery-content {
            color: var(--color-ink-light);
            line-height: 1.8;
          }

          .discovery-content strong {
            color: var(--color-ink);
          }

          .positioning {
            background:
              linear-gradient(
                135deg,
                rgba(24,24,24,1) 0%,
                rgba(38,38,38,1) 100%
              );
          }

          .positioning-statement p {
            color: rgba(255,255,255,0.72);
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 1.5rem;
          }

          .audience-card,
          .outcome-card {
            padding: 2rem;
          }

          .audience-card h3,
          .outcome-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }

          .audience-card p,
          .outcome-description {
            color: var(--color-subtle);
            line-height: 1.8;
          }

          .philosophy {
            padding: 7rem 2rem;

            background:
              linear-gradient(
                135deg,
                #8b4513 0%,
                #a0522d 100%
              );

            color: white;
          }

          .philosophy-content {
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
          }

          .philosophy-statement {
            font-size: clamp(1.8rem, 4vw, 3rem);
            line-height: 1.5;
            margin-bottom: 3rem;
            font-weight: 500;
          }

          .philosophy-rationale {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            max-width: 650px;
            margin: 0 auto;
          }

          .rationale-item {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            padding: 1.5rem;

            background: rgba(255,255,255,0.1);

            border: 1px solid rgba(255,255,255,0.18);

            border-radius: 20px;
          }

          .rationale-label {
            font-size: 0.82rem;
            letter-spacing: 0.12em;
            font-weight: 700;
            opacity: 0.75;
          }

          .rationale-text {
            font-size: 1.05rem;
          }

          .final-statement {
            padding: 7rem 2rem;
          }

          .statement-content {
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
          }

          .statement-text {
            margin: 0 auto;

            font-size: clamp(1.7rem, 4vw, 2.6rem);
            line-height: 1.6;
            font-weight: 500;
          }

          .contact-section {
            padding:
              3rem 2rem
              8rem;

            text-align: center;
          }

          .cta-label {
            color: var(--color-subtle);
            margin-bottom: 1rem;
            font-size: 1rem;
          }

          .cta-heading {
            font-size: clamp(2rem, 4vw, 3.5rem);
            line-height: 1.1;
            font-weight: 800;

            margin-bottom: 2.5rem;
          }

          .contact-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            padding: 1rem 2rem;

            border-radius: 999px;

            background: rgba(0,0,0,0.92);
            color: white;

            text-decoration: none;

            font-size: 1.1rem;
            font-weight: 600;

            box-shadow:
              0 12px 30px rgba(0,0,0,0.14);

            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }

          .contact-button:hover {
            transform: translateY(-2px);
            box-shadow:
              0 16px 35px rgba(0,0,0,0.18);
          }

          @media (max-width: 768px) {

            .hero {
              padding: 6rem 1.5rem 5rem;
            }

            .section-content {
              padding: 5rem 1.5rem;
            }

            .bye-logo {
              max-width: 340px;
            }

            .hero-title {
              font-size: 3rem;
            }

            .hero-subtitle {
              font-size: 1.05rem;
            }

            .scenarios-grid,
            .outcomes-grid,
            .audience-grid {
              grid-template-columns: 1fr;
            }

            .rationale-item {
              flex-direction: column;
              text-align: center;
            }

            .floating-home {
              width: 52px;
              height: 52px;
            }

          }

        `}</style>
      </div>
    </>
  );
};

export default BeforeYouExecute;