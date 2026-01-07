import React from 'react';
import { SKILLS } from '../constants';
import { BrainIcon, CloudIcon, CodeIcon } from './Icons';

const getIcon = (title: string) => {
  if (title.includes("AI")) return <BrainIcon className="w-8 h-8 text-accent" />;
  if (title.includes("Cloud")) return <CloudIcon className="w-8 h-8 text-purple-400" />;
  return <CodeIcon className="w-8 h-8 text-green-400" />;
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background tint */}
      <div className="absolute inset-0 bg-secondary/30 skew-y-3 transform origin-top-left -z-10 h-full w-full"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
             Leveraging cutting-edge technologies to build scalable, intelligent, and user-centric solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SKILLS.map((category, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                 {getIcon(category.title)}
              </div>

              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-slate-800/80 rounded-xl shadow-inner group-hover:bg-slate-700 transition-colors ring-1 ring-white/10">
                    {getIcon(category.title)}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 text-sm font-medium text-slate-300 bg-slate-900/50 rounded-lg border border-slate-700/50 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;