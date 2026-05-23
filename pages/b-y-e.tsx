import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import { Home } from "lucide-react";
import type { NextPage } from 'next';

const BeforeYouExecute: NextPage = () => {
  return (
    <>
      <Head>
        <title>Before You Execute - Pre-Execution Risk Auditing | Midhun Madhavan</title>
        <meta name="description" content="BYE (Before You Execute) is a strategic intervention layer that identifies and eliminates avoidable risks before execution begins. Led by Midhun Madhavan." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
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
        {/* Hero Section */}
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
              <span className="label-text">Pre-Execution Risk Auditing Programme</span>
            </div>
            <div className="hero-subtitle">
              BYE is a strategic intervention layer designed to identify, challenge, and neutralize risk at the earliest possible stage—before capital is deployed, teams are committed, and momentum is set in motion.
            </div>
            <div className="consultant-info">
              <div className="consultant-name">Led by Midhun Madhavan</div>
              <div className="consultant-description">
                Specialized Business Consultant focused on early-stage decision validation, execution strategy design, and risk mitigation
              </div>
            </div>
          </div>
        </section>

        {/* Core Insight */}
        <section className="core-insight">
          <div className="insight-content">
            <div className="insight-label">Core Insight</div>
            <blockquote className="insight-quote">
              &quot;Most business and product failures are not caused during execution, but are embedded in the assumptions, decisions, and blind spots that exist <em>before</em> execution even begins.&quot;
            </blockquote>
            <p className="insight-explanation">
              Before You Execute is designed to identify, challenge, and neutralize those risks at the earliest possible stage; before irreversible commitments reshape the trajectory of your initiative.
            </p>
          </div>
        </section>

        {/* When to Engage */}
        <section className="when-engage">
          <div className="section-content">
            <h2 className="section-title">When to Engage</h2>
            <p className="section-intro">
              Clients typically engage with this programme when they are at a <strong>decision threshold</strong>:
            </p>
            <div className="scenarios-grid">
              <div className="scenario-card">
                <div className="scenario-number">01</div>
                <div className="scenario-text">Evaluating a new business idea</div>
              </div>
              <div className="scenario-card">
                <div className="scenario-number">02</div>
                <div className="scenario-text">Planning a new product</div>
              </div>
              <div className="scenario-card">
                <div className="scenario-number">03</div>
                <div className="scenario-text">Structuring a new service offering</div>
              </div>
              <div className="scenario-card">
                <div className="scenario-number">04</div>
                <div className="scenario-text">Preparing for market entry or scale</div>
              </div>
              <div className="scenario-card">
                <div className="scenario-number">05</div>
                <div className="scenario-text">Improving market share without new product rollout</div>
              </div>
              <div className="scenario-card">
                <div className="scenario-number">06</div>
                <div className="scenario-text">Revamping or restructuring the company or its policies</div>
              </div>
            </div>
            <p className="section-note">
              Instead of immediately moving into execution, Before You Execute introduces a <strong>structured audit layer</strong> that rigorously examines the plan from a business-first perspective.
            </p>
          </div>
        </section>

        {/* The Process */}
        <section className="process">
          <div className="section-content">
            <h2 className="section-title">The Process</h2>
            <p className="section-intro">
              The process systematically breaks down your initiative across key dimensions—problem-solution alignment, assumption integrity, market reality, execution feasibility, resource allocation, and strategic coherence.
            </p>
            <div className="process-statement">
              The intent is not to validate optimism, but to stress-test it.
            </div>
            <div className="discoveries-section">
              <h3 className="subsection-title">Through this engagement, we surface:</h3>
              <div className="discoveries-list">
                <div className="discovery-item">
                  <div className="discovery-icon">⚠</div>
                  <div className="discovery-content">
                    <strong>Hidden assumptions</strong> that may not hold under real-world conditions
                  </div>
                </div>
                <div className="discovery-item">
                  <div className="discovery-icon">◆</div>
                  <div className="discovery-content">
                    <strong>Strategic gaps</strong> that could weaken positioning or differentiation
                  </div>
                </div>
                <div className="discovery-item">
                  <div className="discovery-icon">⊗</div>
                  <div className="discovery-content">
                    <strong>Misalignment</strong> between what is being built and what the market actually values
                  </div>
                </div>
                <div className="discovery-item">
                  <div className="discovery-icon">⚡</div>
                  <div className="discovery-content">
                    <strong>Execution risks</strong> that can lead to delays, cost overruns, or failure
                  </div>
                </div>
                <div className="discovery-item">
                  <div className="discovery-icon">⊕</div>
                  <div className="discovery-content">
                    <strong>Structural inefficiencies</strong> in planning, sequencing, or prioritization
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section className="positioning">
          <div className="section-content">
            <h2 className="section-title">Strategic Positioning</h2>
            <div className="positioning-statement">
              <p>
                Unlike conventional consulting that operates either at a high-level advisory stage or during execution, Before You Execute is positioned <strong>precisely before irreversible commitment</strong>.
              </p>
              <p>
                It acts as a critical intervention point where decisions can still be refined without significant cost.
              </p>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="outcomes">
          <div className="section-content">
            <h2 className="section-title">Client Outcomes</h2>
            <div className="outcomes-grid">
              <div className="outcome-card">
                <div className="outcome-title">Eliminate Avoidable Risks</div>
                <div className="outcome-description">
                  Address failure scenarios before they materialize
                </div>
              </div>
              <div className="outcome-card">
                <div className="outcome-title">Optimize Resource Utilization</div>
                <div className="outcome-description">
                  Reduce waste and improve capital efficiency
                </div>
              </div>
              <div className="outcome-card">
                <div className="outcome-title">Strengthen Strategic Clarity</div>
                <div className="outcome-description">
                  Enter execution with validated decision confidence
                </div>
              </div>
              <div className="outcome-card">
                <div className="outcome-title">Build Execution Resilience</div>
                <div className="outcome-description">
                  Move forward with precision, clarity, and intent
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Mortem Philosophy */}
        <section className="philosophy">
          <div className="philosophy-content">
            <div className="philosophy-label">Core Philosophy</div>
            <div className="philosophy-statement">
              At its core, Before You Execute functions as a <strong>strategic pre-mortem</strong>—anticipating failure scenarios in advance so they can be addressed proactively.
            </div>
            <div className="philosophy-rationale">
              <div className="rationale-item">
                <span className="rationale-label">Because</span>
                <span className="rationale-text">once execution begins, change becomes expensive</span>
              </div>
              <div className="rationale-item">
                <span className="rationale-label">Before that</span>
                <span className="rationale-text">it is still strategic</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final Statement */}
        <section className="final-statement">
          <div className="statement-content">
            <p className="statement-text">
              Before You Execute ensures that when you move forward, you do so with precision, clarity, and intent—not assumption.
            </p>
          </div>
        </section>

