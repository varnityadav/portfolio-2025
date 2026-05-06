"use client";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Mail, 
  Code2, 
  Cpu, 
  Globe, 
  Zap, 
  Terminal,
  Layers,
  Layout,
  User
} from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-6 md:p-10 mix-blend-difference">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="font-black text-2xl tracking-tighter"
        >
          VY.
        </motion.span>
        <div className="flex gap-6 md:gap-10 text-[10px] uppercase tracking-[0.2em] font-bold opacity-50">
          <a href="#work" className="hover:opacity-100 hover:text-blue-400 transition-all">Projects</a>
          <a href="#about" className="hover:opacity-100 hover:text-blue-400 transition-all">About</a>
          <a href="mailto:contact@varnityadav.com" className="hover:opacity-100 hover:text-blue-400 transition-all">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-24 border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-blue-500"></span>
            <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em]">Next-Gen Developer</span>
          </div>
          
          <h1 className="text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter mb-10 italic">
            VARNIT <br />
            <span className="text-transparent border border-white/20 bg-gradient-to-r from-white via-slate-400 to-slate-700 bg-clip-text">YADAV</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-10 items-start md:items-center justify-between mt-4">
            <p className="text-slate-500 max-w-sm text-sm md:text-base leading-relaxed font-medium uppercase tracking-wider">
              Data analytics specialist proficient in Python, SQL, and R with advanced expertise in statistical modeling and biostatistical analysis. I architect sophisticated data workflows, build compelling visualizations in Tableau and Power BI, and leverage automation to transform raw datasets into strategic insights. AWS-certified engineer skilled at extracting actionable intelligence from complex, multi-source data environments to drive informed decision-making.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="group flex flex-col items-center justify-center h-32 w-32 rounded-full border border-white/10 cursor-pointer transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold mb-1">Scroll</span>
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="work" className="px-6 md:px-24 py-32 space-y-40">
        <div className="flex items-end justify-between border-b border-white/10 pb-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Works</h2>
          <span className="font-mono text-xs opacity-30 italic">/ 2026 EDITION</span>
        </div>
        
        <ProjectItem 
          title="NEURAL SYSTEM" 
          category="Architecture" 
          icon={<Terminal size={40} />}
          img="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600"
        />
        
        <ProjectItem 
          title="CORE INTERFACE" 
          category="System Design" 
          icon={<Layers size={40} />}
          img="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600"
        />
      </section>

      {/* Footer Section */}
      <footer className="px-6 md:px-24 py-20 bg-zinc-950 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-0">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">
              LET'S <br /> <span className="text-blue-500 italic text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">CONNECT.</span>
            </h2>
            <div className="flex flex-wrap gap-4 pt-6">
              <SocialBtn icon={<Layout size={18} />} label="Portfolio" />
              <SocialBtn icon={<User size={18} />} label="Github" />
              <SocialBtn icon={<Mail size={18} />} label="Mail" />
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <p className="text-xs font-mono opacity-30 mb-2 tracking-[0.2em]">BUILT WITH NEXT.JS</p>
            <p className="text-sm font-bold tracking-tighter uppercase">© 2026 VARNIT YADAV</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectItem({ title, category, img, icon }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group relative flex flex-col gap-8 cursor-pointer"
    >
      <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden rounded-xl bg-neutral-900 border border-white/5">
        <img 
          src={img} 
          className="w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000 ease-out" 
          alt={title}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white text-black p-6 rounded-full">
            <ArrowUpRight size={32} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end border-l-4 border-blue-600 pl-6 group-hover:pl-10 transition-all duration-500">
        <div>
          <span className="text-blue-600 font-mono text-[10px] uppercase tracking-widest">{category}</span>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mt-2">{title}</h3>
        </div>
        <div className="opacity-20 group-hover:opacity-100 transition-opacity duration-500">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}

function SocialBtn({ icon, label }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/40 hover:bg-white hover:text-black transition-all cursor-pointer"
    >
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </motion.div>
  );
}