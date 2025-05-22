"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
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

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mood || "default"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed inset-0 -z-10 bg-gradient-to-br transition-all duration-500",
          bgClass
        )}
      />
    </AnimatePresence>
  );
}