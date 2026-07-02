"use client";

import { motion } from "framer-motion";

interface StepCardProps {
  step: number;
  icon: string;
  title: string;
  description: string;
  index?: number;
}

export default function StepCard({ step, icon, title, description, index = 0 }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center text-center group"
    >
      {/* Step Number + Icon */}
      <div className="relative mb-5">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary-50 flex items-center justify-center text-3xl md:text-4xl group-hover:bg-primary-100 transition-colors duration-300">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-xs font-heading font-bold flex items-center justify-center shadow-md">
          {step}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-heading font-bold text-base md:text-lg text-text mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
        {description}
      </p>
    </motion.div>
  );
}
