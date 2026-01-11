// Mock data for RezerwujKort.pl clone

export const tennisClubs = [
  {
    id: 1,
    name: "WTS DeSki",
    fullName: "Warszawskie Towarzystwo Sportowe DeSki",
    voivodeship: "Mazowieckie",
    city: "Warszawa",
    address: "ul. Sportowa 15, 02-776 Warszawa",
    courts: 6,
    surface: "Kort ziemny",
    indoor: true,
    outdoor: true,
    image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    name: "MKT Łódź",
    fullName: "Miejski Klub Tenisowy Łódź",
    voivodeship: "Łódzkie",
    city: "Łódź",
    address: "ul. Tenisowa 8, 90-001 Łódź",
    courts: 4,
    surface: "Kort twardy",
    indoor: true,
    outdoor: false,
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    name: "Wrocław Tenis Club",
    fullName: "Wrocław Tennis Club",
    voivodeship: "Dolnośląskie",
    city: "Wrocław",
    address: "ul. Olimpijska 3, 51-612 Wrocław",
    courts: 8,
    surface: "Kort ziemny",
    indoor: true,
    outdoor: true,
    image: "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    name: "Korty Lubliniec",
    fullName: "Centrum Sportowe Lubliniec",
    voivodeship: "Śląskie",
    city: "Lubliniec",
    address: "ul. Sportowa 12, 42-700 Lubliniec",
    courts: 3,
    surface: "Kort twardy",
    indoor: false,
    outdoor: true,
    image: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    name: "Kielce Tennis Center",
    fullName: "Centrum Tenisowe Kielce",
    voivodeship: "Świętokrzyskie",
    city: "Kielce",
    address: "ul. Czarnowska 4, 25-020 Kielce",
    courts: 5,
    surface: "Kort ziemny",
    indoor: true,
    outdoor: true,
    image: "https://images.unsplash.com/photo-1617883861744-87c5c8305d7b?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    name: "Olsztyn Sport",
    fullName: "Olsztyński Klub Tenisowy",
    voivodeship: "Warmińsko-mazurskie",
    city: "Olsztyn",
    address: "ul. Kopernika 7, 10-001 Olsztyn",
    courts: 4,
    surface: "Kort twardy",
    indoor: true,
    outdoor: false,
    image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=250&fit=crop"
  }
];

export const sparringPartners = [
  {
    id: 1,
    name: "Tomasz Sosnowski",
    city: "Warszawa",
    level: 4,
    age: 32,
    experience: "10 lat",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tomasz"
  },
  {
    id: 2,
    name: "Anna Kowalska",
    city: "Łódź",
    level: 3,
    age: 28,
    experience: "7 lat",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna"
  },
  {
    id: 3,
    name: "Piotr Nowak",
    city: "Wrocław",
    level: 5,
    age: 35,
    experience: "15 lat",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Piotr"
  },
  {
    id: 4,
    name: "Katarzyna Wiśniewska",
    city: "Warszawa",
    level: 4,
    age: 30,
    experience: "8 lat",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Katarzyna"
  }
];

export const news = [
  {
    id: 1,
    title: "Nasza aplikacja mobilna jest już dostępna!",
    date: "2024-12-15",
    excerpt: "Pobierz naszą aplikację na Android i iOS i rezerwuj korty z telefonu!"
  },
  {
    id: 2,
    title: "Prace nad naszą aplikacją mobilną nabierają tempa",
    date: "2024-11-20",
    excerpt: "Wkrótce będzie można rezerwować korty bezpośrednio z telefonu."
  },
  {
    id: 3,
    title: "Tenisklub - najpopularniejszy magazyn tenisowy w Polsce pisze o nas!",
    date: "2024-10-10",
    excerpt: "Jesteśmy dumni, że magazyn Tenisklub docenił naszą platformę."
  },
  {
    id: 4,
    title: "Pierwszy klub z Wrocławia dołącza do RezerwujKort.pl",
    date: "2024-09-05",
    excerpt: "Wrocław Tennis Club dołączył do naszej rosnącej sieci klubów."
  }
];

export const cities = [
  { name: "Warszawa", voivodeship: "Mazowieckie" },
  { name: "Łódź", voivodeship: "Łódzkie" },
  { name: "Wrocław", voivodeship: "Dolnośląskie" },
  { name: "Lubliniec", voivodeship: "Śląskie" },
  { name: "Kielce", voivodeship: "Świętokrzyskie" },
  { name: "Olsztyn", voivodeship: "Warmińsko-mazurskie" }
];

export const voivodeships = [
  { id: "dolnoslaskie", name: "Dolnośląskie", cities: ["Wrocław"] },
  { id: "lodzkie", name: "Łódzkie", cities: ["Łódź"] },
  { id: "mazowieckie", name: "Mazowieckie", cities: ["Warszawa"] },
  { id: "slaskie", name: "Śląskie", cities: ["Lubliniec"] },
  { id: "swietokrzyskie", name: "Świętokrzyskie", cities: ["Kielce"] },
  { id: "warminsko-mazurskie", name: "Warmińsko-mazurskie", cities: ["Olsztyn"] }
];
