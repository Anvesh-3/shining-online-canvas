import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=17T2SynMX5ykUo93GaFRQK8nitqYQnRsp';
    link.download = 'Anvesh-Tiwari-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex justify-between items-center h-16 md:h-20">
        <a href="#hero" className="text-lg font-semibold">Anvesh Tiwari</a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="highlight">About</a>
          <a href="#projects" className="highlight">Projects</a>
          <a href="#experience" className="highlight">Experience</a>
          <a href="#skills" className="highlight">Skills</a>
          <a href="#contact" className="highlight">Contact</a>
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2"
            onClick={handleDownloadResume}
          >
            <Download size={16} /> Resume
          </Button>
        </div>
        
        <div className="md:hidden">
          <MobileNav handleDownloadResume={handleDownloadResume} />
        </div>
      </div>
    </nav>
  );
};

const MobileNav = ({ handleDownloadResume }: { handleDownloadResume: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        )}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-md py-4 px-5 flex flex-col space-y-4">
          <a href="#about" className="block py-2" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="block py-2" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" className="block py-2" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#skills" className="block py-2" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</a>
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2 w-full justify-center"
            onClick={() => {
              handleDownloadResume();
              setIsOpen(false);
            }}
          >
            <Download size={16} /> Resume
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
