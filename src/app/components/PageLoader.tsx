import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import LightPillar from "./LightPillar";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050302] overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <LightPillar
              topColor="#c0ae9c"
              bottomColor="#bfaa9a"
              intensity={1.1}
              rotationSpeed={1}
              interactive={false}
              glowAmount={0.002}
              pillarWidth={3}
              pillarHeight={0.4}
              noiseIntensity={0.5}
              pillarRotation={92}
              mixBlendMode="screen"
              quality="high"
            />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -10 }}
              transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
            >
              <div
                className="text-4xl md:text-5xl font-mono text-[#f0e8dc] tracking-[0.4em] uppercase"
                style={{
                  textShadow: "0 0 15px rgba(192, 174, 156, 0.5), 0 0 30px rgba(192, 174, 156, 0.3)",
                  letterSpacing: "0.2em",
                  marginLeft: "0.2em" // offset for letter-spacing to perfectly center
                }}
              >
                DM
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
