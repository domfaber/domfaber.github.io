import { Button } from "@/components/ui/button";
import { ExternalLink, Linkedin, Bot, FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import FeaturedArticle from "@/components/FeaturedArticle";

const Index = () => {
  const links = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/dominikfaber/",
      description: "Professional network & career",
      color: "from-blue-500 to-blue-600",
      icon: Linkedin
    },
    {
      title: "softgarden (exited)",
      url: "https://softgarden.com",
      description: "Talent Acquisition Platform",
      color: "from-gray-600 to-gray-700",
      customIcon: "/lovable-uploads/74b704de-a145-4808-9fc8-fcdfffc2b3d2.png"
    },
    {
      title: "Granola Studios",
      url: "https://granolastudios.com",
      description: "Product studio for immersive experiences",
      color: "from-purple-500 to-indigo-600",
      customIcon: "/lovable-uploads/8c1bd52a-873d-48a4-8f02-1451409b0625.png"
    },
    {
      title: "Paul's job",
      url: "https://paulsjob.ai",
      description: "Agentic AI Automation Intelligence Platform",
      color: "from-orange-500 to-red-600",
      customIcon: "/lovable-uploads/f5093602-26b7-418f-8d0f-a40611ce3756.png"
    },
    {
      title: "All Articles",
      url: "articles",
      description: "Thoughts on product, AI, and building things",
      color: "from-slate-500 to-slate-600",
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
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
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Additional soft overlay for warmth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        {/* Profile Photo */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30" />
            <img 
              src="/lovable-uploads/b346ec81-16db-42dd-b2e3-5d4607cc3da7.png"
              alt="Dominik Faber"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/40 shadow-2xl"
            />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-4">
            Dominik Faber
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-2">
            Product Engineer
          </p>
          <p className="text-slate-600 text-lg">
            Designing & building tech products that matter
          </p>
        </div>

        {/* Featured Article */}
        <FeaturedArticle />

        {/* Links Grid */}
        <div className="w-full max-w-md space-y-4">
          {links.map((link, index) => {
            // Check if this is the All Articles link (internal link)
            const isInternalLink = link.title === "All Articles";
            const IconComponent = link.icon;
            const hasCustomIcon = link.customIcon;
            
            if (isInternalLink) {
              return (
                <Link
                  key={index}
                  to={link.url}
                  className="group block"
                >
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-300`} />
                    
                    <div className="relative bg-white/60 backdrop-blur-md border border-white/60 rounded-2xl p-6 transition-all duration-300 group-hover:bg-white/70 group-hover:border-white/70 group-hover:scale-[1.02]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="bg-white rounded-lg border border-gray-300 p-3">
                            {hasCustomIcon ? (
                              <img src={link.customIcon} alt={link.title} className="w-5 h-5" />
                            ) : (
                              <IconComponent className="w-5 h-5 text-gray-700" />
                            )}
                          </div>
                          <div>
                            <h3 className="text-slate-800 font-semibold text-lg">
                              {link.title}
                            </h3>
                            <p className="text-slate-600 text-sm">
                              {link.description}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-slate-700 transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
            
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-300`} />
                  
                  <div className="relative bg-white/60 backdrop-blur-md border border-white/60 rounded-2xl p-6 transition-all duration-300 group-hover:bg-white/70 group-hover:border-white/70 group-hover:scale-[1.02]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white rounded-lg border border-gray-300 p-3">
                          {hasCustomIcon ? (
                            <img src={link.customIcon} alt={link.title} className="w-5 h-5" />
                          ) : (
                            <IconComponent className="w-5 h-5 text-gray-700" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-slate-800 font-semibold text-lg">
                            {link.title}
                          </h3>
                          <p className="text-slate-600 text-sm">
                            {link.description}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-slate-700 transition-colors" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
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

export default Index;
