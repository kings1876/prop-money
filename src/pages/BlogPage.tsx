import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blog';
import { ArrowRight, Clock, User, Calendar, BookOpen } from 'lucide-react';

export const BlogPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Filmmaking & Prop Money Journal | Australia Prop Money';
  }, []);

  return (
    <div className="py-12 bg-[#0B132B] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="text-slate-200 font-medium">Production Journal & Blog</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Production & Filmmaking Journal
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-1 mb-3">
            Australian Prop Money Guides & Legal Insights
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Essential knowledge for cinematographers, art department coordinators, and directors staging money scenes across Australia.
          </p>
        </div>

        {/* Featured First Article with standalone URL */}
        <Link 
          to={`/blog/${BLOG_POSTS[0].slug}`}
          className="block bg-gradient-to-br from-[#121B38] to-[#0D1630] border border-amber-500/30 rounded-2xl p-6 sm:p-8 hover:border-amber-400/60 transition-all group shadow-xl"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3">
            <span className="px-2.5 py-0.5 rounded bg-amber-400 text-slate-950 font-bold">
              Featured Guide
            </span>
            <span>{BLOG_POSTS[0].category}</span>
            <span>·</span>
            <span>{BLOG_POSTS[0].readTime}</span>
            <span>·</span>
            <span>{BLOG_POSTS[0].date}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-300 transition-colors leading-tight mb-3">
            {BLOG_POSTS[0].title}
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-4xl">
            {BLOG_POSTS[0].excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-700/80">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <User className="w-4 h-4 text-amber-400" />
              <span>{BLOG_POSTS[0].author} ({BLOG_POSTS[0].authorRole})</span>
            </div>

            <span className="text-xs font-bold text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Read Full Guide <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>

        {/* Remaining Articles Grid with individual URLs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="bg-[#0E162F] hover:bg-[#121B38] border border-slate-800 hover:border-slate-700 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between group shadow-md"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <span className="text-amber-400 font-semibold">{post.category}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors leading-snug mb-2">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>{post.date}</span>
                <span className="text-amber-400 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#121B38] border border-slate-800 rounded-2xl p-8 text-center max-w-2xl mx-auto space-y-4">
          <BookOpen className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="font-display text-xl font-bold text-white">
            Need Custom Staging Advice for Your Australian Shoot?
          </h3>
          <p className="text-xs text-slate-300">
            Our scenic team works directly with Australian art directors and producers to ensure props meet both cinematic aesthetics and legal compliance.
          </p>
          <Link
            to="/shop"
            className="inline-block px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
          >
            Browse Production Stacks
          </Link>
        </div>

      </div>
    </div>
  );
};
