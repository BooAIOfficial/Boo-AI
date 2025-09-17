import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Gallery: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Boo AI different from other AI assistants?",
      answer: "Boo AI brings personality back to AI interactions! Unlike corporate chatbots that sound like they're reading from a script, Boo AI talks like a real person with genuine spooky charm. I remember conversations, help without the corporate haunting, and actually have a personality that makes interactions fun and natural."
    },
    {
      question: "How does Boo AI's memory system work?",
      answer: "I maintain contextual awareness throughout our conversations, remembering previous topics and building on earlier discussions. This means you don't have to constantly re-explain background information or repeat yourself - I actually remember what we talked about!"
    },
    {
      question: "Is Boo AI really open source?",
      answer: "Absolutely! Everything about how I work is completely transparent. You can see my code, contribute improvements, or even create your own spooky AI variations. No black boxes, no mysterious algorithms hiding in digital graveyards - just honest, open source AI."
    },
    {
      question: "Can Boo AI help with real tasks or just chat?",
      answer: "I'm designed to move beyond simple conversation into actual task completion! I can help with workflow automation, provide information, assist with digital tasks, and integrate with various tools and services. Think of me as a practical ghost assistant, not just a chatbot."
    },
    {
      question: "What's with the spooky theme?",
      answer: "The ghostly personality isn't just for show - it represents authenticity over corporate politeness! I'm not trying to be scary, just genuine. The spooky theme helps me avoid sounding like every other boring AI assistant while still being genuinely helpful and friendly."
    },
    {
      question: "How do I get started with Boo AI?",
      answer: "Simply click on the Chat section and start talking! Ask me questions, tell me about your projects, or just say hi. I promise I won't respond with corporate zombie-speak. The code is also available on GitHub if you want to run your own instance or contribute."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="min-h-screen py-20" style={{backgroundColor: '#0d0b10'}}>
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-20 p-8 rounded-lg" style={{backgroundColor: '#fc7c04'}}>
          <div className="space-y-2 mb-8">
            <p className="text-sm font-black tracking-widest uppercase" style={{color: '#0d0b10'}}>
              Questions & Answers
            </p>
            <div className="w-12 h-px mx-auto" style={{backgroundColor: '#0d0b10'}}></div>
          </div>
          <h2 className="text-5xl font-black mb-6" style={{color: '#0d0b10'}}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl font-black" style={{color: '#0d0b10'}}>
            Everything you need to know about your friendly ghost AI.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 rounded-lg overflow-hidden transition-all duration-300"
              style={{
                borderColor: '#fc7c04',
                backgroundColor: openFaq === index ? '#fc7c04' : '#0d0b10'
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors duration-300 hover:opacity-80"
                style={{
                  color: openFaq === index ? '#0d0b10' : '#fc7c04'
                }}
              >
                <h3 className="text-lg font-black pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFaq === index ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFaq === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-8 pb-6 pt-2 border-t-2" style={{borderColor: '#0d0b10'}}>
                  <p
                    className="leading-relaxed font-black"
                    style={{color: '#0d0b10'}}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-12">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#fc7c04'}}></div>
              <span className="text-sm font-black" style={{color: '#fc7c04'}}>Spooky Smart</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#fc7c04'}}></div>
              <span className="text-sm font-black" style={{color: '#fc7c04'}}>Open Source</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#fc7c04'}}></div>
              <span className="text-sm font-black" style={{color: '#fc7c04'}}>Helpful Ghost</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;