import { useCallback, useMemo } from "react";

import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";
import { motion } from 'framer-motion';

import {
  BrainCircuit,
  Sparkles,
  Layers3,
  ServerCog,
  ArrowUpRight,
  Mail,
} from 'lucide-react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function App() {
  /*
  ============================================
  CENTRALIZED PORTFOLIO CONFIG
  ============================================
  */

  const portfolio = {
    personal: {
      name: 'Shiraz Ahmed',

      role: 'Software Engineer',

      tagline:
        'Building scalable AI systems for modern SaaS products.',

      description:
        'Software Engineer with extensive experience building scalable SaaS platforms, distributed systems, AI integrations, and cloud-native applications using .NET, .NET Core, C#, Python, React, Angular, OpenAI, AWS, Azure, Kafka, RabbitMQ, and Twilio.',

      image: `${import.meta.env.BASE_URL}images/profile.png`,
    },

    social: {
      github: 'https://github.com/shiraz050',

      linkedin: 'https://www.linkedin.com/in/shiraz-a-234bb9217/',

      email: 'mailto:shirazahmed847@gmail.com',
    },

    stats: [
      {
        value: '1000+',
        label: 'Customers Served',
      },

      {
        value: '20+',
        label: 'Systems Built',
      },
    ],

    techStack: [
      '.NET',
      '.NET Core',
      'C#',
      'Java',
      'Python',
      'React',
      'Angular',
      'JavaScript',
      'OpenAI',
      'AWS',
      'Azure',
      'Kafka',
      'RabbitMQ',
      'Docker',
      'Sql Server',
      'MySQL',
      'MongoDB',
      'PostgreSQL',
      'Twilio',
      'Entity Framework',
      'Hibernate',
    ],

projects: [
{
title: 'Heartline',

 
company: 'PanaceaLogics',

description:
  'Architected and deployed an AI-powered healthcare communication platform for automated caregiver monitoring and patient engagement. Integrated OpenAI for AI-generated call summaries, AWS Medical Transcribe for speech-to-text processing, Twilio for automated calling, AWS SNS for notifications, and Stripe for subscription billing. Designed scalable backend APIs and managed full AWS cloud deployment using EC2 and RDS.',

highlights: [
  'Processed 300+ automated calls monthly',
  'Integrated OpenAI and AWS Medical Transcribe workflows',
  'Built Twilio-powered automated calling infrastructure',
  'Managed production deployment on AWS',
],

stack: [
  '.NET Core',
  'React',
  'OpenAI',
  'Twilio',
  'AWS',
  'Stripe',
  'REST APIs',
],

link: 'https://myheartline.com',
 

},

{
title: 'Boostifai',

 
company: 'PanaceaLogics',

description:
  'Independently developed an AI-powered SEO automation platform serving 200+ paying customers. Built scalable backend architecture, custom web crawling pipelines, and OpenAI-powered SEO analysis workflows while managing production infrastructure and CI/CD deployment on GCP.',

highlights: [
  'Scaled platform to 200+ paying customers',
  'Built custom SEO crawling engine',
  'Managed full GCP deployment pipeline',
  'Optimized backend and SQL performance',
],

stack: [
  '.NET MVC',
  'SQL Server',
  'OpenAI',
  'GCP',
  'CI/CD',
  'Web Crawling',
],

link: 'https://boostifai.com',
 

},

{
title: 'CAIA',

 
company: 'PanaceaLogics',

description:
  'Built a Construction AI Assistant focused on automated contract analysis and legal document processing. Developed scalable APIs using Django and PostgreSQL while integrating OpenAI-powered workflows and Stripe payment processing.',

highlights: [
  'Automated AI-based contract analysis',
  'Built scalable Django APIs',
  'Integrated OpenAI document processing',
  'Implemented Stripe billing workflows',
],

stack: [
  'Python',
  'Django',
  'PostgreSQL',
  'OpenAI',
  'Stripe',
],

link: 'https://www.constructionaiassistant.com',
 

},

{
title: 'Code3Scribe',

 
company: 'PanaceaLogics',

description:
  'Developed an AI-powered document and code generation platform for international clients. Designed scalable backend modules, integrated OpenAI-powered generation workflows, and delivered production-ready APIs for automated content and code generation.',

highlights: [
  'Built AI-powered document generation workflows',
  'Designed scalable backend architecture',
  'Integrated OpenAI content generation APIs',
  'Delivered production-ready enterprise modules',
],

stack: [
  '.NET Core',
  'OpenAI',
  'SQL Server',
  'REST APIs',
  'Azure DevOps',
],

link: 'https://code3scribe.com',
 

},

{
title: 'TrySwitch',

 
company: 'PanaceaLogics',

description:
  'Developed backend APIs and cloud infrastructure for a real estate investment platform supporting secure property investment workflows. Integrated Stripe payment processing, Twilio identity verification, and AWS deployment services.',

highlights: [
  'Built scalable .NET Core backend APIs',
  'Integrated Twilio identity verification',
  'Implemented Stripe payment workflows',
  'Managed AWS deployment infrastructure',
],

stack: [
  '.NET Core',
  'AWS',
  'Stripe',
  'Twilio',
  'SQL Server',
  'REST APIs',
],

link: 'https://tryswitch.com',
 

},

{
title: 'Internal Automation Systems',

 
company: 'PanaceaLogics',

description:
  'Developed multiple internal automation systems and AI tools focused on workflow optimization, reporting automation, and operational efficiency. Built integrations with SharePoint, Power Automate, OpenAI APIs, and cloud services to streamline internal business processes.',

highlights: [
  'Built workflow automation tools',
  'Integrated SharePoint and Power Automate',
  'Developed AI-assisted operational tools',
  'Improved internal productivity and reporting',
],

stack: [
  '.NET Core',
  'SharePoint',
  'Power Automate',
  'OpenAI',
  'Azure DevOps',
],
 

},

{
title: 'AI Desktop & Mobile Applications',

 
company: 'Personal & Client Projects',

description:
  'Built AI-powered desktop and mobile applications using .NET MAUI, React Native, and OpenAI integrations. Developed cross-platform solutions focused on productivity, automation, and AI-assisted workflows.',

highlights: [
  'Built cross-platform mobile applications',
  'Developed AI-powered desktop tools',
  'Integrated OpenAI APIs into client applications',
  'Worked with .NET MAUI and React Native',
],

stack: [
  '.NET MAUI',
  'React Native',
  'OpenAI',
  'C#',
  'Mobile Development',
],
 

},
],


    achievements: [
      'Champion Award 2025 — Recognized for ownership of critical production systems',

      'Built and shipped AI SaaS systems serving 200+ paying customers',

      'Architected AI calling systems processing 300+ automated calls monthly',

      'Worked with international clients across US, Belgium, Switzerland, and Australia',

      'Implemented scalable backend systems using SOLID principles and clean architecture',
    ],
  };

