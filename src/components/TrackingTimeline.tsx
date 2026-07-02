"use client";

import { motion } from "framer-motion";
import { orderStatuses } from "@/data/orders";

interface TrackingTimelineProps {
  currentStatusIndex: number;
}

export default function TrackingTimeline({ currentStatusIndex }: TrackingTimelineProps) {
  return (
    <div className="space-y-0">
      {orderStatuses.map((status, index) => {
        const isCompleted = index <= currentStatusIndex;
        const isCurrent = index === currentStatusIndex;
        const isLast = index === orderStatuses.length - 1;

        return (
          <div key={status.label} className="flex gap-4">
            {/* Timeline Line + Dot */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.3 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 border-2 transition-all ${
                  isCompleted
                    ? isCurrent
                      ? "bg-primary border-primary text-white shadow-lg shadow-primary/30"
                      : "bg-accent border-accent text-white"
                    : "bg-white border-gray-200 text-gray-300"
                }`}
              >
                {isCompleted ? (
                  isCurrent ? (
                    <span className="text-base">{status.icon}</span>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )
                ) : (
                  <span className="text-base">{status.icon}</span>
                )}
              </motion.div>

              {/* Connector Line */}
              {!isLast && (
                <div className="w-0.5 h-12 md:h-14 relative">
                  <div className="absolute inset-0 bg-gray-200 rounded-full" />
                  {isCompleted && !isCurrent && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      transition={{ delay: index * 0.15 + 0.2, duration: 0.3 }}
                      className="absolute top-0 left-0 right-0 bg-accent rounded-full"
                    />
                  )}
                </div>
              )}
            </div>

            {/* Content */}
            <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + 0.1, duration: 0.3 }}
              >
                <h4
                  className={`font-heading font-semibold text-sm md:text-base ${
                    isCompleted
                      ? isCurrent
                        ? "text-primary"
                        : "text-text"
                      : "text-gray-400"
                  }`}
                >
                  {status.label}
                </h4>
                {isCurrent && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xs text-gray-400 mt-1"
                  >
                    Status saat ini
                  </motion.p>
                )}
                {isCompleted && !isCurrent && (
                  <p className="text-xs text-accent mt-1">Selesai ✓</p>
                )}
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
