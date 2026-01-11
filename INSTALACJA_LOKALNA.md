# 🚀 Instalacja lokalna - Instrukcja krok po kroku

## Metoda 1: Pobranie plików z kontenera (jeśli masz dostęp)

### Krok 1: Skopiuj katalog frontend

Jeśli masz dostęp do kontenera, skopiuj cały katalog:

```bash
# Z twojego lokalnego komputera
docker cp <container_id>:/app/frontend ./rezerwujkort-clone
```

### Krok 2: Przejdź do katalogu

```bash
cd rezerwujkort-clone
```

### Krok 3: Zainstaluj zależności

```bash
yarn install
# lub
npm install
```

### Krok 4: Uruchom aplikację

```bash
yarn start
# lub
npm start
```

Aplikacja będzie dostępna pod: **http://localhost:3000**

---

## Metoda 2: Utworzenie projektu od podstaw

Jeśli chcesz stworzyć projekt od zera, postępuj według poniższych kroków:

### Krok 1: Utwórz nowy projekt React

```bash
npx create-react-app rezerwujkort-clone
cd rezerwujkort-clone
```

### Krok 2: Zainstaluj dodatkowe zależności

```bash
yarn add react-router-dom axios
yarn add @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip
yarn add lucide-react class-variance-authority clsx tailwind-merge
yarn add cmdk input-otp sonner vaul react-day-picker date-fns
yarn add embla-carousel-react react-resizable-panels
yarn add react-hook-form @hookform/resolvers zod
yarn add next-themes

# Dev dependencies
yarn add -D tailwindcss postcss autoprefixer @craco/craco
yarn add -D eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react globals
```

### Krok 3: Skonfiguruj Tailwind CSS

```bash
npx tailwindcss init -p
```

### Krok 4: Utwórz craco.config.js

```bash
touch craco.config.js
```

Zawartość:
```javascript
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};
```

### Krok 5: Zaktualizuj package.json scripts

Zamień scripts na:
```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test"
}
```

### Krok 6: Skopiuj pliki

Teraz musisz skopiować wszystkie pliki z listy poniżej. Możesz:

1. **Pobrać z repozytorium** (jeśli zostało utworzone)
2. **Skopiować ręcznie** z dokumentacji poniżej
3. **Użyć eksportu** z obecnego środowiska

---

## 📁 Lista plików do skopiowania

### Konfiguracja (root projektu)

1. **tailwind.config.js**
2. **craco.config.js**
3. **.env**

### Główne pliki aplikacji (src/)

4. **src/App.js**
5. **src/App.css**
6. **src/index.js**
7. **src/index.css**
8. **src/mockData.js**

### Komponenty (src/components/)

9. **src/components/Navbar.jsx**
10. **src/components/Hero.jsx**
11. **src/components/ProcessSteps.jsx**
12. **src/components/FeaturedCourts.jsx**
13. **src/components/FeaturedPartners.jsx**
14. **src/components/SearchForm.jsx**
15. **src/components/PolandMap.jsx**
16. **src/components/NewsSection.jsx**
17. **src/components/Footer.jsx**

### Komponenty UI (src/components/ui/)

18. **src/components/ui/button.jsx**
19. **src/components/ui/card.jsx**
20. **src/components/ui/input.jsx**
21. **src/components/ui/label.jsx**
22. **src/components/ui/select.jsx**
23. **src/components/ui/toast.jsx**
24. **src/components/ui/toaster.jsx**

### Strony (src/pages/)

25. **src/pages/HomePage.jsx**
26. **src/pages/ClubsListPage.jsx**
27. **src/pages/ClubDetailsPage.jsx**
28. **src/pages/SparingPartnersPage.jsx**
29. **src/pages/TournamentsPage.jsx**
30. **src/pages/AboutPage.jsx**
31. **src/pages/LoginPage.jsx**

### Hooks (src/hooks/)

32. **src/hooks/use-toast.js**

---

## Zawartość kluczowych plików

### .env

```env
REACT_APP_BACKEND_URL=http://localhost:8001
WDS_SOCKET_PORT=3000
ENABLE_HEALTH_CHECK=false
```

### tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
```

---

## Weryfikacja instalacji

### 1. Sprawdź wersje

```bash
node --version   # Powinno być >= 18
yarn --version   # Powinno być >= 1.22
```

### 2. Sprawdź czy zależności się zainstalowały

```bash
ls node_modules/react
ls node_modules/react-router-dom
```

### 3. Uruchom aplikację

```bash
yarn start
```

### 4. Otwórz w przeglądarce

```
http://localhost:3000
```

### 5. Sprawdź czy wszystko działa

- [ ] Strona główna się ładuje
- [ ] Hero section z tłem jest widoczne
- [ ] Nawigacja działa (kliknij "KLUBY")
- [ ] Karty klubów są widoczne
- [ ] Kliknięcie na klub przenosi do szczegółów
- [ ] Mapa Polski jest interaktywna
- [ ] Footer jest widoczny

---

## Rozwiązywanie problemów

### Problem: Port 3000 jest zajęty

```bash
# Znajdź proces
lsof -i :3000

# Zabij proces
kill -9 <PID>
```

### Problem: Błędy instalacji zależności

```bash
# Usuń node_modules i package-lock
rm -rf node_modules package-lock.json yarn.lock

# Wyczyść cache
yarn cache clean
# lub
npm cache clean --force

# Zainstaluj ponownie
yarn install
```

### Problem: Białe obrazy nie ładują się

Sprawdź połączenie internetowe - obrazy są ładowane z Unsplash.

### Problem: Błąd "Module not found"

Upewnij się, że wszystkie komponenty zostały skopiowane do właściwych katalogów.

---

## Export projektu jako ZIP

Jeśli chcesz wyeksportować cały projekt:

```bash
# Z katalogu nadrzędnego
cd /app
tar -czf rezerwujkort-frontend.tar.gz frontend/

# Lub zip
zip -r rezerwujkort-frontend.zip frontend/
```

---

## Kolejne kroki

Po uruchomieniu lokalnym możesz:

1. **Modyfikować komponenty** - zmień kolory, layout, treści
2. **Dodać nowe funkcje** - więcej stron, formularz kontaktowy
3. **Podłączyć backend** - zastąp mockData prawdziwym API
4. **Wdrożyć na hosting** - Vercel, Netlify, GitHub Pages

---

## Pomocne komendy

```bash
# Start development
yarn start

# Build produkcyjny
yarn build

# Uruchom build lokalnie
npx serve -s build

# Sprawdź bundle size
yarn build
ls -lh build/static/js/*.js

# Format kodu (jeśli masz Prettier)
npx prettier --write "src/**/*.{js,jsx}"

# Check for updates
yarn outdated
```

---

**Powodzenia z uruchomieniem projektu!** 🎾

Jeśli masz jakiekolwiek problemy, sprawdź logi w konsoli lub skontaktuj się ze mną.
