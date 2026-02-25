import { ShieldCheck, Truck, Heart, Zap } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description: "We use high-grade threads and soft, durable fabrics that last."
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Orders are processed and shipped within 3-5 business days."
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Each piece is handled with care by our skilled embroidery artists."
  },
  {
    icon: Zap,
    title: "Easy Customization",
    description: "Simple upload process and preview approval before we stitch."
  }
];

export function Features() {
  return (
    <section className="py-12 bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-xl">
                <feature.icon className="w-6 h-6 text-indigo-300" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-indigo-200 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
