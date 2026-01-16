import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Play } from "lucide-react";
import logoLandscape from "@/assets/logo-landscape.png";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="label-text text-primary mb-8 block"
        >
          Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading mb-8 max-w-3xl"
        >
          Let's Create Something Extraordinary
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg mb-12 max-w-2xl"
        >
          Whether you're exploring virtual production, need creative technology 
          consulting, or want to discuss your next project—I'd love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-6"
        >
          {/* Email */}
          <a
            href="mailto:hello@harshitpenamata.com"
            className="group flex items-center gap-3 px-6 py-4 bg-card border border-border hover:border-primary transition-colors"
          >
            <Mail
              size={20}
              className="text-primary group-hover:scale-110 transition-transform"
            />
            <span className="text-foreground">hello@harshitpenamata.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/harshitpenamata"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-card border border-border hover:border-primary transition-colors"
          >
            <Linkedin
              size={20}
              className="text-primary group-hover:scale-110 transition-transform"
            />
            <span className="text-foreground">LinkedIn</span>
          </a>

          {/* Showreel */}
          <a
            href="https://vimeo.com/harshitpenamata"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-card border border-border hover:border-primary transition-colors"
          >
            <Play
              size={20}
              className="text-primary group-hover:scale-110 transition-transform"
            />
            <span className="text-foreground">Showreel</span>
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="container-custom mt-20 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src={logoLandscape}
            alt="Avinya Interactive"
            className="h-8 w-auto opacity-60"
          />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Harshit Penamata. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};
