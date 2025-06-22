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
  CheckCircle,
} from 'lucide-react';

import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className='w-6 h-6' />,
      title: 'Email Us',
      details: 'info@greenglory.com',
      subtext: 'support@greenglory.com',
      color: 'from-blue-400 to-cyan-600',
    },
    {
      icon: <Phone className='w-6 h-6' />,
      title: 'Call Us',
      details: '+961 (01) 123-456',
      subtext: '24/7 Emergency Support',
      color: 'from-green-400 to-emerald-600',
    },
    {
      icon: <MapPin className='w-6 h-6' />,
      title: 'Visit Us',
      details: 'Hamra - Sarolla',
      subtext: 'Facing Hypco',
      color: 'from-purple-400 to-indigo-600',
    },
    {
      icon: <Clock className='w-6 h-6' />,
      title: 'Business Hours',
      details: 'Mon - Fri: 9AM - 5PM',
      subtext: 'Weekend: By Appointment',
      color: 'from-orange-400 to-red-600',
    },
  ];

  const services = [
    'Sustainable Paper Solutions',
    'Advanced Printing Technology',
    'Security Services',
    'Government Tenders',
    'Consulting Services',
    'Custom Solutions',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);

    toast({
      title: 'Message Sent Successfully!',
      description:
        "Thank you for contacting Green Glory. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section
      id='contact'
      className='py-20 px-4 bg-gradient-to-b from-transparent via-green-900/10 to-transparent'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className="text-4xl md:text-6xl font-['Orbitron'] font-bold mb-6">
            <span className='text-white'>Get In</span>
            <br />
            <span className='gradient-text'>Touch</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Ready to transform your business with sustainable solutions? Our
            team of experts is here to help you achieve your goals.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='lg:col-span-2'
          >
            <Card className='glass-card'>
              <CardHeader>
                <CardTitle className="text-2xl font-['Orbitron'] text-white flex items-center">
                  <MessageSquare className='w-6 h-6 mr-3 text-cyan-400' />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-sm font-medium text-gray-300 mb-2'>
                        Full Name *
                      </label>
                      <Input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder='John Doe'
                        className='glass-panel border-cyan-400/30 text-white placeholder-gray-400'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-300 mb-2'>
                        Email Address *
                      </label>
                      <Input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder='john@company.com'
                        className='glass-panel border-cyan-400/30 text-white placeholder-gray-400'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                      <label className='block text-sm font-medium text-gray-300 mb-2'>
                        Company
                      </label>
                      <Input
                        type='text'
                        name='company'
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder='Your Company'
                        className='glass-panel border-cyan-400/30 text-white placeholder-gray-400'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-300 mb-2'>
                        Service of Interest
                      </label>
                      <select
                        name='service'
                        value={formData.service}
                        onChange={handleInputChange}
                        className='w-full glass-panel border-cyan-400/30 text-white bg-transparent rounded-md px-3 py-2'
                      >
                        <option value='' className='bg-gray-800'>
                          Select a service
                        </option>
                        {services.map((service, index) => (
                          <option
                            key={index}
                            value={service}
                            className='bg-gray-800'
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>
                      Message *
                    </label>
                    <Textarea
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder='Tell us about your project requirements...'
                      className='glass-panel border-cyan-400/30 text-white placeholder-gray-400 resize-none'
                    />
                  </div>

                  <div className='flex items-center space-x-3 text-sm text-gray-400'>
                    <Shield className='w-5 h-5 text-cyan-400' />
                    <span>
                      Your information is secure and will never be shared with
                      third parties.
                    </span>
                  </div>

                  <Button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full glass-button hover-glow text-lg py-3'
                  >
                    {isSubmitting ? (
                      <div className='flex items-center'>
                        <div className='spinner mr-3' />
                        Sending Message...
                      </div>
                    ) : (
                      <div className='flex items-center justify-center'>
                        <Send className='w-5 h-5 mr-2' />
                        Send Message
                      </div>
                    )}
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
            className='space-y-6'
          >
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className='glass-card hover-glow transition-all duration-300'>
                  <CardContent className='p-6'>
                    <div className='flex items-start space-x-4'>
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold text-white mb-1'>
                          {info.title}
                        </h3>
                        <p className='text-gray-300 font-medium'>
                          {info.details}
                        </p>
                        <p className='text-sm text-gray-400'>{info.subtext}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className='glass-card'>
                <CardHeader>
                  <CardTitle className="text-lg font-['Orbitron'] text-white">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <Button
                    variant='outline'
                    className='w-full glass-button border-cyan-400 text-cyan-400 justify-start'
                  >
                    <Calendar className='w-4 h-4 mr-3' />
                    Schedule a Meeting
                  </Button>
                  <Button
                    variant='outline'
                    className='w-full glass-button border-green-400 text-green-400 justify-start'
                  >
                    <CheckCircle className='w-4 h-4 mr-3' />
                    Request a Quote
                  </Button>
                  <Button
                    variant='outline'
                    className='w-full glass-button border-purple-400 text-purple-400 justify-start'
                  >
                    <Phone className='w-4 h-4 mr-3' />
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
              className='glass-panel p-6 rounded-2xl text-center'
            >
              <h3 className='text-xl font-semibold text-white mb-3'>
                Response Time
              </h3>
              <div className='text-3xl font-bold text-cyan-400 mb-2'>
                &lt; 2 Hours
              </div>
              <p className='text-sm text-gray-400'>
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
          className='mt-16'
        >
          <Card className='glass-card overflow-hidden'>
            <div className='relative h-64 md:h-80'>
              <div className='absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-transparent to-teal-900/30 z-10' />
              <div
                className='w-full h-full bg-gray-800 flex items-center justify-center'
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className='relative z-20 text-center glass-panel p-6 rounded-2xl'>
                  <MapPin className='w-12 h-12 text-cyan-400 mx-auto mb-4' />
                  <h3 className="text-2xl font-['Orbitron'] font-bold text-white mb-2">
                    Green Glory Headquarters
                  </h3>
                  <p className='text-gray-300'>
                    123 Innovation Drive
                    <br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
