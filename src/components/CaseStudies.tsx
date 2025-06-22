import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Building,
  Shield,
  FileText,
  Printer,
  Calendar,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  details: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  image: string;
  icon: React.ReactNode;
  color: string;
  date: string;
  duration: string;
}

const CaseStudies: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 'government-project',
      title: 'Government Digital Transformation',
      client: 'Ministry of Digital Affairs',
      category: 'Security & Printing',
      description:
        'Complete digital transformation of government document processing with advanced security features.',
      details:
        'Implemented blockchain-based document verification system with biometric authentication, reducing processing time by 75% while maintaining military-grade security standards.',
      results: [
        'Reduced document processing time from 2 weeks to 2 days',
        'Implemented blockchain verification system',
        'Zero security breaches in 18 months',
        'Saved 500,000 sheets of paper annually',
      ],

      metrics: [
        { label: 'Processing Time', value: '2 days', improvement: '-75%' },
        { label: 'Security Score', value: '99.9%', improvement: '+45%' },
        { label: 'Paper Reduction', value: '500K', improvement: '-80%' },
      ],

      image:
        'https://images.unsplash.com/photo-1577927613134-75259b515002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcGhvdG9ncmFwaCUyMG9mJTIwYSUyMG1vZGVybiUyMG9mZmljZSUyMGJ1aWxkaW5nJTIwd2l0aCUyMGElMjBjbGVhciUyMGJsdWUlMjBza3klMjBpbiUyMHRoZSUyMGJhY2tncm91bmQufGVufDB8fHx8MTc1MDUyNjU2N3ww&ixlib=rb-4.1.0&q=80&w=200$w=2070',
      icon: (
        <Building
          className='w-6 h-6'
          data-id='yhd84mczl'
          data-path='src/components/CaseStudies.tsx'
        />
      ),
      color: 'from-blue-400 to-indigo-600',
      date: '2023',
      duration: '18 months',
    },
    {
      id: 'corporate-security',
      title: 'Fortune 500 Security Overhaul',
      client: 'Global Tech Corporation',
      category: 'Security Services',
      description:
        'Complete security infrastructure upgrade with AI-powered threat detection and response systems.',
      details:
        'Deployed next-generation security solutions including quantum encryption, AI threat analysis, and automated incident response, protecting over 100,000 employees globally.',
      results: [
        'Deployed quantum encryption across 50 offices',
        'AI threat detection with 99.7% accuracy',
        'Reduced security incidents by 90%',
        'Protected 100,000+ employees globally',
      ],

      metrics: [
        { label: 'Threat Detection', value: '99.7%', improvement: '+55%' },
        { label: 'Incident Rate', value: '0.3%', improvement: '-90%' },
        { label: 'Response Time', value: '< 30s', improvement: '-95%' },
      ],

      image:
        'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: (
        <Shield
          className='w-6 h-6'
          data-id='jku2mxtp6'
          data-path='src/components/CaseStudies.tsx'
        />
      ),
      color: 'from-red-400 to-pink-600',
      date: '2023',
      duration: '12 months',
    },
    {
      id: 'sustainable-printing',
      title: 'Eco-Friendly Printing Revolution',
      client: 'Green Manufacturing Corp',
      category: 'Sustainable Printing',
      description:
        'Transition to 100% sustainable printing with carbon-neutral production and biodegradable materials.',
      details:
        'Revolutionized manufacturing documentation with eco-friendly printing solutions, achieving carbon neutrality while maintaining industrial-grade quality standards.',
      results: [
        'Achieved 100% carbon-neutral printing',
        'Reduced environmental impact by 85%',
        'Saved 50,000 trees annually',
        'Maintained ISO quality standards',
      ],

      metrics: [
        { label: 'Carbon Footprint', value: '0%', improvement: '-100%' },
        { label: 'Trees Saved', value: '50K', improvement: '+∞' },
        { label: 'Quality Score', value: '99.8%', improvement: '+15%' },
      ],

      image:
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80',
      icon: (
        <Printer
          className='w-6 h-6'
          data-id='o2hujq90h'
          data-path='src/components/CaseStudies.tsx'
        />
      ),
      color: 'from-green-400 to-emerald-600',
      date: '2023',
      duration: '8 months',
    },
    {
      id: 'paper-innovation',
      title: 'Next-Gen Paper Solutions',
      client: 'Innovation University',
      category: 'Paper Technology',
      description:
        'Development of smart paper with embedded sensors for interactive educational materials.',
      details:
        'Created revolutionary smart paper technology with embedded micro-sensors enabling interactive learning experiences while maintaining complete recyclability.',
      results: [
        'Developed smart paper with embedded sensors',
        'Created interactive learning materials',
        'Improved student engagement by 300%',
        'Maintained 100% recyclability',
      ],

      metrics: [
        { label: 'Engagement', value: '300%', improvement: '+300%' },
        { label: 'Recyclability', value: '100%', improvement: '0%' },
        { label: 'Durability', value: '10x', improvement: '+900%' },
      ],

      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: <FileText className='w-6 h-6' />,
      color: 'from-purple-400 to-violet-600',
      date: '2023',
      duration: '6 months',
    },
  ];

  const handleCardFlip = (id: string) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section className='py-20 px-4 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className="text-4xl md:text-6xl font-['Orbitron'] font-bold mb-6">
            <span className='gradient-text'>Success Stories</span>
            <br />
            <span className='text-white'>& Case Studies</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Discover how we've transformed businesses with our innovative
            solutions. Hover to reveal detailed insights and results.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className='perspective h-96 cursor-pointer'
              onClick={() => handleCardFlip(study.id)}
            >
              <motion.div
                className='transform-3d w-full h-full relative'
                animate={{ rotateY: flippedCard === study.id ? 180 : 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Front Side */}
                <Card className='absolute inset-0 glass-card backface-hidden hover-glow'>
                  <div
                    className='absolute inset-0 rounded-lg opacity-20'
                    style={{
                      backgroundImage: `url(${study.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />

                  <div className='relative z-10 p-6 h-full flex flex-col'>
                    <div className='flex items-center justify-between mb-4'>
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${study.color} flex items-center justify-center text-white`}
                      >
                        {study.icon}
                      </div>
                      <Badge className='bg-cyan-500/20 text-cyan-400 border-cyan-400'>
                        {study.category}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-['Orbitron'] font-bold text-white mb-2">
                      {study.title}
                    </h3>

                    <p className='text-cyan-400 mb-3 font-medium'>
                      {study.client}
                    </p>

                    <p className='text-gray-300 mb-4 flex-grow'>
                      {study.description}
                    </p>

                    <div className='flex items-center justify-between text-sm text-gray-400'>
                      <div className='flex items-center space-x-4'>
                        <div className='flex items-center space-x-1'>
                          <Calendar className='w-4 h-4' />
                          <span>{study.date}</span>
                        </div>
                        <div className='flex items-center space-x-1'>
                          <Users className='w-4 h-4' />
                          <span>{study.duration}</span>
                        </div>
                      </div>
                      <div className='text-cyan-400 font-medium'>
                        Click to flip →
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Back Side */}
                <Card
                  className='absolute inset-0 glass-card backface-hidden hover-glow'
                  // style={{ transform: 'rotateY(180deg)' }}
                >
                  <CardContent className='p-6 h-full flex flex-col'>
                    <div className='flex items-center justify-between mb-4'>
                      <h3 className="text-xl font-['Orbitron'] font-bold text-white">
                        Project Results
                      </h3>
                      <TrendingUp className='w-6 h-6 text-green-400' />
                    </div>

                    <p className='text-gray-300 mb-4 text-sm'>
                      {study.details}
                    </p>

                    <div className='space-y-2 mb-4'>
                      {study.results.map((result, idx) => (
                        <div key={idx} className='flex items-start space-x-2'>
                          <CheckCircle className='w-4 h-4 text-green-400 mt-0.5 flex-shrink-0' />
                          <span className='text-sm text-gray-300'>
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className='grid grid-cols-3 gap-2 mb-4'>
                      {study.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className='glass-panel p-2 rounded-lg text-center'
                        >
                          <div className='text-sm font-bold text-white'>
                            {metric.value}
                          </div>
                          <div className='text-xs text-gray-400'>
                            {metric.label}
                          </div>
                          <div className='text-xs text-green-400'>
                            {metric.improvement}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button
                      size='sm'
                      className='glass-button hover-glow mt-auto'
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('View full case study:', study.id);
                      }}
                    >
                      View Full Study
                      <ArrowRight className='w-4 h-4 ml-2' />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
