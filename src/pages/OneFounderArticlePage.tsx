import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OneFounderArticlePage = () => {
  const article = {
    title: "One Founder, One Product, $80M Exit",
    date: "June 2025",
    readTime: "3 min read",
    content: `Saw a thread on Hacker News the other day. Wix bought a product called Base44 for $80 million in cash. What makes it interesting is that it was mostly built by one person. No big team, no stealth period, just fast iteration in public. New features shipped every few days. The product found traction quickly—250,000 people signed up—and now it's gone.

Base44 was a so-called "vibe coding" tool. You type what you want to build, and it generates an app. Built-in database, deployment, UI—all handled in the background. Everything runs in the browser. Feels like a simplified version of a dev environment, but controlled by prompts.

The idea isn't new. But the execution here was sharp, fast, and simple. No platform ambition. No inflated roadmap. Just a small product that solved one thing well. And that was enough to get picked up.

In the comments, there was the usual split: some people loved it, others questioned the long-term value. The tool is built on top of existing AI models—so what happens if those APIs change? What's the moat? Can the product handle more complex logic over time? All fair questions.

What's clear is that the surface-level experience is getting faster and smoother. Prompt in, app out. But underneath, it's still software. Still state, data, UI, bugs. And those things don't disappear just because the interface looks different.

Feels like this moment rewards speed and clarity. If the idea is small enough, and the execution is good enough, it doesn't need to last forever. It just needs to work right now—and grow fast enough to be worth buying before someone bigger builds the same thing.

These kinds of exits will probably keep happening. AI-native products, built by very small teams, getting acquired quickly. Not because they're deep platforms, but because they're focused, useful, and easy to understand.

There's a window for this kind of work right now. Not sure how long it stays open. But Base44 is a good example of how far one person can go with the right tool at the right time.`
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Same animated background as homepage */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(-45deg, 
              #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, 
              #ffeaa7, #dda0dd, #98d8c8, #f7dc6f
            )`,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite'
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Article content */}
        <article className="bg-white/70 backdrop-blur-md border border-white/70 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 leading-tight">
            {article.title}
          </h1>
          
          <div className="prose prose-lg prose-slate max-w-none">
            <div className="text-slate-700 leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
            
            {/* AI caption */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500 italic">
                This article was written with AI supervised by Dom
              </p>
            </div>
          </div>
        </article>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            Made by Dom
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `
      }} />
    </div>
  );
};

export default OneFounderArticlePage;
