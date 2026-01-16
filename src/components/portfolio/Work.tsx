import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

// Replace these video IDs with your actual YouTube video IDs
const videos = [
  {
    id: 1,
    title: "Virtual Production Showreel",
    videoId: "dQw4w9WgXcQ", // YouTube video ID
    category: "Feature Film",
    description: "LED Volume Virtual Production showcase with cutting-edge technology",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Motion Capture Demo",
    videoId: "dQw4w9WgXcQ",
    category: "Motion Capture",
    description: "Creature Performance Capture workflow and real-time animation",
    duration: "4:20",
  },
  {
    id: 3,
    title: "Real-Time Environment",
    videoId: "dQw4w9WgXcQ",
    category: "Real-Time Previs",
    description: "Real-time environment development using Unreal Engine",
    duration: "5:12",
  },
  {
    id: 4,
    title: "Broadcast Virtual Set",
    videoId: "dQw4w9WgXcQ",
    category: "Virtual Production",
    description: "Live broadcast virtual set demonstration with LED walls",
    duration: "2:58",
  },
  {
    id: 5,
    title: "AR Experience",
    videoId: "dQw4w9WgXcQ",
    category: "XR / AR / VR",
    description: "Medical AR application showcase and interactive features",
    duration: "6:30",
  },
];

export const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentVideo = videos[currentIndex];

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
          className="section-heading mb-16"
        >
          Video Showcase
        </motion.h2>

        {/* Custom Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Carousel Wrapper */}
          <div className="relative overflow-hidden bg-card border border-border shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                {/* Video Thumbnail */}
                <div 
                  className="relative aspect-video bg-secondary/50 cursor-pointer group overflow-hidden"
                  onClick={() => setSelectedVideo(currentVideo.videoId)}
                >
                  {/* YouTube Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${currentVideo.videoId}/maxresdefault.jpg`}
                    alt={currentVideo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${currentVideo.videoId}/hqdefault.jpg`;
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 transition-all duration-500" />
                      <div className="relative w-20 h-20 md:w-24 md:h-24 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300 shadow-2xl">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1 fill-current" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 text-sm text-white font-medium">
                    {currentVideo.duration}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1.5 text-sm text-primary-foreground font-medium uppercase tracking-wider">
                    {currentVideo.category}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-8 md:p-10 bg-card">
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                    {currentVideo.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
                    {currentVideo.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-sm hover:bg-white/40 dark:hover:bg-black/60 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-white/50 dark:focus:ring-black/50"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-sm hover:bg-white/40 dark:hover:bg-black/60 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-white/50 dark:focus:ring-black/50"
              aria-label="Next video"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentIndex}
                />
              ))}
            </div>
          </div>

          {/* Helper Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            Click to watch • Auto-plays every 5 seconds • {currentIndex + 1} / {videos.length}
          </motion.p>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="relative w-full max-w-6xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 md:-right-12 md:top-0 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 group z-10"
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Video Player */}
              <div className="w-full h-full bg-black shadow-2xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                  title="Video Player"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
