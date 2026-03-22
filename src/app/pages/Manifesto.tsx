import { ArrowDown } from "lucide-react";

export function Manifesto() {
  return (
    <div className="flex flex-col items-center animate-in fade-in duration-500 max-w-4xl mx-auto py-12">
      
      <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/40 px-4 py-1.5 rounded-full mb-12 shadow-sm">
        <span className="text-[10px] sm:text-xs font-medium text-[#3e3e3f] uppercase tracking-wider">
          Design Principles
        </span>
      </div>

      <h1 className="text-4xl sm:text-[72px] leading-[1.1] font-semibold text-[#1e1e1e] font-['Playfair_Display',serif] tracking-[-0.03em] mb-12 text-center max-w-3xl">
        I believe good design should feel <span className="italic text-[#d0f309] drop-shadow-[0_2px_10px_rgba(208,243,9,0.3)]">clear</span>, <span className="italic text-[#d0f309] drop-shadow-[0_2px_10px_rgba(208,243,9,0.3)]">human</span>, and quietly honest.
      </h1>

      <div className="w-12 h-12 rounded-full border border-[#e5e5e5] flex items-center justify-center mb-24">
        <ArrowDown className="w-5 h-5 text-[#8c8c95]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
        <div className="flex flex-col">
          <h2 className="text-2xl font-['Playfair_Display',serif] font-semibold text-[#1e1e1e] mb-4">01. Less, but better</h2>
          <p className="text-[#8c8c95] leading-relaxed">
            Every element must earn its place. If it doesn't serve a clear purpose or spark joy, it's noise. I strive to remove the unnecessary so the essential can speak.
          </p>
        </div>
        
        <div className="flex flex-col">
          <h2 className="text-2xl font-['Playfair_Display',serif] font-semibold text-[#1e1e1e] mb-4">02. Form follows feeling</h2>
          <p className="text-[#8c8c95] leading-relaxed">
            Functionality is the baseline, but emotion is the differentiator. People don't just use products; they experience them. A small smile is a bonus.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl font-['Playfair_Display',serif] font-semibold text-[#1e1e1e] mb-4">03. AI as a partner</h2>
          <p className="text-[#8c8c95] leading-relaxed">
            AI speaks in logic. Humans feel in stories. My job is to act as the translator between the two, crafting experiences that leverage technology without losing their soul.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl font-['Playfair_Display',serif] font-semibold text-[#1e1e1e] mb-4">04. Quietly honest</h2>
          <p className="text-[#8c8c95] leading-relaxed">
            Design shouldn't trick or manipulate. It should be transparent and trustworthy. Good design gets out of the user's way and lets them accomplish what they set out to do.
          </p>
        </div>
      </div>

      <div className="w-full aspect-[21/9] rounded-[30px] overflow-hidden mt-24 bg-[#1c1c1c]">
        <img 
          src="https://images.unsplash.com/photo-1622579521534-8252f7da47fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzkzOTE4MXww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Workspace"
          className="w-full h-full object-cover mix-blend-luminosity opacity-80"
        />
      </div>

    </div>
  );
}
