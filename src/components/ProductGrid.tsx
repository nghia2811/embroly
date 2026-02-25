import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'infinity-sweatshirt',
    name: "Custom Embroidered Infinity Sweatshirt",
    price: "$35.99",
    image: "https://picsum.photos/seed/infinity1/600/600",
    rating: 5,
    reviews: 23
  },
  {
    id: 1,
    name: "Custom Pet Portrait Hoodie",
    price: "$59.99",
    image: "https://picsum.photos/seed/dog/600/600",
    rating: 5,
    reviews: 128
  },
  {
    id: 2,
    name: "Roman Numeral Anniversary Sweatshirt",
    price: "$49.99",
    image: "https://picsum.photos/seed/couple/600/600",
    rating: 5,
    reviews: 84
  },
  {
    id: 3,
    name: "Mama Bear Embroidered Crewneck",
    price: "$49.99",
    image: "https://picsum.photos/seed/mom/600/600",
    rating: 4.9,
    reviews: 215
  },
  {
    id: 4,
    name: "Custom Line Art Portrait Tee",
    price: "$34.99",
    image: "https://picsum.photos/seed/art/600/600",
    rating: 4.8,
    reviews: 56
  },
  {
    id: 5,
    name: "St. Patrick's Day Lucky Charm",
    price: "$44.99",
    image: "https://picsum.photos/seed/clover/600/600",
    rating: 5,
    reviews: 42
  },
  {
    id: 6,
    name: "Future Mrs. Bridal Hoodie",
    price: "$54.99",
    image: "https://picsum.photos/seed/bride/600/600",
    rating: 5,
    reviews: 93
  },
  {
    id: 7,
    name: "Dad & Mini Me Matching Set",
    price: "$89.99",
    image: "https://picsum.photos/seed/dad/600/600",
    rating: 4.9,
    reviews: 112
  }
];

export function ProductGrid() {
  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Sellers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our most loved custom pieces, crafted with care and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/products/${product.id}`}>
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  <button className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all shadow-lg">
                    Quick Add
                  </button>
                </div>
                
                <h3 className="font-medium text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-bold">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-500">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 border border-gray-300 text-gray-900 font-medium rounded-full hover:bg-gray-50 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
