import React from 'react';
import { ArrowRight, Sparkles, Shield, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  console.log('HeroSection rendering...');

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Static Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-teal-900/20' />
      <div
        className='absolute inset-0 opacity-30'
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Hero Content */}
      <div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='glass-panel p-8 md:p-12 rounded-3xl my-10'
        >
          {/* Floating Icons */}
          {/* <div className='flex justify-center space-x-8 mb-6'>
            <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl flex items-center justify-center'>
              <Leaf className='w-6 h-6 text-white' />
            </div>
            <div className='w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center'>
              <Shield className='w-6 h-6 text-white' />
            </div>
            <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl flex items-center justify-center'>
              <Sparkles className='w-6 h-6 text-white' />
            </div>
          </div> */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight mt-10'
          >
            {/* <span className='gradient-text neon-text'>Green Glory</span> */}
            <span className='bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-800 text-clip text-transparent bg-clip-text'>
              Green Glory
            </span>
            <br />
            <span className='text-white'>Future of</span>
            <br />
            <span className='text-cyan-400'>Sustainable Security</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'
          >
            Revolutionary paper, printing, and security services powered by{' '}
            <span className='text-cyan-400 font-semibold'>
              next-generation technology
            </span>{' '}
            and{' '}
            <span className='text-teal-400 font-semibold'>
              environmental innovation
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
          >
            <Button
              size='lg'
              className='glass-button hover-glow text-lg px-8 py-4 rounded-full group'
            >
              Explore Services
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Button>

            <Button
              variant='outline'
              size='lg'
              className='glass-button border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 text-lg px-8 py-4 rounded-full'
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'
          >
            <div className='glass-panel p-4 rounded-xl'>
              <div className='text-2xl font-bold text-cyan-400'>10,000+</div>
              <div className='text-sm text-gray-400'>Trees Saved</div>
            </div>
            <div className='glass-panel p-4 rounded-xl'>
              <div className='text-2xl font-bold text-teal-400'>500+</div>
              <div className='text-sm text-gray-400'>Secure Projects</div>
            </div>
            <div className='glass-panel p-4 rounded-xl'>
              <div className='text-2xl font-bold text-cyan-400'>100%</div>
              <div className='text-sm text-gray-400'>Sustainable</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center'
        >
          <div className='w-1 h-3 bg-cyan-400 rounded-full mt-2' />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
