import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const filters = [
  "All",
  "Feature Film",
  "Advertising",
  "Virtual Production",
  "XR / AR / VR",
  "Real-Time Previs",
  "Motion Capture",
];

const caseStudies = [
  {
    id: 1,
    title: "LED Volume Virtual Production",
    category: "Feature Film",
    description: "End-to-end virtual production for feature film using LED volumes, camera tracking, and real-time lighting.",
    role: "Technical Director",
    tools: ["Unreal Engine", "Disguise", "RedSpy", "Brompton"],
  },
  {
    id: 2,
    title: "Creature Performance Capture",
    category: "Motion Capture",
    description: "On-set body and facial mocap for creature characters, including data cleanup and animation integration.",
    role: "Mocap Technical Lead",
    tools: ["Xsens", "Faceware", "MotionBuilder", "Maya"],
  },
  {
    id: 3,
    title: "Real-Time Environment Build",
    category: "Real-Time Previs",
    description: "Real-time environment development for previs and virtual art direction on major production.",
    role: "Environment Artist",
    tools: ["Unreal Engine", "Quixel", "Houdini"],
  },
  {
    id: 4,
    title: "Broadcast Virtual Set",
    category: "Virtual Production",
    description: "Live broadcast virtual set using LED walls and real-time engine for corporate events.",
    role: "Real-Time Supervisor",
    tools: ["Unreal Engine", "Disguise", "NDI"],
  },
  {
    id: 5,
    title: "Medical AR Application",
    category: "XR / AR / VR",
    description: "Augmented reality application for medical training and visualization.",
    role: "Technical Artist",
    tools: ["Unity", "ARKit", "Blender"],
  },
  {
    id: 6,
    title: "Commercial Campaign",
    category: "Advertising",
    description: "High-end commercial campaign utilizing virtual production and CG integration.",
    role: "VFX Supervisor",
    tools: ["Unreal Engine", "Nuke", "Maya"],
  },
];

export const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

  const filteredStudies = caseStudies.filter(
    (study) => activeFilter === "All" || study.category === activeFilter
  );

  return (
    <section id="work" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="label-text text-primary mb-8 block"
        >
          Selected Work
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading mb-12"
        >
          Case Studies
        </motion.h2>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-sans transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onClick={() => setSelectedStudy(study.id)}
              className="group cursor-pointer bg-card border border-border p-6 card-hover"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-secondary/50 mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="label-text text-muted-foreground">
                    Project Image
                  </span>
                </div>
              </div>

              <span className="label-text text-primary mb-2 block">
                {study.category}
              </span>

              <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {study.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {study.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {study.role}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Case Study Modal - simplified for now */}
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedStudy(null)}
          >
            <div className="min-h-screen py-20">
              <div
                className="container-custom max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const study = caseStudies.find((s) => s.id === selectedStudy);
                  if (!study) return null;

                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <button
                        onClick={() => setSelectedStudy(null)}
                        className="label-text text-muted-foreground hover:text-foreground mb-8 block"
                      >
                        ← Back to Work
                      </button>

                      <span className="label-text text-primary mb-4 block">
                        {study.category}
                      </span>

                      <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                        {study.title}
                      </h2>

                      {/* Media placeholder */}
                      <div className="aspect-video bg-secondary/50 mb-8">
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="label-text text-muted-foreground">
                            Project Media
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                          <span className="label-text text-muted-foreground block mb-2">
                            Role
                          </span>
                          <p className="text-foreground">{study.role}</p>
                        </div>
                        <div className="md:col-span-2">
                          <span className="label-text text-muted-foreground block mb-2">
                            Tools
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {study.tools.map((tool) => (
                              <span
                                key={tool}
                                className="px-3 py-1 bg-secondary text-sm text-secondary-foreground"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <span className="label-text text-muted-foreground block mb-2">
                          Overview
                        </span>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
