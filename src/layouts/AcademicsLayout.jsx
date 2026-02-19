import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Bell, Moon, User, ChevronLeft } from 'lucide-react';

const AcademicsLayout = () => {
  return (
    <div className="min-h-screen bg-academics-bg text-academics-text font-sans antialiased selection:bg-academics-accent selection:text-black">
      {/* Minimal Top Bar - 56px height */}
      <header className="h-14 bg-academics-surface border-b border-academics-border flex items-center justify-between px-6 sticky top-0 z-50">
        
        {/* Left: Branding and Back to Site */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 text-academics-text/60 hover:text-academics-text transition-colors text-xs font-bold uppercase tracking-widest">
            <ChevronLeft size={16} />
            Back to Site
          </Link>
          <Link to="/academics" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-academics-text rounded-md flex items-center justify-center text-white font-bold text-xs">N</div>
            <span className="font-serif font-bold tracking-tight text-lg">NexGen Academy</span>
          </Link>
        </div>

        {/* Center: Breadcrumbs (Placeholder) */}
        <div className="hidden md:flex items-center text-sm">
           <span className="text-academics-text-muted">Academics</span>
           <span className="mx-2 text-academics-border">/</span>
           <span className="font-medium">Dashboard</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
            <div className="w-2 h-2 rounded-full bg-academics-success animate-pulse"></div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-academics-text-secondary">Studio Mode</span>
          </div>

          <button className="relative p-1.5 hover:bg-gray-100 rounded-full transition-colors">
            <Bell size={18} className="text-academics-text-secondary" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
          </button>

           <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-academics-border cursor-pointer">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nikshay" alt="User" />
           </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1200px] mx-auto p-6 md:p-10">
        <Outlet />
      </main>
      
    </div>
  );
};

export default AcademicsLayout;
