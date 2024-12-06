"use client";

import React from "react";
import { Handle, Position } from "reactflow";
import { motion } from "motion/react";

export function AnimatedNode({ data }: { data: any }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragElastic={0.3}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      className="relative group touch-none"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-xl blur-md"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative bg-[#14151F]/90 backdrop-blur-sm rounded-xl border border-white/10 p-4 min-w-[120px]">
        <Handle
          type="target"
          position={Position.Top}
          className="!bg-purple-500 !w-3 !h-3 !border-2 !border-purple-300/20"
        />
        <Handle
          type="source"
          position={Position.Bottom}
          className="!bg-purple-500 !w-3 !h-3 !border-2 !border-purple-300/20"
        />

        <div className="flex items-start gap-3">
          {data.image && (
            <motion.img
              src={data.image}
              alt={data.label}
              className="w-8 h-8 rounded-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
            />
          )}

          <div className="flex-1">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-medium text-white/90 mb-1"
            >
              {data.label}
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
              className="text-xs px-2 py-1 rounded-md bg-purple-500/10 text-purple-400 inline-block"
            >
              {data.type}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
