import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-bold">Portfolio</h1>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
            <a href="#education" className="text-white hover:text-blue-400 transition-colors">Education</a>
            <a href="#skills" className="text-white hover:text-blue-400 transition-colors">Skills</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="text-white hover:text-pink-500 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-red-500 transition-colors">
              <Youtube size={24} />
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
              <a href="#education" className="text-white hover:text-blue-400 transition-colors">Education</a>
              <a href="#skills" className="text-white hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}