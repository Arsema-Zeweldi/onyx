import React from "react";
import SectionDivider from "./ui/SectionDivider";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Arsema G/Egziabher",
    role: "Front-end Developer",
    image: "arsema.jpg",
    linkedin: "https://www.linkedin.com/in/arsema-z-4a8422195/",
    email: "mailto:arsema@onyx.et",
  },
  {
    name: "Beamlak Aschalew",
    role: "Back-end Developer",
    image: "beamlak.jpg",
    linkedin: "https://www.linkedin.com/in/beamlak-aschalew",
    email: "mailto:beamlak@onyx.et",
  },
  {
    name: "Edlawit Taye",
    role: "Project Manager",
    image: "edel.jpg",
    linkedin: "",
    email: "mailto:edlawit@onyx.et",
  },
  {
    name: "Faiz Ahmed",
    role: "Back-end Developer",
    image: "faiz.jpg",
    linkedin: "https://www.linkedin.com/in/faiz-ahmed-mohammed-823b4432a",
    email: "mailto:faizam@onyx.et",
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="relative py-32 bg-navy-900">
      {/* Giant Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden flex justify-center z-0">
        <span className="text-[20vw] font-bold leading-none tracking-tighter whitespace-nowrap text-white opacity-[0.02]">
          COLLECTIVE
        </span>
      </div>

      <SectionDivider position="top" fill="#0A0E14" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Meet the <span className="text-neon font-cursive">Makers</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl">
              A collective of dreamers, builders, and creators obsessed with the
              future of technology.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-112.5 rounded-2xl overflow-hidden cursor-pointer shadow-xl"
            >
              {/* Background Image */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Content Container */}
              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="border-l-2 border-neon pl-4 mb-2">
                  <h3 className="text-2xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-neon font-mono text-xs uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>

                {/* Hidden Content revealed on hover */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <div className="p-2 rounded-full bg-white/10 hover:bg-neon hover:text-navy-950 transition-colors">
                        <a href={member.linkedin}>
                          <Linkedin size={16} />
                        </a>
                      </div>
                      <div className="p-2 rounded-full bg-white/10 hover:bg-neon hover:text-navy-950 transition-colors">
                        <a href={member.email}>
                          <Mail size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SectionDivider position="bottom" fill="#0A0E14" />
    </section>
  );
};

export default Team;
