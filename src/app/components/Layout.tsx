import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useEffect } from "react";

export function Layout() {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Optional: add a wrapper for styling that applies to all pages
  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#1e1e1e] font-['Inter',sans-serif] relative overflow-hidden">
      <Navbar />
      <main className="pt-[140px] pb-24 px-6 md:px-12 max-w-[1200px] mx-auto relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}