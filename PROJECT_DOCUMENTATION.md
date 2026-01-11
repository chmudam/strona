# RezerwujKort.pl - Clone React Project

## 📋 Spis treści
1. [Opis projektu](#opis-projektu)
2. [Wymagania](#wymagania)
3. [Instalacja lokalna](#instalacja-lokalna)
4. [Struktura projektu](#struktura-projektu)
5. [Dostępne skrypty](#dostępne-skrypty)
6. [Komponenty](#komponenty)
7. [Mock Data](#mock-data)

---

## Opis projektu

Pełna kopia strony **rezerwujkort.pl** - polska platforma do rezerwacji kortów tenisowych.

**Stack technologiczny:**
- React 19.0.0
- React Router DOM 7.5.1
- Tailwind CSS 3.4.17
- Shadcn UI Components
- Axios
- Lucide React (ikony)

**Funkcjonalności:**
- ✅ Strona główna z hero section i procesem 3-kroków
- ✅ Wyszukiwanie klubów tenisowych (z mapą Polski)
- ✅ Lista klubów z filtrowaniem
- ✅ Szczegóły klubu z systemem rezerwacji
- ✅ Sparingpartnerzy
- ✅ Turnieje
- ✅ Strona O nas
- ✅ System logowania (demo)
- ✅ Pełna responsywność

**UWAGA:** Projekt używa **mockowanych danych** - wszystkie kluby, sparingpartnerzy i rezerwacje są tylko demonstracyjne.

---

## Wymagania

Przed instalacją upewnij się, że masz zainstalowane:

- **Node.js** >= 18.0.0 (zalecane: 20.x)
- **Yarn** >= 1.22.0 (lub npm >= 9.0.0)

Sprawdź wersje:
```bash
node --version
yarn --version
```

---

## Instalacja lokalna

### Krok 1: Skopiuj pliki projektu

Cały projekt znajduje się w katalogu `/app/frontend`. Musisz skopiować:

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/           # Komponenty Shadcn
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProcessSteps.jsx
│   │   ├── FeaturedCourts.jsx
│   │   ├── FeaturedPartners.jsx
│   │   ├── SearchForm.jsx
│   │   ├── PolandMap.jsx
│   │   ├── NewsSection.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ClubsListPage.jsx
│   │   ├── ClubDetailsPage.jsx
│   │   ├── SparingPartnersPage.jsx
│   │   ├── TournamentsPage.jsx
│   │   ├── AboutPage.jsx
│   │   └── LoginPage.jsx
│   ├── hooks/
│   │   └── use-toast.js
│   ├── mockData.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env
├── package.json
├── tailwind.config.js
├── craco.config.js
└── README.md
```

### Krok 2: Zainstaluj zależności

```bash
cd frontend
yarn install
```

lub z npm:
```bash
npm install
```

### Krok 3: Uruchom projekt

```bash
yarn start
```

lub:
```bash
npm start
```

Aplikacja otworzy się automatycznie w przeglądarce pod adresem:
```
http://localhost:3000
```

### Krok 4: Build produkcyjny (opcjonalnie)

```bash
yarn build
```

Zbudowane pliki znajdziesz w katalogu `build/`.

---

## Struktura projektu

```
frontend/
├── src/
│   ├── components/           # Komponenty wielokrotnego użytku
│   │   ├── ui/              # Komponenty Shadcn UI
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── input.jsx
│   │   │   ├── label.jsx
│   │   │   ├── select.jsx
│   │   │   ├── toast.jsx
│   │   │   └── toaster.jsx
│   │   ├── Navbar.jsx       # Główna nawigacja
│   │   ├── Hero.jsx         # Hero section z tłem
│   │   ├── ProcessSteps.jsx # 3 kroki (Załóż konto, Wyszukaj, Graj)
│   │   ├── FeaturedCourts.jsx    # Karty klubów
│   │   ├── FeaturedPartners.jsx  # Karty sparingpartnerów
│   │   ├── SearchForm.jsx   # Formularz wyszukiwania
│   │   ├── PolandMap.jsx    # Mapa Polski SVG
│   │   ├── NewsSection.jsx  # Aktualności
│   │   └── Footer.jsx       # Stopka z linkami
│   │
│   ├── pages/               # Strony aplikacji
│   │   ├── HomePage.jsx     # Strona główna
│   │   ├── ClubsListPage.jsx     # Lista wszystkich klubów
│   │   ├── ClubDetailsPage.jsx   # Szczegóły klubu + rezerwacja
│   │   ├── SparingPartnersPage.jsx  # Lista sparingpartnerów
│   │   ├── TournamentsPage.jsx      # Turnieje
│   │   ├── AboutPage.jsx     # O nas
│   │   └── LoginPage.jsx     # Logowanie
│   │
│   ├── hooks/
│   │   └── use-toast.js     # Hook do notyfikacji Toast
│   │
│   ├── mockData.js          # WSZYSTKIE mockowane dane
│   ├── App.js               # Główny komponent + routing
│   ├── App.css              # Style globalne
│   ├── index.js             # Entry point
│   └── index.css            # Tailwind + style globalne
│
├── public/
│   └── index.html
│
├── .env                     # Zmienne środowiskowe
├── package.json             # Zależności projektu
├── tailwind.config.js       # Konfiguracja Tailwind
└── craco.config.js          # Konfiguracja CRACO
```

---

## Dostępne skrypty

### `yarn start` / `npm start`
Uruchamia aplikację w trybie deweloperskim.
- URL: http://localhost:3000
- Hot reload włączony

### `yarn build` / `npm build`
Tworzy zoptymalizowaną wersję produkcyjną w katalogu `build/`.

### `yarn test` / `npm test`
Uruchamia testy (jeśli są skonfigurowane).

---

## Komponenty

### Nawigacja
**Navbar.jsx**
- Logo z ikoną rakiety tenisowej
- Menu: Home, Sparingpartnerzy, Kluby, Turnieje, O nas
- Przycisk "Zaloguj się"
- Responsywne menu mobilne

### Hero Section
**Hero.jsx**
- Tło z obrazem tenisa
- Główny tytuł: "PROSTO DO CELU"
- Podtytuł: "OŚRODKI TENISOWE, SPARINGPARTNERZY"
- CTA button

### Proces 3-kroków
**ProcessSteps.jsx**
- Krok 1: Załóż konto (ikona UserPlus)
- Krok 2: Wyszukaj kort (ikona Search)
- Krok 3: Wejdź do gry! (ikona TrendingUp)
- Strzałki między krokami

### Karty klubów
**FeaturedCourts.jsx**
- Wyświetla 3 polecane kluby
- Obraz klubu, nazwa, lokalizacja
- Przycisk "zobacz więcej"
- Hover effects

### Sparingpartnerzy
**FeaturedPartners.jsx**
- Karty z avatarami
- Imię, miasto, poziom (gwiazdki)
- Doświadczenie w latach

### Formularz wyszukiwania
**SearchForm.jsx**
- Dropdown: wybór miasta
- Dropdown: wybór klubu (filtrowany po mieście)
- Przycisk "Wyszukaj"
- Przekierowanie do listy klubów

### Mapa Polski
**PolandMap.jsx**
- Interaktywna mapa SVG
- 6 województw: Dolnośląskie, Łódzkie, Mazowieckie, Śląskie, Świętokrzyskie, Warmińsko-mazurskie
- Hover effect - zmiana koloru
- Click - przekierowanie do listy klubów w województwie
- Przyciski miast pod mapą

### Aktualności
**NewsSection.jsx**
- Lista 4 newsów
- Data publikacji
- Tytuł i skrót
- Link "zobacz archiwum"

### Stopka
**Footer.jsx**
- Sekcja aplikacji mobilnej (Google Play, App Store)
- Ikona Facebook
- Menu w 3 kolumnach
- Copyright

---

## Mock Data

### mockData.js

**tennisClubs** - 6 klubów:
```javascript
{
  id, name, fullName, voivodeship, city, address,
  courts, surface, indoor, outdoor, image
}
```

**sparringPartners** - 4 partnerów:
```javascript
{
  id, name, city, level, age, experience, avatar
}
```

**news** - 4 aktualności:
```javascript
{
  id, title, date, excerpt
}
```

**cities** - Lista miast:
```javascript
['Warszawa', 'Łódź', 'Wrocław', 'Lubliniec', 'Kielce', 'Olsztyn']
```

**voivodeships** - Województwa:
```javascript
{ id, name, cities[] }
```

---

## Routing

| Ścieżka | Komponent | Opis |
|---------|-----------|------|
| `/` | HomePage | Strona główna |
| `/kluby` | ClubsListPage | Lista wszystkich klubów |
| `/klub/:id` | ClubDetailsPage | Szczegóły klubu + rezerwacja |
| `/sparingpartnerzy` | SparingPartnersPage | Lista partnerów |
| `/turnieje` | TournamentsPage | Turnieje |
| `/o-nas` | AboutPage | O nas |
| `/login` | LoginPage | Logowanie |
| `/register` | LoginPage | Rejestracja (używa tego samego komponentu) |

---

## Kolory projektu

```css
/* Główne kolory */
--navy-blue: #2C3E50      /* Nawigacja, nagłówki */
--lime-green: #A4C639     /* Przyciski, akcenty */
--darker-green: #8FB82E   /* Hover na przyciskach */
--dark-bg: #1a252f        /* Ciemne tło */
--light-gray: #f9fafb     /* Jasne tło sekcji */
```

---

## Kluczowe zależności

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.5.1",
  "axios": "^1.8.4",
  "tailwindcss": "^3.4.17",
  "lucide-react": "^0.507.0",
  "@radix-ui/react-*": "^1.x.x"
}
```

---

## Obsługa błędów

Projekt używa:
- **Toast notifications** dla feedback użytkownika
- Walidacja formularzy (wybór daty/godziny)
- Obsługa braku danych (404 dla nieistniejących klubów)

---

## Responsywność

Projekt jest w pełni responsywny:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Wszystkie komponenty adaptują się do rozmiaru ekranu.

---

## Następne kroki (opcjonalne)

Jeśli chcesz rozbudować projekt:

1. **Backend integracja**
   - Zastąp mockData.js prawdziwym API
   - Dodaj FastAPI backend
   - MongoDB dla danych

2. **Funkcje dodatkowe**
   - Prawdziwy system logowania (JWT)
   - Panel administracyjny dla klubów
   - System płatności
   - Email notifications
   - Kalendarz rezerwacji (react-calendar)

3. **Optymalizacje**
   - Lazy loading obrazów
   - Code splitting
   - PWA support
   - SEO optimization

---

## Wsparcie

W razie pytań lub problemów, sprawdź:
- Logi w konsoli przeglądarki (F12)
- Upewnij się że port 3000 jest wolny
- Sprawdź czy wszystkie zależności zostały zainstalowane

---

## Licencja

Ten projekt to demonstracyjna kopia rezerwujkort.pl stworzona wyłącznie w celach edukacyjnych.

---

**Utworzono:** Styczeń 2025
**Stack:** React 19 + Tailwind CSS + Shadcn UI
**Status:** ✅ Frontend Complete (z mockowanymi danymi)
