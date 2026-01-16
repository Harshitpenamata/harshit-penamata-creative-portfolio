import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = {
  "Real-Time Engines": ["Unreal Engine", "Unity"],
  "3D & Animation": ["Maya", "3ds Max", "Houdini", "Blender"],
  "Compositing & Post": ["Nuke", "Premiere Pro", "Photoshop"],
  "Motion Capture": ["Xsens", "Faceware", "MotionBuilder"],
  "LED Volume & VP": ["Disguise", "Brompton", "RedSpy", "LED Volume Workflows"],
  "Development": ["Python", "Blueprint", "Pipeline Development"],
  "GenAI Tools": ["Sora", "Autodesk Flow", "Gemini", "Nano Banana"],
};

export const Capabilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="capabilities"
      className="section-padding bg-muted/30"
      ref={ref}
    >
      <div className="container-custom">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="label-text text-primary mb-8 block"
        >
          Capabilities
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading mb-16 max-w-3xl"
        >
          Tools & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Object.entries(capabilities).map(([category, tools], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * catIndex }}
            >
              <h3 className="label-text text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {tools.map((tool, toolIndex) => (
                  <motion.li
                    key={tool}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 * catIndex + 0.05 * toolIndex,
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    {tool}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
