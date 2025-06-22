import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedArticle = () => {
  const article = {
    title: "One Founder, One Product, $80M Exit",
    excerpt: "Some thoughts on Base44 and this current wave of AI tools. What happens when speed and clarity meet the right moment.",
    date: "June 2025",
    readTime: "3 min read"
  };

  return (
    <div className="w-full max-w-xl mb-8">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        
        {/* Main article card */}
        <div className="relative bg-white/70 backdrop-blur-md border border-white/70 rounded-2xl p-6 transition-all duration-300 group-hover:bg-white/80 group-hover:border-white/80">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 text-xs text-slate-600 mb-2">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 leading-tight">
                {article.title}
              </h3>
            </div>
            
            <Link 
              to="/articles/one-founder-one-product-80m-exit"
              className="ml-4 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
            >
              Read
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
