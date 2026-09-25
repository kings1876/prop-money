import React from 'react';
import { TRUSTPILOT_STATS, REVIEWS } from '../data/reviews';
import { Star, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';

export const TrustpilotReviewsSection: React.FC = () => {
  const [filterRating, setFilterRating] = React.useState<number | null>(null);

  const filteredReviews = filterRating 
    ? REVIEWS.filter(r => r.rating === filterRating)
    : REVIEWS;

  return (
    <section id="reviews-section" className="py-16 bg-[#0E1733] border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Verified Customer Reviews</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Over 2,140+ Australian Creators & Studios
          </h2>

          <p className="text-sm text-slate-300">
            From major Sydney & Melbourne sound stages to indie music videos, see why Australia’s leading prop masters choose Australia Prop Money.
          </p>
        </div>

        {/* Trustpilot Scoreboard Header Box */}
        <div className="bg-[#0B132B] border border-slate-800 rounded-2xl p-6 sm:p-8 mb-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Score Block */}
            <div className="md:col-span-4 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="font-display font-black text-4xl sm:text-5xl text-white">
                  {TRUSTPILOT_STATS.averageRating}
                </span>
                <span className="text-slate-400 text-sm font-medium">/ 5.0</span>
              </div>

              {/* Trustpilot Stars Green Blocks */}
              <div className="flex items-center justify-center md:justify-start gap-1 py-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-[#00B67A] rounded-xs flex items-center justify-center">
                    <Star className="w-4 h-4 fill-white text-white" />
                  </div>
                ))}
              </div>

              <div className="text-xs text-slate-300 space-y-0.5">
                <p className="font-semibold text-white">Rated <span className="text-emerald-400">{TRUSTPILOT_STATS.trustScoreText}</span></p>
                <p className="text-slate-400">Based on <strong className="text-white tabular-nums">{TRUSTPILOT_STATS.totalReviews.toLocaleString()}</strong> verified Trustpilot reviews</p>
              </div>
            </div>

            {/* Middle Rating Distribution Bars */}
            <div className="md:col-span-5 space-y-2 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-12 text-slate-300 shrink-0">5 Stars</span>
                <div className="flex-1 h-2.5 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-[#00B67A] rounded-full" style={{ width: `${TRUSTPILOT_STATS.starDistribution.fiveStar}%` }} />
                </div>
                <span className="w-9 text-right font-mono text-slate-400">{TRUSTPILOT_STATS.starDistribution.fiveStar}%</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-12 text-slate-300 shrink-0">4 Stars</span>
                <div className="flex-1 h-2.5 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-[#00B67A] rounded-full" style={{ width: `${TRUSTPILOT_STATS.starDistribution.fourStar}%` }} />
                </div>
                <span className="w-9 text-right font-mono text-slate-400">{TRUSTPILOT_STATS.starDistribution.fourStar}%</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-12 text-slate-300 shrink-0">3 Stars</span>
                <div className="flex-1 h-2.5 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: `${TRUSTPILOT_STATS.starDistribution.threeStar}%` }} />
                </div>
                <span className="w-9 text-right font-mono text-slate-400">{TRUSTPILOT_STATS.starDistribution.threeStar}%</span>
              </div>
            </div>

            {/* Right Trust Indicators */}
            <div className="md:col-span-3 space-y-3 text-xs text-slate-300 border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Genuine Verified Orders</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>RBA Act 1981 Legal Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Dedicated Production Support</span>
              </div>
            </div>

          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 mb-6 text-xs">
          <span className="text-slate-400">Filter:</span>
          <button
            onClick={() => setFilterRating(null)}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              filterRating === null ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            All Reviews ({TRUSTPILOT_STATS.totalReviews.toLocaleString()})
          </button>
          <button
            onClick={() => setFilterRating(5)}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              filterRating === 5 ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            5-Star Only
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0B132B] border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Rating Stars & Trustpilot Logo */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-[#00B67A] rounded-2xs flex items-center justify-center">
                        <Star className="w-3 h-3 fill-white text-white" />
                      </div>
                    ))}
                  </div>

                  <span className="text-[11px] text-slate-500 font-medium">
                    {rev.date}
                  </span>
                </div>

                {/* Review Title */}
                <h4 className="font-semibold text-sm text-white mb-2 leading-snug">
                  "{rev.title}"
                </h4>

                {/* Review Comment */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              {/* Author & Production Metadata */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-xs text-white">{rev.author}</span>
                    <span title="Verified Customer">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {rev.role} · {rev.location}
                  </div>
                </div>

                <div className="text-[10px] text-amber-400 font-mono text-right max-w-[120px] truncate">
                  {rev.production}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
