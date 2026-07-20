import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Briefcase, Cloud, Code2, Database, Mail, MapPin, ServerCog, ShieldCheck, Sparkles } from 'lucide-react';
import { ParticleBackground } from '../Canvas/ParticleBackground';
import {
  greeting,
  heroHighlights,
  aboutProfile,
  experience,
  degrees,
  projectsHeader,
  portfolioProjects,
  contactPageData,
  socialMediaLinks,
} from '../../portfolio';
import UONLogo from '../../assets/images/UON-Logo.png';
import IUBLogo from '../../assets/images/iiitk_logo.png';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];
 
const PremiumPortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [locationInfo, setLocationInfo] = useState(null);
  const [locationError, setLocationError] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const requestLocation = () => {
      if (!navigator.geolocation) {
        setLocationError('Geolocation is not available in this browser.');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const nextLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(nextLocation);
          setLocationError('');

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${nextLocation.lat}&lon=${nextLocation.lng}`
            );
            const data = await response.json();
            const city = data?.address?.city || data?.address?.town || data?.address?.village || 'your area';
            const country = data?.address?.country || 'your country';
            setLocationInfo({ city, country });
          } catch (error) {
            setLocationInfo(null);
          }
        },
        () => {
          setLocationError('Location access was denied. Please enable it to share your current city.');
          setLocationInfo(null);
        }
      );
    };

    requestLocation();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.15,
      },
    },
  };

  const textWordVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

  const AnimatedText = ({ text, tag = 'p', className = '' }) => {
    const MotionTag = motion[tag];
    return (
      <MotionTag variants={textRevealVariants} className={className}>
        {String(text)
          .split(' ')
          .map((word, idx, arr) => (
            <motion.span
              key={`word-${idx}-${word}`}
              variants={textWordVariants}
              className="inline-block mr-1 whitespace-nowrap"
            >
              {word}
              {idx !== arr.length - 1 ? '\u00A0' : ''}
            </motion.span>
          ))}
      </MotionTag>
    );
  };

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleActiveSection = () => {
      const scrollY = window.scrollY + 140;
      let currentSection = 'home';
      navItems.forEach((item) => {
        const sectionId = item.toLowerCase();
        const section = document.getElementById(sectionId);
        if (section && section.offsetTop <= scrollY) {
          currentSection = sectionId;
        }
      });
      setActiveSection(currentSection);
    };

    handleActiveSection();
    window.addEventListener('scroll', handleActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', handleActiveSection);
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      progress: 95,
      summary: 'Crafting polished, responsive interfaces with modern UI systems.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Framer Motion'],
    },
    {
      title: 'Backend Development',
      icon: ServerCog,
      progress: 90,
      summary: 'Building scalable APIs, auth systems, and product-ready services.',
      technologies: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'JWT', 'Middleware', 'SSR/CSR Patterns'],
    },
    {
      title: 'Databases & Data',
      icon: Database,
      progress: 88,
      summary: 'Designing reliable data models and high-performing integrations.',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Schema Design', 'Query Optimisation'],
    },
    {
      title: 'AI & Machine Learning',
      icon: BrainCircuit,
      progress: 84,
      summary: 'Integrating intelligent workflows and LLM-based experiences.',
      technologies: ['OpenAI APIs', 'AI Integration', 'Prompt Engineering', 'LLM Applications', 'Automation'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      progress: 86,
      summary: 'Shipping production-ready systems with modern deployment tools.',
      technologies: ['Git', 'GitHub', 'Docker', 'Vercel', 'Netlify', 'CI/CD', 'Cloud Hosting'],
    },
    {
      title: 'Software Engineering',
      icon: ShieldCheck,
      progress: 92,
      summary: 'Applying clean architecture, testing, and agile delivery practices.',
      technologies: ['System Design', 'Clean Architecture', 'Agile', 'Responsive Design', 'Testing', 'Performance Optimisation'],
    },
  ];

  const previewResumeHref = greeting.resumeLink || '/resume.pdf';
  // derive a direct download URL if provided or extract from Google Drive preview
  const getDriveDownload = (url) => {
    if (!url) return null;
    // if user provided a direct download link in portfolio.js, use it
    if (greeting.resumeDownloadLink) return greeting.resumeDownloadLink;
    const match = url.match(/\/d\/(.*?)\//);
    if (match && match[1]) return `https://drive.google.com/uc?export=download&id=${match[1]}`;
    return null;
  };
  const downloadResumeHref = getDriveDownload(previewResumeHref) || '/resume.pdf';

  return (
    <div className="min-h-screen bg-black text-white">
      <ParticleBackground />

      {/* NAVIGATION */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-purple-500/20'
            : 'bg-black/30 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.03, y: -1 }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 shadow-[0_0_24px_rgba(128,90,213,0.35)]">
              <span className="text-sm font-black text-white">AS</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Abdul Subhan
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.35em] text-gray-400">Software Engineer</span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-all ${
                  activeSection === item.toLowerCase()
                    ? 'text-white border-b-2 border-cyan-400 pb-1'
                    : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-purple-400 pb-1'
                }`}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section id="home" className="relative flex min-h-screen items-center justify-center px-6 pt-24">
        <motion.div
          className="z-10 w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mx-auto max-w-4xl text-center">
            <motion.div variants={itemVariants} className="mb-6 inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm text-purple-200 shadow-lg shadow-purple-500/10">
              <span className="font-semibold">👋 Welcome to my portfolio</span>
            </motion.div>

            <AnimatedText
              tag="h1"
              text={greeting.title}
              className="mb-6 text-5xl font-bold leading-tight text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text md:text-7xl lg:text-8xl"
            />

            <AnimatedText
              tag="p"
              text={greeting.subTitle}
              className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl"
            />

            <motion.div variants={itemVariants} className="mb-10 grid gap-4 md:grid-cols-3">
              {heroHighlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5 text-left shadow-lg shadow-black/40 backdrop-blur-xl"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mb-10 flex flex-col justify-center gap-4 sm:flex-row">
              <motion.a
                href={previewResumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.25 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>

              <motion.a
                href={downloadResumeHref}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.28 }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <ArrowRight size={16} />
                Download CV
              </motion.a>

              <motion.a
                href="#projects"
                className="rounded-full border border-purple-500 bg-white/5 px-8 py-3 font-semibold text-purple-300 transition-all hover:bg-purple-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.35 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:gap-4">
              {socialMediaLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-lg text-white shadow-lg shadow-black/30 transition-all hover:border-cyan-400/40 hover:bg-slate-900/90"
                  whileHover={{ y: -5, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  <i className={`fab ${social.fontAwesomeIcon}`}></i>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-500 text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center p-1">
              <motion.div
                className="w-1 h-2 bg-purple-400 rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative overflow-hidden bg-gradient-to-b from-black via-purple-950/70 to-slate-950 px-6 py-32">
        <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.25),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.25),_transparent_20%)] opacity-20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12 text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="mb-3 text-4xl font-bold text-white md:text-5xl"
            >
              About
            </motion.h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 lg:mx-0" />
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="grid items-stretch gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/60 backdrop-blur-2xl md:p-10">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent" />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" /> Digital Experience
                    </span>
                    <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200">
                      Abdul Subhan
                    </span>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-gray-400">Full-Stack Web Developer</p>
                    <h3 className="mt-3 text-3xl font-semibold text-white">{aboutProfile.headline}</h3>
                  </div>
                  <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 text-lg leading-relaxed text-gray-300 md:text-xl">
                    <p>{aboutProfile.intro}</p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'Node.js', 'AI', 'Cloud'].map((skill, idx) => (
                        <span key={idx} className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm text-purple-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {aboutProfile.points.map((item, idx) => (
                    <div key={idx} className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm leading-relaxed text-gray-300 shadow-inner shadow-black/10">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-950/90 to-slate-900/80 p-8 shadow-2xl shadow-black/60 backdrop-blur-2xl">
                <div className="absolute inset-x-8 top-0 h-24 rounded-b-[2rem] bg-gradient-to-b from-purple-500/15 to-transparent" />
                <div className="relative space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">What I Build</p>
                    <h3 className="mt-4 text-3xl font-bold text-white">Premium digital products for modern teams.</h3>
                  </div>
                  <p className="leading-relaxed text-gray-300">
                    I build digital products that are user-focused, technically robust, and designed for long-term growth across modern web and AI-driven experiences.
                  </p>
                  <div className="grid gap-3">
                    {[
                      'Full-stack web applications',
                      'AI-integrated platforms',
                      'SaaS products',
                      'Responsive websites',
                      'Aws Microservices',
                      'RESTful APIs',
                      'Database-driven applications',
                      'Cloud-based solutions',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 rounded-3xl border border-purple-500/10 bg-slate-950/90 p-4 transition-all hover:-translate-y-1 hover:border-cyan-500/20">
                        <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-sm">⚡</span>
                        <span className="text-sm font-medium text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/60 backdrop-blur-2xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Professional Focus</p>
                    <h4 className="mt-2 text-2xl font-semibold text-white">Built for modern delivery</h4>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { value: '5+', label: 'Years Experience' },
                    { value: '10+', label: 'Projects Delivered' },
                    { value: '100%', label: 'Code Quality' },
                    { value: '∞', label: 'Learning Journey' },
                  ].map((stat, idx) => (
                    <div key={idx} className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-center">
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                      <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="relative py-32 px-6 bg-gradient-to-b from-slate-950 via-black to-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <AnimatedText tag="h2" text="Skills & Expertise" className="text-4xl md:text-5xl font-bold mb-3" />
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
            <AnimatedText tag="p" text="A comprehensive stack covering modern front-end, back-end, cloud, and AI-focused product development." className="text-gray-400 mt-4 max-w-2xl" />
          </motion.div>

          <motion.div
            className="grid gap-6 lg:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/60 backdrop-blur-2xl"
                >
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-purple-500/10 to-transparent" />
                  <div className="relative space-y-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-cyan-200">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                          <p className="text-sm text-gray-400">{category.summary}</p>
                        </div>
                      </div>
                      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                        {category.progress}%
                      </span>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm text-gray-400">
                        <span>Proficiency</span>
                        <span>{category.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800">
                        <div className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" style={{ width: `${category.progress}%` }} />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-900/5 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <AnimatedText tag="h2" text="Professional Experience" className="text-4xl md:text-5xl font-bold mb-3" />
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
            <AnimatedText tag="p" text="Concise, results-focused experience shaped around modern web products, scalable delivery, and professional execution." className="text-gray-400 mt-4 max-w-2xl" />
          </motion.div>

          <motion.div
            className="grid gap-8 lg:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {experience.sections[0]?.experiences?.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/60 backdrop-blur-2xl"
              >
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-500/10 to-transparent" />
                <div className="relative space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-cyan-200">
                          <Briefcase size={18} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                          <p className="text-cyan-400 font-medium">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-cyan-200 whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin size={15} />
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-3">
                    {(exp.highlights || []).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/80 p-3 text-sm text-gray-300">
                        <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-200">
                          <ArrowRight size={14} />
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <AnimatedText tag="h2" text="Featured Projects" className="text-4xl md:text-5xl font-bold mb-3" />
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
            <AnimatedText tag="p" text={projectsHeader.description} className="text-gray-400 mt-4 max-w-2xl" />
          </motion.div>

          <motion.div
            className="grid gap-8 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {portfolioProjects.map((proj, idx) => (
              <motion.a
                key={idx}
                href={proj.url}
                target="_blank"
                rel="noreferrer"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/60 backdrop-blur-2xl"
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-purple-500/10 to-transparent" />
                <div className="relative space-y-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-cyan-200">
                      <Sparkles size={20} />
                    </div>
                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-cyan-200">
                      {proj.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white">{proj.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-300">{proj.summary}</p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-4 text-sm leading-relaxed text-gray-300">
                    {proj.highlight}
                  </div>

                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gray-400">Core technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.technologies.map((tech, i) => (
                        <span key={i} className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gray-400">Key focus</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {proj.focus.map((item, focusIdx) => (
                        <li key={focusIdx} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-950/70 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <AnimatedText tag="h2" text="Education" className="text-4xl md:text-5xl font-bold mb-3" />
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
            <AnimatedText
              tag="p"
              text="A premium academic showcase with a polished MSc highlight and a concise BS capstone summary. Responsive, modern, and easy to skim."
              className="text-gray-400 mt-4 max-w-2xl"
            />
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-10 h-[calc(100%-2.5rem)] w-px -translate-x-1/2 rounded-full bg-gradient-to-b from-purple-500/35 via-transparent to-cyan-500/35" />

            <motion.div
              className="grid gap-10 md:grid-cols-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {degrees.degrees?.map((degree, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`relative col-span-12 md:col-span-5 ${isLeft ? 'md:col-start-1 md:justify-self-end' : 'md:col-start-8 md:justify-self-start'}`}
                    whileHover={{ y: -6 }}
                  >
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/60 backdrop-blur-2xl">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.15),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_24%)] opacity-80" />
                      <div className="relative space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/15 to-cyan-500/15 shadow-lg shadow-cyan-500/10">
                            <img src={idx === 0 ? UONLogo : IUBLogo} alt={degree.alt_name} className="h-10 w-10 object-contain" />
                          </div>
                          <div>
                            <p className="text-cyan-300 uppercase tracking-[0.25em] text-xs font-semibold">{degree.university}</p>
                            <h3 className="text-3xl font-bold text-white leading-tight">{degree.degree}</h3>
                          </div>
                        </div>

                        <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-inner shadow-black/10">
                          <p className="text-gray-400">{degree.duration}</p>
                          <p className="text-gray-300 mt-3 leading-relaxed">{degree.description}</p>
                        </div>

                        {degree.dissertation && (
                          <div className="rounded-[1.75rem] border border-cyan-500/15 bg-white/5 p-6 shadow-lg shadow-cyan-500/5">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <div>
                                <p className="text-sm text-cyan-300 uppercase tracking-[0.2em] font-semibold">Dissertation</p>
                                <h4 className="text-2xl font-semibold text-white mt-2">{degree.dissertation.title}</h4>
                              </div>
                              {/* <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-purple-200">
                                <span className="h-2 w-2 rounded-full bg-cyan-400" /> Featured Academic Project
                              </span> */}
                            </div>
                            <p className="text-gray-300 leading-relaxed mt-4">{degree.dissertation.summary}</p>
                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                              {degree.dissertation.highlights.map((highlight, hIdx) => (
                                <div key={hIdx} className="rounded-2xl border border-white/10 bg-slate-950/90 p-3 text-sm text-gray-300">
                                  {highlight}
                                </div>
                              ))}
                            </div>
                            <div className="mt-5">
                              <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">Tech stack</p>
                              <div className="flex flex-wrap gap-2">
                                {degree.dissertation.technologies.map((tech, techIdx) => (
                                  <span key={techIdx} className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {degree.finalYearProject && (
                          <div className="rounded-[1.75rem] border border-purple-500/15 bg-white/5 p-6 shadow-lg shadow-purple-500/5">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <div>
                                <p className="text-sm text-purple-300 uppercase tracking-[0.2em] font-semibold">Final Year Project</p>
                                <h4 className="text-2xl font-semibold text-white mt-2">{degree.finalYearProject.title}</h4>
                              </div>
                              {/* <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-slate-900/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gray-300">
                                <span className="h-2 w-2 rounded-full bg-purple-400" /> Concise Capstone
                              </span> */}
                            </div>
                            <p className="text-gray-300 leading-relaxed mt-4">{degree.finalYearProject.summary}</p>
                            <div className="mt-5">
                              <h5 className="text-white font-semibold mb-3">Key features</h5>
                              <ul className="space-y-3 text-gray-300 text-sm">
                                {degree.finalYearProject.features.slice(0, 3).map((feature, fIdx) => (
                                  <li key={fIdx} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/90 p-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-4">
                              <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">Core technologies</p>
                              <div className="flex flex-wrap gap-2">
                                {degree.finalYearProject.technologies.slice(0, 5).map((tech, tIdx) => (
                                  <span key={tIdx} className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/60 backdrop-blur-2xl md:p-12"
          >
            <div className="text-center mb-10">
              <AnimatedText tag="h2" text="Get In Touch" className="text-4xl md:text-5xl font-bold mb-3" />
              <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
              <AnimatedText tag="p" text={contactPageData.contactSection.description} className="text-gray-400 mt-4 text-lg" />
            </div>

            <motion.div
              className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={itemVariants} className="rounded-[2rem] border border-cyan-500/15 bg-gradient-to-br from-cyan-500/10 to-transparent p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-200">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Location</p>
                    <h3 className="text-xl font-semibold text-white">Available for remote and hybrid opportunities</h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {contactPageData.addressSection.subtitle}
                </p>
                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-5 text-sm text-gray-300">
                  <p className="font-semibold text-white">{contactPageData.addressSection.locality}, {contactPageData.addressSection.region}</p>
                  {locationInfo ? (
                    <p className="mt-2 text-cyan-200">Detected location: {locationInfo.city}, {locationInfo.country}</p>
                  ) : (
                    <p className="mt-2 text-gray-400">{locationError || 'Location access can be shared when you choose to enable it.'}</p>
                  )}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="rounded-[2rem] border border-purple-500/15 bg-gradient-to-br from-purple-500/10 to-transparent p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-cyan-200">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-purple-300">Connect</p>
                    <h3 className="text-xl font-semibold text-white">Let’s build something exceptional</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-8">
                  {socialMediaLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg transition-all"
                      style={{ backgroundColor: social.backgroundColor }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      title={social.name}
                    >
                      <i className={`fab ${social.fontAwesomeIcon}`}></i>
                    </motion.a>
                  ))}
                </div>
                <motion.a
                  href={downloadResumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Abdul-Subhan-Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.02]"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ArrowRight size={16} />
                  Download My Resume
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-purple-500/20 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-gray-400"
          >
            <p className="mb-2">Designed and built by Abdul Subhan © {new Date().getFullYear()}</p>
            {userLocation && (
              <p className="text-sm text-gray-500">
                Thanks for visiting from {userLocation.lat.toFixed(2)}°, {userLocation.lng.toFixed(2)}°
              </p>
            )}
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default PremiumPortfolio;
