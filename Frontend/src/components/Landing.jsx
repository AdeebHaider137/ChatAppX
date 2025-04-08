import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="fixed w-full z-10 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Chat<span className="text-green-500">App</span>
          </motion.div>
          
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link to="/login">
              <motion.button 
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
            </Link>
            <Link to="/signup">
              <motion.button 
                className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-6 pt-32 pb-20">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="show"
        >
          <motion.div className="space-y-6">
            <motion.div 
              className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Elegant. Simple. Secure.
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Connect in real-time with elegance and simplicity
            </h1>
            
            <p className="text-lg text-gray-400 max-w-lg">
              Experience seamless communication with ChatApp's minimalist design,
              real-time messaging, and secure authentication.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/signup">
                <motion.button 
                  className="px-6 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>
              <Link to="/login">
                <motion.button 
                  className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign In
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gray-800/50 h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="h-full flex flex-col">
              <div className="py-4 px-6 border-b border-gray-700 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center font-medium">
                  C
                </div>
                <div>
                  <h3 className="font-medium">ChatApp</h3>
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Online
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                <div className="max-w-[70%] bg-gray-700/50 p-4 rounded-lg rounded-tl-none">
                  Welcome to ChatApp! How can I help you today?
                </div>
                
                <div className="max-w-[70%] bg-green-500/10 p-4 rounded-lg rounded-tr-none ml-auto">
                  I'm interested in a real-time chat application with clean design
                </div>
                
                <div className="max-w-[70%] bg-gray-700/50 p-4 rounded-lg rounded-tl-none">
                  Perfect! ChatApp offers real-time messaging with a beautiful, minimalist interface.
                </div>
                
                <div className="max-w-[70%] bg-green-500/10 p-4 rounded-lg rounded-tr-none ml-auto">
                  That sounds great! What about security?
                </div>
                
                <div className="max-w-[70%] bg-gray-700/50 p-4 rounded-lg rounded-tl-none">
                  We use JWT authentication to keep your conversations secure and private.
                </div>
                
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-32 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Join ChatApp today and experience real-time communication at its finest
          </p>
          <div className="pt-4">
            <Link to="/signup">
              <motion.button 
                className="px-6 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Account
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </main>
      
      <footer className="py-6 border-t border-gray-700">
        <div className="container mx-auto px-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ChatApp. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landing; 