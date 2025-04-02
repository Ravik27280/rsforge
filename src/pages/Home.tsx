import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Layout,
  Server, 
  Cloud,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Illustration1 from '../image/codingMen.png';
import ParticlesBackground from '../components/Particles';

// Ripple effect component
const Ripple = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0.5 }}
    animate={{ scale: 2, opacity: 0 }}
    transition={{ duration: 0.6 }}
    className="absolute inset-0 bg-white rounded-full"
  />
);

// Technology stack data
const technologies = {
  frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  backend: ['Node.js', 'Python', 'Express', 'MongoDB'],
  devops: ['Docker', 'AWS', 'Git', 'CI/CD']
};

// Feature cards data
const features = [
  {
    icon: <Layout className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />,
    title: "Frontend Development",
    description: "Architecting responsive and intuitive user interfaces with modern frameworks and industry best practices.",
    skills: technologies.frontend,
    bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-black dark:to-black dark:bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)]"
  },
  {
    icon: <Server className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />,
    title: "Backend Development",
    description: "Engineering robust and scalable server-side applications with efficient database architecture and optimization.",
    skills: technologies.backend,
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-black dark:to-black dark:bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)]"
  },
  {
    icon: <Cloud className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />,
    title: "DevOps & Cloud",
    description: "Implementing seamless CI/CD pipelines and managing cloud infrastructure for optimal performance and scalability.",
    skills: technologies.devops,
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-black dark:to-black dark:bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)]"
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black dark:bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)] relative overflow-hidden" ref={containerRef}>
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] pt-28 pb-16 relative">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b bg-white dark:bg-black dark:bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)] pt-32 pb-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.03),transparent_50%)]" />
        </motion.div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 mt-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium tracking-wider uppercase">
                  Full Stack Developer
                </span>
              </motion.div>

              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                  <span className="block mb-2">Crafting Digital</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    Excellence
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Transforming complex ideas into elegant, scalable solutions. 
                  <span className="block mt-2">
                    Specialized in building robust applications that deliver exceptional user experiences.
                  </span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-12 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl relative group overflow-hidden"
                  >
                    <span className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                    <span className="relative font-medium text-lg">
                      Explore Projects
                      <ArrowRight size={20} className="ml-2 inline-block" />
                    </span>
                    <Ripple />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all transform hover:scale-105 relative group overflow-hidden"
                  >
                    <span className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
                    <span className="relative font-medium text-lg">Get in Touch</span>
                    <Ripple />
                  </Link>
                </motion.div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6">
                {[
                  { icon: <Github size={28} />, href: "#" },
                  { icon: <Linkedin size={28} />, href: "#" },
                  { icon: <Twitter size={28} />, href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative p-2 rounded-full overflow-hidden group"
                  >
                    <span className="relative z-10">{social.icon}</span>
                    <Ripple />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative max-w-2xl lg:max-w-3xl mx-auto lg:mx-0"
            >
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <img
                      src={Illustration1}
                      alt="Developer Illustration"
                      className="w-full max-w-2xl mx-auto rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                    <Ripple />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-black dark:bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
              Technical Expertise
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leveraging cutting-edge technologies to build innovative solutions that drive business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group h-full"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
                <div className={`relative p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${feature.bgColor} border border-gray-100 dark:border-gray-800 h-full flex flex-col`}>
                  <div className="mb-8">{feature.icon}</div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">{feature.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed flex-grow">{feature.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {feature.skills.map((skill, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-1.5 bg-white dark:bg-gray-900 rounded-full text-sm font-medium text-indigo-600 dark:text-indigo-400 shadow-sm border border-gray-200 dark:border-gray-800 relative overflow-hidden group"
                      >
                        <span className="relative z-10">{skill}</span>
                        <Ripple />
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}