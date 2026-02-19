
import React from 'react';

export function PlasticButton({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-block px-12 py-4 rounded-full text-black font-bold text-xl tracking-[0.2em] transition-all duration-200 active:scale-[0.98] flex justify-center items-center uppercase ${className}`}
      style={{
        background: `linear-gradient(to bottom, #00F7FF, #00C2C9)`, // Cyan gradient
        boxShadow: `
          0 2px 8px 0 rgba(0, 247, 255, 0.35), 
          0 1.5px 0 0 rgba(255,255,255,0.25) inset, 
          0 -2px 8px 0 rgba(0, 247, 255, 0.5) inset
        `,
      }}
    >
      <span className="relative z-10 drop-shadow-sm">{children}</span>
      
      {/* Glossy Top Highlight */}
      <span
        className="absolute left-1/2 top-0 z-20 w-[60%] h-2/5 -translate-x-1/2 rounded-t-full pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
          filter: "blur(1px)",
        }}
      />
      
      {/* Inner Ring/Border Glow */}
      <span
        className="absolute inset-0 z-0 rounded-full pointer-events-none"
        style={{
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.3) inset, 
            0 1.5px 0 0 rgba(255,255,255,0.3) inset, 
            0 -2px 8px 0 rgba(0, 247, 255, 0.3) inset
          `,
        }}
      />
    </button>
  );
}
