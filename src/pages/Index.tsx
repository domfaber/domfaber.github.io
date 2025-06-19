
import { Button } from "@/components/ui/button";
import { ExternalLink, Linkedin, Building2, Palette, Bot } from "lucide-react";

const Index = () => {
  const links = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/dominikfaber/",
      description: "Professional network & career",
      icon: <Linkedin className="w-5 h-5" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "softgarden (exited)",
      url: "https://softgarden.com",
      description: "HR tech platform",
      icon: <Building2 className="w-5 h-5" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Granola Studios",
      url: "https://granolastudios.com",
      description: "Product studio for immersive experiences",
      icon: <Palette className="w-5 h-5" />,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Paul's job",
      url: "https://paulsjob.ai",
      description: "AI-powered career platform",
      icon: <Bot className="w-5 h-5" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900 to-amber-900">
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-amber-500/10" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        {/* Profile Photo */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30" />
            <img 
              src="/lovable-uploads/b346ec81-16db-42dd-b2e3-5d4607cc3da7.png"
              alt="Dominik Faber"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl"
            />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-4">
            Dominik Faber
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Product Engineer
          </p>
          <p className="text-gray-400 text-lg">
            Designing & building tech products that matter
          </p>
        </div>

        {/* Links Grid */}
        <div className="w-full max-w-md space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Main card */}
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-[1.02]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${link.color} text-white`}>
                        {link.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {link.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Built with passion for great products
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
