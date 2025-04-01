
import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return <nav className="bg-white py-4 px-6 md:px-10 fixed w-full shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src="/lovable-uploads/12759a3e-6c88-4260-a4a4-59bcbfcaad8b.png" alt="Emmell Ground Worx Logo" className="h-16" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-emmell-navy hover:text-emmell-orange font-medium transition-colors">
            About
          </a>
          <a href="#services" className="text-emmell-navy hover:text-emmell-orange font-medium transition-colors">
            Services
          </a>
          
          <a href="tel:8584716511" className="flex items-center text-emmell-navy hover:text-emmell-orange font-medium transition-colors">
            <Phone size={18} className="mr-2" />
            (858) 471-6511
          </a>
          
          <Button asChild className="bg-emmell-orange hover:bg-emmell-orange/90 text-white">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-emmell-navy">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden absolute left-0 right-0 bg-white shadow-md py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="text-emmell-navy hover:text-emmell-orange font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#services" className="text-emmell-navy hover:text-emmell-orange font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#projects" className="text-emmell-navy hover:text-emmell-orange font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="tel:8584716511" className="flex items-center text-emmell-navy hover:text-emmell-orange font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
              <Phone size={18} className="mr-2" />
              (858) 471-6511
            </a>
            <Button asChild className="bg-emmell-orange hover:bg-emmell-orange/90 text-white w-full" onClick={() => setIsMenuOpen(false)}>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>}
    </nav>;
};

export default Navbar;
