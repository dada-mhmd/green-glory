import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Trees,
  Droplets,
  Zap,
  Recycle,
  Award,
  TrendingUp,
  Leaf,
  Globe } from
'lucide-react';

interface Stat {
  id: string;
  label: string;
  value: number;
  target: number;
  unit: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const SustainabilityDashboard: React.FC = () => {
  const [counters, setCounters] = useState<Record<string, number>>({});
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const stats: Stat[] = [
  {
    id: 'trees',
    label: 'Trees Saved',
    value: 12547,
    target: 15000,
    unit: '',
    icon: <Trees className="w-8 h-8" data-id="h91ijbs5y" data-path="src/components/SustainabilityDashboard.tsx" />,
    color: 'from-green-400 to-emerald-600',
    description: 'Through our recycling program'
  },
  {
    id: 'water',
    label: 'Water Conserved',
    value: 2847,
    target: 3000,
    unit: 'L',
    icon: <Droplets className="w-8 h-8" data-id="yivniao09" data-path="src/components/SustainabilityDashboard.tsx" />,
    color: 'from-blue-400 to-cyan-600',
    description: 'Liters saved this month'
  },
  {
    id: 'energy',
    label: 'Clean Energy Used',
    value: 89,
    target: 100,
    unit: '%',
    icon: <Zap className="w-8 h-8" data-id="ramzt7emm" data-path="src/components/SustainabilityDashboard.tsx" />,
    color: 'from-yellow-400 to-orange-600',
    description: 'Renewable energy sources'
  },
  {
    id: 'recycled',
    label: 'Materials Recycled',
    value: 45.8,
    target: 50,
    unit: 'tons',
    icon: <Recycle className="w-8 h-8" data-id="8pyij2rrc" data-path="src/components/SustainabilityDashboard.tsx" />,
    color: 'from-purple-400 to-indigo-600',
    description: 'This quarter'
  },
  {
    id: 'carbon',
    label: 'Carbon Offset',
    value: 1250,
    target: 1500,
    unit: 'kg',
    icon: <Globe className="w-8 h-8" data-id="xnmla9xej" data-path="src/components/SustainabilityDashboard.tsx" />,
    color: 'from-teal-400 to-cyan-600',
    description: 'CO2 equivalent offset'
  },
  {
    id: 'certifications',
    label: 'Eco Certifications',
    value: 15,
    target: 20,
    unit: '',
    icon: <Award className="w-8 h-8" data-id="3f03jxm2w" data-path="src/components/SustainabilityDashboard.tsx" />,
    color: 'from-amber-400 to-yellow-600',
    description: 'International standards met'
  }];


  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;

    stats.forEach((stat) => {
      let currentValue = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= stat.value) {
          currentValue = stat.value;
          clearInterval(timer);
        }
        setCounters((prev) => ({ ...prev, [stat.id]: currentValue }));
      }, interval);
    });
  }, [isInView]);

  const formatNumber = (num: number, unit: string) => {
    const formattedNum = num % 1 === 0 ? num.toString() : num.toFixed(1);
    return `${formattedNum}${unit}`;
  };

  return (
    <section id="sustainability" className="py-20 px-4 bg-gradient-to-b from-transparent via-teal-900/10 to-transparent" data-id="9kw09veaq" data-path="src/components/SustainabilityDashboard.tsx">
      <div className="max-w-7xl mx-auto" data-id="0taj35ogl" data-path="src/components/SustainabilityDashboard.tsx">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16" data-id="hkhgrovkm" data-path="src/components/SustainabilityDashboard.tsx">

          <h2 className="text-4xl md:text-6xl font-['Orbitron'] font-bold mb-6" data-id="azsx779w3" data-path="src/components/SustainabilityDashboard.tsx">
            <span className="gradient-text" data-id="ybuzg4n2l" data-path="src/components/SustainabilityDashboard.tsx">Sustainability</span>
            <br data-id="ftz2i7f7s" data-path="src/components/SustainabilityDashboard.tsx" />
            <span className="text-white" data-id="7teqomoa4" data-path="src/components/SustainabilityDashboard.tsx">Dashboard</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="iyvmqg17r" data-path="src/components/SustainabilityDashboard.tsx">
            Real-time tracking of our environmental impact and sustainability initiatives. 
            Every action counts towards a greener future.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="spkpyrxc0" data-path="src/components/SustainabilityDashboard.tsx">
          {stats.map((stat, index) =>
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="h-full" data-id="9uakgfo7k" data-path="src/components/SustainabilityDashboard.tsx">

              <Card className="glass-card h-full hover-glow transition-all duration-300" data-id="hc125frn9" data-path="src/components/SustainabilityDashboard.tsx">
                <CardHeader className="pb-4" data-id="03r9c991s" data-path="src/components/SustainabilityDashboard.tsx">
                  <div className="flex items-center justify-between" data-id="9ygfm3j6r" data-path="src/components/SustainabilityDashboard.tsx">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`} data-id="tyzpb34rp" data-path="src/components/SustainabilityDashboard.tsx">
                      {stat.icon}
                    </div>
                    <div className="flex items-center space-x-2" data-id="p17pr950d" data-path="src/components/SustainabilityDashboard.tsx">
                      <TrendingUp className="w-5 h-5 text-green-400" data-id="gevpblps0" data-path="src/components/SustainabilityDashboard.tsx" />
                      <span className="text-green-400 text-sm font-semibold" data-id="s5pysocw9" data-path="src/components/SustainabilityDashboard.tsx">
                        +{Math.round(stat.value / stat.target * 100)}%
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent data-id="zppq7szk5" data-path="src/components/SustainabilityDashboard.tsx">
                  <div className="space-y-4" data-id="37iohg4xh" data-path="src/components/SustainabilityDashboard.tsx">
                    <div data-id="ojp26evaf" data-path="src/components/SustainabilityDashboard.tsx">
                      <CardTitle className="text-lg font-['Orbitron'] text-white mb-1" data-id="l43k3eay6" data-path="src/components/SustainabilityDashboard.tsx">
                        {stat.label}
                      </CardTitle>
                      <p className="text-sm text-gray-400" data-id="k7jv0xrxg" data-path="src/components/SustainabilityDashboard.tsx">{stat.description}</p>
                    </div>
                    
                    <div className="text-center" data-id="f7a0gp3qv" data-path="src/components/SustainabilityDashboard.tsx">
                      <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                      className="text-4xl font-bold text-white mb-2 counter-animation" data-id="xzn58x3ta" data-path="src/components/SustainabilityDashboard.tsx">

                        {formatNumber(counters[stat.id] || 0, stat.unit)}
                      </motion.div>
                      <div className="text-sm text-gray-400" data-id="bwisjfo6d" data-path="src/components/SustainabilityDashboard.tsx">
                        of {formatNumber(stat.target, stat.unit)} target
                      </div>
                    </div>
                    
                    <div className="space-y-2" data-id="wl2xkttgk" data-path="src/components/SustainabilityDashboard.tsx">
                      <div className="flex justify-between text-sm" data-id="n62oepvq9" data-path="src/components/SustainabilityDashboard.tsx">
                        <span className="text-gray-400" data-id="wblke970h" data-path="src/components/SustainabilityDashboard.tsx">Progress</span>
                        <span className="text-cyan-400" data-id="1c0t1vrpb" data-path="src/components/SustainabilityDashboard.tsx">
                          {Math.round(stat.value / stat.target * 100)}%
                        </span>
                      </div>
                      <Progress
                      value={stat.value / stat.target * 100}
                      className="h-2 bg-gray-700" data-id="b0czar8jm" data-path="src/components/SustainabilityDashboard.tsx" />

                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Environmental Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 glass-panel p-8 rounded-3xl" data-id="zwqps5e3e" data-path="src/components/SustainabilityDashboard.tsx">

          <div className="text-center mb-8" data-id="b8vsttxgn" data-path="src/components/SustainabilityDashboard.tsx">
            <h3 className="text-3xl font-['Orbitron'] font-bold text-white mb-4" data-id="onw7a9x87" data-path="src/components/SustainabilityDashboard.tsx">
              Environmental Impact Summary
            </h3>
            <p className="text-gray-300" data-id="6j0qwc23m" data-path="src/components/SustainabilityDashboard.tsx">
              Our commitment to sustainability goes beyond numbers - it's about creating a better future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-id="pooegyucr" data-path="src/components/SustainabilityDashboard.tsx">
            <div className="text-center" data-id="vp2g85rlk" data-path="src/components/SustainabilityDashboard.tsx">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="xvdmj3u07" data-path="src/components/SustainabilityDashboard.tsx">
                <Leaf className="w-8 h-8 text-white" data-id="4lrfqjua0" data-path="src/components/SustainabilityDashboard.tsx" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2" data-id="l7hbnnz43" data-path="src/components/SustainabilityDashboard.tsx">Carbon Neutral</h4>
              <p className="text-sm text-gray-400" data-id="2womjosck" data-path="src/components/SustainabilityDashboard.tsx">100% carbon offset production</p>
            </div>
            
            <div className="text-center" data-id="icq300nk5" data-path="src/components/SustainabilityDashboard.tsx">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="pxxddtekb" data-path="src/components/SustainabilityDashboard.tsx">
                <Droplets className="w-8 h-8 text-white" data-id="ibts160jv" data-path="src/components/SustainabilityDashboard.tsx" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2" data-id="b5kja16p6" data-path="src/components/SustainabilityDashboard.tsx">Water Positive</h4>
              <p className="text-sm text-gray-400" data-id="dqoxn2ytq" data-path="src/components/SustainabilityDashboard.tsx">More water conserved than used</p>
            </div>
            
            <div className="text-center" data-id="5sqsbzymz" data-path="src/components/SustainabilityDashboard.tsx">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="tjkgd9pe7" data-path="src/components/SustainabilityDashboard.tsx">
                <Recycle className="w-8 h-8 text-white" data-id="9mbjry7ph" data-path="src/components/SustainabilityDashboard.tsx" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2" data-id="1gcd17ttq" data-path="src/components/SustainabilityDashboard.tsx">Zero Waste</h4>
              <p className="text-sm text-gray-400" data-id="0gqrc1qq9" data-path="src/components/SustainabilityDashboard.tsx">100% recyclable materials</p>
            </div>
            
            <div className="text-center" data-id="bebb8iuot" data-path="src/components/SustainabilityDashboard.tsx">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="o6b5y9xr3" data-path="src/components/SustainabilityDashboard.tsx">
                <Award className="w-8 h-8 text-white" data-id="70ofwmyys" data-path="src/components/SustainabilityDashboard.tsx" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2" data-id="oikdb8w3m" data-path="src/components/SustainabilityDashboard.tsx">Certified</h4>
              <p className="text-sm text-gray-400" data-id="pla4w9seq" data-path="src/components/SustainabilityDashboard.tsx">ISO 14001 Environmental Management</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default SustainabilityDashboard;