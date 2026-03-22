import { Link } from "react-router";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 shadow-[0_0_0_4px_rgba(0,191,111,0.3)] backdrop-blur-md mb-4">
              <span className="font-['Playfair_Display',serif] font-bold text-xl italic text-white">ZL</span>
            </div>
            <p className="text-[#efefef]/70 text-sm max-w-xs mb-6">
              Crafting meaningful digital experiences through thoughtful design and creative problem-solving.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#d0f309] hover:text-black flex items-center justify-center transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#d0f309] hover:text-black flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#d0f309] hover:text-black flex items-center justify-center transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:hello@example.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#d0f309] hover:text-black flex items-center justify-center transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#efefef]/70 hover:text-[#d0f309] text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#case-studies" className="text-[#efefef]/70 hover:text-[#d0f309] text-sm transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/manifesto" className="text-[#efefef]/70 hover:text-[#d0f309] text-sm transition-colors">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link to="/playground" className="text-[#efefef]/70 hover:text-[#d0f309] text-sm transition-colors">
                  Playground
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@example.com" className="text-[#efefef]/70 hover:text-[#d0f309] text-sm transition-colors">
                  hello@example.com
                </a>
              </li>
              <li className="text-[#efefef]/70 text-sm">
                Available for freelance work
              </li>
              <li>
                <button className="mt-2 bg-[#d0f309] hover:bg-[#bce000] text-black font-medium text-sm px-6 py-2.5 rounded-full transition-colors">
                  Let's Talk →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#efefef]/50 text-sm">
            © {new Date().getFullYear()} ZL Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#efefef]/50 hover:text-[#d0f309] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#efefef]/50 hover:text-[#d0f309] text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
