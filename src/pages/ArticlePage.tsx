
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ArticlePage = () => {
  const article = {
    title: "Probability Machines Need Probability Managers",
    date: "June 2025",
    readTime: "4 min read",
    content: `I just read that Business Insider scoop about Citi rolling out a "Citi AI" toolkit to 150,000 employees and dabbling in "agentic AI" for fraud checks and trade confirmations. It sounds moon-shotty until you notice every workflow in the memo still ends with a human click-off—Wall Street hasn't forgotten 2008 and it's not about to let a language model push buttons unsupervised.

Almost in parallel, Apple's new paper, The Illusion of Thinking, walks through why LLM "reasoning" collapses as soon as task complexity inches up. The short version is: yes, the model strings thoughts together, but underneath it's still glorified pattern matching—and patterns break.

That lands close to home. My first HR tech company, softgarden, never even tried to automate decisions; it was a plain-vanilla SaaS app and—looking back—that was probably wise for the time. Fast-forward to my CPO role at Paul's Job and we're now building recruiting agents that chat with candidates, chase missing docs, and juggle calendars. Early customer pilots with Teamwork in Ireland and security-staffing firm VD Mayr in Munich taught us the same lesson Citi's risk folks already know: an agent can draft ten interview slots in seconds, but someone on the hiring team still has to tap "send" before the emails fly. When we left that approval step out, the bot double-booked a candidate with two different line managers. With the checkpoint back in, error rates nose-dived and nobody lost sleep.

The developer crowd quietly behaves the same way. Cursor's agent mode will refactor your repo, but its own docs warn you to "review proposed changes carefully before confirming." Windsurf's new Cascade agent markets itself as "your ultimate partner," not a replacement, and Claude Code literally stops to ask before it writes to disk—Anthropic calls that a "deliberately conservative" default.

Deloitte's 2025 forecast puts numbers to the vibe: only about a quarter of companies running Gen AI will even start an agentic pilot this year; everyone else is still arguing over guardrails.

So my working theory is simple: probability machines need probability managers. The art isn't in chasing full autonomy—it's in designing that tiny, well-timed moment where a person glances at the agent's draft, says "yep," and the workflow cruises on. When the loop is tight, the human touch feels like steering, not babysitting, and the bot's speed advantage still shows up on the KPI dashboard.

That's where I'm planting my flag for now. True autonomy can wait; carefully-assisted agents are already useful, deployable, and—crucially—trustworthy enough for real work.`
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

export default ArticlePage;
