import { ArrowRight } from "lucide-react";

const experiments = [
  {
    id: 1,
    title: "Neumorphic Buttons",
    category: "UI Exploration",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHVpfGVufDF8fHx8MTc3NDAzNjgxMnww&ixlib=rb-4.1.0&q=80&w=800",
    span: "col-span-1 row-span-1"
  },
  {
    id: 2,
    title: "Glassmorphism Card",
    category: "CSS Effects",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdsYXNzfGVufDF8fHx8MTc3NDAzNjgxMnww&ixlib=rb-4.1.0&q=80&w=800",
    span: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: 3,
    title: "Particle Animation",
    category: "Canvas / WebGL",
    img: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhcnRpY2xlc3xlbnwxfHx8fDE3NzQwMzY4MTJ8MA&ixlib=rb-4.1.0&q=80&w=800",
    span: "col-span-1 row-span-2"
  },
  {
    id: 4,
    title: "Dark Mode Switcher",
    category: "Interaction",
    img: "https://images.unsplash.com/photo-1550684848-76ce6ebbc675?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9kZXxlbnwxfHx8fDE3NzQwMzY4MTJ8MA&ixlib=rb-4.1.0&q=80&w=800",
    span: "col-span-1 row-span-1"
  },
  {
    id: 5,
    title: "Generative Art",
    category: "Creative Coding",
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0aXZlJTIwYXJ0fGVufDF8fHx8MTc3NDAzNjgxMnww&ixlib=rb-4.1.0&q=80&w=800",
    span: "col-span-1 md:col-span-2 row-span-1"
  },
];

export function Playground() {
  return (
    <div className="flex flex-col items-center animate-in fade-in duration-500 max-w-6xl mx-auto py-12">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-[56px] leading-[1.1] font-semibold text-[#1e1e1e] font-['Playfair_Display',serif] tracking-[-0.03em] mb-4">
          The Playground
        </h1>
        <p className="text-[#8c8c95] text-lg font-medium max-w-xl mx-auto">
          A collection of small experiments, unpolished thoughts, and creative coding snippets. 
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full auto-rows-[250px]">
        {experiments.map((exp) => (
          <div 
            key={exp.id} 
            className={`group relative rounded-[24px] overflow-hidden bg-[#1c1c1c] block isolate cursor-pointer ${exp.span}`}
          >
            <img 
              src={exp.img} 
              alt={exp.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="text-[#d0f309] text-xs font-semibold uppercase tracking-wider mb-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {exp.category}
                </p>
                <h3 className="font-['Playfair_Display',serif] italic text-2xl text-[#f4f4f4] tracking-[-0.5px]">
                  {exp.title}
                </h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
