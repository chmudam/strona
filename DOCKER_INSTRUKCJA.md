# 🐳 Uruchomienie RezerwujKort.pl w Docker (Ubuntu 22)

## 📋 Wymagania

Tylko **Docker** i **Docker Compose** (nic więcej!)

### Sprawdź czy masz Docker:
```bash
docker --version
docker-compose --version
```

### Jeśli nie masz Docker, zainstaluj:
```bash
# Aktualizuj system
sudo apt update

# Zainstaluj Docker
sudo apt install docker.io docker-compose -y

# Dodaj użytkownika do grupy docker (żeby nie używać sudo)
sudo usermod -aG docker $USER

# Wyloguj się i zaloguj ponownie, lub użyj:
newgrp docker

# Sprawdź instalację
docker --version
```

---

## 🚀 Instrukcja krok po kroku

### Krok 1: Rozpakuj archiwum

```bash
# Przejdź do katalogu gdzie jest archiwum
cd ~/Downloads  # lub gdzie masz plik

# Rozpakuj
unzip rezerwujkort-react-project.zip

# Powinien powstać katalog 'frontend' lub zawartość w bieżącym katalogu
# Jeśli rozpakował się katalog 'frontend', przejdź do niego:
cd frontend

# Jeśli pliki są bezpośrednio, utwórz katalog projektu:
mkdir -p ~/rezerwujkort-project
mv * ~/rezerwujkort-project/
cd ~/rezerwujkort-project
```

### Krok 2: Utwórz Dockerfile

W katalogu projektu (tam gdzie jest `package.json`) utwórz plik `Dockerfile`:

```bash
nano Dockerfile
```

Wklej tę zawartość:

```dockerfile
# Użyj oficjalnego obrazu Node.js 20
FROM node:20-alpine

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj pliki package
COPY package.json yarn.lock ./

# Zainstaluj zależności
RUN yarn install --frozen-lockfile

# Skopiuj resztę plików
COPY . .

# Otwórz port 3000
EXPOSE 3000

# Uruchom aplikację
CMD ["yarn", "start"]
```

Zapisz plik: `Ctrl+O`, Enter, `Ctrl+X`

### Krok 3: Utwórz docker-compose.yml

W tym samym katalogu:

```bash
nano docker-compose.yml
```

Wklej:

```yaml
version: '3.8'

services:
  frontend:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
      - REACT_APP_BACKEND_URL=http://localhost:8001
      - WDS_SOCKET_PORT=3000
    stdin_open: true
    tty: true
    command: yarn start
```

Zapisz: `Ctrl+O`, Enter, `Ctrl+X`

### Krok 4: Utwórz .dockerignore (opcjonalnie, ale zalecane)

```bash
nano .dockerignore
```

Wklej:

```
node_modules
build
.git
.gitignore
README.md
.env.local
.DS_Store
npm-debug.log
yarn-debug.log
yarn-error.log
```

Zapisz: `Ctrl+O`, Enter, `Ctrl+X`

### Krok 5: Zbuduj i uruchom kontener

```bash
# Zbuduj obraz Docker (może potrwać 2-5 minut przy pierwszym razie)
docker-compose build

# Uruchom aplikację
docker-compose up
```

**To wszystko!** Aplikacja będzie dostępna pod:
```
http://localhost:3000
```

---

## 🎮 Najważniejsze komendy Docker

### Uruchomienie w tle (detached mode):
```bash
docker-compose up -d
```

### Zatrzymanie aplikacji:
```bash
docker-compose down
```

### Zobacz logi:
```bash
docker-compose logs -f
```

### Restart aplikacji:
```bash
docker-compose restart
```

### Wejście do kontenera (terminal):
```bash
docker-compose exec frontend sh
```

### Przebuduj obraz (po zmianach w package.json):
```bash
docker-compose build --no-cache
docker-compose up
```

### Wyczyść wszystko:
```bash
docker-compose down -v
docker system prune -a
```

---

## 📊 Struktura katalogów po rozpakowaniu

Powinieneś mieć coś takiego:

