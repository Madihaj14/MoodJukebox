"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Flame, Music, PartyPopper, Smile, Cloud } from "lucide-react";
import type { Mood } from "@/lib/spotify";

interface MoodBackgroundProps {
  mood?: Mood;
}

export function MoodBackground({ mood }: MoodBackgroundProps) {
  const [bgClass, setBgClass] = useState("from-slate-900 to-slate-800");
  
  useEffect(() => {
    switch (mood) {
      case "romantic":
        setBgClass("from-rose-950/30 to-pink-950/30");
        break;
      case "happy":
        setBgClass("from-yellow-950/30 to-amber-950/30");
        break;
      case "sad":
        setBgClass("from-blue-950/30 to-indigo-950/30");
        break;
      case "motivational":
        setBgClass("from-green-950/30 to-emerald-950/30");
        break;
      case "party":
        setBgClass("from-purple-950/30 to-fuchsia-950/30");
        break;
      default:
        setBgClass("from-slate-900 to-slate-800");
    }
  }, [mood]);

  const floatingAnimation = {
    y: [0, -200, -400, -600, -800, 0],
    x: [0, 20, 0, -20, 0],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    }
  };

  const waveAnimation = {
    y: [0, -200, -400, -600, -800, 0],
    x: [0, 30, 0, -30, 0],
    rotate: [0, 360],
    transition: {
      duration: 25,
      ease: "linear",
      repeat: Infinity,
    }
  };

  const rainAnimation = {
    y: ["-100%", "100vh"],
    x: [0, 100],
    opacity: [0.4, 0],
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    }
  };

  const flameAnimation = {
    y: [0, -200, -400, -600, -800, 0],
    x: [0, 40, 0, -40, 0],
    rotate: [0, 360],
    scale: [1, 1.2, 1, 1.2, 1],
    transition: {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
    }
  };

  const partyAnimation = {
    y: [0, -200, -400, -600, -800, 0],
    x: [0, 50, 0, -50, 0],
    rotate: [0, 360],
    scale: [1, 1.2, 1, 1.2, 1],
    transition: {
      duration: 35,
      ease: "linear",
      repeat: Infinity,
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mood || "default"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed inset-0 -z-10 bg-gradient-to-br transition-all duration-500 overflow-hidden",
          bgClass
        )}
      >
        {/* Floating Musical Notes (Always visible) */}
        <div className="absolute inset-0">
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
              key={`note-${i}`}
              className="absolute"
              initial={{ opacity: 0.4 }}
              animate={floatingAnimation}
              transition={{
                duration: 20,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${(i % 12) * 8.33}%`,
                top: `${Math.floor(i / 12) * 20}%`,
              }}
            >
              <Music className="w-6 h-6 text-white/20" />
            </motion.div>
          ))}
        </div>

        {/* Mood-specific animated elements */}
        {mood === "romantic" && (
          <div className="absolute inset-0">
            {Array.from({ length: 48 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-rose-500/40"
                animate={waveAnimation}
                transition={{
                  duration: 25,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  left: `${(i % 12) * 8.33}%`,
                  top: `${Math.floor(i / 12) * 25}%`,
                  fontSize: "2rem",
                }}
              >
                ♥
              </motion.div>
            ))}
          </div>
        )}

        {mood === "happy" && (
          <div className="absolute inset-0">
            {Array.from({ length: 48 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                animate={waveAnimation}
                transition={{
                  duration: 25,
                  delay: i * 0.15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  left: `${(i % 12) * 8.33}%`,
                  top: `${Math.floor(i / 12) * 25}%`,
                }}
              >
                <Smile className="w-8 h-8 text-yellow-500/40" />
              </motion.div>
            ))}
          </div>
        )}

        {mood === "sad" && (
          <div className="absolute inset-0">
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-blue-500/40"
                animate={rainAnimation}
                transition={{
                  duration: 2,
                  delay: i * 0.05,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  left: `${(i % 20) * 5}%`,
                  fontSize: "0.5rem",
                }}
              >
                💧
              </motion.div>
            ))}
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={`cloud-${i}`}
                className="absolute"
                animate={{
                  x: [-100, window.innerWidth + 100],
                }}
                transition={{
                  duration: 30,
                  delay: i * 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  left: `${i * 10}%`,
                  top: `${(i % 6) * 15}%`,
                }}
              >
                <Cloud className="w-12 h-12 text-blue-400/30" />
              </motion.div>
            ))}
          </div>
        )}

        {mood === "motivational" && (
          <div className="absolute inset-0">
            {Array.from({ length: 48 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                animate={flameAnimation}
                transition={{
                  duration: 30,
                  delay: i * 0.15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  left: `${(i % 12) * 8.33}%`,
                  top: `${Math.floor(i / 12) * 25}%`,
                }}
              >
                <Flame className="w-8 h-8 text-emerald-500/40" />
              </motion.div>
            ))}
          </div>
        )}

        {mood === "party" && (
          <div className="absolute inset-0">
            {Array.from({ length: 48 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                animate={partyAnimation}
                transition={{
                  duration: 35,
                  delay: i * 0.15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  left: `${(i % 12) * 8.33}%`,
                  top: `${Math.floor(i / 12) * 25}%`,
                }}
              >
                <PartyPopper className="w-8 h-8 text-purple-500/40" />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}