const particlesInit = useCallback(async (engine) => {
  await loadFull(engine);
}, []);

const particlesOptions = useMemo(
  () => ({
    fullScreen: {
      enable: false,
    },

    background: {
      color: {
        value: "transparent",
      },
    },

    fpsLimit: 120,

    particles: {
      number: {
        value: 120,
      },

      color: {
        value: "#38bdf8",
      },

      links: {
        enable: true,
        color: "#38bdf8",
        distance: 150,
        opacity: 0.2,
        width: 1,
      },

      move: {
        enable: true,
        speed: 1.5,
      },

      opacity: {
        value: 0.4,
      },

      size: {
        value: 2,
      },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },

      modes: {
        grab: {
          distance: 140,

          links: {
            opacity: 0.5,
          },
        },
      },
    },

    detectRetina: true,
  }),
  []
);
  return (
<>

    <div className="relative z-0 min-h-screen overflow-hidden bg-black text-white">
      {/* ========================================= */}
      {/* BACKGROUND */}
      {/* ========================================= */}

      <div className="absolute top-[-300px] left-[-150px] w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[180px]" />

      <div className="absolute bottom-[-300px] right-[-150px] w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[200px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_40%)]" />

      {/* ========================================= */}
      {/* NAVBAR */}
      {/* ========================================= */}

      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">
        <div className="flex items-center justify-between px-5 md:px-7 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(59,130,246,0.12)]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />

            <h1 className="font-semibold text-sm md:text-base tracking-wide">
              {portfolio.personal.name}
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ========================================= */}
      {/* HERO */}
      {/* ========================================= */}

      <section className="relative min-h-screen flex items-center pt-40 md:pt-52 pb-20 " id="about">
        
        <div className="max-w-7xl mx-auto px-6 w-full">


          <Particles
  id="tsparticles"
  init={particlesInit}
  options={particlesOptions}
  className="absolute top-0 left-0 w-full h-full z-10"
