export interface DropPoint {
  name: string;
  address: string;
  hours: string;
  phone: string;
  mapUrl?: string;
}

export const dropPoints: DropPoint[] = [
  {
    name: "SoleCare HQ — Dago",
    address: "Jl. Ir. H. Juanda No. 123, Dago, Bandung 40135",
    hours: "Senin–Sabtu: 09.00–21.00 WIB | Minggu: 10.00–18.00 WIB",
    phone: "628123456789",
  },
  {
    name: "Drop Point — Buah Batu",
    address: "Jl. Buah Batu No. 45, Batununggal, Bandung 40266",
    hours: "Senin–Sabtu: 10.00–20.00 WIB | Minggu: Tutup",
    phone: "628123456790",
  },
  {
    name: "Drop Point — Pasteur",
    address: "Jl. Dr. Djunjunan No. 78, Pasteur, Bandung 40171",
    hours: "Senin–Sabtu: 10.00–20.00 WIB | Minggu: 10.00–16.00 WIB",
    phone: "628123456791",
  },
];
