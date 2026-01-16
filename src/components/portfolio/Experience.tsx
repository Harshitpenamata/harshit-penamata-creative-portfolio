import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const roles = [
  {
    title: "Unreal Technical Director / Real-Time Supervisor",
    description:
      "Leading real-time production teams on LED volume stages, managing Unreal Engine workflows, and ensuring final-pixel delivery meets creative and technical standards.",
    highlights: [
      "LED volume supervision",
      "Camera tracking systems",
      "Real-time lighting",
      "Final-pixel troubleshooting",
    ],
  },
  {
    title: "Creative Technologist (Virtual Production + XR)",
    description:
      "Bridging creative vision and technical execution across virtual production, augmented reality, and immersive experience projects.",
    highlights: [
      "Cross-disciplinary collaboration",
      "Emerging technology R&D",
      "Workflow innovation",
      "Creative problem-solving",
    ],
  },
  {
    title: "Unreal Instructor & Mentor",
    description:
      "Developing curriculum and delivering training for Unreal Engine, virtual production, and real-time workflows.",
    highlights: [
      "Curriculum design",
      "Workshop facilitation",
      "Student mentorship",
      "Educational content",
    ],
  },
  {
    title: "Technical Artist (Real-Time, AR/VR, Pipelines)",
    description:
      "Building tools, shaders, and pipeline solutions that connect art and engineering for optimal production efficiency.",
    highlights: [
      "Shader development",
      "Tool building",
      "Pipeline optimization",
      "Cross-platform workflows",
    ],
  },
  {
    title: "Mocap Technician (On-set Performance Capture)",
    description:
      "Operating motion capture systems for body and facial performance, ensuring clean data capture and seamless integration.",
    highlights: [
      "Body capture (Xsens)",
      "Facial capture (Faceware)",
      "Data cleanup",
      "Live retargeting",
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="label-text text-primary mb-8 block"
        >
          Experience
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading mb-16 max-w-3xl"
        >
          Roles & Expertise
        </motion.h2>

        <div className="space-y-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
                  {role.title}
                </h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </div>
              <div className="lg:col-span-3">
                <ul className="space-y-1">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-muted-foreground before:content-['—'] before:mr-2 before:text-primary"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
