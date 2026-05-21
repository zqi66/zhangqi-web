/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Target, Building2, Sparkles, Layout, Globe, ChevronRight, Store, Users, CreditCard, BookOpen, Library, Search, Shield, Home, Gift, Gem, Database, Award, Compass } from 'lucide-react';
import { PROJECTS, ProjectData } from '../constants';

interface CaseStudyDetailProps {
  project: ProjectData;
  language: 'zh' | 'en';
  onBack: () => void;
  onProjectSelect?: (project: ProjectData) => void;
}

export default function CaseStudyDetail({ project, language, onBack, onProjectSelect }: CaseStudyDetailProps) {
  const data = project[language];
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [project.id]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-dark-bg z-[1000] overflow-y-auto selection:bg-accent selection:text-black font-sans"
    >
      {/* Precision Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
        <div className="max-w-[1800px] mx-auto px-8 h-24 flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-4 text-white/50 hover:text-white transition-all group"
          >
            <div className="w-10 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">INDEX</span>
          </button>
          <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.5em] hidden sm:block">
            {project.category} — {data.tag}
          </div>
        </div>
      </nav>

      {/* Hero Section: Editorial Typography + Centered Latent Background */}
      <section className="min-h-screen flex flex-col justify-end px-8 sm:px-16 pb-32 relative overflow-hidden group/hero">
        {/* Centered Featured Image Layer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[60vh] z-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            <img
              src={project.coverImage}
              alt=""
              className="w-full h-full object-cover grayscale opacity-[0.15] group-hover/hero:grayscale-0 group-hover/hero:opacity-[0.4] transition-all duration-1000 ease-in-out transform scale-110 group-hover/hero:scale-100"
              referrerPolicy="no-referrer"
              fetchPriority="high"
            />
            {/* Soft edge masking for the centered image */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-dark-bg to-transparent" />
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-bg to-transparent" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-bg to-transparent" />
          </motion.div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          {/* Hero Content Area - Aligned to Bottom */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 
                  className="text-5xl md:text-8xl lg:text-[130px] font-display font-black leading-[0.8] tracking-tighter text-white uppercase italic drop-shadow-2xl"
                  style={{ fontSize: '130px' }}
                >
                  {data.title.split('—')[0]}
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="flex flex-wrap gap-x-20 gap-y-8"
              >
                <MetaWhisper label="Timeline" value={data.date} />
                <MetaWhisper label="Impact" value={data.metrics} accent />
              </motion.div>
            </div>
            
            <div className="lg:col-span-4">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1, duration: 1 }}
                 className="relative"
               >
                  <div className="absolute -left-6 top-0 w-[1px] h-full bg-accent/30" />
                  <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed pl-4">
                    {data.summary}
                  </p>
               </motion.div>
            </div>
          </div>
        </div>

        {/* Floating Decorative Identifier */}
        <div className="absolute bottom-12 right-12 opacity-10 group-hover/hero:opacity-20 transition-opacity duration-1000 z-10">
           <span className="text-9xl font-display font-black uppercase italic tracking-tighter text-white/50">{project.id.slice(0, 2)}</span>
        </div>

        {/* Ambient Decorative Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none select-none -z-10">
           <span className="text-[30vw] font-black uppercase italic leading-none block transform -rotate-12 translate-x-20 text-white">
             {project.id}
           </span>
        </div>
      </section>

      {/* Narrative Split */}
      <main className="max-w-[1400px] mx-auto px-8 py-40 md:py-60 space-y-60">
        
        {/* Module 01: Narrative Split */}
        {project.id !== 'project-04' && project.id !== 'project-05' && (
        <section className="space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
             <div className="lg:col-span-4 space-y-6">
                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.6em]">01 / Context</span>
                <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase italic leading-tight">
                  {project.id === 'project-03'
                    ? (language === 'zh' ? '设计思路' : 'Design Approach')
                    : (language === 'zh' ? '从痛点出发' : 'Solving Real Friction')}
                </h2>
             </div>
             {project.id !== 'project-03' && (
               <div className="lg:col-span-7 lg:col-start-6 space-y-12">
                  <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                    {data.problem}
                  </p>
                  
                  {data.background && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-white/5">
                       <div className="space-y-4">
                          <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Standard Flow</span>
                          <ul className="space-y-2">
                            {data.background.old.map((item, i) => (
                              <li key={i} className="text-sm text-zinc-500 line-through opacity-50">{item}</li>
                            ))}
                          </ul>
                       </div>
                       <div className="space-y-4">
                          <span className="text-[9px] uppercase tracking-widest text-accent font-bold">The New Paradigm</span>
                          <ul className="space-y-2">
                            {data.background.need.map((item, i) => (
                              <li key={i} className="text-sm text-zinc-100 flex items-center gap-3">
                                 <div className="w-1 h-1 bg-accent rounded-full" />
                                 {item}
                              </li>
                            ))}
                          </ul>
                       </div>
                    </div>
                  )}
               </div>
             )}
          </div>

          {project.section01Image && (
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
               className={project.id === 'project-03' ? "w-full mt-12 bg-transparent border-0 p-0" : "w-full overflow-hidden mt-12 bg-white/5 rounded-3xl border border-white/5 p-2 sm:p-4"}
             >
                <img
                  src={project.section01Image}
                  alt={project.id === 'project-03' ? "Design Concept" : "Section 01 Illustration"}
                  className={project.id === 'project-03' ? "w-full h-auto block" : "w-full h-auto rounded-2xl block"}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
             </motion.div>
          )}
        </section>
        )}

        {/* Module 02: Visual Grid (Dynamic) or Design Specifications */}
        {project.id !== 'project-04' && project.id !== 'project-05' && (
        <section className="space-y-20">
           <div className="flex justify-between items-end mb-20">
              <div className="space-y-6">
                 <span className="text-[10px] font-bold text-accent uppercase tracking-[0.6em]">
                    {project.id === 'project-03' 
                      ? '02 / SPECIFICATION'
                      : (data.competitiveAnalysis ? '02 / Analysis' : '02 / Strategy')}
                 </span>
                 <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase italic leading-tight">
                    {project.id === 'project-03' 
                      ? (language === 'zh' ? '设计规范' : 'Design Specifications')
                      : (data.competitiveAnalysis 
                        ? (language === 'zh' ? '竞品分析' : 'Competitive Analysis')
                        : (language === 'zh' ? '设计目标' : 'Design Goals'))}
                 </h2>
              </div>
              <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/10" />
           </div>
           
           {project.id === 'project-03' ? (
             /* Custom specifications layout for project-03 matching reference image */
             <div className="space-y-28">
                {/* A. Color Specification */}
                <div className="space-y-12">
                   <div className="space-y-3">
                      <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase italic tracking-tight">
                         {language === 'zh' ? '颜色规范' : 'Color Specifications'}
                      </h3>
                      <div className="flex items-center gap-3">
                         <div className="h-[1px] w-4 bg-accent/40" />
                         <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                            02.1 / Color Specification
                         </p>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                      {/* Left: brand colors vertical stack */}
                      <div className="lg:col-span-5 flex flex-col rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                         <div className="h-28 bg-[#E9D1C9] p-6 flex flex-col justify-between">
                            <span className="text-xs font-mono font-bold text-zinc-900">#E9D1C9</span>
                            <span className="text-xs font-medium text-zinc-700/80"></span>
                         </div>
                         <div className="h-28 bg-[#EFAB92] p-6 flex flex-col justify-between">
                            <span className="text-xs font-mono font-bold text-zinc-900">#EFAB92</span>
                            <span className="text-xs font-medium text-zinc-700/80"></span>
                         </div>
                         <div className="h-44 bg-[#FF5114] p-6 flex flex-col justify-between relative group overflow-hidden">
                            <span className="text-xs font-mono font-bold text-white">#FF5114</span>
                            <div className="space-y-1">
                               <span className="text-sm font-bold text-white tracking-wider block">{language === 'zh' ? '品牌色' : 'Brand Color'}</span>
                               <span className="text-[10px] text-white/70 block uppercase tracking-widest">Primary Color</span>
                            </div>
                            {/* subtle abstract circle overlay */}
                            <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 rounded-full bg-white/[0.04] pointer-events-none" />
                         </div>
                      </div>

                      {/* Right: accents & neutrals */}
                      <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
                         {/* Top: Row of 4 Auxiliary Colors */}
                         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                               { hex: '#8624EF', name: language === 'zh' ? '辅助色' : 'Auxiliary', label: 'Primary Accent' },
                               { hex: '#D84C6C', name: language === 'zh' ? '辅助色' : 'Auxiliary', label: 'Coral Accent' },
                               { hex: '#3270F6', name: language === 'zh' ? '辅助色' : 'Auxiliary', label: 'Electric Blue' },
                               { hex: '#49995B', name: language === 'zh' ? '辅助色' : 'Auxiliary', label: 'Eco Green' },
                            ].map((color, idx) => (
                               <div 
                                 key={idx} 
                                 className="aspect-square rounded-2xl p-5 flex flex-col justify-between shadow-lg border border-white/[0.02] transform transition-transform duration-500 hover:scale-105"
                                 style={{ backgroundColor: color.hex }}
                               >
                                  <span className="text-xs font-mono font-bold text-white/90 drop-shadow">{color.hex}</span>
                                  <div className="space-y-0.5">
                                     <span className="text-xs font-bold text-white tracking-wide block drop-shadow-sm">{color.name}</span>
                                     <span className="text-[8px] text-white/70 block lowercase tracking-widest drop-shadow-sm">{color.label}</span>
                                  </div>
                               </div>
                            ))}
                         </div>

                         {/* Bottom: Row of 5 Neutrals */}
                         <div className="grid grid-cols-5 gap-3">
                            {[
                               '#15151D',
                               '#2C2C33',
                               '#5B5B60',
                               '#89898E',
                               '#B8B8BB'
                            ].map((hexStr, idx) => (
                               <div 
                                 key={idx} 
                                 className="aspect-square rounded-xl p-3 flex flex-col justify-between border border-white/5 shadow-inner"
                                 style={{ backgroundColor: hexStr }}
                               >
                                  <span className="text-[9px] font-mono font-semibold text-white/60">{hexStr}</span>
                                  <span className="text-[8px] text-white/30 hidden sm:block uppercase font-mono">N-0{idx+1}</span>
                                </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>

                {/* B. Typography Specification */}
                <div className="space-y-12">
                   <div className="space-y-3">
                      <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase italic tracking-tight">
                         {language === 'zh' ? '文字规范' : 'Typography Specifications'}
                      </h3>
                      <div className="flex items-center gap-3">
                         <div className="h-[1px] w-4 bg-accent/40" />
                         <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                            02.2 / Typography Specification
                         </p>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      {/* Left Typeface Intro */}
                      <div className="lg:col-span-4 space-y-8">
                         <p className="text-zinc-400 text-sm leading-relaxed">
                            {language === 'zh' 
                              ? '优先使用系统字体，设计稿以iOS为例，使用PingFang字体。注重行高、间距和字重的极致平衡，提供最具可读性的用户界面展示。' 
                              : 'Prioritize system typeface, taking iOS as an example using PingFang SF Pro. Focus on standard hierarchies and optimal readability.'}
                         </p>

                         <div className="relative inline-block py-4">
                            <span className="text-9xl md:text-[11rem] font-black font-sans leading-none tracking-tighter bg-gradient-to-br from-[#FF5114] via-[#EFAB92] to-[#E9D1C9] bg-clip-text text-transparent select-none filter drop-shadow-[0_15px_40px_rgba(255,81,20,0.25)]">
                               Aa
                            </span>
                         </div>
                      </div>

                      {/* Right: Grid of hierarchy components H1 - H6 */}
                      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {[
                            { tag: 'H1', spec: language === 'zh' ? '字号 20pt; 行高 24pt' : 'Size 20pt; Line height 24pt', desc: language === 'zh' ? '运营卡片文字' : 'Promo card header' },
                            { tag: 'H2', spec: language === 'zh' ? '字号 18pt; 行高 22pt' : 'Size 18pt; Line height 22pt', desc: language === 'zh' ? '页面大标题' : 'Page giant header' },
                            { tag: 'H3', spec: language === 'zh' ? '字号 16pt; 行高 20pt' : 'Size 16pt; Line height 20pt', desc: language === 'zh' ? '主要文本信息，模块标题' : 'Main text & Section header' },
                            { tag: 'H4', spec: language === 'zh' ? '字号 14pt; 行高 18pt' : 'Size 14pt; Line height 18pt', desc: language === 'zh' ? '常规文本' : 'Body normal text' },
                            { tag: 'H5', spec: language === 'zh' ? '字号 12pt; 行高 16pt' : 'Size 12pt; Line height 16pt', desc: language === 'zh' ? '次要文本，辅助信息' : 'Helper info / secondary caption' },
                            { tag: 'H6', spec: language === 'zh' ? '字号 10pt; 行高 12pt' : 'Size 10pt; Line height 12pt', desc: language === 'zh' ? '标签文本' : 'Labels & small badges' },
                         ].map((item, idx) => (
                            <div 
                              key={idx} 
                              className="bg-white/[0.02] border border-white/[0.03] rounded-2xl p-4 flex items-center gap-4 hover:bg-white/[0.04] transition-all duration-300 hover:border-white/10 group"
                             >
                               <div className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-black text-base bg-[#8624EF] text-white shadow-lg group-hover:scale-105 transition-transform">
                                  {item.tag}
                               </div>
                               <div className="space-y-1">
                                  <p className="text-xs font-mono font-bold text-white/90">{item.spec}</p>
                                  <p className="text-[10px] text-zinc-500 font-medium tracking-wide">{item.desc}</p>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>

                {/* C. Icon Specification */}
                <div className="space-y-12">
                   <div className="space-y-3">
                      <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase italic tracking-tight">
                         {language === 'zh' ? '图标规范' : 'Icon Specifications'}
                      </h3>
                      <div className="flex items-center gap-3">
                         <div className="h-[1px] w-4 bg-accent/40" />
                         <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                            02.3 / Icon Specification
                         </p>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      {/* Left Info & Emblem Display */}
                      <div className="lg:col-span-4 space-y-8">
                         <p className="text-zinc-400 text-sm leading-relaxed">
                            {language === 'zh' 
                              ? '使用属性图标，扁平，机械美学，科幻扁平风格。基于精确的系统网格精心雕琢，确保视觉焦点与系统统一性。' 
                              : 'Adopting attribute-based flat icons with mechanical aesthetic and modular tech features. Crafted on pixel grid for complete system consistency.'}
                         </p>

                         {/* Complex concentric target vector widget */}
                         <div className="aspect-square w-full max-w-[280px] rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center bg-zinc-950 shadow-inner group">
                            {/* grid lines */}
                            <div className="absolute inset-4 rounded-full border border-white/[0.03] pointer-events-none" />
                            <div className="absolute inset-12 rounded-full border border-white/[0.03] pointer-events-none" />
                            <div className="absolute inset-20 rounded-full border border-white/[0.04] pointer-events-none" />
                            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/[0.02] pointer-events-none" />
                            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/[0.02] pointer-events-none" />
                            <div className="absolute top-0 left-0 w-full h-full border-t border-b border-l border-r border-dashed border-white/[0.02] transform rotate-45 pointer-events-none" />

                            {/* Neon Glowing Center Emblem */}
                            <div className="relative w-36 h-36 rounded-full flex items-center justify-center bg-[#8624EF]/10 border border-[#8624EF]/20 group-hover:scale-105 transition-transform duration-700 shadow-[0_0_50px_rgba(134,36,239,0.15)] group-hover:shadow-[0_0_60px_rgba(134,36,239,0.25)]">
                               <img 
                                 src="https://raw.githubusercontent.com/zqi66/zqi-/main/%E5%B7%A6%E8%BE%B9Icons.svg" 
                                 alt="Left Icon" 
                                 className="w-16 h-16 object-contain animate-pulse"
                                 referrerPolicy="no-referrer"
                               />
                            </div>
                            
                            <div className="absolute bottom-4 left-4 text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
                               Layout Grid — v1.0
                            </div>
                         </div>
                      </div>

                      {/* Right: Grid of 18 High Tech system icons */}
                      <div className="lg:col-span-8">
                         <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                            {Array.from({ length: 18 }, (_, i) => {
                               const num = String(i + 1).padStart(2, '0');
                               let name = `${num}icon.svg`;
                               if (i === 0) {
                                  name = 'icon01.svg';
                               } else if (i === 4) {
                                  name = '05iocn.svg';
                               }
                               return `https://raw.githubusercontent.com/zqi66/zqi-/main/${name}`;
                            }).map((url, idx) => {
                               const elementIndex = idx + 1;
                               let customStyle = {};
                               if ([1, 2, 3, 4, 7, 8, 9, 10, 13, 14, 15, 16].includes(elementIndex)) {
                                  customStyle = { backgroundColor: '#ededed' };
                               }
                               return (
                                  <div 
                                    key={idx} 
                                    className="aspect-square bg-white/[0.02] border border-white/[0.03] rounded-2xl flex items-center justify-center p-4 hover:bg-[#8624EF]/20 hover:border-[#8624EF]/50 hover:scale-105 shadow-lg transform transition-all duration-300 pointer-events-auto group"
                                    style={customStyle}
                                  >
                                     <img 
                                       src={url} 
                                       alt={`Icon ${idx + 1}`} 
                                       className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                                       referrerPolicy="no-referrer"
                                     />
                                  </div>
                               );
                            })}
                         </div>
                      </div>

                   </div>
                </div>
             </div>
           ) : (
             data.competitiveAnalysis ? (
              <div className="space-y-10">
                 <div className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0">
                    <div className="min-w-[800px] space-y-4">
                       {/* Table Header */}
                       <div className="grid grid-cols-[160px_1fr_1fr] gap-4">
                          <div />
                          {data.competitiveAnalysis.competitors.map((comp, i) => (
                             <div key={i} className="flex items-center justify-center p-6 gap-4">
                                {comp.logo && (
                                  <img 
                                    src={comp.logo} 
                                    alt={comp.name} 
                                    className="h-8 md:h-12 w-auto object-contain brightness-110"
                                    referrerPolicy="no-referrer"
                                  />
                                )}
                                <span className="text-lg md:text-xl font-display font-black text-white tracking-widest uppercase italic">{comp.name}</span>
                             </div>
                          ))}
                       </div>

                       {/* Content Rows */}
                       {data.competitiveAnalysis.headers.map((header, rowIdx) => (
                          <div key={rowIdx} className="grid grid-cols-[160px_1fr_1fr] gap-4">
                             <div className="bg-[#31361B] flex items-center justify-center p-4 rounded-xl shadow-lg border border-white/5">
                                <span className="text-sm font-bold text-white tracking-widest leading-tight text-center">{header}</span>
                             </div>
                             {data.competitiveAnalysis!.competitors.map((comp, compIdx) => (
                                <div key={compIdx} className="bg-white/5 p-6 rounded-2xl flex items-center justify-center text-center group hover:bg-white/[0.08] transition-all duration-300 border border-white/[0.03] hover:border-white/10">
                                   {comp.rows[rowIdx].type === 'colors' ? (
                                     <div className="flex gap-2">
                                        {(comp.rows[rowIdx].content as string[]).map((color, colorIdx) => (
                                           <div 
                                             key={colorIdx} 
                                             className="w-10 h-10 rounded-full border-2 border-white/10 shadow-xl transform group-hover:scale-110 transition-transform"
                                             style={{ backgroundColor: color }}
                                           />
                                        ))}
                                     </div>
                                   ) : (
                                     <p className="text-zinc-300 text-sm leading-relaxed font-medium">{comp.rows[rowIdx].content}</p>
                                   )}
                                </div>
                             ))}
                          </div>
                       ))}

                       {/* Conclusion Row */}
                       <div className="grid grid-cols-[160px_1fr] gap-4">
                          <div className="bg-accent flex items-center justify-center p-4 rounded-xl shadow-lg border border-white/10">
                             <span className="text-sm font-black text-black tracking-[0.2em] leading-tight text-center uppercase">{language === 'zh' ? '结论' : 'Summary'}</span>
                          </div>
                          <div className="bg-accent/[0.03] p-8 rounded-2xl border border-accent/10 flex items-center">
                             <p className="text-[#898e1c] text-sm leading-relaxed font-medium border-l-2 border-accent/30 pl-6">{data.competitiveAnalysis.conclusion}</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            ) : (
              /* Design Goals: Original Logic */
             data.designGoals && (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 lg:pb-32">
               {data.designGoals.map((goal, i) => {
                 const images: Record<string, string> = {
                   '智能': 'https://i.postimg.cc/pTYH8CQK/zhi-neng.png',
                   '高效': 'https://i.postimg.cc/ZRFS3HPr/zhi-neng-1.png',
                   '易用': 'https://i.postimg.cc/XJcbFLKd/yi-yong.png',
                   '简约': 'https://i.postimg.cc/nztxCgmX/jian-yue.png' 
                 };
                 const imgSrc = images[goal.title] || `https://placehold.co/1000x1000/09090b/27272a?text=`;
                 
                 return (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                     className={`group relative ${i % 2 === 1 ? 'lg:translate-y-12' : ''}`}
                   >
                     {/* Immersive Square Card */}
                     <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/[0.03] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] group-hover:border-accent/20 transition-all duration-700">
                        <img 
                          src={imgSrc} 
                          alt={goal.title} 
                          className="w-full h-full object-cover grayscale opacity-10 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                          style={{ imageRendering: 'high-quality' }}
                        />
                        
                        {/* Dimensional Overlays */}
                        <div className="absolute inset-0 p-10 flex flex-col justify-end">
                           <div className="relative">
                              <span className="absolute -bottom-6 -left-6 text-[140px] font-display font-black leading-none text-white/[0.04] italic select-none group-hover:text-accent/[0.08] transition-colors duration-700 z-0">
                                0{i+1}
                              </span>
                              <div className="relative z-10 space-y-3">
                                 <h4 className="text-3xl lg:text-5xl font-display font-black text-white uppercase italic tracking-tighter leading-none drop-shadow-2xl">
                                   {goal.title}
                                 </h4>
                                 <div className="flex items-center gap-4">
                                    <div className="h-[1px] w-6 bg-accent/60" />
                                    <p className="text-[10px] font-mono text-zinc-100 uppercase tracking-[0.4em] font-bold opacity-70">
                                      {goal.enTitle}
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <div className="mt-10 w-12 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-accent/40 transition-all duration-1000" />
                        </div>

                        {/* Finishing Mask */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/95 via-dark-bg/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
                     </div>
                   </motion.div>
                 );
               })}
             </div>
           )
         )
        )}
        </section>
        )}

        {/* Module 03: Design Showcase for project-04 */}
        {project.id === 'project-04' && (
          <section className="space-y-20">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
               className="w-full"
             >
                <img 
                  src="https://raw.githubusercontent.com/zqi66/zqi-/main/pubg01.png" 
                  alt="PUBG Mobile Creator Hub Showcase 1" 
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
             </motion.div>
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
               className="w-full"
             >
                <img 
                  src="https://github.com/zqi66/zqi-/blob/main/pubg02.png?raw=true" 
                  alt="PUBG Mobile Creator Hub Showcase 2" 
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
             </motion.div>
          </section>
        )}

        {/* Module 03: Design Showcase for project-05 */}
        {project.id === 'project-05' && (
          <section className="w-full">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
               className="w-full"
             >
                <img 
                  src="https://github.com/zqi66/zqi-/blob/main/%E7%8C%AB%E7%8B%97%E5%A4%A7%E5%AF%B9%E5%86%B3.png?raw=true" 
                  alt="Cats vs Dogs Showdown Campaign Showcase" 
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
             </motion.div>
          </section>
        )}

        {/* Module 03: Design Showcase for project-03 */}
        {project.id === 'project-03' && (
          <section className="w-full">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
               className="w-full"
             >
                <img 
                  src="https://raw.githubusercontent.com/zqi66/zqi-/main/czn%E9%A1%B5%E9%9D%A2%E5%B1%95%E7%A4%BA.png" 
                  alt="CZN Page Showcase" 
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
             </motion.div>
          </section>
        )}

        {/* Module 03: Design Spec */}
        {data.designSpec && (
          <div className="space-y-60">
             {data.designSpec.keywordTransitionImage && (
                <section className="space-y-20">
                   <div className="flex justify-between items-end mb-20">
                      <div className="space-y-6">
                         <span className="text-[10px] font-bold text-accent uppercase tracking-[0.6em]">03 / Identity</span>
                         <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase italic leading-tight">
                            {language === 'zh' ? '视觉关键词推演' : 'Visual Keyword Transition'}
                         </h2>
                      </div>
                      <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/10" />
                   </div>
                   <img 
                     src={data.designSpec.keywordTransitionImage} 
                     alt="Visual Keyword Transition" 
                     className="w-full h-auto"
                     referrerPolicy="no-referrer"
                   />
                </section>
             )}

             {data.designSpec.visualStyleImage && (
                <section className="space-y-20">
                   <div className="flex justify-between items-end mb-20">
                      <div className="space-y-6">
                         <span className="text-[10px] font-bold text-accent uppercase tracking-[0.6em]">04 / Style</span>
                         <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase italic leading-tight">
                            {language === 'zh' ? '确定视觉风格' : 'Visual Style Definition'}
                         </h2>
                      </div>
                      <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/10" />
                   </div>
                   <img 
                     src={data.designSpec.visualStyleImage} 
                     alt="Visual Style Definition" 
                     className="w-full h-auto"
                     referrerPolicy="no-referrer"
                   />
                </section>
             )}
          </div>
        )}

        {/* Module 05: Page Display */}
        {data.designThinking && (
          <section className="space-y-20">
             <div className="flex justify-between items-end mb-20">
                <div className="space-y-6">
                   <span className="text-[10px] font-bold text-accent uppercase tracking-[0.6em]">05 / Display</span>
                   <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase italic leading-tight">
                      {language === 'zh' ? '页面展示' : 'Page Display'}
                   </h2>
                </div>
                <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/10" />
             </div>

             <div className="space-y-40">
                {data.designThinking.map((item, idx) => (
                  <div key={idx} className="space-y-12">
                     <div className="max-w-4xl">
                        <div className="space-y-3">
                           <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase italic tracking-tight">
                              {item.title}
                           </h3>
                           <div className="flex items-center gap-3">
                              <div className="h-[1px] w-4 bg-accent/40" />
                              <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                                 {item.enTitle}
                              </p>
                           </div>
                        </div>
                     </div>

                     <motion.div 
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true, margin: "-100px" }}
                       transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                       className="w-full overflow-hidden"
                     >
                        <img 
                          src={item.src}
                          alt={item.title}
                          className="w-full h-auto block"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                          style={{ imageRendering: '-webkit-optimize-contrast' } as any}
                        />
                     </motion.div>
                  </div>
                ))}
             </div>
          </section>
        )}

        {/* Minimal Footer: Next Project */}
        <section className="pt-40 border-t border-white/5">
           <div className="max-w-4xl mx-auto text-center space-y-16">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.8em]">UP NEXT</span>
              <button 
                onClick={() => {
                   if (onProjectSelect) {
                      onProjectSelect(nextProject);
                   } else {
                      onBack();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                   }
                }}
                className="group inline-block"
              >
                 <h2 className="text-6xl md:text-9xl font-display font-black text-white uppercase italic tracking-tighter group-hover:text-accent transition-all duration-700">
                    {nextProject[language].title.split('—')[0]}
                 </h2>
                 <div className="mt-8 flex justify-center items-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 text-accent font-bold tracking-[0.4em] uppercase text-[10px]">
                    Project Preview
                    <div className="w-12 h-[1px] bg-accent" />
                 </div>
              </button>
           </div>
        </section>

      </main>
    </motion.div>
  );
}

function MetaWhisper({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="space-y-2">
      <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.4em]">{label}</p>
      <p className={`text-sm md:text-base font-semibold ${accent ? 'text-accent' : 'text-zinc-200'}`}>
        {value}
      </p>
    </div>
  );
}
