import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 1. BACKGROUND IMAGE - Perfect Sizing */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-center"
        style={{ 
          backgroundImage: `url('/hero-bg.jpg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%', 
          filter: 'brightness(0.35) contrast(1.1)' 
        }}
      />

      {/* 2. NEON CYAN RADIANCE */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-[1]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      {/* 3. MINIMALIST CONTENT */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-6xl"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.85] flex flex-col">
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">NEXGEN</span>
            <span 
              className="text-transparent" 
              style={{ 
                WebkitTextStroke: '1px #00F7FF',
                filter: 'drop-shadow(0 0 10px rgba(0,247,255,0.5))' 
              }}
            >
              ACADEMY
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 space-y-4">
          <p className="text-accent uppercase tracking-[0.5em] text-xs font-black">
            The Step-by-Step Masterclass
          </p>
          <h2 className="text-white text-xl md:text-3xl font-light italic leading-relaxed">
            "Take You from <span className="font-bold text-accent not-italic">Beginner to Pro</span>"
          </h2>
          <p className="text-white text-lg md:text-2xl font-black tracking-widest mt-4">
            CREATE <span className="text-accent">•</span> BUILD <span className="text-accent">•</span> MONETIZE
          </p>
          <p className="text-gray-400 text-sm md:text-base mt-2 max-w-2xl mx-auto font-medium">
             Your Content Like Never Before.
          </p>
        </motion.div>

        {/* 4. NEON BUTTONS */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(0,247,255,0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-black px-12 py-4 rounded-full font-black text-lg tracking-widest transition-all shadow-neon"
          >
            ENROLL NOW
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,247,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-accent/50 text-accent px-12 py-4 rounded-full font-black text-lg tracking-widest backdrop-blur-md transition-all"
          >
            VIEW COURSES
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 5. CONTACT BUTTON (Fixed) */}
      {/* <div className="fixed bottom-10 right-10 z-50">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="bg-[#25D366] text-white px-6 py-3 rounded-full flex items-center gap-3 font-bold shadow-2xl cursor-pointer"
        >
          <div className="w-2 h-2 bg-white rounded-full animate-ping" />
          Contact us
        </motion.div>
      </div> */}
    </section>
  );
};

export default Hero;































// import React, { useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const nexgenShaderSource = `#version 300 es
// precision highp float;
// out vec4 O;
// uniform vec2 resolution;
// uniform float time;
// #define FC gl_FragCoord.xy
// #define T time
// #define R resolution
// #define MN min(R.x,R.y)

// float rnd(vec2 p) {
//   p=fract(p*vec2(12.9898,78.233));
//   p+=dot(p,p+34.56);
//   return fract(p.x*p.y);
// }

// float noise(in vec2 p) {
//   vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
//   float a=rnd(i), b=rnd(i+vec2(1,0)), c=rnd(i+vec2(0,1)), d=rnd(i+1.);
//   return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
// }

// float fbm(vec2 p) {
//   float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
//   for (int i=0; i<5; i++) {
//     t+=a*noise(p);
//     p*=2.*m;
//     a*=.5;
//   }
//   return t;
// }

// float clouds(vec2 p) {
// 	float d=1., t=.0;
// 	for (float i=.0; i<3.; i++) {
// 		float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
// 		t=mix(t,d,a);
// 		d=a;
// 		p*=2./(i+1.);
// 	}
// 	return t;
// }

// void main(void) {
// 	vec2 uv=(FC-.5*R)/MN, st=uv*vec2(2,1);
// 	vec3 col=vec3(0);
// 	float bg=clouds(vec2(st.x+T*.2,-st.y));
// 	uv*=1.-.1*(sin(T*.1)*.5+.5);
// 	for (float i=1.; i<10.; i++) {
// 		uv+=.07*cos(i*vec2(.1+.01*i, .8)+i*i+T*.3+.1*uv.x);
// 		vec2 p=uv;
// 		float d=length(p);
// 		col+=.0015/d*(cos(sin(i)*vec3(0.0, 0.5, 1.0))+1.2); 
// 		float b=noise(i+p+bg*1.5);
// 		col+=.001*b/length(max(p,vec2(b*p.x*.02,p.y)));
// 		col=mix(col,vec3(bg*.05, bg*.15, bg*.2), d);
// 	}
// 	O=vec4(col,1);
// }`;

// const Hero = () => {
//   const canvasRef = useRef(null);
//   const rendererRef = useRef(null);

//   useEffect(() => {
//     if (!canvasRef.current) return;
//     const canvas = canvasRef.current;
//     const gl = canvas.getContext('webgl2');
//     if (!gl) return;

//     const dpr = window.devicePixelRatio || 1;
//     const resize = () => {
//       canvas.width = window.innerWidth * dpr;
//       canvas.height = window.innerHeight * dpr;
//       gl.viewport(0, 0, canvas.width, canvas.height);
//     };

//     const compile = (type, src) => {
//       const s = gl.createShader(type);
//       gl.shaderSource(s, src);
//       gl.compileShader(s);
//       return s;
//     };

//     const vs = compile(gl.VERTEX_SHADER, `#version 300 es
//       in vec4 position;
//       void main(){gl_Position=position;}`);
//     const fs = compile(gl.FRAGMENT_SHADER, nexgenShaderSource);
//     const program = gl.createProgram();
//     gl.attachShader(program, vs);
//     gl.attachShader(program, fs);
//     gl.linkProgram(program);
//     gl.useProgram(program);

//     const vertices = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);
//     const buffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
//     gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

//     const posLoc = gl.getAttribLocation(program, 'position');
//     gl.enableVertexAttribArray(posLoc);
//     gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

//     const resLoc = gl.getUniformLocation(program, 'resolution');
//     const timeLoc = gl.getUniformLocation(program, 'time');

//     const render = (time) => {
//       gl.uniform2f(resLoc, canvas.width, canvas.height);
//       gl.uniform1f(timeLoc, time * 0.001);
//       gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
//       rendererRef.current = requestAnimationFrame(render);
//     };

//     resize();
//     window.addEventListener('resize', resize);
//     rendererRef.current = requestAnimationFrame(render);

//     return () => {
//       window.removeEventListener('resize', resize);
//       cancelAnimationFrame(rendererRef.current);
//     };
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1, 
//       transition: { staggerChildren: 0.15, delayChildren: 0.4 } 
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1, 
//       transition: { duration: 0.8, ease: "easeOut" } 
//     },
//   };

//   return (
//     <section className="relative h-screen w-full flex flex-col justify-end md:justify-center overflow-hidden bg-black">
//       {/* 1. SHADER BACKGROUND */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full object-cover touch-none z-0"
//         style={{ filter: 'brightness(0.6) contrast(1.1)' }}
//       />

//       {/* 2. SUBTLE OVERLAYS */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-[1]" />

//       {/* 3. MINIMALIST CONTENT BOX */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 pb-20 md:pb-0"
//       >
//         <div className="max-w-4xl">
//             {/* Minimal Badge */}
//             <motion.div variants={itemVariants} className="mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="h-[1px] w-12 bg-accent shadow-neon" />
//                 <span className="text-accent text-[10px] font-black tracking-[0.6em] uppercase">
//                   EST. 2026
//                 </span>
//               </div>
//             </motion.div>

//             {/* Huge Clean Typography */}
//             <motion.div variants={itemVariants} className="mb-10">
//               <h1 className="text-7xl md:text-[10rem] font-black tracking-tight leading-[0.8] uppercase">
//                 <span className="text-white">NEXGEN</span>
//                 <br />
//                 <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>
//                   ACADEMY
//                 </span>
//               </h1>
//             </motion.div>

//             {/* Compressed Value Prop */}
//             <motion.div variants={itemVariants} className="mb-12 max-w-lg">
//               <p className="text-gray-400 text-sm md:text-lg leading-relaxed tracking-wide font-light border-l border-accent/20 pl-6">
//                 Redefining digital authority. Master the algorithm and build your empire with the world's most advanced content systems.
//               </p>
//             </motion.div>

//             {/* Precise Call to Actions */}
//             <motion.div variants={itemVariants} className="flex flex-row gap-6 items-center">
//               <motion.button 
//                 whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(0,247,255,0.4)" }}
//                 whileTap={{ scale: 0.98 }}
//                 className="bg-accent text-black px-10 py-4 rounded-sm font-black text-xs tracking-[0.3em] transition-all"
//               >
//                 ENROLL
//               </motion.button>

//               <motion.button 
//                 whileHover={{ x: 5, color: "#00F7FF" }}
//                 className="text-white/60 px-4 py-4 font-black text-xs tracking-[0.3em] flex items-center gap-4 transition-all"
//               >
//                 EXPLORE <span className="text-lg">→</span>
//               </motion.button>
//             </motion.div>
//         </div>
//       </motion.div>

//       {/* 4. SIDEBAR DECORATION (Adds to the minimalist aesthetic) */}
//       <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 items-center z-10">
//         <p className="rotate-90 text-[10px] text-white/20 tracking-[1em] uppercase whitespace-nowrap">
//           Scroll to Discover
//         </p>
//         <div className="w-[1px] h-32 bg-white/10 relative">
//             <motion.div 
//                 animate={{ top: ["0%", "100%"] }}
//                 transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
//                 className="absolute w-[2px] h-8 bg-accent shadow-neon left-[-0.5px]" 
//             />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

























// import React, { useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const nexgenShaderSource = `#version 300 es
// precision highp float;
// out vec4 O;
// uniform vec2 resolution;
// uniform float time;
// #define FC gl_FragCoord.xy
// #define T time
// #define R resolution
// #define MN min(R.x,R.y)

// float rnd(vec2 p) {
//   p=fract(p*vec2(12.9898,78.233));
//   p+=dot(p,p+34.56);
//   return fract(p.x*p.y);
// }

// float noise(in vec2 p) {
//   vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
//   float a=rnd(i), b=rnd(i+vec2(1,0)), c=rnd(i+vec2(0,1)), d=rnd(i+1.);
//   return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
// }

// float fbm(vec2 p) {
//   float t=.0, a=1.; mat2 m=mat2(1.,-.5,.2,1.2);
//   for (int i=0; i<5; i++) {
//     t+=a*noise(p);
//     p*=2.*m;
//     a*=.5;
//   }
//   return t;
// }

// float clouds(vec2 p) {
//  float d=1., t=.0;
//  for (float i=.0; i<3.; i++) {
//     float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);
//     t=mix(t,d,a);
//     d=a;
//     p*=2./(i+1.);
//  }
//  return t;
// }

// void main(void) {
//  vec2 uv=(FC-.5*R)/MN, st=uv*vec2(2,1);
//  vec3 col=vec3(0);
//  float bg=clouds(vec2(st.x+T*.2,-st.y));
//  uv*=1.-.1*(sin(T*.1)*.5+.5);
//  for (float i=1.; i<8.; i++) { // Optimized to 8 iterations for mobile performance
//     uv+=.07*cos(i*vec2(.1+.01*i, .8)+i*i+T*.3+.1*uv.x);
//     vec2 p=uv;
//     float d=length(p);
//     col+=.0015/d*(cos(sin(i)*vec3(0.0, 0.5, 1.0))+1.2); 
//     float b=noise(i+p+bg*1.5);
//     col+=.001*b/length(max(p,vec2(b*p.x*.02,p.y)));
//     col=mix(col,vec3(bg*.05, bg*.15, bg*.2), d);
//  }
//  O=vec4(col,1);
// }`;

// const Hero = () => {
//   const canvasRef = useRef(null);
//   const rendererRef = useRef(null);

//   useEffect(() => {
//     if (!canvasRef.current) return;
//     const canvas = canvasRef.current;
//     const gl = canvas.getContext('webgl2');
//     if (!gl) return;

//     // Use a lower DPR on mobile to maintain 60fps
//     const dpr = window.innerWidth < 768 ? 1 : window.devicePixelRatio || 1;
    
//     const resize = () => {
//       canvas.width = window.innerWidth * dpr;
//       canvas.height = window.innerHeight * dpr;
//       gl.viewport(0, 0, canvas.width, canvas.height);
//     };

//     const compile = (type, src) => {
//       const s = gl.createShader(type);
//       gl.shaderSource(s, src);
//       gl.compileShader(s);
//       return s;
//     };

//     const vs = compile(gl.VERTEX_SHADER, `#version 300 es
//       in vec4 position;
//       void main(){gl_Position=position;}`);
//     const fs = compile(gl.FRAGMENT_SHADER, nexgenShaderSource);
//     const program = gl.createProgram();
//     gl.attachShader(program, vs);
//     gl.attachShader(program, fs);
//     gl.linkProgram(program);
//     gl.useProgram(program);

//     const vertices = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);
//     const buffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
//     gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

//     const posLoc = gl.getAttribLocation(program, 'position');
//     gl.enableVertexAttribArray(posLoc);
//     gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

//     const resLoc = gl.getUniformLocation(program, 'resolution');
//     const timeLoc = gl.getUniformLocation(program, 'time');

//     const render = (time) => {
//       gl.uniform2f(resLoc, canvas.width, canvas.height);
//       gl.uniform1f(timeLoc, time * 0.001);
//       gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
//       rendererRef.current = requestAnimationFrame(render);
//     };

//     resize();
//     window.addEventListener('resize', resize);
//     rendererRef.current = requestAnimationFrame(render);

//     return () => {
//       window.removeEventListener('resize', resize);
//       cancelAnimationFrame(rendererRef.current);
//     };
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1, 
//       transition: { staggerChildren: 0.15, delayChildren: 0.4 } 
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1, 
//       transition: { duration: 0.8, ease: "easeOut" } 
//     },
//   };

//   return (
//     <section className="relative h-screen w-full flex flex-col justify-center md:justify-center overflow-hidden bg-black">
//       {/* 1. SHADER BACKGROUND */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full object-cover touch-none z-0"
//         style={{ filter: 'brightness(0.6) contrast(1.1)' }}
//       />

//       {/* 2. SUBTLE OVERLAYS */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-[1]" />

//       {/* 3. MINIMALIST CONTENT BOX */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16"
//       >
//         <div className="max-w-4xl">
//             {/* Minimal Badge */}
//             <motion.div variants={itemVariants} className="mb-6 md:mb-8">
//               <div className="flex items-center gap-3 md:gap-4">
//                 <div className="h-[1px] w-8 md:w-12 bg-accent shadow-neon" />
//                 <span className="text-accent text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.6em] uppercase">
//                   EST. 2026
//                 </span>
//               </div>
//             </motion.div>

//             {/* Huge Clean Typography - Responsive Sizes */}
//             <motion.div variants={itemVariants} className="mb-8 md:mb-10">
//               <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black tracking-tight leading-[0.9] md:leading-[0.8] uppercase">
//                 <span className="text-white drop-shadow-2xl">NEXGEN</span>
//                 <br />
//                 <span className="text-transparent" style={{ WebkitTextStroke: '1px #00F7FF' }}>
//                   ACADEMY
//                 </span>
//               </h1>
//             </motion.div>

//             {/* Compressed Value Prop */}
//             <motion.div variants={itemVariants} className="mb-10 md:mb-12 max-w-sm md:max-w-lg">
//               <p className="text-gray-300 md:text-gray-400 text-xs sm:text-sm md:text-lg leading-relaxed tracking-wide font-light border-l border-accent/30 pl-4 md:pl-6">
//                 Redefining digital authority. Master the algorithm and build your empire with the world's most advanced systems.
//               </p>
//             </motion.div>

//             {/* Precise Call to Actions */}
//             <motion.div variants={itemVariants} className="flex flex-row gap-4 md:gap-6 items-center">
//               <motion.button 
//                 whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(0,247,255,0.4)" }}
//                 whileTap={{ scale: 0.98 }}
//                 className="bg-accent text-black px-6 sm:px-10 py-3 md:py-4 rounded-sm font-black text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] transition-all"
//               >
//                 ENROLL
//               </motion.button>

//               <motion.button 
//                 whileHover={{ x: 5, color: "#00F7FF" }}
//                 className="text-white/80 px-2 md:px-4 py-3 md:py-4 font-black text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] flex items-center gap-2 md:gap-4 transition-all"
//               >
//                 EXPLORE <span className="text-sm md:text-lg">→</span>
//               </motion.button>
//             </motion.div>
//         </div>
//       </motion.div>

//       {/* 4. SIDEBAR DECORATION - Hidden on Mobile */}
//       <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-12 items-center z-10">
//         <p className="rotate-90 text-[10px] text-white/20 tracking-[1em] uppercase whitespace-nowrap">
//           Scroll to Discover
//         </p>
//         <div className="w-[1px] h-24 md:h-32 bg-white/10 relative">
//             <motion.div 
//                 animate={{ top: ["0%", "100%"] }}
//                 transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
//                 className="absolute w-[2px] h-6 md:h-8 bg-accent shadow-neon left-[-0.5px]" 
//             />
//         </div>
//       </div>

//       {/* 5. MOBILE SCROLL INDICATOR - Visible only on mobile */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center md:hidden opacity-40">
//         <div className="w-[1px] h-10 bg-gradient-to-b from-accent to-transparent" />
//       </div>
//     </section>
//   );
// };

// export default Hero;