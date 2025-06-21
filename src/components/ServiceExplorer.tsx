import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Printer,
  Shield,
  Leaf,
  Zap,
  Globe,
  ArrowRight,
  Eye,
  Camera } from
'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
  arSupported: boolean;
}

const ServiceExplorer: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [draggedService, setDraggedService] = useState<string | null>(null);

  const services: Service[] = [
  {
    id: 'paper',
    title: 'Sustainable Paper Solutions',
    description: 'Revolutionary eco-friendly paper products made from recycled materials with zero environmental impact.',
    icon: <FileText className="w-8 h-8" data-id="y8v1tw7rr" data-path="src/components/ServiceExplorer.tsx" />,
    color: 'from-green-400 to-emerald-600',
    features: ['100% Recycled Materials', 'Carbon Neutral Production', 'Biodegradable Options', 'Custom Sizing'],
    arSupported: true
  },
  {
    id: 'printing',
    title: 'Advanced Printing Technology',
    description: 'State-of-the-art printing services with quantum-enhanced precision and eco-friendly inks.',
    icon: <Printer className="w-8 h-8" data-id="hk4d1394e" data-path="src/components/ServiceExplorer.tsx" />,
    color: 'from-blue-400 to-cyan-600',
    features: ['Quantum Precision', 'Eco-Friendly Inks', '3D Printing', 'Large Format'],
    arSupported: true
  },
  {
    id: 'security',
    title: 'Security Services',
    description: 'Next-generation security solutions with AI-powered threat detection and blockchain verification.',
    icon: <Shield className="w-8 h-8" data-id="xn7ojfxj6" data-path="src/components/ServiceExplorer.tsx" />,
    color: 'from-purple-400 to-indigo-600',
    features: ['AI Threat Detection', 'Blockchain Verification', '24/7 Monitoring', 'Biometric Access'],
    arSupported: false
  },
  {
    id: 'tenders',
    title: 'Government Tenders',
    description: 'Specialized tender management with automated compliance checking and digital submissions.',
    icon: <Globe className="w-8 h-8" data-id="dld7b7fnl" data-path="src/components/ServiceExplorer.tsx" />,
    color: 'from-orange-400 to-red-600',
    features: ['Automated Compliance', 'Digital Submissions', 'Real-time Updates', 'Document Management'],
    arSupported: false
  }];


  const handleDragStart = (e: React.DragEvent, serviceId: string) => {
    setDraggedService(serviceId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = () => {
    setDraggedService(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (draggedService && draggedService !== targetId) {
      // Animate the interaction
      setSelectedService(targetId);
    }
  };

  const handleARView = (serviceId: string) => {
    // Mock AR functionality
    console.log(`Opening AR view for ${serviceId}`);
    // In a real app, this would open camera and show AR overlay
    alert('AR View would open here - scanning for product demo!');
  };

  return (
    <section id="services" className="py-20 px-4" data-id="8imr5iay9" data-path="src/components/ServiceExplorer.tsx">
      <div className="max-w-7xl mx-auto" data-id="0pbmhggha" data-path="src/components/ServiceExplorer.tsx">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16" data-id="otkmguh3o" data-path="src/components/ServiceExplorer.tsx">

          <h2 className="text-4xl md:text-6xl font-['Orbitron'] font-bold mb-6" data-id="3dfifbzow" data-path="src/components/ServiceExplorer.tsx">
            <span className="gradient-text" data-id="t19crnefl" data-path="src/components/ServiceExplorer.tsx">Interactive Service</span>
            <br data-id="l4t85urus" data-path="src/components/ServiceExplorer.tsx" />
            <span className="text-white" data-id="jn39qn5pk" data-path="src/components/ServiceExplorer.tsx">Explorer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="egemzm8nc" data-path="src/components/ServiceExplorer.tsx">
            Drag and drop to explore our revolutionary services. Experience the future of 
            sustainable business solutions.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12" data-id="z8t5vh3r1" data-path="src/components/ServiceExplorer.tsx">
          {services.map((service, index) =>
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`cursor-pointer ${
            draggedService === service.id ? 'opacity-50 scale-95' : ''}`
            }
            draggable
            onDragStart={(e) => handleDragStart(e, service.id)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, service.id)}
            onClick={() => setSelectedService(service.id)} data-id="u1gi98bpl" data-path="src/components/ServiceExplorer.tsx">

              <Card className="glass-card h-full hover-glow transition-all duration-300" data-id="rx2oj0xl6" data-path="src/components/ServiceExplorer.tsx">
                <CardHeader className="pb-4" data-id="h57m6k8hu" data-path="src/components/ServiceExplorer.tsx">
                  <div className="flex items-center justify-between" data-id="5nex2ijju" data-path="src/components/ServiceExplorer.tsx">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4`} data-id="tzv9s0l1j" data-path="src/components/ServiceExplorer.tsx">
                      {service.icon}
                    </div>
                    {service.arSupported &&
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-400" data-id="k4wewa889" data-path="src/components/ServiceExplorer.tsx">
                        AR Ready
                      </Badge>
                  }
                  </div>
                  <CardTitle className="text-2xl font-['Orbitron'] text-white" data-id="o3swhaler" data-path="src/components/ServiceExplorer.tsx">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent data-id="dusay163q" data-path="src/components/ServiceExplorer.tsx">
                  <p className="text-gray-300 mb-6" data-id="a5why9fui" data-path="src/components/ServiceExplorer.tsx">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6" data-id="qae62zlir" data-path="src/components/ServiceExplorer.tsx">
                    {service.features.map((feature, idx) =>
                  <div key={idx} className="flex items-center space-x-2" data-id="22wgvt144" data-path="src/components/ServiceExplorer.tsx">
                        <Zap className="w-4 h-4 text-cyan-400" data-id="q0w035da7" data-path="src/components/ServiceExplorer.tsx" />
                        <span className="text-sm text-gray-300" data-id="kyw7a05ol" data-path="src/components/ServiceExplorer.tsx">{feature}</span>
                      </div>
                  )}
                  </div>

                  <div className="flex space-x-3" data-id="5e9odjojm" data-path="src/components/ServiceExplorer.tsx">
                    <Button
                    size="sm"
                    className="glass-button hover-glow flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service.id);
                    }} data-id="6rxjgq22j" data-path="src/components/ServiceExplorer.tsx">

                      <Eye className="w-4 h-4 mr-2" data-id="d4euliauf" data-path="src/components/ServiceExplorer.tsx" />
                      View Details
                    </Button>
                    
                    {service.arSupported &&
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass-button border-cyan-400 text-cyan-400"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleARView(service.id);
                    }} data-id="cpsaegdxu" data-path="src/components/ServiceExplorer.tsx">

                        <Camera className="w-4 h-4 mr-2" data-id="283jaeb5u" data-path="src/components/ServiceExplorer.tsx" />
                        AR View
                      </Button>
                  }
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Detailed View */}
        <AnimatePresence data-id="284le8iom" data-path="src/components/ServiceExplorer.tsx">
          {selectedService &&
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="glass-panel p-8 rounded-3xl" data-id="0pulzn6f6" data-path="src/components/ServiceExplorer.tsx">

              {(() => {
              const service = services.find((s) => s.id === selectedService);
              if (!service) return null;

              return (
                <div className="flex flex-col lg:flex-row items-center gap-8" data-id="vt5evpk09" data-path="src/components/ServiceExplorer.tsx">
                    <div className="flex-1" data-id="y5en2q94z" data-path="src/components/ServiceExplorer.tsx">
                      <div className="flex items-center space-x-4 mb-6" data-id="r9iy36a78" data-path="src/components/ServiceExplorer.tsx">
                        <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white`} data-id="8sxfh2k6s" data-path="src/components/ServiceExplorer.tsx">
                          {service.icon}
                        </div>
                        <div data-id="5p5kul2uu" data-path="src/components/ServiceExplorer.tsx">
                          <h3 className="text-3xl font-['Orbitron'] font-bold text-white" data-id="j6t1p1pm9" data-path="src/components/ServiceExplorer.tsx">
                            {service.title}
                          </h3>
                          <p className="text-cyan-400" data-id="ol5fnt5am" data-path="src/components/ServiceExplorer.tsx">Advanced Technology Solution</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-lg mb-6" data-id="o33pkvr05" data-path="src/components/ServiceExplorer.tsx">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8" data-id="8j4ozhqgn" data-path="src/components/ServiceExplorer.tsx">
                        {service.features.map((feature, idx) =>
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center space-x-3 glass-panel p-3 rounded-lg" data-id="pa1g25jc4" data-path="src/components/ServiceExplorer.tsx">

                            <Leaf className="w-5 h-5 text-green-400" data-id="i0ul1xoxb" data-path="src/components/ServiceExplorer.tsx" />
                            <span className="text-white font-medium" data-id="gyrl8eh9r" data-path="src/components/ServiceExplorer.tsx">{feature}</span>
                          </motion.div>
                      )}
                      </div>
                      
                      <div className="flex space-x-4" data-id="6zafvhwyy" data-path="src/components/ServiceExplorer.tsx">
                        <Button className="glass-button hover-glow" data-id="j7x5cnn6d" data-path="src/components/ServiceExplorer.tsx">
                          Get Quote
                          <ArrowRight className="w-4 h-4 ml-2" data-id="dyc6upmd4" data-path="src/components/ServiceExplorer.tsx" />
                        </Button>
                        <Button
                        variant="outline"
                        className="glass-button border-gray-600 text-gray-300"
                        onClick={() => setSelectedService(null)} data-id="bo9iuugct" data-path="src/components/ServiceExplorer.tsx">

                          Close
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex-1 lg:max-w-md" data-id="el0s3vbwe" data-path="src/components/ServiceExplorer.tsx">
                      <div className="glass-panel p-6 rounded-2xl" data-id="zh0i05cy2" data-path="src/components/ServiceExplorer.tsx">
                        <h4 className="text-xl font-semibold mb-4 text-cyan-400" data-id="va5qzsm7o" data-path="src/components/ServiceExplorer.tsx">Technical Specs</h4>
                        <div className="space-y-3" data-id="wgcect0xq" data-path="src/components/ServiceExplorer.tsx">
                          <div className="flex justify-between" data-id="6inwmsdls" data-path="src/components/ServiceExplorer.tsx">
                            <span className="text-gray-400" data-id="3xzepgxl2" data-path="src/components/ServiceExplorer.tsx">Efficiency</span>
                            <span className="text-white" data-id="hfnmiqm9m" data-path="src/components/ServiceExplorer.tsx">99.9%</span>
                          </div>
                          <div className="flex justify-between" data-id="ijf7kgzz4" data-path="src/components/ServiceExplorer.tsx">
                            <span className="text-gray-400" data-id="16d8puost" data-path="src/components/ServiceExplorer.tsx">Sustainability</span>
                            <span className="text-green-400" data-id="chj499jty" data-path="src/components/ServiceExplorer.tsx">Carbon Neutral</span>
                          </div>
                          <div className="flex justify-between" data-id="3cqbbxqce" data-path="src/components/ServiceExplorer.tsx">
                            <span className="text-gray-400" data-id="5oyy3bpn6" data-path="src/components/ServiceExplorer.tsx">Security Level</span>
                            <span className="text-cyan-400" data-id="kul93d7g5" data-path="src/components/ServiceExplorer.tsx">Military Grade</span>
                          </div>
                          <div className="flex justify-between" data-id="8iavtxi5q" data-path="src/components/ServiceExplorer.tsx">
                            <span className="text-gray-400" data-id="j67bijrx4" data-path="src/components/ServiceExplorer.tsx">Delivery Time</span>
                            <span className="text-white" data-id="a0e2s8j7n" data-path="src/components/ServiceExplorer.tsx">24-48 hours</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>);

            })()}
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </section>);

};

export default ServiceExplorer;