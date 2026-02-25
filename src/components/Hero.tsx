import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative bg-[#f9f9f9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
        
        {/* Text Content */}
        <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full"
          >
            Custom Embroidery Service
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Wear Your Story <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Thread by Thread
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Turn your favorite photos into high-quality embroidered apparel. 
            Perfect for gifts, couples, and keeping memories close to your heart.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="#shop" className="px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Shop Now
            </a>
            <a href="#how-it-works" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 font-medium rounded-full hover:bg-gray-50 transition-all">
              How It Works
            </a>
          </motion.div>
        </div>

        {/* Image/Visual */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/embroly/800/800" 
              alt="Custom Embroidered Hoodie" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                  4.9
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Excellent Quality</p>
                  <p className="text-xs text-gray-500">Based on 1,000+ reviews</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Decorative Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-full blur-3xl -z-10 opacity-60" />
        </div>
      </div>
    </section>
  );
}
