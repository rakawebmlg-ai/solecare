export type OrderStatus =
  | "Order Diterima"
  | "Sedang Diproses"
  | "Finishing"
  | "Siap Dikirim"
  | "Selesai";

export interface Order {
  orderId: string;
  customerName: string;
  customerInitial: string;
  waLastFour: string;
  service: string;
  dateIn: string;
  estimatedDone: string;
  status: OrderStatus;
  statusIndex: number; // 0-4
  notes?: string;
  shoeModel?: string;
  updatedAt?: string;
}

export const orderStatuses: { label: OrderStatus; icon: string; color: string }[] = [
  { label: "Order Diterima", icon: "✅", color: "text-primary" },
  { label: "Sedang Diproses", icon: "🔄", color: "text-warning" },
  { label: "Finishing", icon: "✨", color: "text-amber-500" },
  { label: "Siap Dikirim", icon: "📦", color: "text-emerald-500" },
  { label: "Selesai", icon: "✅", color: "text-accent" },
];

export const dummyOrders: Order[] = [
  {
    orderId: "SLC001234",
    customerName: "Andi Pratama",
    customerInitial: "A.P.",
    waLastFour: "1234",
    service: "Casual Clean",
    dateIn: "28 Mei 2026",
    estimatedDone: "30 Mei 2026",
    status: "Sedang Diproses",
    statusIndex: 1,
    notes: "Sepatu Nike Air Force 1 — noda tanah di bagian toe box.",
    shoeModel: "Nike Air Force 1",
    updatedAt: "2 jam lalu",
  },
  {
    orderId: "SLC005678",
    customerName: "Bunga Citra",
    customerInitial: "B.C.",
    waLastFour: "5678",
    service: "Whitening",
    dateIn: "26 Mei 2026",
    estimatedDone: "30 Mei 2026",
    status: "Siap Dikirim",
    statusIndex: 3,
    notes: "Adidas Superstar putih — whitening midsole dan upper.",
    shoeModel: "Adidas Superstar",
    updatedAt: "30 menit lalu",
  },
  {
    orderId: "SLC009012",
    customerName: "Dimas Raharjo",
    customerInitial: "D.R.",
    waLastFour: "9012",
    service: "Repaint",
    dateIn: "22 Mei 2026",
    estimatedDone: "29 Mei 2026",
    status: "Selesai",
    statusIndex: 4,
    notes: "Vans Old Skool — repaint full hitam ke navy blue.",
    shoeModel: "Vans Old Skool",
    updatedAt: "1 hari lalu",
  },
  {
    orderId: "SLC003456",
    customerName: "Rina Wulandari",
    customerInitial: "R.W.",
    waLastFour: "3456",
    service: "Deep Clean",
    dateIn: "30 Mei 2026",
    estimatedDone: "2 Juni 2026",
    status: "Order Diterima",
    statusIndex: 0,
    notes: "New Balance 574 — kotor setelah hiking.",
    shoeModel: "New Balance 574",
    updatedAt: "5 menit lalu",
  },
  {
    orderId: "SLC007890",
    customerName: "Fajar Nugroho",
    customerInitial: "F.N.",
    waLastFour: "7890",
    service: "Leather Care",
    dateIn: "27 Mei 2026",
    estimatedDone: "30 Mei 2026",
    status: "Finishing",
    statusIndex: 2,
    notes: "Dr. Martens 1460 — conditioning dan polishing.",
    shoeModel: "Dr. Martens 1460",
    updatedAt: "1 jam lalu",
  },
  {
    orderId: "SLC002345",
    customerName: "Maya Sari",
    customerInitial: "M.S.",
    waLastFour: "2345",
    service: "Quick Clean",
    dateIn: "29 Mei 2026",
    estimatedDone: "30 Mei 2026",
    status: "Selesai",
    statusIndex: 4,
    shoeModel: "Converse Chuck Taylor",
    updatedAt: "3 jam lalu",
  },
  {
    orderId: "SLC004567",
    customerName: "Reza Firmansyah",
    customerInitial: "R.F.",
    waLastFour: "4567",
    service: "Unyellowing",
    dateIn: "25 Mei 2026",
    estimatedDone: "30 Mei 2026",
    status: "Selesai",
    statusIndex: 4,
    shoeModel: "Air Jordan 1 Mid",
    updatedAt: "2 hari lalu",
  },
  {
    orderId: "SLC006789",
    customerName: "Siti Nurhaliza",
    customerInitial: "S.N.",
    waLastFour: "6789",
    service: "Reglue",
    dateIn: "29 Mei 2026",
    estimatedDone: "2 Juni 2026",
    status: "Sedang Diproses",
    statusIndex: 1,
    shoeModel: "Nike Air Max 90",
    updatedAt: "45 menit lalu",
  },
];

// Live activity notifications
export interface ActivityNotification {
  id: string;
  orderId: string;
  customerInitial: string;
  service: string;
  status: OrderStatus;
  shoeModel: string;
  time: string;
  color: string;
}

export const liveActivities: ActivityNotification[] = [
  {
    id: "1",
    orderId: "SLC003456",
    customerInitial: "R.W.",
    service: "Deep Clean",
    status: "Order Diterima",
    shoeModel: "New Balance 574",
    time: "5 menit lalu",
    color: "bg-blue-500",
  },
  {
    id: "2",
    orderId: "SLC005678",
    customerInitial: "B.C.",
    service: "Whitening",
    status: "Siap Dikirim",
    shoeModel: "Adidas Superstar",
    time: "30 menit lalu",
    color: "bg-emerald-500",
  },
  {
    id: "3",
    orderId: "SLC006789",
    customerInitial: "S.N.",
    service: "Reglue",
    status: "Sedang Diproses",
    shoeModel: "Nike Air Max 90",
    time: "45 menit lalu",
    color: "bg-amber-500",
  },
  {
    id: "4",
    orderId: "SLC007890",
    customerInitial: "F.N.",
    service: "Leather Care",
    status: "Finishing",
    shoeModel: "Dr. Martens 1460",
    time: "1 jam lalu",
    color: "bg-violet-500",
  },
  {
    id: "5",
    orderId: "SLC001234",
    customerInitial: "A.P.",
    service: "Casual Clean",
    status: "Sedang Diproses",
    shoeModel: "Nike Air Force 1",
    time: "2 jam lalu",
    color: "bg-amber-500",
  },
];

// Stats
export const activityStats = {
  totalShoes: 127,
  totalCustomers: 89,
  avgDuration: { hours: 1, days: 2 },
  avgDurationLabel: "1h 2d",
};

export function findOrder(orderId: string, waLastFour: string): Order | null {
  return (
    dummyOrders.find(
      (o) =>
        o.orderId.toUpperCase() === orderId.toUpperCase() &&
        o.waLastFour === waLastFour
    ) || null
  );
}
