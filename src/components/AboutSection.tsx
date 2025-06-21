import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Lightbulb,
  Target,
  Heart,
  Award,
  Users,
  Globe,
  Zap,
  Shield,
  ArrowRight } from
'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
  {
    icon: <Lightbulb className="w-8 h-8" data-id="nf0ugu7nw" data-path="src/components/AboutSection.tsx" />,
    title: 'Innovation',
    description: 'Pioneering next-generation solutions with cutting-edge technology and creative thinking.',
    color: 'from-yellow-400 to-orange-600'
  },
  {
    icon: <Heart className="w-8 h-8" data-id="4hr3tziwo" data-path="src/components/AboutSection.tsx" />,
    title: 'Sustainability',
    description: 'Committed to environmental stewardship and creating a greener future for all.',
    color: 'from-green-400 to-emerald-600'
  },
  {
    icon: <Shield className="w-8 h-8" data-id="v1w0xhsn5" data-path="src/components/AboutSection.tsx" />,
    title: 'Security',
    description: 'Military-grade security standards protecting your most valuable information.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    icon: <Zap className="w-8 h-8" data-id="cqf3ekbgm" data-path="src/components/AboutSection.tsx" />,
    title: 'Excellence',
    description: 'Delivering superior quality with uncompromising attention to detail.',
    color: 'from-purple-400 to-pink-600'
  }];


  const stats = [
  { number: '15+', label: 'Years Experience', icon: <Award className="w-6 h-6" data-id="sbxxxvvjj" data-path="src/components/AboutSection.tsx" /> },
  { number: '10K+', label: 'Happy Clients', icon: <Users className="w-6 h-6" data-id="1q5c62lif" data-path="src/components/AboutSection.tsx" /> },
  { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" data-id="57djv9rx1" data-path="src/components/AboutSection.tsx" /> },
  { number: '99.9%', label: 'Success Rate', icon: <Target className="w-6 h-6" data-id="zub48zecz" data-path="src/components/AboutSection.tsx" /> }];


  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" data-id="ykmhqmf68" data-path="src/components/AboutSection.tsx">
      <div className="max-w-7xl mx-auto" data-id="b8us1i2pt" data-path="src/components/AboutSection.tsx">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16" data-id="is14to51i" data-path="src/components/AboutSection.tsx">

          <h2 className="text-4xl md:text-6xl font-['Orbitron'] font-bold mb-6" data-id="k0o9a6bmw" data-path="src/components/AboutSection.tsx">
            <span className="text-white" data-id="6sclf3wwz" data-path="src/components/AboutSection.tsx">About</span>
            <br data-id="y3ljob671" data-path="src/components/AboutSection.tsx" />
            <span className="gradient-text" data-id="ix39tndga" data-path="src/components/AboutSection.tsx">Green Glory</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="foeaezt9x" data-path="src/components/AboutSection.tsx">
            Leading the revolution in sustainable business solutions through innovative technology, 
            environmental consciousness, and unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16" data-id="cs8b2lptc" data-path="src/components/AboutSection.tsx">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6" data-id="md243z5nu" data-path="src/components/AboutSection.tsx">

            <div className="glass-panel p-8 rounded-3xl" data-id="4iq61ih0g" data-path="src/components/AboutSection.tsx">
              <h3 className="text-3xl font-['Orbitron'] font-bold text-white mb-6" data-id="576mj82r7" data-path="src/components/AboutSection.tsx">
                Our <span className="text-cyan-400" data-id="mrssnjdb8" data-path="src/components/AboutSection.tsx">Vision</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6" data-id="8zz9psfbx" data-path="src/components/AboutSection.tsx">
                Founded in 2008, Green Glory emerged from a simple yet powerful vision: to transform 
                the way businesses operate by seamlessly integrating cutting-edge technology with 
                environmental responsibility.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6" data-id="p49104zep" data-path="src/components/AboutSection.tsx">
                We recognized that the future belongs to companies that can deliver exceptional 
                results while maintaining a positive environmental impact. This realization drove 
                us to develop revolutionary solutions in paper production, printing technology, 
                and security services.
              </p>
              <Button className="glass-button hover-glow group" data-id="72kjv28ba" data-path="src/components/AboutSection.tsx">
                Learn Our Story
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-id="6qhrsol9x" data-path="src/components/AboutSection.tsx" />
              </Button>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6" data-id="t9yyzavk9" data-path="src/components/AboutSection.tsx">

            <div className="glass-panel p-8 rounded-3xl" data-id="ffaa6vtk8" data-path="src/components/AboutSection.tsx">
              <h3 className="text-3xl font-['Orbitron'] font-bold text-white mb-6" data-id="aq44s7yp5" data-path="src/components/AboutSection.tsx">
                Our <span className="text-teal-400" data-id="yjqhrpvwh" data-path="src/components/AboutSection.tsx">Mission</span>
              </h3>
              <div className="space-y-4" data-id="fbp0lek57" data-path="src/components/AboutSection.tsx">
                <div className="flex items-start space-x-4" data-id="1vpn3c6gq" data-path="src/components/AboutSection.tsx">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1" data-id="jru23ehxf" data-path="src/components/AboutSection.tsx">
                    <span className="text-white text-sm font-bold" data-id="zy84az7t3" data-path="src/components/AboutSection.tsx">1</span>
                  </div>
                  <div data-id="6i0ucncvr" data-path="src/components/AboutSection.tsx">
                    <h4 className="text-white font-semibold mb-2" data-id="nvra85j7e" data-path="src/components/AboutSection.tsx">Sustainable Innovation</h4>
                    <p className="text-gray-300" data-id="zqiq1de3d" data-path="src/components/AboutSection.tsx">Develop breakthrough technologies that minimize environmental impact while maximizing performance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-id="3nn1tfm1k" data-path="src/components/AboutSection.tsx">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1" data-id="gtifxsn4b" data-path="src/components/AboutSection.tsx">
                    <span className="text-white text-sm font-bold" data-id="bv6d9ff9a" data-path="src/components/AboutSection.tsx">2</span>
                  </div>
                  <div data-id="nbmeek5t8" data-path="src/components/AboutSection.tsx">
                    <h4 className="text-white font-semibold mb-2" data-id="fw2kpp1vu" data-path="src/components/AboutSection.tsx">Client Success</h4>
                    <p className="text-gray-300" data-id="8m737f6ql" data-path="src/components/AboutSection.tsx">Empower businesses to achieve their goals through our comprehensive suite of services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-id="h5zj66eq8" data-path="src/components/AboutSection.tsx">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1" data-id="dbefdgltu" data-path="src/components/AboutSection.tsx">
                    <span className="text-white text-sm font-bold" data-id="ry39eojxx" data-path="src/components/AboutSection.tsx">3</span>
                  </div>
                  <div data-id="w1mds0w3p" data-path="src/components/AboutSection.tsx">
                    <h4 className="text-white font-semibold mb-2" data-id="y4ia430tm" data-path="src/components/AboutSection.tsx">Global Impact</h4>
                    <p className="text-gray-300" data-id="pk5vcuqnt" data-path="src/components/AboutSection.tsx">Create positive change that extends beyond business to benefit communities and the planet.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16" data-id="583t1azs6" data-path="src/components/AboutSection.tsx">

          <h3 className="text-4xl font-['Orbitron'] font-bold text-center text-white mb-12" data-id="192oel9t7" data-path="src/components/AboutSection.tsx">
            Our <span className="gradient-text" data-id="61dcxycgv" data-path="src/components/AboutSection.tsx">Core Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-id="8l84mmcf9" data-path="src/components/AboutSection.tsx">
            {values.map((value, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }} data-id="pfqs3gpqz" data-path="src/components/AboutSection.tsx">

                <Card className="glass-card h-full hover-glow transition-all duration-300" data-id="6rv2luhdu" data-path="src/components/AboutSection.tsx">
                  <CardContent className="p-6 text-center" data-id="f7ux03k5t" data-path="src/components/AboutSection.tsx">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`} data-id="mviyrryjh" data-path="src/components/AboutSection.tsx">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-['Orbitron'] font-semibold text-white mb-3" data-id="l9ctt9w67" data-path="src/components/AboutSection.tsx">
                      {value.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed" data-id="ju3gk44ix" data-path="src/components/AboutSection.tsx">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 rounded-3xl" data-id="mr99ofney" data-path="src/components/AboutSection.tsx">

          <h3 className="text-3xl font-['Orbitron'] font-bold text-center text-white mb-12" data-id="rbko3rmw5" data-path="src/components/AboutSection.tsx">
            Our <span className="gradient-text" data-id="5gt5c47a7" data-path="src/components/AboutSection.tsx">Achievements</span>
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" data-id="2o19yxe4b" data-path="src/components/AboutSection.tsx">
            {stats.map((stat, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center" data-id="8ft93ir0x" data-path="src/components/AboutSection.tsx">

                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white" data-id="r5bn62vet" data-path="src/components/AboutSection.tsx">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white font-['Orbitron'] mb-2" data-id="d9c3go8yz" data-path="src/components/AboutSection.tsx">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm" data-id="8mcqdnosa" data-path="src/components/AboutSection.tsx">
                  {stat.label}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Leadership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16" data-id="i8xb81r3p" data-path="src/components/AboutSection.tsx">

          <div className="glass-panel p-8 rounded-3xl" data-id="bf2bumh2f" data-path="src/components/AboutSection.tsx">
            <h3 className="text-3xl font-['Orbitron'] font-bold text-white mb-4" data-id="r9zof146s" data-path="src/components/AboutSection.tsx">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto" data-id="svpjugwwq" data-path="src/components/AboutSection.tsx">
              Join thousands of companies that trust Green Glory for their sustainable 
              business solutions. Experience the future of responsible innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-id="z2ba5gcnc" data-path="src/components/AboutSection.tsx">
              <Button className="glass-button hover-glow" data-id="pztx1gynt" data-path="src/components/AboutSection.tsx">
                Start Your Journey
                <ArrowRight className="w-4 h-4 ml-2" data-id="h0nkdmxln" data-path="src/components/AboutSection.tsx" />
              </Button>
              <Button variant="outline" className="glass-button border-cyan-400 text-cyan-400" data-id="n2ms1ejng" data-path="src/components/AboutSection.tsx">
                Meet Our Team
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default AboutSection;