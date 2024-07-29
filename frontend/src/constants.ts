export const cityOpt = [
  { label: "İstanbul", value: "İstanbul" },
  { label: "İzmir", value: "İzmir" },
  { label: "Ankara", value: "Ankara" },
  { label: "Rize", value: "Rize" },
];

export const sortOpt = [
  { label: "Fiyat: Düşükten yükseğe", value: "price-asc" },
  { label: "Fiyat: Yüksekten düşüğe", value: "price-desc" },
  { label: "Yıldız: Düşükten yükseğe", value: "rating-asc" },
  { label: "Yıldız: Yüksekten düşüğe", value: "rating-desc" },
];

export const initial = {
  name: "",
  location: "",
  address: "",
  description: "",
  amenities: "",
  rating: "",
  price_per_night: "",
  availability: false,
};

export const inputs = [
  {
    id: "title",
    label: "Başlık",
    name: "name",
    placeholder: "başlık giriniz...",
  },
  {
    id: "place",
    label: "Lokasyon",
    name: "location",
    placeholder: "lokasyon giriniz...",
  },
  {
    id: "address",
    label: "Adres",
    name: "address",
    placeholder: "adres giriniz...",
  },
  {
    id: "description",
    label: "Açıklama",
    name: "description",
    placeholder: "açıklama giriniz...",
  },
  {
    id: "features",
    label: "Özellikler ( , ile ayırınız.)",
    name: "amenities",
    placeholder: "özellikleri giriniz...",
  },
  {
    id: "point",
    label: "Rating",
    name: "rating",
    placeholder: "rating giriniz...",
    type: "number",
  },
  {
    id: "price",
    label: "Gecelik Fiyat",
    name: "price_per_night",
    placeholder: "ücreti giriniz...",
    type: "number",
  },
  {
    id: "avilable",
    label: "Müsait mi?",
    name: "availability",
    type: "checkbox",
  },
];
