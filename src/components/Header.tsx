import React from 'react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'chat', label: 'Chat' },
    { id: 'gallery', label: 'FAQ' },
    { id: 'about', label: 'About' },
  ];

  return (
    <header className="bg-white border-b border-orange-500 sticky top-0 z-50" style={{backgroundColor: '#fc7c04'}}>
      <div className="max-w-6xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#0d0b10'}}>
              <span className="text-sm font-black" style={{color: '#fc7c04'}}>B</span>
            </div>
            <span className="text-2xl font-bold tracking-wide" style={{color: '#0d0b10'}}>BOO AI</span>
          </div>
          
          <nav className="flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`text-sm font-black tracking-wide transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'border-b-2 pb-1'
                    : 'hover:opacity-80'
                }`}
                style={{
                  color: '#0d0b10',
                  borderColor: activeSection === section.id ? '#0d0b10' : 'transparent'
                }}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;