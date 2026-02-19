import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Lock, 
  Play, 
  FileText, 
  Download, 
  MessageSquare, 
  ChevronDown, 
  ChevronRight,
  MoreVertical
} from 'lucide-react';

const LessonView = () => {
  const [activeTab, setActiveTab] = useState('transcript');
  
  return (
    <div className="flex h-[calc(100vh-56px)]"> {/* Subtract topbar height */}
      
      {/* LEFT SIDEBAR - 280px Fixed */}
      <aside className="w-[280px] bg-academics-surface border-r border-academics-border flex flex-col shrink-0 overflow-y-auto hidden lg:flex">
        <div className="p-6 border-b border-academics-border">
          <h2 className="font-sans font-semibold text-sm text-academics-text mb-2">Creating Viral Content</h2>
          <div className="flex justify-between items-center text-xs text-academics-text-muted mb-1.5">
             <span>33% Complete</span>
             <span>12/36 Lessons</span>
          </div>
          <div className="h-[2px] w-full bg-gray-100 rounded-full overflow-hidden">
             <div className="h-full bg-academics-accent w-1/3"></div>
          </div>
        </div>

        {/* Modules List */}
        <div className="flex-1 py-4">
           <ModuleGroup title="Module 1: The Foundation" isOpen={true}>
              <LessonItem title="Introduction to Hooks" duration="8m" status="completed" code="1.1" />
              <LessonItem title="Benefits of Viral Hooks" duration="Playing" status="active" code="1.2.1" />
              <LessonItem title="Emotional Triggers" duration="14m" status="locked" code="1.2.2" />
           </ModuleGroup>
           
           <ModuleGroup title="Module 2: Scripting Mastery" isOpen={false} />
           <ModuleGroup title="Module 3: Production Value" isOpen={false} />
        </div>
      </aside>

      {/* MAIN CONTENT - Fluid */}
      <main className="flex-1 overflow-y-auto bg-academics-bg">
        <div className="max-w-[1000px] mx-auto">
           
           {/* Video Player Area */}
           <div className="w-full aspect-video bg-black relative group">
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-60"
                alt="Video thumbnail"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Play fill="white" className="text-white ml-1" size={32} />
                 </button>
              </div>
              
              {/* Fake Controls */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent flex items-end px-6 pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-full space-y-2">
                    <div className="h-1 w-full bg-white/30 rounded-full cursor-pointer overflow-hidden">
                       <div className="h-full w-1/4 bg-academics-accent"></div>
                    </div>
                    <div className="flex justify-between text-white text-xs font-medium">
                       <span>02:15 / 12:30</span>
                       <span>Auto 1080p</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Lesson Content */}
           <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-8">
                 <div className="max-w-2xl">
                    <div className="text-academics-text-muted font-mono text-sm mb-2">1.2.1</div>
                    <h1 className="font-serif text-3xl md:text-4xl text-academics-text mb-4">Benefits of Viral Hooks</h1>
                    <p className="text-academics-text-secondary leading-relaxed">
                       Learn the psychology behind the first 3 seconds of your video and why it matters more than anything else. We'll breakdown the "Curiosity Gap" and how to leverage it.
                    </p>
                 </div>
                 
                 {/* Resources Card - Desktop */}
                 <div className="hidden xl:block w-64 bg-academics-surface border border-academics-border rounded-xl p-4 shrink-0 ml-8">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-academics-text-muted mb-4">Lesson Resources</h3>
                    <div className="space-y-3">
                       <ResourceItem name="Hook_Templates.pdf" />
                       <ResourceItem name="Viral Video Database" type="link" />
                    </div>
                 </div>
              </div>

              {/* Tabs */}
              <div className="border-b border-academics-border mb-8">
                 <div className="flex gap-8">
                    <TabLabel active={activeTab === 'transcript'} onClick={() => setActiveTab('transcript')}>Transcript</TabLabel>
                    <TabLabel active={activeTab === 'notes'} onClick={() => setActiveTab('notes')}>Notes & Highlights</TabLabel>
                    <TabLabel active={activeTab === 'discussion'} onClick={() => setActiveTab('discussion')}>Discussion</TabLabel>
                 </div>
              </div>

              {/* Tab Content */}
              <div className="max-w-3xl">
                 {activeTab === 'transcript' && (
                    <div className="space-y-6 text-academics-text leading-relaxed">
                       <TranscriptSegment time="00:00" text="Welcome back. In this lesson, we're diving deep into the 'Hook'. Now, you might think a hook is just a catchy title, but it's actually a psychological trigger." />
                       <TranscriptSegment time="00:45" text="When a user is scrolling through their feed, their brain is in a passive state. Your job is to jolt them out of that state. We call this 'Pattern Interruption'." />
                       <TranscriptSegment time="01:20" text="Think about the last video you stopped to watch. Why did you stop? Was it a movement? A question? A shocking statement? That's the power of a well-crafted hook." />
                    </div>
                 )}
              </div>
              
              {/* Next Lesson CTA */}
              <div className="mt-16 flex justify-end">
                 <button className="bg-academics-text text-white h-12 px-8 rounded-full font-semibold flex items-center gap-2 hover:bg-black/80 transition-colors">
                    Next Lesson <ChevronRight size={18} />
                 </button>
              </div>

           </div>
        </div>
      </main>
    </div>
  );
};

