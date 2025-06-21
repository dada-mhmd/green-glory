import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import Navigation from './Navigation';
import Footer from './Footer';

interface FuturisticLayoutProps {
  children: ReactNode;
}

const FuturisticLayout: React.FC<FuturisticLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a] text-white" data-id="8hzv4ua1q" data-path="src/components/FuturisticLayout.tsx">
      {/* Background grid pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" data-id="0qjco4ude" data-path="src/components/FuturisticLayout.tsx">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} data-id="ffkik3zbi" data-path="src/components/FuturisticLayout.tsx" />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" data-id="bey2jc2je" data-path="src/components/FuturisticLayout.tsx">
        {[...Array(20)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }} data-id="nzkn0yt4i" data-path="src/components/FuturisticLayout.tsx" />

        )}
      </div>

      <Navigation data-id="1upjwjwuq" data-path="src/components/FuturisticLayout.tsx" />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10" data-id="fedtx0ko7" data-path="src/components/FuturisticLayout.tsx">

        {children}
      </motion.main>
      
      <Footer data-id="l2cavq8et" data-path="src/components/FuturisticLayout.tsx" />
    </div>);

};

export default FuturisticLayout;