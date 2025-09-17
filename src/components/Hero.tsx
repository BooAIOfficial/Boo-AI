import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-start pt-16 pb-16" style={{backgroundColor: '#0d0b10'}}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="w-full h-[450px] flex flex-col p-12 rounded-lg" style={{backgroundColor: '#fc7c04'}}>
              <div className="flex-shrink-0 mb-6 flex justify-between items-start">
                <div className="space-y-2">
                  <h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight" style={{color: '#0d0b10'}}>
                    Hello
                  </h1>
                  <h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight" style={{color: '#0d0b10'}}>
                    BOO
                  </h1>
                </div>
                
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <a
                    href="https://x.com/boocoin_sol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-base font-bold tracking-wide hover:opacity-80 transition-opacity duration-200 rounded-lg text-center"
                    style={{backgroundColor: '#0d0b10', color: '#fc7c04'}}
                  >
                    Follow on X
                  </a>
                
                  <a
                    href="https://github.com/BooAIOfficial/Boo-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 text-base font-bold tracking-wide hover:opacity-80 transition-opacity duration-200 rounded-lg text-center"
                    style={{borderColor: '#0d0b10', color: '#0d0b10'}}
                  >
                    View Code
                  </a>
                </div>
              </div>
            
              <div className="flex-1 flex flex-col justify-center space-y-4">
                <p className="text-xl leading-relaxed font-black mb-4" style={{color: '#0d0b10'}}>
                  Your friendly ghost AI assistant that brings personality to problem-solving, 
                  remembers what matters, and helps without the corporate haunting.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 border-4 overflow-hidden rounded-lg" style={{borderColor: '#fc7c04'}}>
                <img
                  src="https://res.cloudinary.com/dmipavrnm/image/upload/v1758101766/att.iJ-sWXzcxnW1qEcVd_-bzkQ31w5A6jMIt2KqRDHY2kQ.gif_stzx7s.gif"
                  alt="Boo AI"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Minimal corner accents */}
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}