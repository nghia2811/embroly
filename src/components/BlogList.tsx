import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    slug: 'saint-patricks-day-quotes',
    title: "81 Saint Patrick's Day Quotes: Luck, Fun & Blessings",
    excerpt: "Find the best Saint Patrick's Day quotes for every occasion. Funny sayings, Irish blessings, and captions to make your celebration unforgettable.",
    author: "Embroly Team",
    date: "March 10, 2024",
    image: "https://picsum.photos/seed/stpatricks/800/600",
    category: "News"
  },
  {
    slug: 'embroidery-care-guide',
    title: "The Ultimate Guide to Caring for Your Embroidered Apparel",
    excerpt: "Learn how to wash, dry, and store your custom embroidered hoodies and sweatshirts to keep them looking fresh for years to come.",
    author: "Embroly Team",
    date: "February 28, 2024",
    image: "https://picsum.photos/seed/careguide/800/600",
    category: "Tips & Tricks"
  },
  {
    slug: 'gift-ideas-for-her',
    title: "10 Personalized Gift Ideas She Will Actually Love",
    excerpt: "Struggling to find the perfect gift? Check out our curated list of custom embroidered gifts that add a personal touch to any occasion.",
    author: "Embroly Team",
    date: "February 14, 2024",
    image: "https://picsum.photos/seed/giftideas/800/600",
    category: "Gift Guides"
  }
];

export function BlogList() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Embroly Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            News, tips, and inspiration for your custom apparel journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
              <Link to={`/blogs/news/${post.slug}`} className="block relative aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 uppercase tracking-wide">
                  {post.category}
                </div>
              </Link>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                </div>
                
                <Link to={`/blogs/news/${post.slug}`} className="block mb-3">
                  <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blogs/news/${post.slug}`} 
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 mt-auto"
                >
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
