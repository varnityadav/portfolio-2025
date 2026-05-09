"use client";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Mail, 
  Code2, 
  Cpu, 
  Zap, 
  Terminal,
  Layers,
  Brain,
  Github,
  Linkedin
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
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
          <a href="#work" className="hover:opacity-100 hover:text-blue-400 transition-all text-blue-400">Engineering</a>
          <a href="#startups" className="hover:opacity-100 hover:text-blue-400 transition-all">Startups</a>
          <a href="mailto:varnityadavw@gmail.com" className="hover:opacity-100 hover:text-blue-400 transition-all">Contact</a>
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
          
          <h1 className="text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter mb-10 italic">
            VARNIT <br />
            <span className="text-transparent border border-white/20 bg-linear-to-r from-white via-slate-400 to-slate-700 bg-clip-text uppercase">YADAV</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-10 items-start md:items-center justify-between mt-4">
            <p className="text-slate-500 max-w-sm text-sm md:text-base leading-relaxed font-medium uppercase tracking-wider">
              Software Engineer and Data Analyst specializing in full-stack AI solutions[cite: 4, 5]. Founder of Bagh Brew and Aqua Bloom. Architecting multi-agent systems and sophisticated data pipelines[cite: 36, 41].
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="group flex flex-col items-center justify-center h-32 w-32 rounded-full border border-white/10 cursor-pointer transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold mb-1 text-blue-500">Scroll</span>
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-blue-500" size={20} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Ticker */}
      <div className="py-10 border-y border-white/5 bg-zinc-950/50 overflow-hidden whitespace-nowrap">
        <div className="flex gap-20 animate-marquee items-center text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">
          <span>Python • SQL • FastAPI • LangChain • PyTorch • TensorFlow • Robotics • Next.js • TailwindCSS • R • Tableau • Flutter</span>
          <span>Python • SQL • FastAPI • LangChain • PyTorch • TensorFlow • Robotics • Next.js • TailwindCSS • R • Tableau • Flutter</span>
        </div>
      </div>

      {/* Engineering Section (From CV) */}
      <section id="work" className="px-6 md:px-24 py-32 space-y-40">
        <div className="flex items-end justify-between border-b border-white/10 pb-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Engineering</h2>
          <span className="font-mono text-xs opacity-30 italic">/ SELECTED WORKS</span>
        </div>
        
        <ProjectItem 
          title="STARBOARD AGENT" 
          category="Multi-Agent AI Platform" 
          icon={<Cpu size={40} />}
          img="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600"
          desc="FastAPI backend orchestrating modular LangChain multi-agent pipelines for property comparison[cite: 35, 36]."
        />
        
        <ProjectItem 
          title="REVENUE PULSE" 
          category="Sales Intelligence" 
          icon={<Zap size={40} />}
          img="https://images.unsplash.com/photo-1551288049-bbbda546697c?auto=format&fit=crop&q=80&w=1600"
          desc="AI-powered decision engine diagnosing win-rate volatility in B2B SaaS pipelines[cite: 33, 34]."
        />

        <ProjectItem 
          title="MEDICAL IMAGING" 
          category="Deep Learning Suite" 
          icon={<Brain size={40} />}
          img="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1600"
          desc="Deep learning models using ANN and CNN for disease classification and medical detection[cite: 43, 44, 45]."
        />
      </section>

      {/* Ventures Section (Startups) */}
      <section id="startups" className="px-6 md:px-24 py-32 bg-zinc-950/30">
        <div className="flex items-end justify-between border-b border-white/10 pb-10 mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Ventures</h2>
          <span className="font-mono text-xs opacity-30 italic">/ ENTREPRENEURSHIP</span>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
           <div className="p-10 border border-white/5 rounded-2xl bg-black hover:border-blue-500/50 transition-all group">
              <h3 className="text-3xl font-black mb-2 uppercase">Bagh Brew</h3>
              <p className="text-blue-500 text-xs mb-6 uppercase tracking-widest font-bold">Nitro Brew Coffee</p>
              <p className="text-sm text-slate-400">High-end botanical coffee branding with a 'restingly fierce' aesthetic.</p>
           </div>
           <div className="p-10 border border-white/5 rounded-2xl bg-black hover:border-purple-500/50 transition-all group">
              <h3 className="text-3xl font-black mb-2 uppercase">Aqua Bloom</h3>
              <p className="text-purple-500 text-xs mb-6 uppercase tracking-widest font-bold">Sparkling Water</p>
              <p className="text-sm text-slate-400">Functional flavor profiles designed for the ultra-luxury beverage market.</p>
           </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="px-6 md:px-24 py-20 bg-zinc-950 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-0">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none italic uppercase">
              LET'S <br /> <span className="text-blue-500 bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text">CONNECT.</span>
            </h2>
            <div className="flex flex-wrap gap-4 pt-6">
              <SocialBtn 
                icon={<Github size={18} />} 
                label="Github" 
                href="https://github.com/varnityadav" 
              />
              <SocialBtn 
                icon={<Linkedin size={18} />} 
                label="LinkedIn" 
                href="https://linkedin.com/in/varnityadav" 
              />
              <SocialBtn 
                icon={<Mail size={18} />} 
                label="Email" 
                href="mailto:varnityadavw@gmail.com" 
              />
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

function ProjectItem({ title, category, img, icon, desc }) {
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
          className="w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000 ease-out" 
          alt={title}
        />
        <div className="absolute bottom-10 left-10 max-w-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
           <p className="text-xs md:text-sm text-white/70 font-medium tracking-wide uppercase leading-relaxed">{desc}</p>
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

function SocialBtn({ icon, label, href }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.02 }}
      className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white hover:text-black transition-all cursor-pointer no-underline"
    >
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </motion.a>
  );
}