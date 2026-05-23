import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Home, ArrowRight, BriefcaseBusiness, Building2, GraduationCap, ShieldCheck, Users, Workflow, Cloud, Smartphone, Database, Bug, Cpu, MessagesSquare, ServerCog } from "lucide-react";
import type { NextPage } from "next";

const domains = [
  {
    title: "Software Development",
    icon: <Cpu size={28} />,
    desc: "Real-world engineering workflows, product execution, and collaborative development environments.",
  },
  {
    title: "QA & Testing",
    icon: <Bug size={28} />,
    desc: "Quality assurance processes, testing methodologies, and software reliability practices.",
  },
  {
    title: "Mobile Development",
    icon: <Smartphone size={28} />,
    desc: "Native and cross-platform mobile application development ecosystems.",
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud size={28} />,
    desc: "CI/CD pipelines, deployment infrastructure, cloud operations, and scalability.",
  },
  {
    title: "Database Systems",
    icon: <Database size={28} />,
    desc: "Data management, storage systems, optimization, and backend architecture.",
  },
  {
    title: "ERP Platforms",
    icon: <Workflow size={28} />,
    desc: "Enterprise business systems, operations workflows, and organizational software ecosystems.",
  },
  {
    title: "Business Analysis",
    icon: <MessagesSquare size={28} />,
    desc: "Requirement gathering, stakeholder communication, and software process understanding.",
  },
  {
    title: "Technical Support",
    icon: <Headphones size={28} />,
    desc: "Production support systems, troubleshooting, and enterprise customer environments.",
  },
  {
    title: "Cybersecurity",
    icon: <ShieldCheck size={28} />,
    desc: "Security awareness, digital risk management, and software protection practices.",
  },
];

const studentBenefits = [
  {
    title: "Career Clarity",
    desc: "Understand real-world technology career paths beyond conventional roles.",
  },
  {
    title: "Recruitment Awareness",
    desc: "Learn how software companies actually hire and evaluate candidates.",
  },
  {
    title: "Industry Communication",
    desc: "Experience professional discussions and collaborative industry interaction.",
  },
  {
    title: "Resume Positioning",
    desc: "Build stronger placement-oriented professional profiles and resumes.",
  },
  {
    title: "Domain Exposure",
    desc: "Explore multiple technology verticals and software ecosystems.",
  },
  {
    title: "Practical Insight",
    desc: "Understand workflows, execution environments, and industry expectations.",
  },
];

const institutionBenefits = [
  "Stronger industry-academia alignment",
  "Improved placement preparedness",
  "Professional career orientation",
  "Exposure to modern software ecosystems",
  "Better student engagement",
  "Increased industry awareness among students",
];

const WOBPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>WOB — Welcome OnBoard | Mismology</title>

        <meta
          name="description"
          content="WOB (Welcome OnBoard) is a premium residential industry orientation program designed to help Computer Science and IT students understand the real-world software industry, career paths, recruitment systems, and workplace expectations."
        />
      </Head>

      <main className="bg-white text-black overflow-hidden">
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
            shadow-2xl
            hover:scale-105
            transition-all
            duration-300
          "
        >
          <Home size={24} />
        </Link>

        {/* HERO */}
        <section className="relative border-b border-black/10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 to-white pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 py-10 md:py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* LEFT */}
              <div>
                <div className="inline-flex items-center gap-3 border border-black/10 bg-white rounded-full px-5 py-2 mb-8 shadow-sm">
                  <Building2 size={18} />
                  <span className="text-sm font-medium text-black/70">
                    Industry Orientation Program
                  </span>
                </div>

                <h1 className="text-5xl md:text-8xl font-bold leading-[0.92] tracking-tight mb-10">
                  Know The Industry
                  <br />
                  Before You Enter It.
                </h1>

                <p className="text-xl md:text-2xl text-black/65 leading-relaxed max-w-3xl mb-10">
                  A professionally designed residential industry orientation
                  experience for Computer Science and IT students, built to
                  bridge the gap between academics and the real software
                  industry.
                </p>

                <div className="flex flex-wrap gap-5">
                  <a
                    href="tel:+918129584938"
                    className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-medium hover:scale-[1.02] transition-all"
                  >
                    Request Institutional Session
                    <ArrowRight size={18} />
                  </a>

                  <a
                    href="#domains"
                    className="inline-flex items-center gap-3 border border-black/10 px-8 py-4 rounded-2xl font-medium hover:bg-black/[0.03] transition-all"
                  >
                    Explore Program
                  </a>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60" />
                <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-sky-100 rounded-full blur-3xl opacity-60" />

                <div className="relative bg-gradient-to-br from-white to-blue-50 border border-black/10 rounded-[40px] p-10 shadow-xl">
                  <Image
                    src="/w-o-b-logo.png"
                    alt="Welcome OnBoard Logo"
                    width={700}
                    height={700}
                    className="mx-auto"
                  />

                  <div className="grid grid-cols-2 gap-5 mt-10">
                    <div className="bg-white border border-black/10 rounded-2xl p-5">
                      <p className="text-4xl font-bold mb-2">9+</p>
                      <p className="text-black/60">
                        Industry Domains
                      </p>
                    </div>

                    <div className="bg-white border border-black/10 rounded-2xl p-5">
                      <p className="text-4xl font-bold mb-2">Live</p>
                      <p className="text-black/60">
                        Interactive Sessions
                      </p>
                    </div>

                    <div className="bg-white border border-black/10 rounded-2xl p-5">
                      <p className="text-4xl font-bold mb-2">Real</p>
                      <p className="text-black/60">
                        Industry Exposure
                      </p>
                    </div>

                    <div className="bg-white border border-black/10 rounded-2xl p-5">
                      <p className="text-4xl font-bold mb-2">Campus</p>
                      <p className="text-black/60">
                        Residential Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY WOB */}
        <section className="border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-black/40 mb-5">
                Why WOB Exists
              </p>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
                Bridging Academia
                <br />
                And The Software Industry.
              </h2>

              <p className="text-xl text-black/65 leading-relaxed mb-8">
                Many students enter placements without understanding how the
                software industry actually functions beyond academics.
              </p>

              <p className="text-lg text-black/60 leading-9">
                WOB creates direct interaction between students and working
                professionals to help students understand modern software
                ecosystems, career opportunities, recruitment systems, and
                workplace expectations before entering the industry.
              </p>
            </div>

            <div className="grid gap-5">
              {[
                "Limited awareness of software industry roles",
                "Minimal exposure to real-world engineering environments",
                "Placement preparation without industry context",
                "Lack of interaction with working professionals",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-black/10 rounded-3xl p-8 bg-black/[0.02]"
                >
                  <p className="text-xl font-medium">{item}</p>
                </div>
              ))}

              <div className="bg-black text-white rounded-3xl p-10 mt-2">
                <p className="text-2xl leading-relaxed font-semibold">
                  WOB helps students understand the industry before becoming
                  part of it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STUDENT BENEFITS */}
        <section className="border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6 py-28">
            <div className="max-w-4xl mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-black/40 mb-5">
                Student Outcomes
              </p>

              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                What Students Gain
              </h2>

              <p className="text-xl text-black/60 leading-relaxed">
                WOB is designed to give students structured exposure to how the
                software industry actually operates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentBenefits.map((item) => (
                <div
                  key={item.title}
                  className="border border-black/10 rounded-[32px] p-8 bg-white hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-5">
                    {item.title}
                  </h3>

                  <p className="text-black/60 leading-8 text-lg">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DOMAINS */}
        <section
          id="domains"
          className="border-b border-black/10"
        >
          <div className="max-w-7xl mx-auto px-6 py-28">
            <div className="max-w-4xl mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-black/40 mb-5">
                Featured Domains
              </p>

              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Industry Areas Covered
              </h2>

              <p className="text-xl text-black/60 leading-relaxed">
                Institutions can organize sessions from multiple software
                industry verticals based on academic focus and student interests.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {domains.map((item) => (
                <div
                  key={item.title}
                  className="group border border-black/10 rounded-[32px] p-8 bg-gradient-to-b from-white to-black/[0.015] hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-semibold mb-5">
                    {item.title}
                  </h3>

                  <p className="text-black/60 leading-8">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6 py-28">
            <div className="max-w-4xl mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-black/40 mb-5">
                Program Experience
              </p>

              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Structured As A
                <br />
                Real Industry Interaction.
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="border border-black/10 rounded-[32px] p-10">
                <p className="text-sm uppercase tracking-[0.2em] text-black/40 mb-5">
                  Session 01
                </p>

                <h3 className="text-3xl font-bold mb-6">
                  Industry Awareness
                </h3>

                <div className="space-y-4 text-black/65 text-lg">
                  <p>• Software industry ecosystem overview</p>
                  <p>• Understanding modern IT careers</p>
                  <p>• Technology domain awareness</p>
                </div>
              </div>

              <div className="border border-black/10 rounded-[32px] p-10">
                <p className="text-sm uppercase tracking-[0.2em] text-black/40 mb-5">
                  Session 02
                </p>

                <h3 className="text-3xl font-bold mb-6">
                  Professional Insight
                </h3>

                <div className="space-y-4 text-black/65 text-lg">
                  <p>• Recruitment & placement understanding</p>
                  <p>• Resume and profile positioning</p>
                  <p>• Industry workflow discussions</p>
                </div>
              </div>

              <div className="border border-black/10 rounded-[32px] p-10">
                <p className="text-sm uppercase tracking-[0.2em] text-black/40 mb-5">
                  Session 03
                </p>

                <h3 className="text-3xl font-bold mb-6">
                  Open Interaction
                </h3>

                <div className="space-y-4 text-black/65 text-lg">
                  <p>• Q&A discussions with professionals</p>
                  <p>• Career-oriented interaction sessions</p>
                  <p>• Networking and mentorship conversations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSTITUTIONS */}
        <section className="border-b border-black/10">
          <div className="max-w-7xl mx-auto px-6 py-28">
            <div className="max-w-5xl mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-black/40 mb-5">
                Institutional Value
              </p>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                Built For Institutions That
                <br />
                Want Students To Understand
                <br />
                The Real Industry.
              </h2>

              <p className="text-xl text-black/60 leading-relaxed">
                WOB strengthens industry exposure and professional awareness
                among students through structured interaction with software
                professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {institutionBenefits.map((item) => (
                <div
                  key={item}
                  className="border border-black/10 rounded-[32px] p-10 bg-black/[0.02]"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                      <GraduationCap size={22} />
                    </div>

                    <p className="text-xl text-black/80 leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESIDENTIAL */}
        <section className="border-b border-black/10">
          <div className="max-w-5xl mx-auto px-6 py-28 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-black/40 mb-5">
              Residential Experience
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-10">
              Designed As A Live
              <br />
              On-Campus Experience.
            </h2>

            <p className="text-xl text-black/65 leading-relaxed">
              WOB is intentionally conducted as an in-person residential
              experience to encourage authentic interaction, communication,
              networking, and meaningful discussions between students and
              industry professionals.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 to-white pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-black/40 mb-5">
              Institutional Collaboration
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-10">
              Bring WOB
              <br />
              To Your Institution.
            </h2>

            <p className="text-xl text-black/60 max-w-3xl mx-auto leading-relaxed mb-12">
              Organize a professionally conducted industry orientation
              experience for Computer Science and IT students.
            </p>

            <div className="flex flex-col items-center gap-5">
              <a
                href="tel:+918129584938"
                className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-2xl text-lg font-medium hover:scale-[1.02] transition-all"
              >
                Schedule Institutional Discussion
                <ArrowRight size={20} />
              </a>

              <div className="text-black/50 text-lg mt-4">
                Program Coordination
              </div>

              <div className="text-3xl md:text-5xl font-bold tracking-tight">
                +91 81295 84938
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default WOBPage;