export interface Testimonial {
  name: string;
  avatar: string;
  loyaltyLevel: string;
  rating: number;
  quote: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rizky Maulana",
    avatar: "RM",
    loyaltyLevel: "Kawan Setia",
    rating: 5,
    quote: "Udah langganan dari awal buka. Sepatu putih gue yang udah kuning banget balik jadi bersih kayak baru. Tracking-nya juga keren, bisa pantau sampe mana prosesnya!",
    service: "Whitening",
  },
  {
    name: "Sarah Ayu",
    avatar: "SA",
    loyaltyLevel: "Kawan Elite",
    rating: 5,
    quote: "Leather boots kesayangan gue yang udah mulai kusam sekarang kinclong lagi. Antar-jemput gratis pula. Mantap banget SoleCare!",
    service: "Leather Care",
  },
  {
    name: "Bayu Pratama",
    avatar: "BP",
    loyaltyLevel: "Kawan Baru",
    rating: 4,
    quote: "Pertama kali coba deep clean di sini, hasilnya memuaskan. Sepatu running yang udah bau banget sekarang fresh lagi. Pasti bakal balik lagi!",
    service: "Deep Clean",
  },
];
