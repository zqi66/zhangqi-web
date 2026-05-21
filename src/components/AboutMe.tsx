/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, User, Globe, Code, Layers, Copy, Check, Download } from 'lucide-react';
import { useState, MouseEvent } from 'react';

interface AboutMeProps {
  language: 'zh' | 'en';
}

const CopyButton = ({ text, tooltip }: { text: string; tooltip: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-auto p-1.5 rounded-lg hover:bg-white/10 text-zinc-500 hover:text-accent transition-all duration-200"
      title={tooltip}
    >
      {copied ? <Check size={14} className="text-accent" /> : <Copy size={13} />}
    </button>
  );
};

export default function AboutMe({ language }: AboutMeProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadResume = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (downloading) return;
    setDownloading(true);
    try {
      const rawUrl = "https://raw.githubusercontent.com/zqi66/zqi-/main/%E5%BC%A0%E7%90%A6%E7%9A%84%E7%AE%80%E5%8E%86_UXUI.pdf";
      const response = await fetch(rawUrl);
      if (!response.ok) throw new Error("Failed to fetch resume");
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = language === 'zh' ? "张琦的简历_UXUI.pdf" : "ZhangQi_Resume_UXUI.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Direct fetch download failed, resorting to direct raw redirection fallback:", error);
      const fallbackLink = document.createElement("a");
      fallbackLink.href = "https://github.com/zqi66/zqi-/raw/main/%E5%BC%A0%E7%90%A6%E7%9A%84%E7%AE%80%E5%8E%86_UXUI.pdf";
      fallbackLink.setAttribute("download", "");
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);
    } finally {
      setDownloading(false);
    }
  };

  const experiences = [
    {
      icon: <Layers size={16} />,
      tag: 'SPECIFICATION',
      zhTitle: '1. 平台与规范',
      enTitle: '1. Platforms & Spec Guidance',
      zhDesc: '熟练掌握APP端、WEB端设计规范，能独立承接需求，输出低保真交互原型和高保真设计；能针对复杂业务场景提出优化建议，设计逻辑清晰、落地性强。',
      enDesc: 'Thorough proficiency in both APP and WEB design environments. Capable of carrying complex layout demands independently with high dev fidelity.',
    },
    {
      icon: <Globe size={16} />,
      tag: 'FULL-LINK EXPERIENCE',
      zhTitle: '2. 全链路设计思维',
      enTitle: '2. Full-Link Product Logic',
      zhDesc: '具备深刻的全链路闭环设计思维，善于分析并整合繁冗多维的产品需求。拥有丰富的 C端、B端及数据可视化作品储备。',
      enDesc: 'Possess closed-loop system thinking. Experienced in distilling data layers, with delivered production projects spanning from mobile to enterprise backstages.',
    },
    {
      icon: <Code size={16} />,
      tag: 'CREATIVE SOFTWARE',
      zhTitle: '3. 设计与三维建模工具',
      enTitle: '3. Elite Design Toolsets',
      zhDesc: '精通 Figma, Sketch, Adobe XD。深度集成 Blender 与 C4D 建模方案，快速支撑起“微质感”到“轻量级3D”的场景搭建。',
      enDesc: 'Mastery of Figma, Sketch, and Adobe XD. Fluent in Blender and Cinema 4D, providing structural 3D models for digital pipelines.',
    },
    {
      icon: <User size={16} />,
      tag: 'COLLABORATION & AI',
      zhTitle: '4. 效率倍增与跨端协作',
      enTitle: '4. AI Velocity & Handoff Alignment',
      zhDesc: '善于利用AI工具提升设计效率与创意产出，需求对接响应迅速，沟通表达清晰，跨团队协作顺畅。',
      enDesc: 'Fully integrate generative AI platforms to automate prototyping. Outstanding cross-functional team communication and alignment speed.',
    },
  ];

  return (
    <section id="about-me" className="py-32 border-t border-zinc-900 bg-dark-bg relative px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          {language === 'zh' ? '个人履历 & 核心特质' : 'Profile & Capabilities'}
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase mt-2 mb-16">
          {language === 'zh' ? '关于我 — 张琦' : 'ABOUT ME — ZHANG QI'}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-2xl flex flex-col justify-between min-h-[420px]">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-accent/20 to-accent flex items-center justify-center text-black font-extrabold text-2xl shadow-xl">
                ZQ
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold text-white">
                  {language === 'zh' ? '张琦' : 'Zhang Qi'}
                </h3>
                <p className="text-xs text-accent font-mono tracking-widest uppercase">
                  {language === 'zh' ? '7年 UI/UX 经验 · 本科' : '7 YRS UI/UX EXPERIENCE · BACHELOR'}
                </p>
              </div>

              <div className="border-t border-zinc-800/80 pt-6 space-y-3 text-xs">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>{language === 'zh' ? '年龄' : 'Age'}</span>
                  <span className="text-zinc-100 font-mono">28 {language === 'zh' ? '岁' : 'Yrs'}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>{language === 'zh' ? '城市' : 'Base'}</span>
                  <span className="text-zinc-100">{language === 'zh' ? '武汉 (可远程)' : 'Wuhan (Remote)'}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-800/80 pt-6 mt-6 space-y-3">
              <div className="flex items-center justify-between text-xs bg-zinc-950/40 border border-zinc-800/80 p-3 rounded-xl">
                <span className="text-zinc-400 flex items-center gap-2 font-mono">
                  <Phone size={14} className="text-accent/60" /> 13971310172
                </span>
                <CopyButton text="13971310172" tooltip={language === 'zh' ? '复制号码' : 'Copy Phone'} />
              </div>
              <div className="flex items-center justify-between text-xs bg-zinc-950/40 border border-zinc-800/80 p-3 rounded-xl">
                <span className="text-zinc-400 flex items-center gap-2 font-mono">
                  <Mail size={14} className="text-accent/60" /> 935486376@qq.com
                </span>
                <CopyButton text="935486376@qq.com" tooltip={language === 'zh' ? '复制邮箱' : 'Copy Email'} />
              </div>
              
              <a 
                href="https://github.com/zqi66/zqi-/raw/main/%E5%BC%A0%E7%90%A6%E7%9A%84%E7%AE%80%E5%8E%86_UXUI.pdf"
                onClick={handleDownloadResume}
                className={`flex items-center justify-center gap-2 w-full mt-4 py-3 px-4 rounded-xl transition-all duration-300 font-bold text-xs shadow-lg uppercase tracking-wider ${
                  downloading 
                    ? 'bg-zinc-800 text-zinc-400 cursor-not-allowed' 
                    : 'bg-accent text-zinc-950 hover:bg-accent/80'
                }`}
              >
                <Download size={14} className={downloading ? 'animate-bounce' : ''} />
                {downloading 
                  ? (language === 'zh' ? '正在准备下载...' : 'Downloader active...')
                  : (language === 'zh' ? '下载简历' : 'Download Resume')
                }
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border border-zinc-800/80 bg-zinc-900/20 p-8 rounded-2xl hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-zinc-600 uppercase">{exp.tag}</span>
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    {exp.icon}
                  </div>
                </div>
                <div className="space-y-3 mt-12">
                  <h4 className="text-lg font-display font-bold">
                    {language === 'zh' ? exp.zhTitle : exp.enTitle}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {language === 'zh' ? exp.zhDesc : exp.enDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
