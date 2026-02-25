import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronRight, Truck, ShieldCheck, RefreshCw, Minus, Plus, Heart, Share2 } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id) || products[0]; // Fallback to first product if not found

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedStyle, setSelectedStyle] = useState(product.styles[0]);
  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState('');
  const [embroideryPos, setEmbroideryPos] = useState('Left chest');
  const [threadColor, setThreadColor] = useState(product.threadColors[0]);

  // Reset state when product changes
  useEffect(() => {
    setSelectedImage(0);
    setSelectedColor(product.colors[0]);
    setSelectedSize(product.sizes[0]);
    setSelectedStyle(product.styles[0]);
    setQuantity(1);
    setCustomText('');
    setEmbroideryPos('Left chest');
    setThreadColor(product.threadColors[0]);
  }, [product]);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/shop" className="hover:text-gray-900">Embroidered Apparel</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900 truncate">{product.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          
          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${selectedImage === idx ? 'border-indigo-600' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 aspect-square rounded-2xl overflow-hidden bg-gray-100 relative">
              <motion.img 
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[selectedImage]} 
                alt={product.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">
              {product.title}
            </h1>

            {/* Reviews */}
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">{product.reviews} reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-8">
              <p className="text-3xl font-bold text-gray-900">${product.price}</p>
              <p className="text-lg text-gray-500 line-through">${product.originalPrice}</p>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            </div>

            {/* Options Form */}
            <div className="space-y-8 border-t border-gray-200 pt-8">
              
              {/* Style */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Style</h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.styles.map((style) => (
                    <button
                      key={style}
                      onClick={() => setSelectedStyle(style)}
                      className={`flex items-center justify-center px-4 py-3 border rounded-lg text-sm font-medium ${
                        selectedStyle === style 
                          ? 'border-indigo-600 ring-1 ring-indigo-600 text-indigo-600 bg-indigo-50' 
                          : 'border-gray-200 text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Color: <span className="text-gray-500 font-normal">{selectedColor.name}</span></h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 ${selectedColor.name === color.name ? 'border-indigo-600 ring-2 ring-offset-2 ring-indigo-600' : 'border-transparent hover:scale-110 transition-transform'}`}
                    >
                      <span className={`block w-full h-full rounded-full ${color.class} border border-black/10`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <div className="flex justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex items-center justify-center px-2 py-2 border rounded-md text-sm font-medium ${
                        selectedSize === size 
                          ? 'border-indigo-600 bg-indigo-600 text-white' 
                          : 'border-gray-200 text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Customization Fields */}
              <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div>
                  <label htmlFor="custom-text" className="block text-sm font-medium text-gray-700 mb-1">
                    Your initials and date on chest <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="custom-text"
                    placeholder="E.g. N+E, MM.DD.YY or MM.DD.YYYY"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                  />
                  <p className="mt-1 text-xs text-gray-500">We will convert to Roman numerals automatically.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Embroidery position <span className="text-red-500">*</span></label>
                  <div className="flex gap-4">
                    {['Left chest', 'Middle chest', 'Right chest'].map((pos) => (
                      <label key={pos} className="flex items-center">
                        <input
                          type="radio"
                          name="position"
                          checked={embroideryPos === pos}
                          onChange={() => setEmbroideryPos(pos)}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">{pos}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Thread color <span className="text-red-500">*</span></label>
                  <select
                    value={threadColor}
                    onChange={(e) => setThreadColor(e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                  >
                    {product.threadColors.map((color) => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                  <button className="mt-2 text-xs text-indigo-600 underline">See thread color ideas</button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center border border-gray-300 rounded-full w-max">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-indigo-600"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-indigo-600"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Add to cart - ${(product.price * quantity).toFixed(2)}
                </button>
                <button className="p-4 border border-gray-300 rounded-full hover:bg-gray-50 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart className="w-6 h-6" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Truck className="w-6 h-6 text-indigo-600" />
                  <div>
                    <p className="font-bold text-sm text-gray-900">Free Shipping</p>
                    <p className="text-xs text-gray-500">On orders over $100</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-indigo-600" />
                  <div>
                    <p className="font-bold text-sm text-gray-900">Secure Payment</p>
                    <p className="text-xs text-gray-500">100% Secure Checkout</p>
                  </div>
                </div>
              </div>

              {/* Description Tabs */}
              <div className="border-t border-gray-200 pt-8 mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Description</h3>
                <div className="prose prose-sm text-gray-600">
                  <p>{product.description}</p>
                  <ul className="mt-4 space-y-2 list-disc pl-5">
                    <li>Premium quality cotton blend</li>
                    <li>Professional embroidery that lasts</li>
                    <li>Unisex fit for comfort</li>
                    <li>Machine washable</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
