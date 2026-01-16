import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Film,
  MonitorPlay,
  PersonStanding,
  Lightbulb,
  Gamepad2,
  Code,
  Glasses,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Film,
    title: "CG & VFX for Film and Advertising",
    description:
      "Full-service CG and visual effects production for feature films, commercials, and branded content.",
  },
  {
    icon: MonitorPlay,
    title: "Virtual Production",
    description:
      "LED volume workflows, real-time pipelines, camera tracking, and on-set visualization.",
  },
  {
    icon: PersonStanding,
    title: "Motion Capture for 3D Animation",
    description:
      "Body and facial performance capture, data cleanup, and integration into animation pipelines.",
  },
  {
    icon: Lightbulb,
    title: "Creative Technology Consulting",
    description:
      "Strategic guidance on emerging technologies and innovative production workflows.",
  },
  {
    icon: Gamepad2,
    title: "Real-Time Visualization & Unreal Workflows",
    description:
      "Unreal Engine development for previs, virtual art direction, and final-pixel delivery.",
  },
  {
    icon: Code,
    title: "Pipeline & Tooling",
    description:
      "Python automation, custom tools, and pipeline development for production efficiency.",
  },
  {
    icon: Glasses,
    title: "AR/VR Solutions",
    description:
      "Immersive applications for enterprise, education, medical, and architectural visualization.",
  },
  {
    icon: GraduationCap,
    title: "Training & Curriculum Design",
    description:
      "Unreal Engine instruction, workshop development, and educational content creation.",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="label-text text-primary mb-8 block"
        >
          Services
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading mb-16 max-w-3xl"
        >
          End-to-End Creative Technology
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group p-6 bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <service.icon
                size={32}
                className="text-primary mb-6 group-hover:scale-110 transition-transform"
              />
              <h3 className="font-serif text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
