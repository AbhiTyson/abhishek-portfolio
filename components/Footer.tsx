import React from 'react';
import { CONTACT } from '../constants';
import { LinkedinIcon, MailIcon, PhoneIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Let's Build Something Amazing</h2>
        <p className="text-slate-400 max-w-lg mx-auto mb-10">
          I'm currently seeking opportunities to apply my skills and passion for conversational AI to create meaningful, scalable solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
          <a 
            href={`mailto:${CONTACT.email}`} 
            className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors group"
          >
            <div className="p-2 bg-slate-800 rounded-full group-hover:bg-accent/10 transition-colors">
              <MailIcon className="w-5 h-5" />
            </div>
            <span>{CONTACT.email}</span>
          </a>
          
          <a 
            href={`tel:${CONTACT.phone}`} 
            className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors group"
          >
            <div className="p-2 bg-slate-800 rounded-full group-hover:bg-accent/10 transition-colors">
              <PhoneIcon className="w-5 h-5" />
            </div>
             <span>{CONTACT.phone}</span>
          </a>

          <a 
            href={CONTACT.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors group"
          >
            <div className="p-2 bg-slate-800 rounded-full group-hover:bg-accent/10 transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
           <p>&copy; {new Date().getFullYear()} Abhishek Anand. All rights reserved.</p>
           <p className="mt-2 md:mt-0">Designed & Built with React + Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;