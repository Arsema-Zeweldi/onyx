import React from "react";

// PNG logos
const Logos = [
  { name: "Habesha Brewery", image: "habesha_logo.png" },
  { name: "Cozy", image: "cozy_logo.png" },
  { name: "DigitalLink", image: "digitallink_logo.png" },
];

interface LogoItemProps {
  logo: (typeof Logos)[0];
  idx: number;
}

const LogoItem: React.FC<LogoItemProps> = ({ logo, idx }) => (
  <div className="flex items-center gap-3 group/logo cursor-default opacity-40 hover:opacity-100 transition-opacity duration-300">
    <img
      src={logo.image}
      alt={logo.name}
      className="w-20 h-20 object-contain group-hover/logo:drop-shadow-[0_0_8px_rgba(221,255,0,0.8)] transition-all"
    />
    <span className="text-xl font-bold font-mono text-white uppercase tracking-tighter hidden md:block">
      {logo.name}
    </span>
  </div>
);

const TrustedBy: React.FC = () => {
  return (
    <section className="py-16 bg-navy-950 overflow-hidden border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h3 className="text-sm font-mono font-bold text-slate-500 uppercase tracking-widest">
          Trusted By
        </h3>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-navy-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-navy-950 to-transparent z-10" />

        {/* Infinite Scroll Wrapper 1 */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-20 py-4 min-w-full shrink-0 pr-20">
          {[...Logos, ...Logos].map((logo, idx) => (
            <LogoItem key={`1-${idx}`} logo={logo} idx={idx} />
          ))}
        </div>

        {/* Infinite Scroll Wrapper 2 (Duplicate) */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-20 py-4 min-w-full shrink-0 pr-20">
          {[...Logos, ...Logos].map((logo, idx) => (
            <LogoItem key={`2-${idx}`} logo={logo} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
