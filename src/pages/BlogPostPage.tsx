import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blog';
import { ArrowLeft, User, Calendar, Clock, BookOpen, ShieldCheck, ArrowRight, Share2 } from 'lucide-react';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (post) {
      document.title = `${post.title} | Australia Prop Money Blog`;
    }
  }, [slug, post]);

  if (!post) {
    return (
      <div className="py-20 px-4 text-center bg-[#0B132B] min-h-screen text-slate-200">
        <div className="max-w-md mx-auto space-y-4">
          <BookOpen className="w-12 h-12 text-amber-400 mx-auto" />
          <h1 className="font-display font-bold text-2xl text-white">Article Not Found</h1>
          <p className="text-xs text-slate-400">
            The requested filmmaking guide or legal insight could not be found.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Production Journal</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="py-10 bg-[#0B132B] min-h-screen text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <Link to="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="text-slate-200 font-medium truncate">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-semibold">
              {post.category}
            </span>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer text-xs"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight [text-wrap:balance]">
            {post.title}
          </h1>

          {/* Author & Timestamp Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
            <div className="flex items-center gap-2 text-slate-300">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-xs">
                AU
              </div>
              <div>
                <span className="font-semibold text-white block">{post.author}</span>
                <span className="text-[11px] text-slate-400">{post.authorRole}</span>
              </div>
            </div>

            <span className="hidden sm:inline text-slate-600">·</span>

            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{post.date}</span>
            </div>

            <span className="hidden sm:inline text-slate-600">·</span>

            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Legal Disclaimer Box */}
        <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 space-y-2">
          <div className="flex items-center gap-2 text-amber-300 font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Important Commonwealth Regulatory Note</span>
          </div>
          <p>
            The guidance provided here is for informational and educational purposes for theatrical and cinema productions operating within Australia. Producers and prop coordinators must ensure compliance with the <em>Crimes (Currency) Act 1981 (Cth)</em> and local filming permits when staging cash scenes in public spaces.
          </p>
        </div>

        {/* Action Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#121B38] to-[#1C2541] border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              Ready to equip your film crew?
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Explore our full range of camera-calibrated Australian polymer prop stacks and director briefcase bundles.
            </p>
          </div>

          <Link
            to="/shop"
            className="px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs whitespace-nowrap transition-colors shadow-lg cursor-pointer"
          >
            Browse Prop Stacks
          </Link>
        </div>

        {/* More Articles */}
        <div className="space-y-6 pt-6 border-t border-slate-800">
          <h3 className="font-display text-xl font-bold text-white">
            More Filmmaking Guides & Resources
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.slug}`}
                className="bg-[#0E162F] hover:bg-[#121B38] border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[11px] font-semibold text-amber-400 block mb-2">
                    {p.category}
                  </span>
                  <h4 className="font-bold text-sm text-white group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {p.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>{p.readTime}</span>
                  <span className="text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
