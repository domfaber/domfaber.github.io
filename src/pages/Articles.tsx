import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Articles = () => {
  const articles = [
    {
      id: "ai-saas-cost-control-moat",
      title: "The Real Moat in AI SaaS: Cost Control and Smart Context",
      excerpt: "Been thinking more about what makes an AI product actually defensible. Not in theory, but in the day-to-day reality of running something at scale.",
      date: "July 2025",
      readTime: "4 min read"
    },
    {
      id: "one-founder-one-product-80m-exit",
      title: "One Founder, One Product, $80M Exit",
      excerpt: "Some thoughts on Base44 and this current wave of AI tools. What happens when speed and clarity meet the right moment.",
      date: "June 2025",
      readTime: "3 min read"
    },
    {
      id: "probability-machines-need-probability-managers",
      title: "Probability Machines Need Probability Managers",
      excerpt: "Why the future of AI isn't full autonomy—it's carefully-assisted agents that keep humans in the loop at just the right moments.",
      date: "June 2025",
      readTime: "4 min read"
    }
  ];

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

        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-4">
            Articles
          </h1>
          <p className="text-xl text-slate-700">
            Thoughts on product, AI, and building things
          </p>
        </div>

        {/* Articles list */}
        <div className="space-y-6">
          {articles.map((article) => (
            <a
              key={article.id}
              href={`/articles/${article.id}.html`}
              className="group block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                
                <div className="relative bg-white/70 backdrop-blur-md border border-white/70 rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/80 group-hover:border-white/80">
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">
                    {article.title}
                  </h2>
                  
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

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

export default Articles;
