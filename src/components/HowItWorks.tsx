import { Upload, Scissors, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: Upload,
    title: "1. Upload Your Photo",
    description: "Choose your favorite photo of your pet, partner, or memory. We accept all formats."
  },
  {
    icon: Scissors,
    title: "2. We Digitize & Embroider",
    description: "Our artists hand-draw the outline, digitize it, and embroider it with premium threads."
  },
  {
    icon: Heart,
    title: "3. Receive Your Gift",
    description: "Your custom apparel arrives at your doorstep, ready to be worn and cherished."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Creating your custom embroidered apparel is simple and seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mb-6 border-4 border-white">
                <step.icon className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
