import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Shield, Camera } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto bg-[#0A0A0A] border border-white/5 rounded-[3rem] p-12 relative overflow-hidden">

        {/* Glow Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] pointer-events-none" />

        <div className="text-center mb-12">
          <div className="relative inline-block group">
            <img src="/user-avatar.png" className="w-32 h-32 rounded-full border-4 border-accent object-cover mb-4" alt="User" />
            <div className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
              <Camera className="text-accent" />
            </div>
          </div>
          <h2 className="text-3xl font-black uppercase text-white">Account Profile</h2>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Student ID: NX-99210</p>
        </div>

        <div className="space-y-6">
          <InfoRow icon={<User size={18} />} label="Full Name" value="Nikshay Balki" />
          <InfoRow icon={<Mail size={18} />} label="Email Address" value="nikshay.balki@nexgen.com" />
          <InfoRow icon={<Shield size={18} />} label="Account Status" value="Elite Member" isAccent />
        </div>

        <div className="mt-12 pt-12 border-t border-white/5 flex gap-4">
          <button className="flex-1 bg-white text-black font-black py-4 rounded-2xl uppercase text-[10px] tracking-widest">Edit Details</button>
          <button className="flex-1 border border-red-500/20 text-red-500 font-black py-4 rounded-2xl uppercase text-[10px] tracking-widest hover:bg-red-500/10 transition-colors">Logout</button>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ icon, label, value, isAccent }) => (
  <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5">
    <div className="flex items-center gap-4">
      <div className="text-gray-500">{icon}</div>
      <span className="text-xs font-black uppercase tracking-widest text-gray-500">{label}</span>
    </div>
    <span className={`font-bold ${isAccent ? 'text-accent' : 'text-white'}`}>{value}</span>
  </div>
);

export default ProfilePage;