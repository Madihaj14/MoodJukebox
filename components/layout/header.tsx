"use client";

import { Music } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header 
      className="border-b border-border bg-background sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Music className="h-6 w-6 text-primary" />
          </motion.div>
          <h1 className="text-xl font-bold tracking-wide">MoodJukebox</h1>
        </div>
      </div>
    </motion.header>
  );
}