"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  dummyOrders,
  liveActivities,
  activityStats,
  type Order,
  type OrderStatus,
} from "@/data/orders";
import { dropPoints } from "@/data/droppoints";
import TrackingTimeline from "@/components/TrackingTimeline";

// ─── Stats Bar ───
function StatsBar() {
  const [counted, setCounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setCounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="space-y-3">
      <div className="card !rounded-2xl flex items-stretch tabular-nums px-2 py-5">
        {/* Sepatu Dicuci */}
        <div className="flex-1 px-1.5 sm:px-2 text-center min-w-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[26px] sm:text-[30px] font-extrabold leading-none whitespace-nowrap"
          >
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              {counted ? activityStats.totalShoes : 0}
            </span>
          </motion.div>
          <div className="mt-2 text-[8.5px] sm:text-[10px] font-bold tracking-[0.06em] sm:tracking-[0.14em] text-gray-500 uppercase leading-tight">
            <div className="whitespace-nowrap">Sepatu</div>
            <div className="whitespace-nowrap">Dicuci</div>
          </div>
        </div>

        <div className="w-px bg-gray-200 my-2" />

        {/* Kawan SoleCare */}
        <div className="flex-1 px-1.5 sm:px-2 text-center min-w-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[26px] sm:text-[30px] font-extrabold leading-none whitespace-nowrap"
          >
            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
              {counted ? activityStats.totalCustomers : 0}
            </span>
          </motion.div>
          <div className="mt-2 text-[8.5px] sm:text-[10px] font-bold tracking-[0.06em] sm:tracking-[0.14em] text-gray-500 uppercase leading-tight">
            <div className="whitespace-nowrap">Kawan</div>
            <div className="whitespace-nowrap">SoleCare</div>
          </div>
        </div>

        <div className="w-px bg-gray-200 my-2" />

        {/* Rata-rata Cuci */}
        <div className="flex-1 px-1.5 sm:px-2 text-center min-w-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[26px] sm:text-[30px] font-extrabold leading-none whitespace-nowrap"
          >
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {counted ? "1h 2d" : "0h 0d"}
            </span>
          </motion.div>
          <div className="mt-2 text-[8.5px] sm:text-[10px] font-bold tracking-[0.06em] sm:tracking-[0.14em] text-gray-500 uppercase leading-tight">
            <div className="whitespace-nowrap">Rata-rata</div>
            <div className="whitespace-nowrap">Cuci</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Live Activity Ticker ───
function LiveActivityTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % liveActivities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const activity = liveActivities[currentIndex];

  const statusEmoji: Record<OrderStatus, string> = {
    "Order Diterima": "📥",
    "Sedang Diproses": "🔄",
    "Finishing": "✨",
    "Siap Dikirim": "📦",
    "Selesai": "✅",
  };

  return (
    <div className="card !rounded-2xl px-4 py-3 overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-500">
          Live Aktivitas
        </span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3"
        >
          <div className={`w-8 h-8 rounded-lg ${activity.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
            {activity.customerInitial.charAt(0)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold text-text truncate">
              {statusEmoji[activity.status]} {activity.customerInitial} — {activity.service}
            </p>
            <p className="text-[11px] text-gray-400 truncate">
              {activity.shoeModel} · {activity.time}
            </p>
          </div>
          <span className={`flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
            activity.status === "Selesai"
              ? "bg-emerald-50 text-emerald-600"
              : activity.status === "Siap Dikirim"
              ? "bg-emerald-50 text-emerald-600"
              : activity.status === "Sedang Diproses" || activity.status === "Finishing"
              ? "bg-amber-50 text-amber-600"
              : "bg-blue-50 text-blue-600"
          }`}>
            {activity.status}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Drop Point Section ───
function DropPointSection() {
  const activeCount = dropPoints.length;

  return (
    <section id="drop-point" className="scroll-mt-24">
      <div className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-gray-500">
              Drop Point
            </span>
            <h2 className="mt-2 text-[22px] sm:text-[26px] font-extrabold tracking-tight text-text leading-tight font-heading">
              Lokasi di Bandung
            </h2>
            <p className="mt-1 text-[12.5px] text-gray-500">
              Pilih lokasi terdekat untuk drop sepatu
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-[10.5px] font-semibold flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="tabular-nums">{activeCount}</span> Aktif
          </span>
        </div>

        <div className="space-y-3">
          {dropPoints.map((dp, index) => (
            <motion.div
              key={dp.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card !rounded-2xl p-4 group card-hover"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-100 transition-colors">
                  <svg className="w-5 h-5 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[13px] font-bold text-text mb-0.5">{dp.name}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-2">{dp.address}</p>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="truncate">{dp.hours}</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${dp.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 hover:bg-green-100 transition-colors"
                  aria-label={`Hubungi ${dp.name}`}
                >
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="card !rounded-2xl overflow-hidden">
          <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50/90 backdrop-blur-sm px-2.5 py-1 text-[10.5px] font-semibold text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="tabular-nums">{activeCount}</span> Aktif
              </span>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🗺️</div>
              <div className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 shadow-sm">
                <span className="font-heading font-bold text-[18px] tracking-[0.04em] text-text">SC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Search Section ───
function SearchSection({ onResult }: { onResult: (order: Order | null) => void }) {
  const [orderId, setOrderId] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (orderId.trim().length < 9) return;

    setIsSearching(true);
    setTimeout(() => {
      // Search across all orders by ID only for simpler UX (like the reference)
      const order = dummyOrders.find(
        (o) => o.orderId.toUpperCase() === orderId.trim().toUpperCase()
      ) || null;
      onResult(order);
      setIsSearching(false);
    }, 500);
  };

  return (
    <section id="search" className="scroll-mt-24">
      <form onSubmit={handleSearch}>
        <div className="card !rounded-full flex items-center gap-2 px-4 py-2.5 transition-all focus-within:shadow-card-hover focus-within:border-primary/30">
          <svg className="w-4 h-4 flex-shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            inputMode="text"
            autoComplete="off"
            placeholder="SLC-XXXXX"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value.toUpperCase())}
            maxLength={9}
            aria-label="Order ID"
            className="flex-1 bg-transparent text-sm font-heading font-semibold text-text placeholder:text-gray-300 placeholder:font-normal focus:outline-none tabular-nums"
          />
          <span className="flex-shrink-0 text-[11px] font-semibold tabular-nums text-gray-400">
            {orderId.length}/9
          </span>
          {orderId.length === 9 && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              type="submit"
              disabled={isSearching}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-700 transition-colors disabled:opacity-50"
            >
              {isSearching ? (
                <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </motion.button>
          )}
        </div>
      </form>

      {/* Demo hint */}
      <p className="text-[10px] text-gray-400 mt-2 px-2">
        💡 Coba: <span className="font-semibold text-gray-500">SLC001234</span>, <span className="font-semibold text-gray-500">SLC005678</span>, atau <span className="font-semibold text-gray-500">SLC009012</span>
      </p>
    </section>
  );
}

// ─── Riwayat Aktivitas ───
function RiwayatSection() {
  const [filter, setFilter] = useState<"semua" | "proses" | "selesai">("semua");

  const filteredOrders = dummyOrders.filter((order) => {
    if (filter === "proses") return order.statusIndex < 4;
    if (filter === "selesai") return order.statusIndex === 4;
    return true;
  });

  const processingCount = dummyOrders.filter((o) => o.statusIndex < 4).length;

  const statusBadge = (status: OrderStatus) => {
    switch (status) {
      case "Order Diterima":
        return "bg-blue-50 text-blue-600";
      case "Sedang Diproses":
        return "bg-amber-50 text-amber-600";
      case "Finishing":
        return "bg-violet-50 text-violet-600";
      case "Siap Dikirim":
        return "bg-emerald-50 text-emerald-600";
      case "Selesai":
        return "bg-gray-100 text-gray-500";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  const statusIcon = (status: OrderStatus) => {
    switch (status) {
      case "Order Diterima": return "📥";
      case "Sedang Diproses": return "🔄";
      case "Finishing": return "✨";
      case "Siap Dikirim": return "📦";
      case "Selesai": return "✅";
    }
  };

  const avatarColors = [
    "bg-rose-100 text-rose-700",
    "bg-blue-100 text-blue-700",
    "bg-violet-100 text-violet-700",
    "bg-amber-100 text-amber-700",
    "bg-emerald-100 text-emerald-700",
    "bg-pink-100 text-pink-700",
    "bg-teal-100 text-teal-700",
    "bg-indigo-100 text-indigo-700",
  ];

  return (
    <section>
      <div className="space-y-3">
        {/* Header + Tabs */}
        <div className="flex items-center justify-between gap-3 px-1">
          <div className="min-w-0">
            <h3 className="text-[15px] font-extrabold tracking-tight text-text font-heading">
              Riwayat Aktivitas
            </h3>
            <p className="text-[11px] text-gray-500 tabular-nums">
              <span className="font-semibold">{processingCount}</span> sedang diproses
            </p>
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg p-0.5 flex-shrink-0">
            {(["semua", "proses", "selesai"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 rounded-md text-[11px] font-semibold transition-all capitalize ${
                  filter === tab
                    ? "bg-white text-text shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab === "semua" ? "Semua" : tab === "proses" ? "Proses" : "Selesai"}
              </button>
            ))}
          </div>
        </div>

        {/* Order List */}
        <div className="card !rounded-2xl overflow-hidden divide-y divide-gray-100">
          <AnimatePresence mode="popLayout">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <motion.div
                  key={order.orderId}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50/50 transition-colors cursor-default"
                >
                  {/* Avatar */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-[12px] font-bold flex-shrink-0 ${avatarColors[index % avatarColors.length]}`}>
                    {order.customerInitial.charAt(0)}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[13px] font-bold text-text truncate">
                        {order.customerInitial}
                      </span>
                      <span className="text-[10px] text-gray-400 tabular-nums flex-shrink-0">
                        {order.orderId}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-gray-500 truncate">
                        {order.service}
                      </span>
                      {order.shoeModel && (
                        <>
                          <span className="text-gray-300">·</span>
                          <span className="text-[11px] text-gray-400 truncate">
                            {order.shoeModel}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Status + Time */}
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${statusBadge(order.status)}`}>
                      {statusIcon(order.status)} {order.status}
                    </span>
                    {order.updatedAt && (
                      <span className="text-[10px] text-gray-400">{order.updatedAt}</span>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-10 px-4 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-400 mb-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h4l3-9 4 18 3-9h4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[13px] font-semibold text-gray-600">Belum ada aktivitas</p>
                <p className="mt-1 text-[11.5px] text-gray-400">Order baru akan muncul di sini</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ─── Search Result Modal ───
function SearchResult({ order, onClose }: { order: Order | null; onClose: () => void }) {
  if (order === null) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="card !rounded-2xl p-6 text-center"
      >
        <div className="text-4xl mb-3">👟</div>
        <h3 className="font-heading font-bold text-base text-text mb-1">
          Order tidak ditemukan
        </h3>
        <p className="text-[12px] text-gray-500 mb-4">
          Pastikan Order ID yang kamu masukkan sudah benar.
        </p>
        <div className="flex items-center justify-center gap-2">
          <button onClick={onClose} className="btn-secondary !text-xs !px-4 !py-2">
            Coba Lagi
          </button>
          <a
            href="https://wa.me/628123456789?text=Halo%20SoleCare%2C%20saya%20tidak%20bisa%20menemukan%20order%20saya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !text-xs !px-4 !py-2"
          >
            Chat Admin
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="card !rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div className={`px-5 py-4 ${
        order.status === "Selesai"
          ? "bg-gradient-to-r from-emerald-500 to-teal-500"
          : order.status === "Siap Dikirim"
          ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
          : "bg-gradient-to-r from-primary to-primary-600"
      }`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/70 text-[10px] font-medium uppercase tracking-wider">Order ID</p>
            <p className="text-white font-heading font-bold text-lg tabular-nums">{order.orderId}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-white/20 text-white text-[10px] font-semibold backdrop-blur-sm">
              {order.status}
            </span>
            <button onClick={onClose} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Pelanggan</p>
            <p className="text-[13px] font-heading font-semibold text-text">{order.customerInitial}</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Layanan</p>
            <p className="text-[13px] font-heading font-semibold text-primary">{order.service}</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Masuk</p>
            <p className="text-[12px] font-medium text-text tabular-nums">{order.dateIn}</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Estimasi</p>
            <p className="text-[12px] font-medium text-text tabular-nums">{order.estimatedDone}</p>
          </div>
        </div>

        {order.notes && (
          <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 mb-5">
            <p className="text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">Catatan</p>
            <p className="text-[12px] text-gray-600">{order.notes}</p>
          </div>
        )}

        <div className="border-t border-gray-100 pt-5">
          <h4 className="font-heading font-bold text-[12px] text-text mb-3 uppercase tracking-wider">
            Status Pengerjaan
          </h4>
          <TrackingTimeline currentStatusIndex={order.statusIndex} />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Page ───
export default function AktivitasPage() {
  const [searchResult, setSearchResult] = useState<Order | null | undefined>(undefined);

  return (
    <div className="px-4 pt-4 pb-12 max-w-md mx-auto lg:max-w-6xl lg:px-6 lg:pt-6 lg:pb-16">
      {/* Stats Bar */}
      <StatsBar />

      {/* Main Grid: Desktop = 2 columns */}
      <div className="mt-3 lg:mt-6 lg:grid lg:grid-cols-12 lg:gap-6 space-y-3 lg:space-y-0">
        {/* Left Column: Drop Points (sticky on desktop) */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
          {/* Mobile: show map only */}
          <div className="lg:hidden">
            <div className="card !rounded-2xl overflow-hidden">
              <div className="relative aspect-[16/9] bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center">
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50/90 backdrop-blur-sm px-2.5 py-1 text-[10.5px] font-semibold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="tabular-nums">{dropPoints.length}</span> Aktif
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <div className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 shadow-sm">
                    <span className="font-heading font-bold text-sm text-text">Drop Point Bandung</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: full drop point section */}
          <div className="hidden lg:block">
            <DropPointSection />
          </div>
        </div>

        {/* Right Column: Search + Live + Riwayat */}
        <div className="lg:col-span-7 space-y-3">
          {/* Search */}
          <SearchSection onResult={(order) => setSearchResult(order)} />

          {/* Search Result */}
          <AnimatePresence mode="wait">
            {searchResult !== undefined && (
              <SearchResult
                order={searchResult}
                onClose={() => setSearchResult(undefined)}
              />
            )}
          </AnimatePresence>

          {/* Live Activity Ticker */}
          <LiveActivityTicker />

          {/* Riwayat */}
          <RiwayatSection />
        </div>
      </div>

      {/* Mobile: Drop Points (below riwayat) */}
      <div className="mt-6 lg:hidden">
        <DropPointSection />
      </div>
    </div>
  );
}
