import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Leaf,
  Shield,
  Printer,
  FileText,
  ArrowRight } from
'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
  { icon: <Facebook className="w-5 h-5" data-id="5g2r1bkfr" data-path="src/components/Footer.tsx" />, href: '#', label: 'Facebook' },
  { icon: <Twitter className="w-5 h-5" data-id="ctqmx04wi" data-path="src/components/Footer.tsx" />, href: '#', label: 'Twitter' },
  { icon: <Linkedin className="w-5 h-5" data-id="f78jbq8g6" data-path="src/components/Footer.tsx" />, href: '#', label: 'LinkedIn' },
  { icon: <Instagram className="w-5 h-5" data-id="7f08w70cs" data-path="src/components/Footer.tsx" />, href: '#', label: 'Instagram' }];


  const services = [
  { icon: <FileText className="w-4 h-4" data-id="85qp8wxy6" data-path="src/components/Footer.tsx" />, name: 'Sustainable Paper', href: '#' },
  { icon: <Printer className="w-4 h-4" data-id="uhrvm5o2w" data-path="src/components/Footer.tsx" />, name: 'Advanced Printing', href: '#' },
  { icon: <Shield className="w-4 h-4" data-id="sp6jo1g70" data-path="src/components/Footer.tsx" />, name: 'Security Services', href: '#' },
  { icon: <Leaf className="w-4 h-4" data-id="483zybq8z" data-path="src/components/Footer.tsx" />, name: 'Government Tenders', href: '#' }];


  const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Sustainability', href: '#sustainability' },
  { name: 'Case Studies', href: '#cases' },
  { name: 'Contact', href: '#contact' },
  { name: 'Careers', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Support', href: '#' }];


  return (
    <footer className="relative bg-gradient-to-t from-[#0a0a1a] via-[#1a1a2e] to-transparent py-16" data-id="jikdtw7vw" data-path="src/components/Footer.tsx">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" data-id="2exp6jakp" data-path="src/components/Footer.tsx">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(0, 128, 128, 0.1) 0%, transparent 50%)
          `
        }} data-id="34w8j70dm" data-path="src/components/Footer.tsx" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="38co36wkl" data-path="src/components/Footer.tsx">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 rounded-3xl mb-16" data-id="u7usbdvdi" data-path="src/components/Footer.tsx">
          <div className="text-center mb-8" data-id="psrnwf1ww" data-path="src/components/Footer.tsx">
            <h3 className="text-3xl font-['Orbitron'] font-bold text-white mb-4" data-id="3dgityza6" data-path="src/components/Footer.tsx">
              Stay Updated with <span className="gradient-text" data-id="8y49z30mt" data-path="src/components/Footer.tsx">Green Glory</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto" data-id="a01lrvi6n" data-path="src/components/Footer.tsx">
              Get the latest updates on sustainable innovations, new services, and environmental initiatives.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" data-id="fcbrrojpm" data-path="src/components/Footer.tsx">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 glass-panel border-cyan-400/30 text-white placeholder-gray-400" data-id="bhza0tqi7" data-path="src/components/Footer.tsx" />
            <Button className="glass-button hover-glow whitespace-nowrap" data-id="gx1dav3bm" data-path="src/components/Footer.tsx">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" data-id="517q3eh83" data-path="src/components/Footer.tsx" />
            </Button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" data-id="6rbxroc68" data-path="src/components/Footer.tsx">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }} data-id="2utupptdq" data-path="src/components/Footer.tsx">
            <div className="flex items-center space-x-3 mb-6" data-id="llcrtvjgb" data-path="src/components/Footer.tsx">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg flex items-center justify-center" data-id="9z8894eei" data-path="src/components/Footer.tsx">
                <span className="text-black font-bold text-xl font-['Orbitron']" data-id="d6gdmjuw4" data-path="src/components/Footer.tsx">GG</span>
              </div>
              <div className="text-xl font-['Orbitron'] font-bold gradient-text" data-id="xmjpokqrv" data-path="src/components/Footer.tsx">
                Green Glory
              </div>
            </div>
            
            <p className="text-gray-300 mb-6" data-id="49dsjfa9n" data-path="src/components/Footer.tsx">
              Pioneering the future of sustainable business solutions with cutting-edge technology 
              and environmental consciousness.
            </p>
            
            <div className="space-y-3" data-id="738wus9of" data-path="src/components/Footer.tsx">
              <div className="flex items-center space-x-3 text-gray-300" data-id="moxsgayuw" data-path="src/components/Footer.tsx">
                <Mail className="w-5 h-5 text-cyan-400" data-id="2lujvrvyb" data-path="src/components/Footer.tsx" />
                <span data-id="u24iniq34" data-path="src/components/Footer.tsx">info@greenglory.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300" data-id="qcewtjyfk" data-path="src/components/Footer.tsx">
                <Phone className="w-5 h-5 text-cyan-400" data-id="53fpe4gfk" data-path="src/components/Footer.tsx" />
                <span data-id="av2staps1" data-path="src/components/Footer.tsx">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300" data-id="t6ass785m" data-path="src/components/Footer.tsx">
                <MapPin className="w-5 h-5 text-cyan-400" data-id="qcxjxblje" data-path="src/components/Footer.tsx" />
                <span data-id="6oob2n0ho" data-path="src/components/Footer.tsx">123 Innovation Drive, Tech City</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} data-id="pxy7m6y2e" data-path="src/components/Footer.tsx">
            <h4 className="text-xl font-['Orbitron'] font-semibold text-white mb-6" data-id="7fzwgsoh7" data-path="src/components/Footer.tsx">
              Our Services
            </h4>
            <div className="space-y-3" data-id="e5uqg62kz" data-path="src/components/Footer.tsx">
              {services.map((service, index) =>
              <motion.a
                key={index}
                href={service.href}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group" data-id="asfqt92oc" data-path="src/components/Footer.tsx">
                  <div className="text-cyan-400 group-hover:text-teal-400 transition-colors" data-id="6bo5lhqca" data-path="src/components/Footer.tsx">
                    {service.icon}
                  </div>
                  <span data-id="2gzwku9fj" data-path="src/components/Footer.tsx">{service.name}</span>
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }} data-id="tseg8wkxj" data-path="src/components/Footer.tsx">
            <h4 className="text-xl font-['Orbitron'] font-semibold text-white mb-6" data-id="hfjapzdea" data-path="src/components/Footer.tsx">
              Quick Links
            </h4>
            <div className="grid grid-cols-1 gap-3" data-id="c7m8suazk" data-path="src/components/Footer.tsx">
              {quickLinks.map((link, index) =>
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ x: 5 }}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300" data-id="txtuadltt" data-path="src/components/Footer.tsx">
                  {link.name}
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Certifications & Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }} data-id="4gwkx81n0" data-path="src/components/Footer.tsx">
            <h4 className="text-xl font-['Orbitron'] font-semibold text-white mb-6" data-id="2v7d14p52" data-path="src/components/Footer.tsx">
              Certifications
            </h4>
            <div className="space-y-4" data-id="6a2fh9ta5" data-path="src/components/Footer.tsx">
              <div className="glass-panel p-3 rounded-lg" data-id="1nq5cd9gb" data-path="src/components/Footer.tsx">
                <div className="text-sm font-semibold text-cyan-400 mb-1" data-id="qlidc9b91" data-path="src/components/Footer.tsx">ISO 14001</div>
                <div className="text-xs text-gray-400" data-id="r6h7rgoh0" data-path="src/components/Footer.tsx">Environmental Management</div>
              </div>
              <div className="glass-panel p-3 rounded-lg" data-id="w7m9kf0ew" data-path="src/components/Footer.tsx">
                <div className="text-sm font-semibold text-green-400 mb-1" data-id="a0wftehad" data-path="src/components/Footer.tsx">FSC Certified</div>
                <div className="text-xs text-gray-400" data-id="wudidchdi" data-path="src/components/Footer.tsx">Forest Stewardship Council</div>
              </div>
              <div className="glass-panel p-3 rounded-lg" data-id="fu208njny" data-path="src/components/Footer.tsx">
                <div className="text-sm font-semibold text-blue-400 mb-1" data-id="r0syugb3m" data-path="src/components/Footer.tsx">SOC 2 Type II</div>
                <div className="text-xs text-gray-400" data-id="5yr289n96" data-path="src/components/Footer.tsx">Security & Compliance</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-gray-700/50 pt-8" data-id="8vkiagt5g" data-path="src/components/Footer.tsx">
          <div className="flex flex-col md:flex-row items-center justify-between" data-id="k1102g5n3" data-path="src/components/Footer.tsx">
            <div className="text-gray-400 text-sm mb-4 md:mb-0" data-id="q1w3y6rwx" data-path="src/components/Footer.tsx">
              © {currentYear} Green Glory. All rights reserved. Innovating for a sustainable future.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4" data-id="myavqtro2" data-path="src/components/Footer.tsx">
              {socialLinks.map((social, index) =>
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 glass-panel rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                aria-label={social.label} data-id="j66cd47xe" data-path="src/components/Footer.tsx">
                  {social.icon}
                </motion.a>
              )}
            </div>
          </div>
          
          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 pt-6 border-t border-gray-700/30 text-center" data-id="k0n7ps2dd" data-path="src/components/Footer.tsx">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400" data-id="tz7wovi8c" data-path="src/components/Footer.tsx">
              <a href="#" className="hover:text-cyan-400 transition-colors" data-id="f6842k3t6" data-path="src/components/Footer.tsx">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors" data-id="oo5yo5by5" data-path="src/components/Footer.tsx">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors" data-id="p0541z2bl" data-path="src/components/Footer.tsx">Cookie Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors" data-id="41svbovx2" data-path="src/components/Footer.tsx">Accessibility</a>
              <a href="#" className="hover:text-cyan-400 transition-colors" data-id="95mrf0u27" data-path="src/components/Footer.tsx">Sitemap</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>);

};

export default Footer;