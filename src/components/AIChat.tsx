import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  MessageCircle,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2,
  Sparkles,
  X } from
'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  typing?: boolean;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
  {
    id: '1',
    text: "👋 Hello! I'm Green Glory's AI assistant. I can help you with information about our sustainable paper, printing, and security services. What would you like to know?",
    sender: 'ai',
    timestamp: new Date()
  }]
  );
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // AI Responses Database
  const aiResponses: Record<string, string> = {
    'sustainable': "🌱 Our sustainability initiatives include: 100% recycled paper materials, carbon-neutral production processes, renewable energy usage, and biodegradable packaging. We've saved over 12,000 trees this year!",
    'paper': "📄 We offer revolutionary paper solutions including smart paper with embedded sensors, recycled materials with 99% purity, custom sizing options, and waterproof variants. All our paper is sustainably sourced!",
    'printing': "🖨️ Our advanced printing services feature quantum-enhanced precision, eco-friendly bio-inks, 3D printing capabilities, large format options, and AI-optimized color matching. We guarantee 99.9% accuracy!",
    'security': "🛡️ Our security services include AI-powered threat detection, blockchain document verification, biometric access control, 24/7 monitoring, and military-grade encryption. Zero breaches in 18 months!",
    'tenders': "📋 We specialize in government tender management with automated compliance checking, digital submission systems, real-time tracking, and document management. 95% success rate!",
    'environment': "🌍 Environmental impact: 89% clean energy usage, 45.8 tons of materials recycled, 2,847L water conserved monthly, and 1,250kg CO2 offset. We're carbon positive!",
    'pricing': "💰 Our pricing is competitive and transparent. We offer flexible packages based on volume and requirements. Contact us for a personalized quote - we guarantee the best value in the market!",
    'contact': "📞 You can reach us at: Email: info@greenglory.com | Phone: +1 (555) 123-4567 | Address: 123 Innovation Drive, Tech City. We're available 24/7 for support!",
    'technology': "⚡ We use cutting-edge technology including AI optimization, IoT sensors, blockchain verification, quantum encryption, and machine learning algorithms. Innovation is our core!",
    'certifications': "🏆 We hold 15+ international certifications including ISO 14001 (Environmental), ISO 9001 (Quality), FSC (Forest Stewardship), and SOC 2 (Security). Fully compliant with global standards!"
  };

  const quickPrompts = [
  "Tell me about your sustainable practices",
  "What printing services do you offer?",
  "How do your security solutions work?",
  "What are your environmental certifications?",
  "Can I get a quote for my project?"];


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Find the best matching response
    for (const [key, response] of Object.entries(aiResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Default responses for common questions
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "👋 Hello there! I'm excited to help you learn about Green Glory's innovative solutions. What specific area interests you most - our sustainable paper, advanced printing, or security services?";
    }

    if (lowerMessage.includes('help')) {
      return "🤝 I'm here to help! I can provide information about:\n• Sustainable paper solutions\n• Advanced printing technology\n• Security services\n• Environmental initiatives\n• Pricing and quotes\n• Contact information\n\nWhat would you like to explore?";
    }

    if (lowerMessage.includes('thanks') || lowerMessage.includes('thank you')) {
      return "🙏 You're very welcome! Is there anything else about Green Glory's services I can help you with today?";
    }

    // Generic fallback
    return "🤔 That's an interesting question! While I don't have specific information about that, I'd be happy to help you with details about our sustainable paper solutions, printing services, security offerings, or environmental initiatives. You can also contact our team directly for specialized inquiries!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // 1-3 seconds delay
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputValue(prompt);
    setTimeout(() => handleSendMessage(), 100);
  };

  const ChatWindow = () =>
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9, y: 20 }}
    className={`fixed z-50 glass-panel rounded-2xl ${
    isExpanded ?
    'inset-4 md:inset-8' :
    'bottom-4 right-4 w-80 md:w-96 h-96'}`
    } data-id="158igessz" data-path="src/components/AIChat.tsx">

      <Card className="h-full bg-transparent border-none" data-id="k9o9xfjds" data-path="src/components/AIChat.tsx">
        <CardHeader className="pb-3" data-id="klxv4gp0x" data-path="src/components/AIChat.tsx">
          <div className="flex items-center justify-between" data-id="eyf63vqj2" data-path="src/components/AIChat.tsx">
            <div className="flex items-center space-x-3" data-id="euc5yxr8o" data-path="src/components/AIChat.tsx">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center" data-id="gyqk11nm2" data-path="src/components/AIChat.tsx">
                <Bot className="w-6 h-6 text-white" data-id="6yd4zo59f" data-path="src/components/AIChat.tsx" />
              </div>
              <div data-id="b37hc78ll" data-path="src/components/AIChat.tsx">
                <CardTitle className="text-white font-['Orbitron'] text-lg" data-id="xamgkssdt" data-path="src/components/AIChat.tsx">
                  Green Glory AI
                </CardTitle>
                <div className="flex items-center space-x-2 text-sm text-cyan-400" data-id="g3w1lru8y" data-path="src/components/AIChat.tsx">
                  <Sparkles className="w-4 h-4" data-id="4b8itbrs1" data-path="src/components/AIChat.tsx" />
                  <span data-id="k5m1tqnxu" data-path="src/components/AIChat.tsx">Online & Ready</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2" data-id="175k778kg" data-path="src/components/AIChat.tsx">
              <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-white" data-id="hj2i8yipt" data-path="src/components/AIChat.tsx">

                {isExpanded ? <Minimize2 className="w-4 h-4" data-id="bzqbhzlrl" data-path="src/components/AIChat.tsx" /> : <Maximize2 className="w-4 h-4" data-id="d0k6llsh2" data-path="src/components/AIChat.tsx" />}
              </Button>
              <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white" data-id="speuitplg" data-path="src/components/AIChat.tsx">

                <X className="w-4 h-4" data-id="fl9eerhqv" data-path="src/components/AIChat.tsx" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="h-full pb-4 flex flex-col" data-id="dc69hbag8" data-path="src/components/AIChat.tsx">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto futuristic-scroll space-y-4 mb-4" data-id="5gkfjnvaf" data-path="src/components/AIChat.tsx">
            {messages.map((message) =>
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`} data-id="idnnyj7sk" data-path="src/components/AIChat.tsx">

                <div className={`flex items-start space-x-2 max-w-[80%] ${
            message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`
            } data-id="u1yi7v2u0" data-path="src/components/AIChat.tsx">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              message.sender === 'user' ?
              'bg-gradient-to-r from-blue-400 to-purple-600' :
              'bg-gradient-to-r from-cyan-400 to-teal-400'}`
              } data-id="p5xe76xm2" data-path="src/components/AIChat.tsx">
                    {message.sender === 'user' ?
                <User className="w-4 h-4 text-white" data-id="m1blth2vj" data-path="src/components/AIChat.tsx" /> :
                <Bot className="w-4 h-4 text-white" data-id="y24ofvtrq" data-path="src/components/AIChat.tsx" />
                }
                  </div>
                  <div className={`glass-panel p-3 rounded-lg ${
              message.sender === 'user' ?
              'bg-blue-500/20 border-blue-400/30' :
              'bg-cyan-500/20 border-cyan-400/30'}`
              } data-id="2ecqxbycs" data-path="src/components/AIChat.tsx">
                    <p className="text-white text-sm whitespace-pre-line" data-id="g78gudu1a" data-path="src/components/AIChat.tsx">{message.text}</p>
                    <span className="text-xs text-gray-400 mt-1 block" data-id="gyvkk1u1z" data-path="src/components/AIChat.tsx">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </motion.div>
          )}
            
            {/* Typing Indicator */}
            {isTyping &&
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start" data-id="4nk8rhwyn" data-path="src/components/AIChat.tsx">

                <div className="flex items-start space-x-2" data-id="fjfz74o3x" data-path="src/components/AIChat.tsx">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-400 to-teal-400" data-id="etrf1m8v7" data-path="src/components/AIChat.tsx">
                    <Bot className="w-4 h-4 text-white" data-id="1dqgrtmk5" data-path="src/components/AIChat.tsx" />
                  </div>
                  <div className="glass-panel p-3 rounded-lg bg-cyan-500/20 border-cyan-400/30" data-id="n1r9583me" data-path="src/components/AIChat.tsx">
                    <div className="flex space-x-1" data-id="yqissog1a" data-path="src/components/AIChat.tsx">
                      <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 bg-cyan-400 rounded-full" data-id="glrz7qvl9" data-path="src/components/AIChat.tsx" />

                      <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-cyan-400 rounded-full" data-id="ca3he516t" data-path="src/components/AIChat.tsx" />

                      <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-cyan-400 rounded-full" data-id="yra2ecfnu" data-path="src/components/AIChat.tsx" />

                    </div>
                  </div>
                </div>
              </motion.div>
          }
            <div ref={messagesEndRef} data-id="923mugjc2" data-path="src/components/AIChat.tsx" />
          </div>

          {/* Quick Prompts */}
          {messages.length === 1 &&
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4" data-id="k73ro9ia7" data-path="src/components/AIChat.tsx">

              <p className="text-sm text-gray-400 mb-2" data-id="n0gcgjk3r" data-path="src/components/AIChat.tsx">Quick questions:</p>
              <div className="flex flex-wrap gap-2" data-id="fka00xr4u" data-path="src/components/AIChat.tsx">
                {quickPrompts.slice(0, 3).map((prompt, index) =>
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleQuickPrompt(prompt)}
              className="text-xs glass-button border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10" data-id="i88b3a0cx" data-path="src/components/AIChat.tsx">

                    {prompt}
                  </Button>
            )}
              </div>
            </motion.div>
        }

          {/* Input Area */}
          <div className="flex space-x-2" data-id="8mr97g492" data-path="src/components/AIChat.tsx">
            <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about our services..."
            className="flex-1 glass-panel border-cyan-400/30 text-white placeholder-gray-400" data-id="2xfy9dlmh" data-path="src/components/AIChat.tsx" />

            <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="glass-button hover-glow" data-id="zcegvchib" data-path="src/components/AIChat.tsx">

              <Send className="w-4 h-4" data-id="zmte56nrk" data-path="src/components/AIChat.tsx" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>;


  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-6 right-6 z-40" data-id="pak3qbpes" data-path="src/components/AIChat.tsx">

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full glass-button hover-glow shadow-lg" data-id="jxueg2h7f" data-path="src/components/AIChat.tsx">

          <MessageCircle className="w-6 h-6" data-id="h0hky3eei" data-path="src/components/AIChat.tsx" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence data-id="mbtlur9zi" data-path="src/components/AIChat.tsx">
        {isOpen && <ChatWindow data-id="ln6tnvpne" data-path="src/components/AIChat.tsx" />}
      </AnimatePresence>
    </>);

};

export default AIChat;