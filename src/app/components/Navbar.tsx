import { useState } from "react";
import { Link, NavLink } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-20 pointer-events-none">
      <div className="flex justify-center items-center w-full relative">
        {/* Logo */}
        <Link 
          to="/" 
          className="pointer-events-auto flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 shadow-[0_0_0_4px_rgba(0,191,111,0.3)] backdrop-blur-md overflow-hidden absolute left-0"
        >
          <span className="font-['Playfair_Display',serif] font-bold text-lg md:text-xl italic text-black">ZL</span>
        </Link>

        {/* Desktop Nav Menu - Centered */}
        <nav className="pointer-events-auto backdrop-blur-md bg-black/90 rounded-[49px] border border-white/10 px-2 py-2 hidden md:flex items-center gap-8 shadow-xl">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              `px-4 py-2.5 rounded-full font-medium text-sm transition-colors ${
                isActive 
                  ? "bg-[#d0f309] text-black shadow-[0_4px_6px_rgba(0,14,15,0.15)] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]" 
                  : "text-[#efefef] hover:bg-white/10"
              }`
            }
          >
            Home
          </NavLink>

          {/* Portfolio Dropdown */}
          <div className="relative group px-2 py-2.5">
            <button className="flex items-center gap-1.5 font-medium text-sm text-[#efefef] hover:text-[#d0f309] transition-colors">
              Portfolio <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
            </button>
            
            {/* Invisible bridge to prevent gap hover issue */}
            <div className="absolute left-0 right-0 top-full h-2 pointer-events-auto invisible group-hover:visible" />
            
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-40 bg-black/90 backdrop-blur-md border border-white/10 rounded-b-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none group-hover:pointer-events-auto overflow-hidden">
              <Link to="/#case-studies" className="block px-4 py-3 text-sm text-[#efefef] hover:bg-white/10 hover:text-[#d0f309] transition-colors">
                Case Study
              </Link>
              <Link to="/#works" className="block px-4 py-3 text-sm text-[#efefef] hover:bg-white/10 hover:text-[#d0f309] transition-colors">
                Work
              </Link>
            </div>
          </div>

          <NavLink 
            to="/manifesto" 
            className={({ isActive }) => 
              `px-4 py-2.5 rounded-full font-medium text-sm transition-colors ${
                isActive 
                  ? "bg-[#d0f309] text-black shadow-[0_4px_6px_rgba(0,14,15,0.15)] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]" 
                  : "text-[#efefef] hover:bg-white/10"
              }`
            }
          >
            Manifesto
          </NavLink>

          <NavLink 
            to="/playground" 
            className={({ isActive }) => 
              `px-4 py-2.5 rounded-full font-medium text-sm transition-colors ${
                isActive 
                  ? "bg-[#d0f309] text-black shadow-[0_4px_6px_rgba(0,14,15,0.15)] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]" 
                  : "text-[#efefef] hover:bg-white/10"
              }`
            }
          >
            Playground
          </NavLink>
        </nav>

        {/* Desktop Contact Button */}
        <button className="pointer-events-auto bg-[#d0f309] hover:bg-[#bce000] text-black font-medium text-sm px-6 py-3 rounded-[100px] transition-colors shadow-lg hidden md:block absolute right-0">
          Contact Me →
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="pointer-events-auto md:hidden w-10 h-10 rounded-full bg-black/90 flex items-center justify-center text-white absolute right-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto absolute top-full left-4 right-4 mt-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col p-4 gap-2 md:hidden">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-[#efefef] font-medium rounded-xl hover:bg-white/10">Home</Link>
          <div className="px-4 py-2 text-xs font-semibold text-white/50 uppercase tracking-wider">Portfolio</div>
          <Link to="/#case-studies" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-2 text-[#efefef] text-sm hover:text-[#d0f309]">Case Study</Link>
          <Link to="/#works" onClick={() => setIsMobileMenuOpen(false)} className="px-8 py-2 text-[#efefef] text-sm hover:text-[#d0f309]">Work</Link>
          <div className="h-px bg-white/10 my-2 mx-4" />
          <Link to="/manifesto" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-[#efefef] font-medium rounded-xl hover:bg-white/10">Manifesto</Link>
          <Link to="/playground" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-[#efefef] font-medium rounded-xl hover:bg-white/10">Playground</Link>
          <button className="mt-4 bg-[#d0f309] text-black font-medium text-sm px-6 py-3 rounded-full text-center">
            Contact Me →
          </button>
        </div>
      )}
    </header>
  );
}