```
rezerwujkort-project/
├── Dockerfile                  # ← UTWORZYSZ
├── docker-compose.yml          # ← UTWORZYSZ
├── .dockerignore              # ← UTWORZYSZ
├── package.json               # ← Z ARCHIWUM
├── yarn.lock                  # ← Z ARCHIWUM
├── craco.config.js            # ← Z ARCHIWUM
├── tailwind.config.js         # ← Z ARCHIWUM
├── .env                       # ← Z ARCHIWUM
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── ...
├── public/
│   └── index.html
└── PROJECT_DOCUMENTATION.md
```

---

## 🔧 Rozwiązywanie problemów

### Problem: Port 3000 zajęty
```bash
# Sprawdź co używa portu
sudo lsof -i :3000

# Zabij proces
sudo kill -9 <PID>

# Lub zmień port w docker-compose.yml na inny np. 3001:3000
```

### Problem: Błąd "permission denied" przy Docker
```bash
# Dodaj użytkownika do grupy docker
sudo usermod -aG docker $USER

# Wyloguj się i zaloguj ponownie
```

### Problem: Kontener nie startuje
```bash
# Zobacz szczegółowe logi
docker-compose logs frontend

# Przebuduj bez cache
docker-compose build --no-cache
```

### Problem: Zmiany w kodzie nie są widoczne
```bash
# Restart kontenera
docker-compose restart

# Lub zatrzymaj i uruchom ponownie
docker-compose down
docker-compose up
```

### Problem: Brak pamięci
```bash
# Wyczyść nieużywane obrazy i kontenery
docker system prune -a
```

---

## 💡 Dodatkowe wskazówki

### Hot Reload działa!
Zmiany w plikach `.js`, `.jsx`, `.css` będą automatycznie widoczne w przeglądarce.

### Edytuj pliki normalnie
Możesz edytować pliki w swoim ulubionym edytorze (VSCode, nano, vim) - zmiany będą widoczne w kontenerze.

### Produkcyjny build
Jeśli chcesz zbudować wersję produkcyjną:

```bash
# Zbuduj
docker-compose exec frontend yarn build

# Pliki będą w katalogu build/
```

### Zmienne środowiskowe
Jeśli chcesz zmienić URL backendu, edytuj `.env`:
```bash
nano .env
```

Zmień wartość:
```
REACT_APP_BACKEND_URL=http://twoj-backend-url:8001
```

Restart kontenera:
```bash
docker-compose restart
```

---

## 🎯 Szybki start (wszystkie komendy w jednym)

```bash
# 1. Rozpakuj
unzip rezerwujkort-react-project.zip
cd frontend  # lub nazwa katalogu

# 2. Utwórz Dockerfile (skopiuj zawartość z powyżej)
nano Dockerfile

# 3. Utwórz docker-compose.yml (skopiuj zawartość z powyżej)
nano docker-compose.yml

# 4. Uruchom
docker-compose up

# 5. Otwórz przeglądarkę
# http://localhost:3000
```

---

## 📱 Dostęp z innych urządzeń w sieci lokalnej

Jeśli chcesz otworzyć stronę na telefonie/innym komputerze w tej samej sieci:

```bash
# Znajdź IP swojego Ubuntu
ip addr show | grep "inet " | grep -v 127.0.0.1

# Przykład: 192.168.1.100
# Otwórz na innym urządzeniu: http://192.168.1.100:3000
```

---

## 🛑 Zatrzymanie i usunięcie projektu

```bash
# Zatrzymaj kontenery
docker-compose down

# Usuń wszystko (kontenery, obrazy, volumes)
docker-compose down -v --rmi all

# Usuń katalog projektu
cd ..
rm -rf rezerwujkort-project
```

---

## ✅ Checklist

- [ ] Zainstalowany Docker i Docker Compose
- [ ] Rozpakowane archiwum
- [ ] Utworzony Dockerfile
- [ ] Utworzony docker-compose.yml
- [ ] Uruchomione `docker-compose up`
- [ ] Otwarta przeglądarka na http://localhost:3000
- [ ] Strona działa poprawnie!

---

**Gotowe! Projekt działa w pełnej izolacji w Docker, nic nie zainstalowałeś w systemie Ubuntu! 🎉**

Jeśli masz jakieś problemy, daj znać!