{/* Contact Section */}
            <section className="text-center py-16 pt-10 font-sans mb-16">
                <p className="text-lg mb-3 text-gray-600">Initiate a Pre-Execution Review</p>
                <a href="tel:+918129584938"
                    className="inline-flex items-center gap-3 text-2xl font-bold text-gray-600 border-2 border-gray-600 px-6 py-3 rounded-full hover:bg-gray-600 hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                        <path d="M6.62 10.79a15.566 15.566 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55.57 1 1 0 011 1v3.52a1 1 0 01-1 1A16 16 0 014 6a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.21 1.11l-2.24 2.13z" />
                    </svg>
                    +91-8129584938
                </a>
            </section>

        <style jsx>{`
          :root {
            --color-ink: #1a1a1a;
            --color-ink-light: #2d2d2d;
            --color-paper: #fdfcfa;
            --color-accent: #8b4513;
            --color-accent-light: #a0522d;
            --color-border: #d4cfc4;
            --color-subtle: #666;
            --font-serif: 'Libre Baskerville', serif;
            --font-sans: 'IBM Plex Sans', sans-serif;
          }

          .bye-container {
            min-height: 100vh;
            background-color: var(--color-paper);
            color: var(--color-ink);
            font-family: var(--font-sans);
            line-height: 1.7;
          }

          /* Hero Section */
          .hero {
            padding: 8rem 2rem 6rem;
            border-bottom: 2px solid var(--color-border);
            background: linear-gradient(180deg, #fdfcfa 0%, #f8f6f2 100%);
          }

          .hero-content {
            max-width: 900px;
            margin: 0 auto;
            animation: fadeInUp 0.8s ease-out;
          }

          .programme-label {
            margin-bottom: 2rem;
            animation: fadeInUp 0.8s ease-out 0.1s backwards;
          }

          .label-text {
            font-size: 2rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--color-accent);
            font-weight: 600;
            border: 1px solid var(--color-accent);
            display: inline-block;
          }

          .hero-title {
            font-family: var(--font-serif);
            font-size: clamp(2.5rem, 6vw, 4.5rem);
            font-weight: 700;
            line-height: 1.1;
            margin: 0 0 2rem 0;
            color: var(--color-ink);
            animation: fadeInUp 0.8s ease-out 0.2s backwards;
          }

          .hero-subtitle {
            font-size: clamp(1.1rem, 2vw, 1.35rem);
            line-height: 1.65;
            color: var(--color-ink-light);
            margin-bottom: 3rem;
            font-weight: 300;
            animation: fadeInUp 0.8s ease-out 0.3s backwards;
          }

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease-out;
}

.bye-logo {
  width: 100%;
  max-width: 500px;
  height: auto;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
}

          .consultant-info {
            padding-top: 2rem;
            border-top: 1px solid var(--color-border);
            animation: fadeInUp 0.8s ease-out 0.4s backwards;
          }

          .consultant-name {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--color-ink);
            margin-bottom: 0.5rem;
          }

          .consultant-description {
            font-size: 0.95rem;
            color: var(--color-subtle);
            line-height: 1.6;
          }

          /* Core Insight */
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
            font-size: clamp(1.4rem, 3vw, 2rem);
            line-height: 1.5;
            margin: 0 0 2rem 0;
            font-weight: 400;
            border-left: 3px solid var(--color-accent);
            padding-left: 2rem;
          }

          .insight-quote em {
            font-style: italic;
            color: var(--color-accent-light);
          }

          .insight-explanation {
            font-size: 1.05rem;
            color: #d4cfc4;
            line-height: 1.7;
          }

          /* Sections */
          section {
            animation: fadeIn 0.6s ease-out;
          }

          .section-content {
            max-width: 1100px;
            margin: 0 auto;
            padding: 6rem 2rem;
          }

          .section-title {
            font-family: var(--font-serif);
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            margin: 0 0 2rem 0;
            color: var(--color-ink);
          }

          .section-intro {
            font-size: 1.15rem;
            line-height: 1.7;
            color: var(--color-ink-light);
            margin-bottom: 3rem;
          }

          .section-note {
            font-size: 1.05rem;
            line-height: 1.7;
            color: var(--color-ink-light);
            margin-top: 3rem;
          }

          /* When to Engage */
          .when-engage {
            background-color: #f8f6f2;
            border-top: 2px solid var(--color-border);
            border-bottom: 2px solid var(--color-border);
          }

          .scenarios-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 3rem 0;
          }

          .scenario-card {
            display: flex;
            align-items: flex-start;
            gap: 1.25rem;
            padding: 1.75rem;
            background-color: var(--color-paper);
            border: 1px solid var(--color-border);
            transition: all 0.3s ease;
          }

          .scenario-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            border-color: var(--color-accent);
          }

          .scenario-number {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--color-accent);
            flex-shrink: 0;
          }

          .scenario-text {
            font-size: 1.05rem;
            line-height: 1.5;
            color: var(--color-ink);
          }

          /* Process Section */
          .process-statement {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            font-style: italic;
            color: var(--color-accent);
            margin: 3rem 0;
            padding: 2rem 0;
            border-top: 1px solid var(--color-border);
            border-bottom: 1px solid var(--color-border);
          }

          .discoveries-section {
            margin-top: 4rem;
          }

          .subsection-title {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--color-ink);
            margin-bottom: 2rem;
          }

          .discoveries-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .discovery-item {
            display: flex;
            align-items: flex-start;
            gap: 1.5rem;
            padding: 1.5rem;
            background-color: #f8f6f2;
            border-left: 3px solid var(--color-accent);
          }

          .discovery-icon {
            font-size: 1.5rem;
            color: var(--color-accent);
            flex-shrink: 0;
          }

          .discovery-content {
            font-size: 1.05rem;
            line-height: 1.6;
            color: var(--color-ink-light);
          }

          .discovery-content strong {
            color: var(--color-ink);
            font-weight: 600;
          }

          /* Positioning */
          .positioning {
            background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
            color: var(--color-paper);
          }

          .positioning-statement p {
            font-size: 1.25rem;
            line-height: 1.75;
            margin-bottom: 1.5rem;
            color: #d4cfc4;
          }

          .positioning-statement strong {
            color: var(--color-paper);
            font-weight: 600;
          }

          /* Outcomes */
          .outcomes {
            background-color: #f8f6f2;
            border-bottom: 2px solid var(--color-border);
          }

          .outcomes-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
          }

          .outcome-card {
            padding: 2rem;
            background-color: var(--color-paper);
            border: 1px solid var(--color-border);
            border-top: 3px solid var(--color-accent);
            transition: all 0.3s ease;
          }

          .outcome-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          }

          .outcome-title {
            font-family: var(--font-serif);
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--color-ink);
            margin-bottom: 1rem;
          }

          .outcome-description {
            font-size: 0.95rem;
            color: var(--color-subtle);
            line-height: 1.6;
          }

          /* Philosophy */
          .philosophy {
            padding: 6rem 2rem;
            background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
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
            font-weight: 600;
            margin-bottom: 2rem;
            opacity: 0.8;
          }

          .philosophy-statement {
            font-family: var(--font-serif);
            font-size: clamp(1.5rem, 3vw, 2.25rem);
            line-height: 1.5;
            margin-bottom: 3rem;
          }

          .philosophy-statement strong {
            font-weight: 700;
          }

          .philosophy-rationale {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            max-width: 500px;
            margin: 0 auto;
          }

          .rationale-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            padding: 1.5rem;
            background-color: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .rationale-label {
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 600;
            opacity: 0.8;
          }

          .rationale-text {
            font-family: var(--font-serif);
            font-size: 1.1rem;
            font-style: italic;
          }

          /* Final Statement */
          .final-statement {
            padding: 6rem 2rem;
            background-color: var(--color-paper);
          }

          .statement-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }

          .statement-text {
            font-family: var(--font-serif);
            font-size: clamp(1.5rem, 3vw, 2rem);
            line-height: 1.6;
            color: var(--color-ink);
            font-weight: 400;
          }

          /* Animations */
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

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          /* Responsive */
          @media (max-width: 768px) {
            .hero {
              padding: 5rem 1.5rem 4rem;
            }

.logo-container {
    margin-bottom: 2rem;
  }

  .bye-logo {
    max-width: 350px;
  }
            .section-content {
              padding: 4rem 1.5rem;
            }

            .scenarios-grid {
              grid-template-columns: 1fr;
            }

            .outcomes-grid {
              grid-template-columns: 1fr;
            }

            .insight-quote {
              padding-left: 1.5rem;
            }

            .philosophy-rationale {
              gap: 1rem;
            }

            .rationale-item {
              flex-direction: column;
              text-align: center;
              gap: 0.5rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default BeforeYouExecute;
