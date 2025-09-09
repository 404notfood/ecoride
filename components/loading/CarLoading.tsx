'use client';

import { motion } from 'framer-motion';

export default function CarLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center space-y-6">
        <motion.div
          className="relative w-24 h-12"
          animate={{
            x: [-40, 40],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
              ease: "easeInOut",
            },
          }}
        >
          {/* Voiture */}
          <div className="absolute bottom-0 w-full h-6 bg-emerald-500 rounded-t-lg rounded-b-sm">
            <div className="absolute top-0 left-1/4 right-1/4 h-3 -translate-y-full bg-emerald-400 rounded-t-lg"></div>
            
            {/* Roues */}
            <div className="absolute -bottom-1 left-2 w-3 h-3 bg-gray-800 rounded-full"></div>
            <div className="absolute -bottom-1 right-2 w-3 h-3 bg-gray-800 rounded-full"></div>
            
            {/* Phares */}
            <div className="absolute right-0 bottom-1 w-1 h-1 bg-yellow-300 rounded-full"></div>
          </div>
        </motion.div>
        
        {/* Route */}
        <div className="w-48 h-1 bg-gray-400 relative">
          <motion.div
            className="absolute inset-0 flex justify-between"
            animate={{
              x: [-24, 0],
              transition: {
                repeat: Infinity,
                duration: 0.5,
                ease: "linear",
              },
            }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-full w-4 bg-gray-600"></div>
            ))}
          </motion.div>
        </div>
        
        <motion.p
          className="text-white text-lg font-medium"
          animate={{
            opacity: [0.5, 1],
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            },
          }}
        >
          Chargement...
        </motion.p>
      </div>
    </div>
  );
}
