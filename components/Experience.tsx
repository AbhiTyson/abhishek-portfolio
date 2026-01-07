import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 transform md:-translate-x-1/2"></div>

          {EXPERIENCE.map((exp, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}
            >
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-accent transform -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_rgba(56,189,248,0.5)] group-hover:scale-125 transition-transform duration-300"></div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                <div className="bg-secondary/50 p-6 rounded-xl border border-slate-700/50 hover:border-accent/30 transition-all hover:shadow-xl hover:shadow-accent/5 backdrop-blur-sm transform hover:-translate-y-1 duration-300">
                  <div className="flex flex-col gap-1 mb-4">
                     <span className="text-accent text-sm font-semibold tracking-wide uppercase">{exp.period}</span>
                     <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                     <div className="flex justify-between items-center text-slate-400 text-sm">
                        <span className="font-medium text-slate-300">{exp.company}</span>
                        <span>{exp.location}</span>
                     </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 bg-slate-600 rounded-full flex-shrink-0 group-hover:bg-accent transition-colors"></span>
                        <span className="group-hover:text-slate-300 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty Space for alignment */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;