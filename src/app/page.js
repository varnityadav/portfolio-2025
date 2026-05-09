"use client";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Mail, 
  Cpu, 
  Zap, 
  Brain,
  Layers,
  Phone,
  Github
} from "lucide-react";

// Inline SVG Components 
const GithubIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Home() {
  const githubLink = "https://github.com/varnityadav";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-purple-900/5 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center p-6 md:p-10 mix-blend-difference">
        <motion.span className="font-black text-2xl tracking-tighter">VY.</motion.span>
        <div className="flex gap-6 md:gap-10 text-[10px] uppercase tracking-[0.2em] font-bold opacity-50">
          <a href="#work" className="hover:opacity-100 hover:text-blue-400 transition-all">Engineering</a>
          <a href="#startups" className="hover:opacity-100 hover:text-blue-400 transition-all">Startups</a>
          <a href="mailto:varnityadavv@gmail.com" className="hover:opacity-100 hover:text-blue-400 transition-all">Contact</a>
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
            <span className="h-px w-8 bg-blue-500"></span>
            <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em]">AI & Robotics Engineer</span>
          </div>
          
          <h1 className="text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter mb-10 italic uppercase">
            VARNIT <br />
            <span className="text-transparent border border-white/20 bg-linear-to-r from-white via-slate-400 to-slate-700 bg-clip-text">YADAV</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-10 items-start md:items-center justify-between mt-4">
            <p className="text-slate-500 max-w-sm text-sm md:text-base leading-relaxed font-medium uppercase tracking-wider">
              Software Engineer and Data Analyst architecting multi-agent AI systems and sophisticated data pipelines. Specializing in full-stack intelligence.
            </p>
            <a href="#work" className="no-underline">
              <motion.div 
                whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                className="group flex flex-col items-center justify-center h-32 w-32 rounded-full border border-white/10 cursor-pointer transition-colors"
              >
                <span className="text-[10px] uppercase tracking-widest font-bold mb-1 text-blue-500">Projects</span>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-blue-500" size={20} />
              </motion.div>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Engineering Section */}
      <section id="work" className="px-6 md:px-24 py-32 space-y-40">
        <div className="flex items-end justify-between border-b border-white/10 pb-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Engineering</h2>
          <span className="font-mono text-xs opacity-30 italic">/ TOP 4 PROJECTS</span>
        </div>
        
        <ProjectItem 
          title="STARBOARD AGENT" 
          category="Multi-Agent AI Platform" 
          icon={<Cpu size={40} />}
          img="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600"
          desc="Full-stack platform using FastAPI to orchestrate a modular LangChain multi-agent pipeline for automated property comparison."
          href={githubLink}
        />
        
        <ProjectItem 
          title="REVENUE PULSE" 
          category="Sales Intelligence" 
          icon={<Zap size={40} />}
          img="https://images.unsplash.com/photo-1551288049-bbbda546697c?auto=format&fit=crop&q=80&w=1600"
          desc="AI decision engine diagnosing win-rate volatility in B2B SaaS pipelines using Python and advanced statistical modeling."
          href={githubLink}
        />

        <ProjectItem 
          title="MEDICAL IMAGING" 
          category="Deep Learning Suite" 
          icon={<Brain size={40} />}
          img="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1600"
          desc="Detection suite utilizing CNNs for medical classification and RNNs for airfare market forecasting."
          href={githubLink}
        />

        <ProjectItem 
          title="SALESFORCE OPS" 
          category="Enterprise Automation" 
          icon={<Layers size={40} />}
          img="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
          desc="Automation system using Apex and Flow Builder to compute weighted lead scores and auto-reassign territories."
          href={githubLink}
        />

        {/* GitHub Link for Works */}
        <div className="flex justify-center pt-10">
          <motion.a 
            href={githubLink}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 px-10 py-5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group"
          >
            <GithubIcon />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">View more on GitHub</span>
          </motion.a>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="startups" className="px-6 md:px-24 py-32 bg-zinc-950/30">
        <div className="flex items-end justify-between border-b border-white/10 pb-10 mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Ventures</h2>
          <span className="font-mono text-xs opacity-30 italic">/ ENTREPRENEURSHIP</span>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
           <div className="p-10 border border-white/5 rounded-2xl bg-black hover:border-blue-500/50 transition-all group">
              <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter text-white">Bagh Brew</h3>
              <p className="text-blue-500 text-[10px] mb-6 uppercase tracking-widest font-bold">Nitro Brew Coffee</p>
              <p className="text-sm text-slate-400">High-end botanical coffee branding with a focus on vibrant print aesthetics and functional innovation.</p>
           </div>
           <div className="p-10 border border-white/5 rounded-2xl bg-black hover:border-purple-500/50 transition-all group">
              <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter text-white">Aqua Bloom</h3>
              <p className="text-purple-500 text-[10px] mb-6 uppercase tracking-widest font-bold">Sparkling Water</p>
              <p className="text-sm text-slate-400">Functional flavor profiles designed for the ultra-luxury beverage market with botanical influence.</p>
           </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="px-6 md:px-24 py-20 bg-zinc-950 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-0">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none italic uppercase">
              LET'S <br /> <span className="text-blue-500 bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text">BUILD.</span>
            </h2>
            <div className="flex flex-wrap gap-4 pt-6">
              <SocialBtn icon={<GithubIcon />} label="Projects" href={githubLink} />
              <SocialBtn icon={<Mail size={18} />} label="Contact" href="mailto:varnityadavv@gmail.com" />
              <SocialBtn icon={<Phone size={18} />} label="+91 8178217805" href="tel:+918178217805" />
              <SocialBtn icon={<LinkedinIcon />} label="LinkedIn" href="https://linkedin.com/in/varnityadav" />
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <p className="text-[10px] font-bold opacity-30 tracking-[0.3em] uppercase">© 2026 VARNIT YADAV</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectItem({ title, category, img, icon, desc, href }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group relative flex flex-col gap-8 cursor-pointer no-underline"
    >
      <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden rounded-xl bg-neutral-900 border border-white/5">
        <img 
          src={img} 
          className="w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000 ease-out" 
          alt={title}
        />
        <div className="absolute bottom-10 left-10 max-w-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
           <p className="text-xs md:text-sm text-white font-medium tracking-wide uppercase leading-relaxed bg-black/40 p-4 backdrop-blur-sm rounded-lg border border-white/10">{desc}</p>
        </div>
      </div>
      <div className="flex justify-between items-end border-l-4 border-blue-600 pl-6 group-hover:pl-10 transition-all duration-500">
        <div>
          <span className="text-blue-600 font-mono text-[10px] uppercase tracking-widest">{category}</span>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mt-2 text-white">{title}</h3>
        </div>
        <div className="opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-blue-500">{icon}</div>
      </div>
    </motion.a>
  );
}

function SocialBtn({ icon, label, href }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.02 }}
      className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white hover:text-black transition-all cursor-pointer no-underline text-white"
    >
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </motion.a>
  );
}