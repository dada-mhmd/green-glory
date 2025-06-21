import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Shield,
  CheckCircle } from
'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" data-id="wsh3dh6se" data-path="src/components/ContactSection.tsx" />,
    title: 'Email Us',
    details: 'info@greenglory.com',
    subtext: 'support@greenglory.com',
    color: 'from-blue-400 to-cyan-600'
  },
  {
    icon: <Phone className="w-6 h-6" data-id="3h36ifl45" data-path="src/components/ContactSection.tsx" />,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    subtext: '24/7 Emergency Support',
    color: 'from-green-400 to-emerald-600'
  },
  {
    icon: <MapPin className="w-6 h-6" data-id="sguni1osx" data-path="src/components/ContactSection.tsx" />,
    title: 'Visit Us',
    details: '123 Innovation Drive',
    subtext: 'Tech City, TC 12345',
    color: 'from-purple-400 to-indigo-600'
  },
  {
    icon: <Clock className="w-6 h-6" data-id="jcv93px8c" data-path="src/components/ContactSection.tsx" />,
    title: 'Business Hours',
    details: 'Mon - Fri: 9AM - 6PM',
    subtext: 'Weekend: By Appointment',
    color: 'from-orange-400 to-red-600'
  }];


  const services = [
  'Sustainable Paper Solutions',
  'Advanced Printing Technology',
  'Security Services',
  'Government Tenders',
  'Consulting Services',
  'Custom Solutions'];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting Green Glory. We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-transparent via-green-900/10 to-transparent" data-id="yzdmtd96d" data-path="src/components/ContactSection.tsx">
      <div className="max-w-7xl mx-auto" data-id="nzis7f4df" data-path="src/components/ContactSection.tsx">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16" data-id="95xk3410o" data-path="src/components/ContactSection.tsx">

          <h2 className="text-4xl md:text-6xl font-['Orbitron'] font-bold mb-6" data-id="d3pjur1fu" data-path="src/components/ContactSection.tsx">
            <span className="text-white" data-id="uc01ro11n" data-path="src/components/ContactSection.tsx">Get In</span>
            <br data-id="npfj40jnh" data-path="src/components/ContactSection.tsx" />
            <span className="gradient-text" data-id="4i5fw8aff" data-path="src/components/ContactSection.tsx">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="drrj209k8" data-path="src/components/ContactSection.tsx">
            Ready to transform your business with sustainable solutions? 
            Our team of experts is here to help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-id="48j7u5vb5" data-path="src/components/ContactSection.tsx">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2" data-id="k4xgmz9dr" data-path="src/components/ContactSection.tsx">

            <Card className="glass-card" data-id="cunnu5bpy" data-path="src/components/ContactSection.tsx">
              <CardHeader data-id="o3c8wxw7e" data-path="src/components/ContactSection.tsx">
                <CardTitle className="text-2xl font-['Orbitron'] text-white flex items-center" data-id="3e2m7v74j" data-path="src/components/ContactSection.tsx">
                  <MessageSquare className="w-6 h-6 mr-3 text-cyan-400" data-id="b7bcj985l" data-path="src/components/ContactSection.tsx" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent data-id="nu9fy0q9t" data-path="src/components/ContactSection.tsx">
                <form onSubmit={handleSubmit} className="space-y-6" data-id="afjlvmsx2" data-path="src/components/ContactSection.tsx">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="rhx7tmxyn" data-path="src/components/ContactSection.tsx">
                    <div data-id="jqdddho7a" data-path="src/components/ContactSection.tsx">
                      <label className="block text-sm font-medium text-gray-300 mb-2" data-id="o5y27b9yi" data-path="src/components/ContactSection.tsx">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="glass-panel border-cyan-400/30 text-white placeholder-gray-400" data-id="8dao8h7vz" data-path="src/components/ContactSection.tsx" />

                    </div>
                    <div data-id="5k1w5zcq8" data-path="src/components/ContactSection.tsx">
                      <label className="block text-sm font-medium text-gray-300 mb-2" data-id="ik98j0snl" data-path="src/components/ContactSection.tsx">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                        className="glass-panel border-cyan-400/30 text-white placeholder-gray-400" data-id="0xhnvuld2" data-path="src/components/ContactSection.tsx" />

                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="oei9sflwu" data-path="src/components/ContactSection.tsx">
                    <div data-id="h7fnlxd4o" data-path="src/components/ContactSection.tsx">
                      <label className="block text-sm font-medium text-gray-300 mb-2" data-id="fa1gr8ion" data-path="src/components/ContactSection.tsx">
                        Company
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="glass-panel border-cyan-400/30 text-white placeholder-gray-400" data-id="qb7vig3f8" data-path="src/components/ContactSection.tsx" />

                    </div>
                    <div data-id="z2lf7h4tb" data-path="src/components/ContactSection.tsx">
                      <label className="block text-sm font-medium text-gray-300 mb-2" data-id="porf53mv8" data-path="src/components/ContactSection.tsx">
                        Service of Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full glass-panel border-cyan-400/30 text-white bg-transparent rounded-md px-3 py-2" data-id="pkjxe7gyt" data-path="src/components/ContactSection.tsx">

                        <option value="" className="bg-gray-800" data-id="ekq9agoba" data-path="src/components/ContactSection.tsx">Select a service</option>
                        {services.map((service, index) =>
                        <option key={index} value={service} className="bg-gray-800" data-id="d3yckwmhh" data-path="src/components/ContactSection.tsx">
                            {service}
                          </option>
                        )}
                      </select>
                    </div>
                  </div>

                  <div data-id="49hkzjbk5" data-path="src/components/ContactSection.tsx">
                    <label className="block text-sm font-medium text-gray-300 mb-2" data-id="54h4xmz42" data-path="src/components/ContactSection.tsx">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project requirements..."
                      className="glass-panel border-cyan-400/30 text-white placeholder-gray-400 resize-none" data-id="a4s43lfd1" data-path="src/components/ContactSection.tsx" />

                  </div>

                  <div className="flex items-center space-x-3 text-sm text-gray-400" data-id="fe3kxz58k" data-path="src/components/ContactSection.tsx">
                    <Shield className="w-5 h-5 text-cyan-400" data-id="mi12cies3" data-path="src/components/ContactSection.tsx" />
                    <span data-id="dksdet6zo" data-path="src/components/ContactSection.tsx">Your information is secure and will never be shared with third parties.</span>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full glass-button hover-glow text-lg py-3" data-id="6ed3iiu86" data-path="src/components/ContactSection.tsx">

                    {isSubmitting ?
                    <div className="flex items-center" data-id="ftj0jkfhf" data-path="src/components/ContactSection.tsx">
                        <div className="spinner mr-3" data-id="uji8omdd7" data-path="src/components/ContactSection.tsx" />
                        Sending Message...
                      </div> :

                    <div className="flex items-center justify-center" data-id="2qxbjqloc" data-path="src/components/ContactSection.tsx">
                        <Send className="w-5 h-5 mr-2" data-id="5b485csg4" data-path="src/components/ContactSection.tsx" />
                        Send Message
                      </div>
                    }
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6" data-id="dfgtdo85i" data-path="src/components/ContactSection.tsx">

            {/* Contact Info Cards */}
            {contactInfo.map((info, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }} data-id="p144cd14r" data-path="src/components/ContactSection.tsx">

                <Card className="glass-card hover-glow transition-all duration-300" data-id="uym33nxb1" data-path="src/components/ContactSection.tsx">
                  <CardContent className="p-6" data-id="9urm09aky" data-path="src/components/ContactSection.tsx">
                    <div className="flex items-start space-x-4" data-id="blig1nt6a" data-path="src/components/ContactSection.tsx">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`} data-id="bf4i09g50" data-path="src/components/ContactSection.tsx">
                        {info.icon}
                      </div>
                      <div data-id="00o1s1sv3" data-path="src/components/ContactSection.tsx">
                        <h3 className="text-lg font-semibold text-white mb-1" data-id="zbifqkz3s" data-path="src/components/ContactSection.tsx">
                          {info.title}
                        </h3>
                        <p className="text-gray-300 font-medium" data-id="aa1g8jugj" data-path="src/components/ContactSection.tsx">
                          {info.details}
                        </p>
                        <p className="text-sm text-gray-400" data-id="jd61bdxim" data-path="src/components/ContactSection.tsx">
                          {info.subtext}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }} data-id="8g1nfh21n" data-path="src/components/ContactSection.tsx">

              <Card className="glass-card" data-id="1gyqyxzfs" data-path="src/components/ContactSection.tsx">
                <CardHeader data-id="r4kvoqv7u" data-path="src/components/ContactSection.tsx">
                  <CardTitle className="text-lg font-['Orbitron'] text-white" data-id="tpiy6dp90" data-path="src/components/ContactSection.tsx">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4" data-id="i90dhgqae" data-path="src/components/ContactSection.tsx">
                  <Button
                    variant="outline"
                    className="w-full glass-button border-cyan-400 text-cyan-400 justify-start" data-id="ljzwnn25u" data-path="src/components/ContactSection.tsx">

                    <Calendar className="w-4 h-4 mr-3" data-id="n3e980gqs" data-path="src/components/ContactSection.tsx" />
                    Schedule a Meeting
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full glass-button border-green-400 text-green-400 justify-start" data-id="yy17uwixh" data-path="src/components/ContactSection.tsx">

                    <CheckCircle className="w-4 h-4 mr-3" data-id="5v0vcnkwi" data-path="src/components/ContactSection.tsx" />
                    Request a Quote
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full glass-button border-purple-400 text-purple-400 justify-start" data-id="ndb2nmezg" data-path="src/components/ContactSection.tsx">

                    <Phone className="w-4 h-4 mr-3" data-id="xyecihy9q" data-path="src/components/ContactSection.tsx" />
                    Emergency Support
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass-panel p-6 rounded-2xl text-center" data-id="zgm9eimij" data-path="src/components/ContactSection.tsx">

              <h3 className="text-xl font-semibold text-white mb-3" data-id="qb0aeslne" data-path="src/components/ContactSection.tsx">
                Response Time
              </h3>
              <div className="text-3xl font-bold text-cyan-400 mb-2" data-id="qgvcfmtcc" data-path="src/components/ContactSection.tsx">
                &lt; 2 Hours
              </div>
              <p className="text-sm text-gray-400" data-id="1227foslu" data-path="src/components/ContactSection.tsx">
                Average response time during business hours
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16" data-id="y3lra57zo" data-path="src/components/ContactSection.tsx">

          <Card className="glass-card overflow-hidden" data-id="an0wml6tr" data-path="src/components/ContactSection.tsx">
            <div className="relative h-64 md:h-80" data-id="ewgr4njnm" data-path="src/components/ContactSection.tsx">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-transparent to-teal-900/30 z-10" data-id="vlbhsya19" data-path="src/components/ContactSection.tsx" />
              <div
                className="w-full h-full bg-gray-800 flex items-center justify-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} data-id="km4l0dbs5" data-path="src/components/ContactSection.tsx">

                <div className="relative z-20 text-center glass-panel p-6 rounded-2xl" data-id="q0lft1wm2" data-path="src/components/ContactSection.tsx">
                  <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" data-id="xknz3fn0d" data-path="src/components/ContactSection.tsx" />
                  <h3 className="text-2xl font-['Orbitron'] font-bold text-white mb-2" data-id="wqai3auzx" data-path="src/components/ContactSection.tsx">
                    Green Glory Headquarters
                  </h3>
                  <p className="text-gray-300" data-id="d6x1h0fzu" data-path="src/components/ContactSection.tsx">
                    123 Innovation Drive<br data-id="nquu6w1i6" data-path="src/components/ContactSection.tsx" />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>);

};

export default ContactSection;