import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VoiceNavigation from './VoiceNavigation';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Sustainability', href: '#sustainability' },
  { name: 'Contact', href: '#contact' }];


  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel backdrop-blur-md' : 'bg-transparent'}`
        } data-id="govt1g3gm" data-path="src/components/Navigation.tsx">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="dedguhnud" data-path="src/components/Navigation.tsx">
          <div className="flex items-center justify-between h-16" data-id="ait3zqoor" data-path="src/components/Navigation.tsx">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2" data-id="f8qp7l9sp" data-path="src/components/Navigation.tsx">

              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg flex items-center justify-center" data-id="kgri714t2" data-path="src/components/Navigation.tsx">
                <span className="text-black font-bold text-xl font-['Orbitron']" data-id="9cf3pbxqd" data-path="src/components/Navigation.tsx">GG</span>
              </div>
              <div className="text-xl font-['Orbitron'] font-bold gradient-text" data-id="qoi4ojao1" data-path="src/components/Navigation.tsx">
                Green Glory
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8" data-id="dd4r7k8zr" data-path="src/components/Navigation.tsx">
              {navItems.map((item) =>
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group" data-id="4h0myn0te" data-path="src/components/Navigation.tsx">

                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 group-hover:w-full" data-id="ze5p7wxay" data-path="src/components/Navigation.tsx" />
                </motion.a>
              )}
              
              {/* Voice Navigation Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVoiceActive(!isVoiceActive)}
                className={`glass-button hover-glow ${isVoiceActive ? 'bg-cyan-400/20' : ''}`} data-id="k9cu0fn60" data-path="src/components/Navigation.tsx">

                {isVoiceActive ? <MicOff className="w-4 h-4" data-id="amer7d2zc" data-path="src/components/Navigation.tsx" /> : <Mic className="w-4 h-4" data-id="2nbo3fhq9" data-path="src/components/Navigation.tsx" />}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden" data-id="wvcsa5i1z" data-path="src/components/Navigation.tsx">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="glass-button" data-id="7iv4ai9lf" data-path="src/components/Navigation.tsx">

                {isOpen ? <X className="w-6 h-6" data-id="nxolu7z4q" data-path="src/components/Navigation.tsx" /> : <Menu className="w-6 h-6" data-id="w9yvdly2z" data-path="src/components/Navigation.tsx" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden glass-panel" data-id="lq4dezdjh" data-path="src/components/Navigation.tsx">

          <div className="px-4 py-2 space-y-1" data-id="d7oocl092" data-path="src/components/Navigation.tsx">
            {navItems.map((item) =>
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ x: 10 }}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" data-id="npsji03je" data-path="src/components/Navigation.tsx">

                {item.name}
              </motion.a>
            )}
            <div className="px-3 py-2" data-id="r73lthtwa" data-path="src/components/Navigation.tsx">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVoiceActive(!isVoiceActive)}
                className={`glass-button hover-glow w-full ${isVoiceActive ? 'bg-cyan-400/20' : ''}`} data-id="e1c6viwn2" data-path="src/components/Navigation.tsx">

                {isVoiceActive ?
                <>
                    <MicOff className="w-4 h-4 mr-2" data-id="dn7sz81xi" data-path="src/components/Navigation.tsx" />
                    Stop Voice
                  </> :

                <>
                    <Mic className="w-4 h-4 mr-2" data-id="sxgtay0l3" data-path="src/components/Navigation.tsx" />
                    Voice Navigation
                  </>
                }
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Voice Navigation Component */}
      <VoiceNavigation isActive={isVoiceActive} data-id="0hz57oduj" data-path="src/components/Navigation.tsx" />
    </>);

};

export default Navigation;