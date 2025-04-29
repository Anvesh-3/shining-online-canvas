
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex justify-between items-center h-16 md:h-20">
        <a href="#hero" className="text-lg font-semibold">Portfolio</a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="highlight">About</a>
          <a href="#projects" className="highlight">Projects</a>
          <a href="#skills" className="highlight">Skills</a>
          <a href="#contact" className="highlight">Contact</a>
        </div>
        
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-5 flex flex-col space-y-4">
          <a href="#about" className="block py-2" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="block py-2" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" className="block py-2" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
