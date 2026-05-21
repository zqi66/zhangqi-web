/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { PROJECTS, ProjectData } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface WorkSectionProps {
  language: 'zh' | 'en';
  onProjectClick: (project: ProjectData) => void;
  onHoverStart: (text?: string) => void;
  onHoverEnd: () => void;
}

const CATEGORIES = [
  { id: 'all', zh: '全部项目', en: 'All Projects' },
  { id: 'AI工具', zh: 'AI 工具', en: 'AI Tools' },
  { id: 'c-end', zh: 'C端', en: 'Consumer' },
  { id: 'fintech', zh: 'B端', en: 'Business' },
  { id: 'mobile', zh: '移动端 App', en: 'Mobile App' },
  { id: 'h5', zh: 'H5', en: 'H5' },
];

export default function WorkSection({ language, onProjectClick, onHoverStart, onHoverEnd }: WorkSectionProps) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = PROJECTS.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <section id="work" className="py-32 border-t border-zinc-900 bg-dark-bg/50 relative px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              {language === 'zh' ? '精选案例' : 'Selected Cases'}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase mt-2">
              {language === 'zh' ? '已上线的 UX 落地实践' : 'UX Cases in Production'}
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                className={`relative px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
                  filter === cat.id
                    ? 'text-accent'
                    : 'text-zinc-400 hover:text-accent'
                }`}
              >
                {filter === cat.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-accent/10 border border-accent rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {! (filter === cat.id) && (
                  <div className="absolute inset-0 bg-zinc-900/50 border border-zinc-800 rounded-full -z-10 hover:border-zinc-700 transition-colors" />
                )}
                {language === 'zh' ? cat.zh : cat.en}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                language={language}
                onClick={() => onProjectClick(project)}
                onMouseEnter={() => onHoverStart(language === 'zh' ? '查看' : 'VIEW')}
                onMouseLeave={onHoverEnd}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  language,
  onClick,
  onMouseEnter,
  onMouseLeave
}: {
  project: ProjectData;
  language: 'zh' | 'en';
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  key?: string | number;
}) {
  const data = project[language];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className="group cursor-pointer relative"
    >
      <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] transition-all duration-500">
        <div className="h-[300px] md:h-[450px] overflow-hidden relative">
          <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105 ${project.coverImage ? '' : 'bg-gradient-to-tr from-zinc-900 to-zinc-950 p-8'}`}>
            {/* Visual content for projects based on their ID */}
            <ProjectVisual project={project} />
          </div>
          
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-accent text-black font-semibold text-xs px-6 py-3 rounded-full tracking-widest uppercase transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-xl">
              {language === 'zh' ? '查看案例研究' : 'VIEW CASE STUDY'}
            </span>
          </div>
        </div>

        <div className="p-8">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-accent uppercase tracking-wider font-semibold font-mono">
                  {data.tag}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">
                  {language === 'zh' ? (CATEGORIES.find(c => c.id === project.category)?.zh || project.category) : project.category.toUpperCase()}
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">
                {data.title}
              </h3>
            </div>
            <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-black transition-all">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectVisual({ project }: { project: ProjectData }) {
    if (project.coverImage) {
        return (
            <img 
                src={project.coverImage} 
                alt={project.id} 
                className="w-full h-full object-cover rounded-xl shadow-2xl"
                style={{ 
                    imageRendering: 'auto',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                }}
                loading="eager"
                referrerPolicy="no-referrer"
            />
        );
    }
    // Replicating the distinct UI mockups for each project
    if(project.id === 'apex-pay') {
        return (
            <div className="w-full h-full border border-zinc-700/50 rounded-xl bg-zinc-950/90 shadow-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-red-500/80" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <div className="w-2 h-2 rounded-full bg-green-500/80" />
                    </div>
                    <span>DASHBOARD v4.2</span>
                </div>
                <div className="my-auto space-y-4">
                    <div className="text-3xl font-display font-black text-zinc-200">$1,489,240.50</div>
                    <div className="flex items-end space-x-2 h-20">
                        <div className="bg-zinc-800 w-full h-1/3 rounded-sm" />
                        <div className="bg-zinc-800 w-full h-2/3 rounded-sm" />
                        <div className="bg-accent w-full h-full rounded-sm" />
                        <div className="bg-zinc-800 w-full h-2/3 rounded-sm" />
                    </div>
                </div>
            </div>
        );
    }
    if(project.id === 'aura-ai') {
        return (
            <div className="w-full h-full border border-zinc-700/50 rounded-xl bg-zinc-950/90 shadow-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-center">
                    <span className="text-[10px] text-zinc-500 font-mono">AGENT_CORE</span>
                    <span className="bg-accent/10 text-accent text-[9px] font-semibold px-2 py-0.5 rounded-full border border-accent/20">ONLINE</span>
                </div>
                <div className="my-auto space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-accent to-emerald-400 flex items-center justify-center text-black font-extrabold text-lg">AI</div>
                        <div className="text-sm font-bold text-zinc-200">Aura Agent</div>
                    </div>
                    <div className="border border-zinc-800/80 bg-zinc-900/40 rounded-lg p-3 space-y-2">
                      <div className="w-full bg-zinc-800 h-1.5 rounded-full"><div className="bg-accent h-full w-4/5" /></div>
                    </div>
                </div>
            </div>
        );
    }
    if(project.id === 'helix-health') {
        return (
            <div className="w-[200px] h-full border border-zinc-700/60 rounded-[30px] bg-zinc-950/95 shadow-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-zinc-900 rounded-full" />
                <div className="text-center mt-8">
                    <p className="text-4xl font-display font-black text-zinc-100">92</p>
                    <p className="text-[10px] text-accent uppercase font-mono tracking-widest">Vital Score</p>
                </div>
                <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full border-4 border-zinc-800 border-t-accent animate-spin" />
                </div>
            </div>
        );
    }
    return (
        <div className="w-full h-full border border-zinc-700/50 rounded-xl bg-zinc-950/90 shadow-2xl p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="text-[10px] text-zinc-500 font-mono">SUPPLY_CHAIN_ENGINE</div>
            <div className="my-auto space-y-4">
                <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg flex justify-between items-center">
                    <div className="text-xs font-bold text-zinc-200">Berlin</div>
                    <div className="flex-1 border-t border-dashed border-zinc-700 mx-4" />
                    <div className="text-xs font-bold text-accent">18h 45m</div>
                </div>
            </div>
        </div>
    );
}
