"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="card card-hover p-6 flex flex-col h-full"
    >
      {/* Top: Icon + Tag */}
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{service.icon}</span>
        <span className="badge-primary !text-[10px] uppercase tracking-wider">
          {service.tag}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-heading font-bold text-lg text-text mb-1">
        {service.name}
      </h3>

      {/* Meta: Duration + Price */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs text-gray-400 flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {service.duration}
        </span>
        <span className="text-xs text-gray-300">|</span>
        <span className="text-sm font-heading font-bold text-primary">
          {service.priceLabel}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-grow">
        {service.shortDesc}
      </p>

      {/* Materials */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {service.compatibleMaterials.slice(0, 4).map((mat) => (
          <span key={mat} className="badge-gray !text-[10px] !px-2 !py-0.5">
            {mat}
          </span>
        ))}
        {service.compatibleMaterials.length > 4 && (
          <span className="badge-gray !text-[10px] !px-2 !py-0.5">
            +{service.compatibleMaterials.length - 4}
          </span>
        )}
      </div>

      {/* CTA */}
      <Link
        href={`/layanan/${service.slug}`}
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 text-sm font-medium text-text hover:bg-primary hover:text-white transition-all duration-200 group"
      >
        Detail Layanan
        <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
}
