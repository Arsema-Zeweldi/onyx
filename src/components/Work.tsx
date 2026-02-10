import React, { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Elelyale Shilmat",
    category: "Voting Webapp",
    description: "A voting website for an award ceremony. Built for Habesha Brewery Sc.",
    tags: ["React", "Laravel"],
    image: "habesha.png",
    url: "https://elelyaleshilmat.com",
  },
  {
    id: "02",
    title: "Cozy Restaurant",
    category: "Webapp",
    description:
      "A menu management system for a local restaurant.",
    tags: ["Vue", "Laravel"],
    image: "cozy.png",
    url: "https://cozy.onyx.et",
  },
  {
    id: "03",
    title: "DigitalLink",
    category: "Website",
    description:
      "A landing page for a digital marketing company.",
    tags: ["Vue"],
    image: "digitallink.png",
    url: "https://digitallink.et",
  },
];

const Work: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the container
  // offset: ["start start", "end end"] ensures the animation runs precisely
  // while the container is pinned to the viewport.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll progress to horizontal movement
  // Maps 0 (start of section) -> 1 (end of section) to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section
      id="work"
      ref={targetRef}
      className="relative h-[300vh] bg-navy-950"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        {/* Motion Track */}
        <motion.div
          style={{ x }}
          className="flex gap-10 md:gap-20 px-6 md:px-20 items-center"
        >
          {/* Title Slide */}
          <div className="min-w-[90vw] md:min-w-[40vw] flex flex-col justify-center shrink-0 px-4">
            <div className="w-20 h-1 bg-neon mb-8" />
            <h2 className="text-5xl md:text-8xl font-extrabold text-white leading-none mb-6">
              Selected <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-neon to-white">
                Works
              </span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-sm">
              A showcase of our most recent technical achievements and creative
              breakthroughs.
            </p>
            <div className="mt-8 flex items-center gap-4 text-slate-500 text-sm font-mono">
              <span>SCROLL TO EXPLORE</span>
              <div className="w-12 h-px bg-slate-700" />
            </div>
          </div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative min-w-[85vw] md:min-w-200 h-[60vh] md:h-[70vh] bg-navy-900 rounded-4xl overflow-hidden border border-white/5 flex shrink-0 transition-transform duration-500 hover:scale-[1.01] cursor-pointer"
            >
              {/* External Link Icon - Top Right */}
              <div className="absolute top-8 right-8 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-neon group-hover:text-navy-950 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                <ExternalLink size={20} />
              </div>

              {/* Content Overlay (Left) */}
              <div className="absolute top-0 left-0 w-full h-full z-20 p-8 md:p-12 flex flex-col justify-between bg-linear-to-r from-navy-950/90 via-navy-950/40 to-transparent md:w-2/3">
                <div>
                  <span className="text-neon font-mono text-sm tracking-widest border border-neon/30 px-3 py-1 rounded-full bg-neon/10">
                    {project.id} — {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 text-lg mb-8 max-w-md drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2 py-1 bg-black/50 backdrop-blur text-slate-300 rounded border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View Project Link Text */}
                  <div className="flex items-center gap-2 text-neon font-mono text-sm opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 delay-150">
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight size={16} className="animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Image Background with Parallax Hover */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </a>
          ))}

          {/* "View All" End Card */}
          {/* <div className="min-w-75 md:min-w-100 h-[60vh] md:h-[70vh] flex flex-col items-center justify-center shrink-0 group cursor-pointer px-10">
            <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-neon group-hover:border-neon transition-all duration-300">
              <ArrowUpRight
                size={32}
                className="text-white group-hover:text-navy-950"
              />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">
              View All Projects
            </h3>
            <p className="text-slate-500">We have more to show you.</p>
          </div> */}
        </motion.div>
      </div>

      {/* Mobile Fallback (Native Horizontal Scroll) */}
      <div className="lg:hidden absolute inset-0 bg-navy-950 z-30 overflow-y-auto">
        <div className="px-6 py-20">
          <h2 className="text-4xl font-bold mb-10">Selected Work</h2>
          <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-900 rounded-2xl overflow-hidden border border-white/10 block cursor-pointer hover:border-white/20 transition-colors"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-neon text-xs font-mono uppercase">
                      {project.category}
                    </span>
                    <span className="text-slate-500 text-xs font-mono">
                      {project.id}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-navy-950 rounded text-[10px] text-slate-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
