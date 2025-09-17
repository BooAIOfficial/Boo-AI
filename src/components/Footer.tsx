import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-16" style={{backgroundColor: '#0d0b10', borderColor: '#fc7c04'}}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#fc7c04'}}>
                  <span className="text-sm font-black" style={{color: '#0d0b10'}}>B</span>
                </div>
                <span className="text-3xl font-bold tracking-wide" style={{color: '#fc7c04'}}>BOO AI</span>
              </div>
              <div className="w-16 h-px mb-6" style={{backgroundColor: '#fc7c04'}}></div>
            </div>
            <p className="leading-relaxed text-lg font-black max-w-md" style={{color: '#fc7c04'}}>
              Your friendly ghost AI assistant that brings personality to problem-solving 
              and helps without the corporate haunting.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-sm font-black tracking-widest uppercase mb-8" style={{color: '#fc7c04'}}>
              Connect
            </h4>
            <div className="space-y-4">
              <a
                href="https://x.com/boocoin_sol"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity font-black"
                style={{color: '#fc7c04'}}
              >
                X / Twitter
              </a>
              <a
                href="https://github.com/BooAIOfficial/Boo-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity font-black"
                style={{color: '#fc7c04'}}
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-black tracking-widest uppercase mb-8" style={{color: '#fc7c04'}}>
              Project
            </h4>
            <p className="font-black leading-relaxed" style={{color: '#fc7c04'}}>
              A spookily smart AI that actually helps. Built for people who want technology 
              with personality and purpose, not corporate ghost stories.
            </p>
          </div>
        </div>

        <div className="border-t mt-16 pt-8" style={{borderColor: '#fc7c04'}}>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm font-black tracking-wide" style={{color: '#fc7c04'}}>
              BOO AI © 2025
            </p>
            <p className="text-sm font-black" style={{color: '#fc7c04'}}>
              Made with love (and a little spookiness) by humans who believe AI should have soul.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;