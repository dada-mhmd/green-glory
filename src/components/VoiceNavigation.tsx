import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface VoiceNavigationProps {
  isActive: boolean;
}

const VoiceNavigation: React.FC<VoiceNavigationProps> = ({ isActive }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check if browser supports speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      if (isActive) {
        toast({
          title: "Voice Navigation Unavailable",
          description: "Your browser doesn't support voice recognition.",
          variant: "destructive"
        });
      }
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      console.log('Voice recognition started');
    };

    recognition.onend = () => {
      setIsListening(false);
      console.log('Voice recognition ended');
    };

    recognition.onresult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      setTranscript(finalTranscript || interimTranscript);

      // Process voice commands
      if (finalTranscript) {
        handleVoiceCommand(finalTranscript.toLowerCase());
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
      toast({
        title: "Voice Recognition Error",
        description: "There was an error with voice recognition. Please try again.",
        variant: "destructive"
      });
    };

    setRecognition(recognition);

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [isActive, toast]);

  useEffect(() => {
    if (!recognition) return;

    if (isActive) {
      try {
        recognition.start();
        toast({
          title: "Voice Navigation Active",
          description: "Say commands like 'go to services', 'show about', or 'contact us'"
        });
      } catch (error) {
        console.error('Error starting recognition:', error);
      }
    } else {
      recognition.stop();
      setIsListening(false);
      setTranscript('');
    }
  }, [isActive, recognition, toast]);

  const handleVoiceCommand = (command: string) => {
    console.log('Processing command:', command);

    const commands = {
      'home': '#home',
      'go home': '#home',
      'about': '#about',
      'show about': '#about',
      'about us': '#about',
      'services': '#services',
      'go to services': '#services',
      'show services': '#services',
      'sustainability': '#sustainability',
      'environmental': '#sustainability',
      'green': '#sustainability',
      'contact': '#contact',
      'contact us': '#contact',
      'get in touch': '#contact'
    };

    for (const [key, value] of Object.entries(commands)) {
      if (command.includes(key)) {
        const element = document.querySelector(value);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          toast({
            title: "Navigation Complete",
            description: `Navigated to ${key.charAt(0).toUpperCase() + key.slice(1)}`
          });
        }
        break;
      }
    }

    // Clear transcript after processing
    setTimeout(() => setTranscript(''), 2000);
  };

  if (!isActive) return null;

  return (
    <AnimatePresence data-id="1xr3pntps" data-path="src/components/VoiceNavigation.tsx">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed top-20 right-4 z-40 glass-panel p-4 max-w-sm" data-id="nqk8gu8c6" data-path="src/components/VoiceNavigation.tsx">

        <div className="flex items-center space-x-3 mb-3" data-id="s62szpgl7" data-path="src/components/VoiceNavigation.tsx">
          <motion.div
            animate={{ scale: isListening ? [1, 1.2, 1] : 1 }}
            transition={{ repeat: isListening ? Infinity : 0, duration: 1 }}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isListening ? 'bg-green-500' : 'bg-gray-500'}`
            } data-id="mukmj3l7l" data-path="src/components/VoiceNavigation.tsx">

            {isListening ? <Volume2 className="w-4 h-4" data-id="2ubz2wwp4" data-path="src/components/VoiceNavigation.tsx" /> : <VolumeX className="w-4 h-4" data-id="96rh2ucm9" data-path="src/components/VoiceNavigation.tsx" />}
          </motion.div>
          <div data-id="lorw1j6ew" data-path="src/components/VoiceNavigation.tsx">
            <h4 className="text-sm font-semibold text-cyan-400" data-id="w41b9dvse" data-path="src/components/VoiceNavigation.tsx">Voice Navigation</h4>
            <p className="text-xs text-gray-400" data-id="jazqvtpyl" data-path="src/components/VoiceNavigation.tsx">
              {isListening ? 'Listening...' : 'Ready to listen'}
            </p>
          </div>
        </div>

        {transcript &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-800/50 rounded-lg p-2 mb-3" data-id="jpgaswyf5" data-path="src/components/VoiceNavigation.tsx">

            <p className="text-sm text-gray-300" data-id="drrlr6dpe" data-path="src/components/VoiceNavigation.tsx">&quot;{transcript}&quot;</p>
          </motion.div>
        }

        <div className="text-xs text-gray-400 space-y-1" data-id="zmv0eor7c" data-path="src/components/VoiceNavigation.tsx">
          <p data-id="izhfaf7ca" data-path="src/components/VoiceNavigation.tsx"><strong data-id="aqc0yhcrw" data-path="src/components/VoiceNavigation.tsx">Try saying:</strong></p>
          <p data-id="bwbxtuvoh" data-path="src/components/VoiceNavigation.tsx">• &quot;Go to services&quot;</p>
          <p data-id="eg0l0rk6p" data-path="src/components/VoiceNavigation.tsx">• &quot;Show about&quot;</p>
          <p data-id="qmwdrgb5s" data-path="src/components/VoiceNavigation.tsx">• &quot;Contact us&quot;</p>
          <p data-id="w4u2ff4tm" data-path="src/components/VoiceNavigation.tsx">• &quot;Sustainability&quot;</p>
        </div>
      </motion.div>
    </AnimatePresence>);

};

export default VoiceNavigation;