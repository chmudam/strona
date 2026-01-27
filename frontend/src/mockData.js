// Mock data for RezerwujKort.pl clone

export const tennisClubs = [
  {
    id: 1,
    name: "WTS DeSki",
    fullName: "Warszawskie Towarzystwo Sportowe DeSki",
    voivodeship: "Mazowieckie",
    city: "Warszawa",
    address: "ul. Sportowa 15, 02-776 Warszawa",
    phone: "22 123 45 67",
    email: "kontakt@wtsdeski.pl",
    website: "www.wtsdeski.pl",
    courts: 6,
    surface: "Kort ziemny",
    indoor: true,
    outdoor: true,
    image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=400&h=250&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?w=600&h=400&fit=crop"
    ],
    description: "Warszawskie Towarzystwo Sportowe DeSki to jeden z najstarszych i najbardziej prestiżowych klubów tenisowych w Warszawie. Oferujemy profesjonalne korty halowe i odkryte, szkółkę tenisa dla dzieci i dorosłych oraz organizujemy turnieje i ligi klubowe.",
    facilities: ["Szatnie", "Prysznice", "Parking", "Sklep tenisowy", "Kawiarnia", "WiFi"],
    openingHours: "Pn-Nd: 7:00 - 23:00"
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

// Court reservations data
export const courtReservations = {
  tennis: {
    date: "2026-01-25",
    dateOfWeek: "Niedziela",
    courts: [
      {
        courtId: 1,
        courtName: "Kort hala 1",
        courtDescription: "Hala",
        onlineReservation: true,
        hours: [
          { hourId: 0, hourName: "00:00", hourStatus: "OPEN" },
          { hourId: 2, hourName: "01:00", hourStatus: "OPEN" },
          { hourId: 4, hourName: "02:00", hourStatus: "OPEN" },
          { hourId: 6, hourName: "03:00", hourStatus: "OPEN" },
          { hourId: 8, hourName: "04:00", hourStatus: "OPEN" },
          { hourId: 10, hourName: "05:00", hourStatus: "OPEN" },
          { hourId: 12, hourName: "06:00", hourStatus: "OPEN" },
          { hourId: 14, hourName: "07:00", hourStatus: "OPEN" },
          { hourId: 16, hourName: "08:00", hourStatus: "OPEN" },
          { hourId: 18, hourName: "09:00", hourStatus: "RESERVATION" },
          { hourId: 20, hourName: "10:00", hourStatus: "RESERVATION" },
          { hourId: 22, hourName: "11:00", hourStatus: "RESERVATION" },
          { hourId: 24, hourName: "12:00", hourStatus: "RESERVATION" },
          { hourId: 26, hourName: "13:00", hourStatus: "RESERVATION" },
          { hourId: 28, hourName: "14:00", hourStatus: "RESERVATION" },
          { hourId: 30, hourName: "15:00", hourStatus: "RESERVATION" },
          { hourId: 32, hourName: "16:00", hourStatus: "RESERVATION" },
          { hourId: 34, hourName: "17:00", hourStatus: "RESERVATION" },
          { hourId: 36, hourName: "18:00", hourStatus: "RESERVATION" },
          { hourId: 38, hourName: "19:00", hourStatus: "RESERVATION" },
          { hourId: 40, hourName: "20:00", hourStatus: "RESERVATION" },
          { hourId: 42, hourName: "21:00", hourStatus: "OPEN" },
          { hourId: 44, hourName: "22:00", hourStatus: "OPEN" },
          { hourId: 46, hourName: "23:00", hourStatus: "OPEN" },
          { hourId: 48, hourName: "24:00", hourStatus: "CLOSE" }
        ]
      },
      {
        courtId: 2,
        courtName: "Kort hala 2",
        courtDescription: "Hala",
        onlineReservation: true,
        hours: [
          { hourId: 0, hourName: "00:00", hourStatus: "OPEN" },
          { hourId: 2, hourName: "01:00", hourStatus: "OPEN" },
          { hourId: 4, hourName: "02:00", hourStatus: "OPEN" },
          { hourId: 6, hourName: "03:00", hourStatus: "OPEN" },
          { hourId: 8, hourName: "04:00", hourStatus: "OPEN" },
          { hourId: 10, hourName: "05:00", hourStatus: "OPEN" },
          { hourId: 12, hourName: "06:00", hourStatus: "OPEN" },
          { hourId: 14, hourName: "07:00", hourStatus: "OPEN" },
          { hourId: 16, hourName: "08:00", hourStatus: "RESERVATION" },
          { hourId: 18, hourName: "09:00", hourStatus: "RESERVATION" },
          { hourId: 20, hourName: "10:00", hourStatus: "RESERVATION" },
          { hourId: 22, hourName: "11:00", hourStatus: "RESERVATION" },
          { hourId: 24, hourName: "12:00", hourStatus: "RESERVATION" },
          { hourId: 26, hourName: "13:00", hourStatus: "RESERVATION" },
          { hourId: 28, hourName: "14:00", hourStatus: "RESERVATION" },
          { hourId: 30, hourName: "15:00", hourStatus: "RESERVATION" },
          { hourId: 32, hourName: "16:00", hourStatus: "RESERVATION" },
          { hourId: 34, hourName: "17:00", hourStatus: "RESERVATION" },
          { hourId: 36, hourName: "18:00", hourStatus: "RESERVATION" },
          { hourId: 38, hourName: "19:00", hourStatus: "RESERVATION" },
          { hourId: 40, hourName: "20:00", hourStatus: "RESERVATION" },
          { hourId: 42, hourName: "21:00", hourStatus: "OPEN" },
          { hourId: 44, hourName: "22:00", hourStatus: "OPEN" },
          { hourId: 46, hourName: "23:00", hourStatus: "OPEN" },
          { hourId: 48, hourName: "24:00", hourStatus: "CLOSE" }
        ]
      },
      {
        courtId: 5,
        courtName: "Kort 5",
        courtDescription: "Odkryte/Balon",
        onlineReservation: true,
        hours: [
          { hourId: 0, hourName: "00:00", hourStatus: "OPEN" },
          { hourId: 2, hourName: "01:00", hourStatus: "OPEN" },
          { hourId: 4, hourName: "02:00", hourStatus: "OPEN" },
          { hourId: 6, hourName: "03:00", hourStatus: "OPEN" },
          { hourId: 8, hourName: "04:00", hourStatus: "OPEN" },
          { hourId: 10, hourName: "05:00", hourStatus: "OPEN" },
          { hourId: 12, hourName: "06:00", hourStatus: "OPEN" },
          { hourId: 14, hourName: "07:00", hourStatus: "OPEN" },
          { hourId: 16, hourName: "08:00", hourStatus: "RESERVATION" },
          { hourId: 18, hourName: "09:00", hourStatus: "RESERVATION" },
          { hourId: 20, hourName: "10:00", hourStatus: "OPEN" },
          { hourId: 22, hourName: "11:00", hourStatus: "RESERVATION" },
          { hourId: 24, hourName: "12:00", hourStatus: "RESERVATION" },
          { hourId: 26, hourName: "13:00", hourStatus: "RESERVATION" },
          { hourId: 28, hourName: "14:00", hourStatus: "RESERVATION" },
          { hourId: 30, hourName: "15:00", hourStatus: "OPEN" },
          { hourId: 32, hourName: "16:00", hourStatus: "OPEN" },
          { hourId: 34, hourName: "17:00", hourStatus: "RESERVATION" },
          { hourId: 36, hourName: "18:00", hourStatus: "RESERVATION" },
          { hourId: 38, hourName: "19:00", hourStatus: "RESERVATION" },
          { hourId: 40, hourName: "20:00", hourStatus: "OPEN" },
          { hourId: 42, hourName: "21:00", hourStatus: "OPEN" },
          { hourId: 44, hourName: "22:00", hourStatus: "OPEN" },
          { hourId: 46, hourName: "23:00", hourStatus: "OPEN" },
          { hourId: 48, hourName: "24:00", hourStatus: "CLOSE" }
        ]
      }
    ]
  },
  padel: {
    date: "2026-01-25",
    dateOfWeek: "Niedziela",
    courts: [
      {
        courtId: 1,
        courtName: "Kort Padel 1",
        courtDescription: "Padel indoor",
        onlineReservation: true,
        hours: [
          { hourId: 16, hourName: "08:00", hourStatus: "OPEN" },
          { hourId: 18, hourName: "09:00", hourStatus: "RESERVATION" },
          { hourId: 20, hourName: "10:00", hourStatus: "RESERVATION" },
          { hourId: 22, hourName: "11:00", hourStatus: "RESERVATION" },
          { hourId: 24, hourName: "12:00", hourStatus: "RESERVATION" },
          { hourId: 26, hourName: "13:00", hourStatus: "RESERVATION" },
          { hourId: 28, hourName: "14:00", hourStatus: "OPEN" },
          { hourId: 30, hourName: "15:00", hourStatus: "OPEN" },
          { hourId: 32, hourName: "16:00", hourStatus: "RESERVATION" },
          { hourId: 34, hourName: "17:00", hourStatus: "RESERVATION" },
          { hourId: 36, hourName: "18:00", hourStatus: "RESERVATION" },
          { hourId: 38, hourName: "19:00", hourStatus: "RESERVATION" },
          { hourId: 40, hourName: "20:00", hourStatus: "OPEN" },
          { hourId: 42, hourName: "21:00", hourStatus: "OPEN" },
          { hourId: 44, hourName: "22:00", hourStatus: "CLOSE" }
        ]
      },
      {
        courtId: 2,
        courtName: "Kort Padel 2",
        courtDescription: "Padel indoor",
        onlineReservation: true,
        hours: [
          { hourId: 16, hourName: "08:00", hourStatus: "RESERVATION" },
          { hourId: 18, hourName: "09:00", hourStatus: "RESERVATION" },
          { hourId: 20, hourName: "10:00", hourStatus: "RESERVATION" },
          { hourId: 22, hourName: "11:00", hourStatus: "OPEN" },
          { hourId: 24, hourName: "12:00", hourStatus: "OPEN" },
          { hourId: 26, hourName: "13:00", hourStatus: "RESERVATION" },
          { hourId: 28, hourName: "14:00", hourStatus: "RESERVATION" },
          { hourId: 30, hourName: "15:00", hourStatus: "RESERVATION" },
          { hourId: 32, hourName: "16:00", hourStatus: "RESERVATION" },
          { hourId: 34, hourName: "17:00", hourStatus: "RESERVATION" },
          { hourId: 36, hourName: "18:00", hourStatus: "OPEN" },
          { hourId: 38, hourName: "19:00", hourStatus: "OPEN" },
          { hourId: 40, hourName: "20:00", hourStatus: "RESERVATION" },
          { hourId: 42, hourName: "21:00", hourStatus: "OPEN" },
          { hourId: 44, hourName: "22:00", hourStatus: "CLOSE" }
        ]
      }
    ]
  }
};

// Club sparring partners
export const clubSparingPartners = [
  {
    id: 1,
    name: "Jan Kowalski",
    level: 4,
    availability: "Poniedziałki, Środy 18:00-20:00",
    phone: "600 111 222",
    description: "Szukam regularnego partnera do gry, poziom zaawansowany."
  },
  {
    id: 2,
    name: "Maria Nowak",
    level: 3,
    availability: "Weekendy rano",
    phone: "601 222 333",
    description: "Gram rekreacyjnie, chętnie pogram z osobami na podobnym poziomie."
  },
  {
    id: 3,
    name: "Piotr Zalewski",
    level: 5,
    availability: "Wtorki, Czwartki po 17:00",
    phone: "602 333 444",
    description: "Gracz turniejowy szuka sparingpartnera na poziomie 4-5."
  }
];

// User profile data (for "Start" page)
export const userProfile = {
  firstName: "Damian",
  lastName: "Chmurzyński",
  phone: "507",
  phoneVerified: true,
  email: "damian987@op.pl"
};

// User applications (for "Start" page)
export const userApplications = [
  {
    id: 1,
    name: "Aplikacja Szkółki tenisowe"
  },
  {
    id: 2,
    name: "Rezerwacje Warszawskie_Towarzystwo_Sportowe_DeSki"
  },
  {
    id: 3,
    name: "Rezerwacje Akademia_Tenisa_OXFORD"
  }
];

// User favorite tennis clubs (for "Start" page)
export const userFavoriteClubs = [];

// User passes/subscriptions (for "Karnety" page)
export const userPasses = [
  {
    id: 1,
    clubId: 1,
    clubName: "WTS DeSki",
    passValue: 500,
    availableFunds: 500,
    scheduledReservations: 0,
    historicalReservations: 0,
    currency: "zł"
  },
  {
    id: 2,
    clubId: 1,
    clubName: "WTS DeSki",
    passValue: 90,
    availableFunds: 90,
    scheduledReservations: 0,
    historicalReservations: 0,
    currency: "zł"
  },
  {
    id: 3,
    clubId: 2,
    clubName: "MKT Łódź",
    passValue: 416.16,
    availableFunds: 288,
    scheduledReservations: 0,
    historicalReservations: 1,
    currency: "zł"
  },
  {
    id: 4,
    clubId: 3,
    clubName: "Wrocław Tenis Club",
    passValue: 246,
    availableFunds: 246,
    scheduledReservations: 0,
    historicalReservations: 0,
    currency: "zł"
  },
  {
    id: 5,
    clubId: 4,
    clubName: "Korty Lubliniec",
    passValue: 150,
    availableFunds: 75,
    scheduledReservations: 2,
    historicalReservations: 3,
    currency: "zł"
  }
];

// User reservations (for "Moje rezerwacje" page)
export const userReservations = [
  {
    id: 1,
    clubId: 1,
    clubName: "WTS DeSki",
    date: "2025-11-30",
    dayOfWeek: "Niedziela",
    timeStart: "09:30",
    timeEnd: "10:30",
    court: "Kort 2",
    price: 100,
    currency: "zł",
    status: "confirmed_pay_at_club", // confirmed_pay_at_club, paid
    createdAt: "2025-11-30 01:44:58"
  },
  {
    id: 2,
    clubId: 1,
    clubName: "WTS DeSki",
    date: "2025-11-30",
    dayOfWeek: "Niedziela",
    timeStart: "10:00",
    timeEnd: "11:00",
    court: "Kort 1",
    price: 100,
    currency: "zł",
    status: "confirmed_pay_at_club",
    createdAt: "2025-11-30 01:42:20"
  },
  {
    id: 3,
    clubId: 1,
    clubName: "WTS DeSki",
    date: "2025-11-30",
    dayOfWeek: "Niedziela",
    timeStart: "08:30",
    timeEnd: "09:00",
    court: "Kort 2",
    price: 50,
    currency: "zł",
    status: "confirmed_pay_at_club",
    createdAt: "2025-11-30 01:37:28"
  },
  {
    id: 4,
    clubId: 1,
    clubName: "WTS DeSki",
    date: "2025-11-10",
    dayOfWeek: "Poniedziałek",
    timeStart: "11:30",
    timeEnd: "12:30",
    court: "Kort 1",
    price: 100,
    currency: "zł",
    status: "paid",
    createdAt: "2025-11-10 01:08:01"
  },
  {
    id: 5,
    clubId: 1,
    clubName: "WTS DeSki",
    date: "2025-11-08",
    dayOfWeek: "Sobota",
    timeStart: "16:00",
    timeEnd: "17:00",
    court: "Kort 1",
    price: 85,
    currency: "zł",
    status: "paid",
    createdAt: "2025-11-07 22:42:57"
  },
  {
    id: 6,
    clubId: 2,
    clubName: "MKT Łódź",
    date: "2025-12-05",
    dayOfWeek: "Piątek",
    timeStart: "18:00",
    timeEnd: "19:00",
    court: "Kort 2",
    price: 80,
    currency: "zł",
    status: "confirmed_pay_at_club",
    createdAt: "2025-12-01 10:15:33"
  },
  {
    id: 7,
    clubId: 3,
    clubName: "Wrocław Tenis Club",
    date: "2025-12-15",
    dayOfWeek: "Poniedziałek",
    timeStart: "14:00",
    timeEnd: "15:30",
    court: "Kort 3",
    price: 120,
    currency: "zł",
    status: "paid",
    createdAt: "2025-12-10 14:22:45"
  },
  {
    id: 8,
    clubId: 1,
    clubName: "WTS DeSki",
    date: "2025-10-25",
    dayOfWeek: "Sobota",
    timeStart: "10:00",
    timeEnd: "11:00",
    court: "Kort 1",
    price: 90,
    currency: "zł",
    status: "paid",
    createdAt: "2025-10-20 08:30:12"
  },
  {
    id: 9,
    clubId: 2,
    clubName: "MKT Łódź",
    date: "2025-10-12",
    dayOfWeek: "Niedziela",
    timeStart: "09:00",
    timeEnd: "10:00",
    court: "Kort 1",
    price: 70,
    currency: "zł",
    status: "paid",
    createdAt: "2025-10-10 16:45:22"
  },
  {
    id: 10,
    clubId: 1,
    clubName: "WTS DeSki",
    date: "2025-09-18",
    dayOfWeek: "Czwartek",
    timeStart: "17:00",
    timeEnd: "18:00",
    court: "Kort 2",
    price: 95,
    currency: "zł",
    status: "paid",
    createdAt: "2025-09-15 11:20:08"
  },
  // Future reservations
  {
    id: 11,
    clubId: 1,
    clubName: "WTS DeSki",
    date: "2026-02-15",
    dayOfWeek: "Niedziela",
    timeStart: "10:00",
    timeEnd: "11:00",
    court: "Kort 1",
    price: 100,
    currency: "zł",
    status: "confirmed_pay_at_club",
    createdAt: "2026-01-20 09:15:00"
  },
  {
    id: 12,
    clubId: 2,
    clubName: "MKT Łódź",
    date: "2026-02-20",
    dayOfWeek: "Piątek",
    timeStart: "18:00",
    timeEnd: "19:30",
    court: "Kort 2",
    price: 110,
    currency: "zł",
    status: "paid",
    createdAt: "2026-01-18 14:30:00"
  },
  {
    id: 13,
    clubId: 3,
    clubName: "Wrocław Tenis Club",
    date: "2026-03-05",
    dayOfWeek: "Czwartek",
    timeStart: "16:00",
    timeEnd: "17:00",
    court: "Kort 1",
    price: 90,
    currency: "zł",
    status: "confirmed_pay_at_club",
    createdAt: "2026-01-25 11:45:00"
  }
];

// Club leagues
export const clubLeagues = [
  {
    id: 1,
    name: "Liga Klubowa Letnia 2025",
    startDate: "2025-06-01",
    endDate: "2025-08-31",
    participants: 24,
    status: "Zapisy otwarte",
    description: "Coroczna liga klubowa dla wszystkich członków. Gra systemem każdy z każdym."
  },
  {
    id: 2,
    name: "Turniej Deblowy",
    startDate: "2025-07-15",
    endDate: "2025-07-16",
    participants: 16,
    status: "Zapisy otwarte",
    description: "Weekend z deblem - turniej par dla graczy na poziomie 3-5."
  },
  {
    id: 3,
    name: "Liga Zimowa 2024/2025",
    startDate: "2024-12-01",
    endDate: "2025-02-28",
    participants: 32,
    status: "W trakcie",
    description: "Liga zimowa na kortach halowych. Pozostało 6 kolejek."
  }
];
