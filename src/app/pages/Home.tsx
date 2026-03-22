import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col items-center animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mt-12 mb-24 max-w-2xl px-4 relative">
        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/40 px-4 py-1.5 rounded-full mb-8 shadow-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-[#d0f309] shadow-[0_0_8px_rgba(208,243,9,0.8)]" />
          <span className="text-[10px] sm:text-xs font-medium text-[#3e3e3f] uppercase tracking-wider">
            AI speaks in logic. Humans feel in stories. I translate.
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-[62px] leading-[1.1] sm:leading-none font-semibold text-[#1e1e1e] font-['Playfair_Display',serif] tracking-[-0.05em] mb-6">
          Hi! I’m <span className="italic font-bold">Zoey Li</span>,
          <br />
          A Product Designer
          <br />
          based in New York .
        </h1>
        
        <p className="text-[#8c8c95] text-sm sm:text-base font-medium max-w-lg leading-relaxed">
          I believe good design should feel clear, human, and quietly honest. 
          <br className="hidden sm:block" /> A small smile is a bonus.
        </p>
      </div>

      {/* Grid of Work */}
      <div id="case-studies" className="w-full flex flex-col gap-6">
        {/* Featured Large Card */}
        <Link to="/case-study/furniture" className="group relative w-full aspect-[21/9] sm:aspect-[2.2/1] rounded-[30px] overflow-hidden bg-[#1c1c1c] block isolate">
          <img 
            src="https://images.unsplash.com/photo-1639173925921-5d5fd027713c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZW5kJTIwbW9kZXJuJTIwZnVybml0dXJlfGVufDF8fHx8MTc3NDAzNjM1NXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="High-end Furniture"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          
          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 flex flex-col items-start max-w-md">
            <h2 className="font-['Playfair_Display',serif] italic text-3xl sm:text-[36px] text-[#f4f4f4] tracking-[-1.8px] leading-none mb-4 group-hover:-translate-y-1 transition-transform">
              High-end Furniture
            </h2>
            <p className="text-[#afafb7] text-sm leading-[1.5] mb-6 hidden sm:block">
              I believe good design should feel clear, human, and quietly honest. 
              A small smile is a bonus.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/5 rounded-full pl-4 pr-1 py-1 flex items-center gap-3 text-white text-xs font-medium group-hover:bg-white/20 transition-colors">
              <span>View Case Study</span>
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </Link>

        {/* 2 Column Grid */}
        <div id="works" className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Work 1 */}
          <Link to="/work/awakener-1" className="group relative w-full aspect-[4/5] sm:aspect-square rounded-[30px] overflow-hidden bg-[#1c1c1c] block isolate">
            <img 
              src="https://images.unsplash.com/photo-1768026058295-caf3636c61ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGxpZ2h0JTIwYXJ0JTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3NDAzNjM1NXww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="The Awakener"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <p className="text-[#afafb7] text-xs font-medium uppercase tracking-wider mb-2">Interactive Art</p>
                <h3 className="font-['Playfair_Display',serif] italic text-3xl text-[#f4f4f4] tracking-[-1px] group-hover:-translate-y-1 transition-transform">
                  The Awakener
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/5 rounded-full pl-4 pr-1 py-1 flex items-center gap-3 text-white text-xs font-medium shrink-0 group-hover:bg-white/20 transition-colors">
                <span className="hidden sm:inline">View Work</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Work 2 */}
          <Link to="/work/awakener-2" className="group relative w-full aspect-[4/5] sm:aspect-square rounded-[30px] overflow-hidden bg-[#1c1c1c] block isolate">
            <img 
              src="https://images.unsplash.com/photo-1713188090500-a4fb0d2cf309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRpZ2l0YWwlMjBsaWdodCUyMGFydHxlbnwxfHx8fDE3NzQwMzYzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="The Awakener Alternative"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <p className="text-[#afafb7] text-xs font-medium uppercase tracking-wider mb-2">Interactive Art</p>
                <h3 className="font-['Playfair_Display',serif] italic text-3xl text-[#f4f4f4] tracking-[-1px] group-hover:-translate-y-1 transition-transform">
                  The Awakener
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/5 rounded-full pl-4 pr-1 py-1 flex items-center gap-3 text-white text-xs font-medium shrink-0 group-hover:bg-white/20 transition-colors">
                <span className="hidden sm:inline">View Work</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Link>
          
          {/* Work 3 - Bottomless (now smaller, 1 column) */}
          <Link to="/work/bottomless" className="group relative w-full aspect-[4/5] sm:aspect-square rounded-[30px] overflow-hidden bg-[#1c1c1c] block isolate">
            <img 
              src="https://images.unsplash.com/photo-1762279389045-110301edeecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwbmV0d29yayUyMGxpbmVzfGVufDF8fHx8MTc3NDAzNjM1NXww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Bottomless"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <p className="text-[#afafb7] text-xs font-medium uppercase tracking-wider mb-2">Illustration - Music Notes</p>
                <h3 className="font-['Playfair_Display',serif] italic text-3xl text-[#f4f4f4] tracking-[-1px] group-hover:-translate-y-1 transition-transform">
                  Bottomless
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/5 rounded-full pl-4 pr-1 py-1 flex items-center gap-3 text-white text-xs font-medium shrink-0 group-hover:bg-white/20 transition-colors">
                <span className="hidden sm:inline">View Work</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Work 4 - New Card */}
          <Link to="/work/product-design" className="group relative w-full aspect-[4/5] sm:aspect-square rounded-[30px] overflow-hidden bg-[#1c1c1c] block isolate">
            <img 
              src="https://images.unsplash.com/photo-1647507653704-bde7f2d6dbf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcm9kdWN0JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3NDAzODU1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Product Design"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <p className="text-[#afafb7] text-xs font-medium uppercase tracking-wider mb-2">Product Design</p>
                <h3 className="font-['Playfair_Display',serif] italic text-3xl text-[#f4f4f4] tracking-[-1px] group-hover:-translate-y-1 transition-transform">
                  Modern Aesthetics
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/5 rounded-full pl-4 pr-1 py-1 flex items-center gap-3 text-white text-xs font-medium shrink-0 group-hover:bg-white/20 transition-colors">
                <span className="hidden sm:inline">View Work</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Work 4.5 - New Card (between Bottomless/Modern Aesthetics and Creative Studio) */}
          <Link to="/work/digital-interface" className="group relative w-full aspect-[21/9] sm:aspect-[2.2/1] rounded-[30px] overflow-hidden bg-[#1c1c1c] block isolate md:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc3NDAxMjE3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Digital Interface"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <p className="text-[#afafb7] text-xs font-medium uppercase tracking-wider mb-2">UI/UX Design</p>
                <h3 className="font-['Playfair_Display',serif] italic text-3xl text-[#f4f4f4] tracking-[-1px] group-hover:-translate-y-1 transition-transform">
                  Digital Flow
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/5 rounded-full pl-4 pr-1 py-1 flex items-center gap-3 text-white text-xs font-medium shrink-0 group-hover:bg-white/20 transition-colors">
                <span className="hidden sm:inline">View Work</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Work 5 - New Card */}
          <Link to="/work/branding" className="group relative w-full aspect-[4/5] sm:aspect-square rounded-[30px] overflow-hidden bg-[#1c1c1c] block isolate">
            <img 
              src="https://images.unsplash.com/photo-1590102426275-8d1c367070d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwaWRlbnRpdHl8ZW58MXx8fHwxNzc0MDM4NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Creative Branding"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <p className="text-[#afafb7] text-xs font-medium uppercase tracking-wider mb-2">Brand Identity</p>
                <h3 className="font-['Playfair_Display',serif] italic text-3xl text-[#f4f4f4] tracking-[-1px] group-hover:-translate-y-1 transition-transform">
                  Creative Studio
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/5 rounded-full pl-4 pr-1 py-1 flex items-center gap-3 text-white text-xs font-medium shrink-0 group-hover:bg-white/20 transition-colors">
                <span className="hidden sm:inline">View Work</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Work 6 - New Card (to the right of Creative Studio) */}
          <Link to="/work/architecture" className="group relative w-full aspect-[4/5] sm:aspect-square rounded-[30px] overflow-hidden bg-[#1c1c1c] block isolate">
            <img 
              src="https://images.unsplash.com/photo-1646123202971-cb84915a4108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwcGhvdG9ncmFwaHklMjBtb2Rlcm58ZW58MXx8fHwxNzc0MDA5MTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Architecture"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <p className="text-[#afafb7] text-xs font-medium uppercase tracking-wider mb-2">Spatial Design</p>
                <h3 className="font-['Playfair_Display',serif] italic text-3xl text-[#f4f4f4] tracking-[-1px] group-hover:-translate-y-1 transition-transform">
                  Urban Vision
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/5 rounded-full pl-4 pr-1 py-1 flex items-center gap-3 text-white text-xs font-medium shrink-0 group-hover:bg-white/20 transition-colors">
                <span className="hidden sm:inline">View Work</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* View More Work Link */}
        <div className="flex justify-center mt-12 mb-8">
          <Link 
            to="/all-work" 
            className="group inline-flex items-center gap-2 text-[#1e1e1e] font-medium text-sm hover:text-[#6b7280] underline underline-offset-4 decoration-[#1e1e1e] hover:decoration-[#6b7280] transition-all"
          >
            <span>View More Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
    </div>
  );
}