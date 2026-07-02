"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQItem } from "@/data/faq";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`card overflow-hidden transition-all duration-300 ${
              isOpen ? "shadow-card-hover border-primary/20" : ""
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
              id={`faq-toggle-${index}`}
              aria-expanded={isOpen}
            >
              <span
                className={`font-heading font-semibold text-sm md:text-base pr-4 transition-colors ${
                  isOpen ? "text-primary" : "text-text group-hover:text-primary"
                }`}
              >
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  isOpen ? "bg-primary text-white" : "bg-gray-100 text-gray-400"
                }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <div className="pt-1 border-t border-gray-100">
                      <p className="pt-4 text-sm md:text-base text-gray-500 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
