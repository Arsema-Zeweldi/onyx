import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  TrendingUp,
  Users,
  Globe,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Counter Animation
  const [revenue, setRevenue] = useState(0);
  useEffect(() => {
    const controls = animate(0, 124500, {
      duration: 2,
      onUpdate: (value) => setRevenue(Math.floor(value)),
      ease: "circOut",
    });
    return controls.stop;
  }, []);

  return (
    <section
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-navy-950 selection:bg-neon selection:text-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Giant Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden flex justify-center z-0">
        <span className="text-[20vw] font-bold leading-none tracking-tighter whitespace-nowrap text-white opacity-[0.02]">
          FUTURE
        </span>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-175 h-175 bg-neon/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-[10%] right-[5%] w-125 h-125 bg-cyan-400/10 rounded-full blur-[100px] animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
            Building <br />
            <span className="font-cursive text-neon text-6xl sm:text-7xl lg:text-8xl relative inline-block transform -rotate-2 text-glow">
              Futures
            </span>{" "}
            <br />
            in Tech
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
            We engineer digital experiences that defy expectations. Placeholder
            Labs bridges the gap between complex backend architecture and
            stunning frontend design.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#contact"
              className="px-8 py-4 bg-neon text-navy-950 font-bold rounded-full hover:bg-white transition-all duration-300 hover:scale-105 flex items-center gap-2 box-glow"
            >
              Get Started <ArrowRight size={18} />
            </a>
            <button className="px-8 py-4 bg-transparent border border-slate-700 text-white font-medium rounded-full hover:border-neon hover:text-neon transition-all duration-300 flex items-center gap-2 group">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                <Play size={10} className="fill-current" />
              </div>
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Visual Content - Business Impact Showcase */}
        <motion.div 
          className="lg:col-span-5 relative h-[600px] w-full flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Client Success Grid */}
          <div className="relative w-full h-full grid grid-cols-3 gap-4 p-8">
            
            {/* Card 1 - Revenue Growth */}
            <motion.div
              className="col-span-2 row-span-1 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-400/20 rounded-2xl p-6 flex flex-col justify-between"
              style={{ 
                y: useTransform(mouseY, [-0.5, 0.5], [-10, 10]),
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-start justify-between">
                <div className="p-3 bg-green-400/20 rounded-xl">
                  <TrendingUp className="text-green-400" size={24} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">+{Math.floor(revenue / 1000)}%</div>
                  <div className="text-xs text-green-300">Revenue Increase</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm font-semibold text-white mb-2">Grow Your Business</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Our clients see measurable growth within 90 days
                </p>
              </div>
            </motion.div>

            {/* Card 2 - Customer Satisfaction */}
            <motion.div
              className="row-span-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 flex flex-col justify-between"
              style={{ 
                y: useTransform(mouseY, [-0.5, 0.5], [15, -15]),
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div>
                <div className="p-3 bg-purple-400/20 rounded-xl w-fit mb-4">
                  <Activity className="text-purple-400" size={24} />
                </div>
                <div className="text-sm font-semibold text-white mb-4">Happy Customers</div>
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.svg
                      key={star}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.6 + (star * 0.1), type: "spring" }}
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </motion.svg>
                  ))}
                </div>
                <div className="text-2xl font-bold text-white mb-1">4.9/5.0</div>
                <p className="text-[11px] text-slate-400">Average client rating across 100+ projects</p>
              </div>
            </motion.div>

            {/* Card 3 - Time to Market */}
            <motion.div
              className="col-span-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6"
              style={{ 
                y: useTransform(mouseY, [-0.5, 0.5], [-5, 5]),
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-400/20 rounded-xl">
                  <Globe className="text-cyan-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white mb-2">Launch Faster</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-cyan-400">6-8</span>
                    <span className="text-xs text-slate-400">weeks to launch</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Beat your competition to market with rapid delivery
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - Cost Savings */}
            <motion.div
              className="bg-gradient-to-br from-neon/10 to-cyan-400/10 backdrop-blur-sm border border-neon/20 rounded-2xl p-6 flex flex-col justify-center items-center text-center"
              style={{ 
                y: useTransform(mouseY, [-0.5, 0.5], [10, -10]),
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-4xl font-bold text-neon mb-1">40%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">Cost Savings</div>
              <p className="text-[10px] text-slate-500">vs. hiring in-house team</p>
            </motion.div>

            {/* Card 5 - Support */}
            <motion.div
              className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-sm border border-orange-400/20 rounded-2xl p-6 flex flex-col justify-center"
              style={{ 
                x: useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-400/20 rounded-lg">
                  <ShieldCheck className="text-orange-400" size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">24/7 Support</div>
                  <p className="text-[10px] text-slate-400">We've got your back</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] text-green-400 font-medium">Always Available</span>
              </div>
            </motion.div>

          </div>

          {/* Animated Connection Lines */}
          <svg className="absolute inset-0 pointer-events-none w-full h-full opacity-20">
            <motion.line 
              x1="33%" y1="33%" x2="66%" y2="50%" 
              stroke="#00F0FF" 
              strokeWidth="1" 
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
            <motion.line 
              x1="66%" y1="66%" x2="33%" y2="50%" 
              stroke="#a855f7" 
              strokeWidth="1" 
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.2 }}
            />
          </svg>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">
          Scroll to Explore
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-neon to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
