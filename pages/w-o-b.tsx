import Head from "next/head";
import Image from 'next/image';
import type { NextPage } from "next";

const domains: string[] = [
  "Software Development",
  "QA & Testing",
  "Mobile Development",
  "DevOps & Cloud",
  "Database Systems",
  "ERP Platforms",
  "Business Analysis",
  "Technical Support",
  "Cybersecurity",
];

const institutionBenefits: string[] = [
  "Stronger industry-academia interaction",
  "Improved placement awareness",
  "Better career guidance for students",
  "Exposure to modern software ecosystems",
  "Increased student engagement",
  "Professional orientation for future careers",
];

const WOBPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>WOB — Welcome OnBoard | Mismology</title>

        <meta
          name="description"
          content="WOB (Welcome OnBoard) is an offline industry orientation program designed to help Computer Science and IT students understand the real-world software industry, career paths, recruitment processes, and workplace expectations."
        />
      </Head>

      <main className="">
        {/* HERO */}
        <section className="min-h-screen flex items-center border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6 py-24 w-full">
            <div className="max-w-5xl">
<Image
                src="/w-o-b-logo.png"
                alt="Welcome OnBoard Logo"
                width={100}
                height={100}
                className="wob-logo"
              />
              <p className="uppercase tracking-[0.4em] text-sm mb-6">
                Welcome OnBoard
              </p>

              <h1 className="text-5xl md:text-8xl font-bold leading-[0.95] mb-10">
                Know The Industry
                <br />
                Before You Enter It.
              </h1>

              <p className="text-xl md:text-2xl text-black/70 leading-relaxed max-w-4xl">
                WOB is a professionally designed offline industry orientation
                program that helps Computer Science and IT students understand
                the real-world software industry through direct interaction with
                working professionals from multiple technology domains.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why WOB Exists
              </h2>

              <p className="text-black/70 text-lg leading-9 mb-6">
                Many students enter placements without understanding how the
                software industry actually functions.
              </p>

              <p className="text-black/70 text-lg leading-9 mb-6">
                Most know only a few common roles such as Developer or Tester,
                while the real industry contains a much wider ecosystem of
                careers including DevOps, ERP systems, cloud engineering,
                business analysis, technical support, cybersecurity, data
                operations, and more.
              </p>

              <p className="text-black/70 text-lg leading-9">
                WOB bridges the gap between academics and industry by bringing
                professionals directly into campuses for real conversations,
                practical insights, and career-oriented discussions.
              </p>
            </div>

            <div className="bg-black/[0.03] border border-black/10 rounded-3xl p-10">
              <h3 className="text-3xl font-semibold mb-8">
                What Students Gain
              </h3>

              <div className="space-y-5 text-lg text-black/70">
                <p>• Real-world career awareness</p>
                <p>• Understanding of industry workflows</p>
                <p>• Recruitment & placement insights</p>
                <p>• Exposure to multiple IT domains</p>
                <p>• Clarity about career paths</p>
                <p>• Industry interaction opportunities</p>
                <p>• Professional communication exposure</p>
                <p>• Better placement preparedness</p>
              </div>
            </div>
          </div>
        </section>

        {/* DOMAINS */}
        <section className="border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-4xl mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Featured Industry Domains
              </h2>

              <p className="text-xl text-black/60 leading-relaxed">
                Institutions can choose professionals from multiple verticals
                based on student interests and academic focus.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {domains.map((item) => (
                <div
                  key={item}
                  className="border border-black/10 rounded-3xl p-8 bg-black/[0.02]"
                >
                  <h3 className="text-2xl font-semibold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OFFLINE */}
        <section className="border-b border-black/10">
          <div className="max-w-5xl mx-auto px-6 py-24 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-10">
              Designed As A Fully Offline Experience
            </h2>

            <p className="text-xl text-black/70 leading-relaxed">
              WOB is intentionally conducted as a live on-campus experience to
              encourage authentic interaction, networking, communication, and
              meaningful discussions between students and industry
              professionals.
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="max-w-4xl mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Benefits For Educational Institutions
              </h2>

              <p className="text-xl text-black/60 leading-relaxed">
                WOB helps institutions strengthen industry exposure and career
                readiness among students.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {institutionBenefits.map((item) => (
                <div
                  key={item}
                  className="border border-black/10 rounded-3xl p-10 bg-black/[0.02]"
                >
                  <p className="text-xl text-black/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMAT */}
        <section className="border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-10">
                  Program Format
                </h2>

                <div className="space-y-5 text-xl text-black/70">
                  <p>• Offline / On-Campus</p>
                  <p>• One-Day Industry Orientation</p>
                  <p>• Live Interactive Sessions</p>
                  <p>• Industry Professional Panels</p>
                  <p>• Open Q&A Discussions</p>
                  <p>• Recruitment Insights</p>
                </div>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-10">
                  Ideal Audience
                </h2>

                <div className="space-y-5 text-xl text-black/70">
                  <p>• B.Tech / BE Students</p>
                  <p>• BCA / MCA Students</p>
                  <p>• BSc / MSc Computer Science</p>
                  <p>• Polytechnic / Diploma Students</p>
                  <p>• Final Year Students</p>
                  <p>• Placement-Oriented Batches</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="max-w-5xl mx-auto px-6 py-32 text-center">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-10">
              Welcome Students
              <br />
              Into The Real IT Industry.
            </h2>

            <p className="text-xl text-black/60 max-w-3xl mx-auto leading-relaxed mb-16">
              WOB helps students understand the software industry before
              becoming part of it.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default WOBPage;