/>
          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-16 items-center">
            {/* ========================================= */}
            {/* LEFT */}
            {/* ========================================= */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 text-center lg:text-left order-2 lg:order-1"
            >
              {/* TAGS */}

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <div className="px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs md:text-sm">
                  {portfolio.personal.role}
                </div>
              </div>

              {/* HEADING */}

              <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-[-0.05em]">
                Building
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                  {' '}
                  scalable AI{' '}
                </span>
                systems for modern SaaS products.
              </h1>

              {/* DESCRIPTION */}

              <p className="mt-8 text-base md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {portfolio.personal.description}
              </p>

              {/* TECH STACK */}

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8 max-w-3xl">
                {portfolio.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-sm
                      text-white/70
                      backdrop-blur-xl
                      hover:bg-white/[0.06]
                      transition
                    "
                  >
                    {tech}
                  </div>
                ))}
              </div>

              {/* BUTTONS */}

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10 ml-3">
                <a
                  href={portfolio.social.github}
                  target="_blank"
                  className="group px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold flex items-center gap-3 hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(59,130,246,0.25)]"
                >
                  <FaGithub size={18} />

                  View GitHub

                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                  />
                </a>

                <a
                  href={portfolio.social.linkedin}
                  target="_blank"
                  className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300 flex items-center gap-3"
                >
                  <FaLinkedin size={18} />

                  LinkedIn
                </a>
              </div>

              {/* STATS */}

              <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg mx-auto lg:mx-0">
                {portfolio.stats.map((stat) => (
                  <div key={stat.label}>
                    <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                      {stat.value}
                    </h3>

                    <p className="text-white/40 mt-2 text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ========================================= */}
            {/* RIGHT */}
            {/* ========================================= */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 flex justify-center lg:justify-end order-1 lg:order-2"
            >
              {/* MAIN GLOW */}

              <div className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full bg-blue-500/15 blur-[140px]" />

              {/* EXTRA BLUR */}

              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] scale-110 rounded-full" />

              {/* BADGE 1 */}

              <div className="absolute z-30 top-10 md:top-20 -left-4 md:-left-10 backdrop-blur-xl border border-white/10 bg-white/[0.03] rounded-2xl px-4 py-3 hidden md:block">
                <div className="flex items-center gap-3">
                  <BrainCircuit className="text-cyan-300" size={18} />

                  <span className="text-sm text-white/60">
                    OpenAI Systems
                  </span>
                </div>
              </div>

              {/* BADGE 2 */}

              <div className="absolute z-30 bottom-16 -right-6 md:-right-10 backdrop-blur-xl border border-white/10 bg-white/[0.03] rounded-2xl px-4 py-3 hidden md:block">
                <div className="flex items-center gap-3">
                  <Layers3 className="text-blue-300" size={18} />

                  <span className="text-sm text-white/60">
                    Distributed Architecture
                  </span>
                </div>
              </div>

              {/* BADGE 3 */}

              <div className="absolute z-30 bottom-[-10px] left-0 backdrop-blur-xl border border-white/10 bg-white/[0.03] rounded-2xl px-4 py-3 hidden md:block">
                <div className="flex items-center gap-3">
                  <ServerCog className="text-cyan-300" size={18} />

                  <span className="text-sm text-white/60">
                    Cloud Infrastructure
                  </span>
                </div>
              </div>

              {/* IMAGE */}

              <div className="relative group">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-blue-500/20 to-cyan-400/10 blur-3xl opacity-70 group-hover:opacity-100 transition duration-700" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_60px_rgba(59,130,246,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />

                  <img
                    src={portfolio.personal.image}
                    alt={portfolio.personal.name}
                    loading="lazy"
                    className="
                      w-[300px]
                      h-[340px]

                      sm:w-[360px]
                      sm:h-[400px]

                      md:w-[420px]
                      md:h-[460px]

                      object-cover
                      object-center
                      group-hover:scale-105
                      transition
                      duration-700
                    "
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* SKILLS */}
      {/* ========================================= */}

      <section
        id="skills"
        className="relative py-24 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-cyan-300/70 text-sm mb-4">
              Tech Stack
            </p>

            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em]">
              Technologies & Tools.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolio.techStack.map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl p-6 hover:border-cyan-400/50 transition duration-300 text-center"
              >
                <p className="text-white/80 font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* PROJECTS */}
      {/* ========================================= */}

      <section
        id="projects"
        className="relative py-24 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-cyan-300/70 text-sm mb-4">
              Featured Work
            </p>

            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em]">
              Production systems & AI platforms.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {portfolio.projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-white/10 backdrop-blur-xl p-8"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-blue-500/10 to-transparent" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center mb-8">
                    <Sparkles className="text-cyan-300" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-cyan-300/70 text-sm mb-4">
                    {project.company}
                  </p>

                  <p className="text-white/60 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.stack.map((tech) => (
                      <div
                        key={tech}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition"
                  >
                    Visit Project

                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* ACHIEVEMENTS */}
      {/* ========================================= */}

      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-cyan-300/70 text-sm mb-4">
              Achievements
            </p>

            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em]">
              Production impact & recognition.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.achievements.map((achievement) => (
              <motion.div
                key={achievement}
                whileHover={{
                  y: -6,
                }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
              >
                <p className="text-white/70 leading-relaxed">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
          {/* Awards & Recognition */}
<section className="border-t border-blue-500/20 bg-gradient-to-b from-black to-blue-950/20">
  <div className="max-w-7xl mx-auto px-6 py-24">
    <div className="mb-16">
      <p className="uppercase tracking-[0.25em] text-sm text-blue-300/70 mb-4">
        Awards & Recognition
      </p>

      <h2 className="text-5xl font-black mb-6">
        Engineering Excellence
      </h2>

      <p className="text-blue-100/70 text-lg max-w-3xl leading-relaxed">
        Recognition for backend engineering excellence, scalable SaaS
        architecture, AI-powered systems delivery, and production ownership
        at PanaceaLogics.
      </p>
    </div>

    {/* Awards Images */}
    <div className="grid lg:grid-cols-2 gap-8 mb-16">
      {/* Presenting Award */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="group rounded-[2rem] overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-950/20 to-black hover:-translate-y-2 transition duration-500"
      >
        <div className="overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}images/presenting-award.JPG`}
            alt="Presenting Award"
            loading="lazy"
            className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
          />
        </div>

        <div className="p-8">
          <p className="uppercase tracking-[0.2em] text-sm text-blue-300/70 mb-3">
            PanaceaLogics
          </p>

          <h3 className="text-3xl font-black mb-4">
            Champion Award Presentation
          </h3>

          <p className="text-blue-100/70 leading-relaxed">
            Recognized for outstanding contributions to scalable AI systems,
            backend engineering excellence, production ownership, and
            successful SaaS product delivery for international clients.
          </p>
        </div>
      </motion.div>

      {/* Award Certificate */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="group rounded-[2rem] overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-950/20 to-black hover:-translate-y-2 transition duration-500"
      >
        <div className="overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}images/champion-award.JPG`}
            alt="Champion Award Certificate"
            loading="lazy"
            className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
          />
        </div>

        <div className="p-8">
          <p className="uppercase tracking-[0.2em] text-sm text-blue-300/70 mb-3">
            Achievement Certificate
          </p>

          <h3 className="text-3xl font-black mb-4">
            Champion Award 2025
          </h3>

          <p className="text-blue-100/70 leading-relaxed">
            Awarded for backend architecture contributions, scalable cloud
            deployments, AI-powered workflows, engineering ownership, and
            high-impact product delivery at PanaceaLogics.
          </p>
        </div>
      </motion.div>
    </div>

    {/* HackerRank Certifications */}
    <div className="grid md:grid-cols-2 gap-6">
      <a
        href="https://www.hackerrank.com/certificates/iframe/2ad26f55dba7"
        target="_blank"
        className="rounded-3xl border border-blue-500/20 bg-blue-950/10 p-8 hover:-translate-y-2 transition duration-300"
      >
        <p className="uppercase tracking-[0.2em] text-sm text-blue-300/70 mb-3">
          HackerRank Certification
        </p>

        <h3 className="text-2xl font-bold mb-4">
          SQL Intermediate Certification
        </h3>

        <p className="text-blue-100/70 leading-relaxed">
          Verified HackerRank certification demonstrating strong backend
          engineering and SQL programming expertise.
        </p>
      </a>

      <a
        href="https://www.hackerrank.com/certificates/e32908308d1e"
        target="_blank"
        className="rounded-3xl border border-blue-500/20 bg-blue-950/10 p-8 hover:-translate-y-2 transition duration-300"
      >
        <p className="uppercase tracking-[0.2em] text-sm text-blue-300/70 mb-3">
          HackerRank Certification
        </p>

        <h3 className="text-2xl font-bold mb-4">
          Software Engineer Certification
        </h3>

        <p className="text-blue-100/70 leading-relaxed">
          Verified software engineering certification focused on full-stack
          development, database design, and scalable system architecture.
        </p>
      </a>
    </div>
  </div>
</section>
        </div>
      </section>

      {/* ========================================= */}
      {/* CONTACT */}
      {/* ========================================= */}

      <section
        id="contact"
        className="relative py-24 border-t border-white/5"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-cyan-300/70 text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.05em] leading-[0.95] mb-8">
            Let’s build something impactful.
          </h2>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12">
            Open to backend engineering, AI systems,
            SaaS architecture, and remote opportunities.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={portfolio.social.email}
              className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300 flex items-center gap-3"
            >
              <Mail size={18} />

              Email Me
            </a>

            <a
              href={portfolio.social.github}
              target="_blank"
              className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300 flex items-center gap-3"
            >
              <FaGithub size={18} />

              GitHub
            </a>

            <a
              href={portfolio.social.linkedin}
              target="_blank"
              className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300 flex items-center gap-3"
            >
              <FaLinkedin size={18} />

              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* FOOTER */}
      {/* ========================================= */}

      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white/40 text-sm text-center md:text-left">
            © 2026 {portfolio.personal.name} — Built with React, Vite &
            Tailwind CSS
          </p>

          <div className="flex items-center gap-5 text-white/40">
            <a
              href={portfolio.social.github}
              target="_blank"
            >
              <FaGithub size={18} />
            </a>

            <a
              href={portfolio.social.linkedin}
              target="_blank"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
</>
  );
}
