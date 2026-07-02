"use client";

interface FilterPillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function FilterPill({ label, isActive, onClick }: FilterPillProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-heading font-medium transition-all duration-200 whitespace-nowrap ${
        isActive
          ? "bg-primary text-white shadow-md shadow-primary/20"
          : "bg-white text-gray-500 border border-gray-200 hover:border-primary/30 hover:text-primary"
      }`}
    >
      {label}
    </button>
  );
}
