/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import AboutMe from './components/AboutMe';
import CaseStudyDetail from './components/CaseStudyDetail';
import Footer from './components/Footer';
import { ProjectData } from './constants';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');
  const [hoverState, setHoverState] = useState<boolean | string>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const handleHoverStart = (text?: string) => setHoverState(text || true);
  const handleHoverEnd = () => setHoverState(false);

  return (
    <div className="relative selection:bg-accent selection:text-black">
      <Preloader language={language} />
      <CustomCursor isHovering={hoverState} />
      
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onHoverStart={() => handleHoverStart()}
        onHoverEnd={handleHoverEnd}
      />

      <main>
        <Hero
          language={language}
          onHoverStart={() => handleHoverStart()}
          onHoverEnd={handleHoverEnd}
        />
        
        <WorkSection
          language={language}
          onProjectClick={(p) => {
            setSelectedProject(p);
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        />

        <AboutMe language={language} />
      </main>

      <Footer language={language} />

      <AnimatePresence>
        {selectedProject && (
          <CaseStudyDetail
            project={selectedProject}
            language={language}
            onBack={() => setSelectedProject(null)}
            onProjectSelect={setSelectedProject}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
