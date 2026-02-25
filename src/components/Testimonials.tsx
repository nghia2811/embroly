import { Star, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Verified Buyer",
    content: "I cried when I opened the package. The embroidery of my late dog is absolutely perfect. The detail is incredible.",
    rating: 5,
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: 2,
    name: "Jason K.",
    role: "Verified Buyer",
    content: "Got matching hoodies for our anniversary. My wife loves it! The quality of the sweatshirt itself is also really good.",
    rating: 5,
    image: "https://picsum.photos/seed/jason/100/100"
  },
  {
    id: 3,
    name: "Emily R.",
    role: "Verified Buyer",
    content: "Fast shipping and the customer service was so helpful when I wanted to change the thread color last minute.",
    rating: 5,
    image: "https://picsum.photos/seed/emily/100/100"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <div className="flex items-center text-green-600 text-xs font-medium">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {review.role}
                  </div>
                </div>
              </div>
              
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 italic leading-relaxed">
                "{review.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