const ModuleGroup = ({ title, isOpen, children }) => (
  <div className="mb-2">
     <button className="w-full flex justify-between items-center px-6 py-3 hover:bg-gray-50 text-left group">
        <span className={`text-sm font-medium ${isOpen ? 'text-academics-text' : 'text-academics-text-secondary'}`}>{title}</span>
        <ChevronDown size={14} className={`text-academics-text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`} />
     </button>
     {isOpen && <div>{children}</div>}
  </div>
);

const LessonItem = ({ title, duration, status, code }) => {
  const isActive = status === 'active';
  const isLocked = status === 'locked';
  
  return (
    <div className={`
      relative px-6 py-3 flex items-start gap-3 cursor-pointer transition-colors
      ${isActive ? 'bg-[#F0FFFE]' : 'hover:bg-[#F7F6F2]'}
      ${isLocked ? 'opacity-50 cursor-not-allowed' : ''}
    `}>
      {isActive && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-academics-accent"></div>}
      
      <div className="mt-0.5 shrink-0">
         {status === 'completed' && <CheckCircle2 size={16} className="text-academics-success" />}
         {isActive && <Circle size={16} className="text-academics-accent fill-academics-accent" />}
         {isLocked && <Lock size={16} className="text-academics-text-muted" />}
      </div>
      
      <div className="flex-1">
         <div className="flex justify-between items-baseline mb-0.5">
            <span className="text-[10px] font-mono text-academics-text-muted">{code}</span>
            <span className="text-[10px] text-academics-text-muted">{duration}</span>
         </div>
         <h4 className={`text-sm ${isActive ? 'font-medium text-academics-text' : 'text-academics-text-secondary'}`}>
            {title}
         </h4>
      </div>
       
      {isActive && <MoreVertical size={14} className="text-academics-accent shrink-0 mt-1 opacity-0 group-hover:opacity-100" />} 
    </div>
  );
};

const ResourceItem = ({ name, type = 'file' }) => (
  <div className="flex items-center gap-2 group cursor-pointer">
     <div className="p-1.5 bg-gray-100 rounded text-academics-text-secondary group-hover:bg-gray-200">
        {type === 'file' ? <FileText size={14} /> : <Download size={14} />}
     </div>
     <span className="text-sm text-academics-text-secondary group-hover:text-academics-text group-hover:underline decoration-academics-border underline-offset-4 line-clamp-1">{name}</span>
  </div>
);

const TabLabel = ({ active, children, onClick }) => (
   <button 
     onClick={onClick}
     className={`text-sm font-medium pb-4 border-b-2 transition-colors px-1 ${active ? 'border-academics-accent text-academics-text' : 'border-transparent text-academics-text-muted hover:text-academics-text-secondary'}`}
   >
      {children}
   </button>
);

const TranscriptSegment = ({ time, text }) => (
   <div className="flex gap-4 group">
      <span className="text-xs font-mono text-academics-accent font-medium pt-1 cursor-pointer hover:underline shrink-0">{time}</span>
      <p className="text-[15px] group-hover:text-black text-academics-text/90 transition-colors">{text}</p>
   </div>
);

export default LessonView;
