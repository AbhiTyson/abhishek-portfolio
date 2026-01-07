import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              Education
            </h3>
            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="bg-primary border border-slate-800 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                  <p className="text-accent mt-1">{edu.degree}</p>
                  <p className="text-slate-500 text-sm mt-2">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
             <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
              Certifications
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 bg-primary border border-slate-800 p-4 rounded-xl hover:border-purple-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                  </div>
                  <div>
                    <h5 className="text-slate-200 font-medium text-sm md:text-base">{cert.name}</h5>
                    {cert.issuer && <span className="text-slate-500 text-xs">{cert.issuer}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
