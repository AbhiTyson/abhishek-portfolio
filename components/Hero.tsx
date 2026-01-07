import React from 'react';
import { CONTACT, SUMMARY } from '../constants';
import { MailIcon, LinkedinIcon, DownloadIcon, MapPinIcon, PhoneIcon } from './Icons';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
              Conversational AI & Cloud Architect
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
              Abhishek <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 hover:text-accent transition-colors duration-300 cursor-default">Anand</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-400 mb-6 font-light">
              Software Engineering Lead at Optum (UHG)
            </h2>

            <div className="flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8 text-slate-400 text-sm">
               <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 text-accent" />
                  {CONTACT.location}
               </div>
               <span className="hidden md:inline text-slate-700">|</span>
               <div className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 Available for opportunities
               </div>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              {SUMMARY}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white transition-all bg-accent rounded-lg hover:bg-accent-hover hover:scale-105 shadow-lg shadow-accent/20 ring-offset-2 ring-offset-primary focus:ring-2 focus:ring-accent"
              >
                <MailIcon className="w-5 h-5" />
                Email Me
              </a>
              
              <a 
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white transition-all bg-slate-800 rounded-lg hover:bg-slate-700 hover:scale-105 border border-slate-700 hover:border-slate-500"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Me
              </a>

              <a 
                href="https://drive.google.com/file/d/1k0Vc85OjslHhnSE95Ww2UneyDH5FAU7i/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-slate-200 transition-all bg-transparent border border-slate-700 rounded-lg hover:bg-slate-800/50 hover:text-white hover:border-accent/50"
              >
                <DownloadIcon className="w-5 h-5" />
                Resume
              </a>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
               <a 
                href={CONTACT.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors transform hover:scale-110"
              >
                <LinkedinIcon className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 w-full max-w-md lg:max-w-full flex justify-center lg:justify-end animate-fade-in group perspective">
             <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
                {/* Decorative blobs behind image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-600 rounded-[2rem] rotate-6 opacity-20 blur-2xl group-hover:rotate-12 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-600 to-accent rounded-[2rem] -rotate-6 opacity-20 blur-2xl group-hover:-rotate-12 transition-transform duration-500"></div>
                
                {/* Image Container with Hover Effects */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-slate-700/50 shadow-2xl shadow-black/50 transition-all duration-500 ease-out group-hover:scale-105 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-slate-800 animate-pulse z-0"></div> {/* Loading placeholder */}
                  <img 
                    src="https://drive.google.com/thumbnail?id=1VeC4tJCSNFT95UW77bRGD1mHtnOLrdJ_&sz=w1000" 
                    alt="Abhishek Anand" 
                    className="w-full h-full object-cover object-top relative z-10 transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback if image not found
                      (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Abhishek+Anand&background=0f172a&color=38bdf8&size=512';
                    }}
                  />
                  {/* Overlay sheen effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 z-20"></div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;