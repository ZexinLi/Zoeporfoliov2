import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function CaseStudy() {
  const { id } = useParams();

  // Fake data for the case study based on id or just a default
  const title = id?.includes('furniture') ? "High-end Furniture" : "The Awakener";
  const category = id?.includes('furniture') ? "Product Design" : "Interactive Art";
  const heroImage = id?.includes('furniture') 
    ? "https://images.unsplash.com/photo-1639173925921-5d5fd027713c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZW5kJTIwbW9kZXJuJTIwZnVybml0dXJlfGVufDF8fHx8MTc3NDAzNjM1NXww&ixlib=rb-4.1.0&q=80&w=1080"
    : "https://images.unsplash.com/photo-1768026058295-caf3636c61ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGxpZ2h0JTIwYXJ0JTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc3NDAzNjM1NXww&ixlib=rb-4.1.0&q=80&w=1080";

  return (
    <div className="flex flex-col animate-in fade-in duration-500 max-w-4xl mx-auto">
      
      <Link to="/" className="inline-flex items-center gap-2 text-[#8c8c95] hover:text-[#1e1e1e] transition-colors mb-12 w-max">
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      <h1 className="text-4xl sm:text-[56px] leading-[1.1] font-semibold text-[#1e1e1e] font-['Playfair_Display',serif] tracking-[-0.03em] mb-4">
        {title}
      </h1>
      
      <p className="text-[#8c8c95] text-lg font-medium uppercase tracking-wider mb-12">
        {category}
      </p>

      <div className="w-full aspect-[16/9] rounded-[30px] overflow-hidden mb-16 bg-[#1c1c1c]">
        <img 
          src={heroImage} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 mb-20">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xs font-semibold text-[#8c8c95] uppercase tracking-wider mb-2">Role</h3>
            <p className="text-[#1e1e1e] text-sm font-medium">Lead Product Designer</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-[#8c8c95] uppercase tracking-wider mb-2">Timeline</h3>
            <p className="text-[#1e1e1e] text-sm font-medium">8 Weeks</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-[#8c8c95] uppercase tracking-wider mb-2">Tools</h3>
            <p className="text-[#1e1e1e] text-sm font-medium">Figma, Framer, Principle</p>
          </div>
        </div>

        <div className="prose prose-lg text-[#3e3e3f]">
          <p className="text-xl leading-relaxed mb-6 font-medium text-[#1e1e1e]">
            I believe good design should feel clear, human, and quietly honest. A small smile is a bonus. This project was an exploration into bringing those exact principles into the physical space.
          </p>
          <p className="leading-relaxed mb-6">
            The challenge was to create an experience that felt both premium and accessible. We started by interviewing over 50 potential users to understand their pain points with existing solutions. What we found was a desire for simplicity—a break from the overwhelming feature-bloat that characterizes so many modern products.
          </p>
          <p className="leading-relaxed">
            By stripping away the unnecessary, we were able to focus entirely on the core interaction. The resulting design isn't just about what it does, but how it makes the user feel while doing it: calm, capable, and in control.
          </p>
        </div>
      </div>

      <div className="w-full aspect-video rounded-[30px] overflow-hidden mb-12 bg-[#1c1c1c]">
        <img 
          src="https://images.unsplash.com/photo-1683818051102-dd1199d163b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwc2tldGNoZXN8ZW58MXx8fHwxNzc0MDM2NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Process"
          className="w-full h-full object-cover mix-blend-luminosity opacity-80"
        />
      </div>

      <div className="flex justify-center mt-20">
        <Link to="/" className="bg-[#1e1e1e] hover:bg-black text-white font-medium text-sm px-8 py-4 rounded-[100px] transition-colors shadow-lg">
          Next Project
        </Link>
      </div>

    </div>
  );
}
