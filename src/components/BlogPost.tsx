import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';

const blogPosts = [
  {
    slug: 'saint-patricks-day-quotes',
    title: "81 Saint Patrick's Day Quotes: Luck, Fun & Blessings",
    author: "Embroly Team",
    date: "March 10, 2024",
    image: "https://picsum.photos/seed/stpatricks/1200/600",
    content: `
      <p class="lead text-xl text-gray-600 mb-8">
        Find the best Saint Patrick's Day quotes for every occasion. Funny sayings, Irish blessings, and captions to make your celebration unforgettable.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Saint Patrick's Day Quotes</h2>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Luck, Life, and a Little Irish Wisdom</h3>
      
      <blockquote class="border-l-4 border-green-500 pl-4 italic my-4 text-gray-700">
        "Luck is believing you're lucky." — Tennessee Williams
      </blockquote>
      <p class="mb-4">Mindset shapes luck more than most people realize.</p>

      <blockquote class="border-l-4 border-green-500 pl-4 italic my-4 text-gray-700">
        "Not all treasure is silver and gold. Sometimes, it's a cold beer and good company."
      </blockquote>
      <p class="mb-4">This one gets better every time you read it with friends.</p>

      <blockquote class="border-l-4 border-green-500 pl-4 italic my-4 text-gray-700">
        "We are all a great deal luckier than we realize, we usually get what we want or near enough." — Roald Dahl
      </blockquote>
      <p class="mb-4">A gentle reminder to count what you already have.</p>

      <blockquote class="border-l-4 border-green-500 pl-4 italic my-4 text-gray-700">
        "The best luck of all is the luck you make for yourself." — Douglas MacArthur
      </blockquote>
      <p class="mb-4">Hard work and good timing often look the same from the outside.</p>

      <blockquote class="border-l-4 border-green-500 pl-4 italic my-4 text-gray-700">
        "There's no luck except where there is discipline." — Irish Saying
      </blockquote>
      <p class="mb-4">Old wisdom that still holds true on any given Tuesday.</p>

      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Irish Proverbs Worth Posting on Your Wall</h3>

      <blockquote class="border-l-4 border-green-500 pl-4 italic my-4 text-gray-700">
        "Your feet will lead you where your heart is." — Irish Proverb
      </blockquote>
      <p class="mb-4">Trust the direction your gut keeps pointing you toward.</p>

      <blockquote class="border-l-4 border-green-500 pl-4 italic my-4 text-gray-700">
        "I give you my love and my luck. Don't throw either away." — Kelly Moran
      </blockquote>
      <p class="mb-4">Two of the most valuable things anyone can offer you.</p>

      <blockquote class="border-l-4 border-green-500 pl-4 italic my-4 text-gray-700">
        "So go love someone that wants to love you back. Whoever that lad is will be one lucky person." — Alisa Mullen
      </blockquote>
      <p class="mb-4">Simple advice with a warm Irish punch at the end.</p>

      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Quotes About Joy, Work, and Finding Your Luck</h3>

      <blockquote class="border-l-4 border-green-500 pl-4 italic my-4 text-gray-700">
        "Good people drink good beer." — Hunter S. Thompson
      </blockquote>
      <p class="mb-4">Short, honest, and the perfect toast opener.</p>

      <blockquote class="border-l-4 border-green-500 pl-4 italic my-4 text-gray-700">
        "There is no such joy in the tavern as upon the road thereto." — Cormac McCarthy
      </blockquote>
      <p class="mb-4">The walk there with good company is half the celebration.</p>

      <blockquote class="border-l-4 border-green-500 pl-4 italic my-4 text-gray-700">
        "I'm a greater believer in luck, and I find the harder I work the more I have of it." — Thomas Jefferson
      </blockquote>
      <p class="mb-4">Effort and opportunity keep running into each other for a reason.</p>

      <blockquote class="border-l-4 border-green-500 pl-4 italic my-4 text-gray-700">
        "A good friend is like a four-leaf clover: hard to find and lucky to have." — Irish Proverb
      </blockquote>
      <p class="mb-4">Text this one to your person today and mean every word.</p>
    `
  }
];

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];

  if (!post) {
    return <div className="text-center py-20">Blog post not found</div>;
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header Image */}
      <div className="w-full h-64 md:h-96 relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-sm md:text-base">
              <span className="flex items-center"><User className="w-4 h-4 mr-2" /> {post.author}</span>
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <Link to="/blogs/news" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
          
          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Buttons */}
          <div className="mt-10 pt-6 border-t border-gray-100">
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Share this post</h4>
            <div className="flex space-x-4">
              <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
