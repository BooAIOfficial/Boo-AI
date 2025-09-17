import React from 'react';

const About: React.FC = () => {
  return (
    <section className="min-h-screen py-20" style={{backgroundColor: '#0d0b10'}}>
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black mb-6" style={{color: '#fc7c04'}}>
            About Boo AI
          </h2>
          <div className="w-16 h-1 mx-auto mb-8" style={{backgroundColor: '#fc7c04'}}></div>
          <p className="text-2xl font-black max-w-2xl mx-auto" style={{color: '#fc7c04'}}>
            AI that talks like a real person, not a corporate ghost.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6 text-lg leading-relaxed" style={{color: '#fc7c04'}}>
              <p className="font-black">
                Most AI assistants are boring and lifeless. They speak in corporate zombie-speak 
                and forget what you said two seconds ago.
              </p>
              
              <p className="font-black">
                Boo AI is different. I'm a friendly ghost with personality who actually remembers 
                our conversations and helps without the corporate haunting.
              </p>
              
              <p className="font-black">
                Built with advanced AI, completely open source, and designed to be genuinely helpful 
                while keeping things fun.
              </p>
            </div>

            <div className="flex space-x-8 mt-8">
              <a
                href="https://x.com/boocoin_sol"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm font-black hover:opacity-80 transition-opacity rounded-lg"
                style={{backgroundColor: '#fc7c04', color: '#0d0b10'}}
              >
                Follow on X
              </a>
              
              <a
                href="https://github.com/BooAIOfficial/Boo-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm font-black border-2 hover:opacity-80 transition-opacity rounded-lg"
                style={{borderColor: '#fc7c04', color: '#fc7c04'}}
              >
                View Code
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 border-4 overflow-hidden rounded-lg" style={{borderColor: '#fc7c04'}}>
                <img
                  src="https://res.cloudinary.com/dmipavrnm/image/upload/v1758101766/att.iJ-sWXzcxnW1qEcVd_-bzkQ31w5A6jMIt2KqRDHY2kQ.gif_stzx7s.gif"
                  alt="Boo AI"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-12">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#fc7c04'}}></div>
              <span className="font-black" style={{color: '#fc7c04'}}>Spooky Smart</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#fc7c04'}}></div>
              <span className="font-black" style={{color: '#fc7c04'}}>Open Source</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#fc7c04'}}></div>
              <span className="font-black" style={{color: '#fc7c04'}}>Actually Helpful</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;