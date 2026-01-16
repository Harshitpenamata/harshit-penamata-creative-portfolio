import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="label-text text-primary mb-8 block"
        >
          About
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-heading mb-8">
              Where Art Meets Engineering
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a Creative Technologist working at the intersection of 
                cinematic storytelling and real-time technology. With a hybrid 
                background spanning traditional filmmaking and cutting-edge 
                virtual production, I bring a unique perspective to every project.
              </p>
              <p>
                My expertise lies in building real-time pipelines, LED volume 
                workflows, and creative tooling that empowers storytellers. 
                From feature films to immersive experiences, I specialize in 
                translating creative vision into technical reality.
              </p>
              <p>
                I believe the best technology is invisible—it should amplify 
                creativity, not constrain it. Every pipeline I build, every 
                workflow I design, serves one purpose: enabling artists to 
                focus on what matters most—the story.
              </p>
            </div>
          </motion.div>

          {/* Portrait/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-secondary/50 rounded-sm overflow-hidden">
              {/* Placeholder for portrait - add your image here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="label-text text-muted-foreground">
                  Portrait / Visual
                </span>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
