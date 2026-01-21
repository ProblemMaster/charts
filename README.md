# Vue Diagram App – Betyg & Väderdata

Detta projekt är en Vue-baserad webbapplikation som innehåller två separata vyer:

1. **Betyg från årskurs 9**
   Användaren kan mata in sina betyg från 9:an och få dem visualiserade i ett **radardiagram**.

2. **Väderdata för Mariehamn**
   Applikationen hämtar väderdata från **Open-Meteo API** och visar **max- och min-temperaturer** för Mariehamn under de **senaste 9 dagarna** i ett **linjediagram**.

---

## Funktioner

* Inmatning av betyg med direkt uppdatering av radardiagram
* Hämtning av väderdata via Open-Meteo (utan API-nyckel)
* Linjediagram för temperaturutveckling
* Responsivt och lättöverskådligt gränssnitt
* Routing mellan vyerna

---

## Tekniker som används

* **Vue 3**
* **Vue Router**
* **Chart.js** (eller motsvarande diagram-bibliotek)
* **Open-Meteo API**
* JavaScript (ES6)
* HTML & CSS

---

## Installation

### 1. Klona repot

```bash
git clone https://github.com/ProblemMaster/charts.git
```

### 2. Gå in i projektmappen

```bash
cd .\charts\charts\
```

### 3. Installera beroenden

```bash
npm install
```

---

## Starta projektet lokalt

```bash
npm run dev
```

Applikationen startar på:

```
http://localhost:5175
```

(Porten kan variera beroende på din setup.)

---

## API-information

Väderdata hämtas från **Open-Meteo**:

* Plats: Mariehamn
* Data: Daglig max- och min-temperatur
* Tidsperiod: Senaste 9 dagarna
* Ingen API-nyckel krävs

---

## Projektstruktur (översikt)

* `src/views/` – Applikationens vyer
* `src/components/` – Återanvändbara komponenter
* `src/router/` – Routing
* `src/services/` eller motsvarande – API-anrop
* `README.md` – Projektdokumentation

---

## Författare

Skapad som en skoluppgift i Vue.js.

---

## GitHub

Länk till repository:
👉 **(lägg in din GitHub-länk här innan inlämning)**

---

✅ Projektet uppfyller kraven på:

* Två vyer
* Extern API-hämtning
* Två olika diagramtyper
* Tydlig README med installation och körinstruktioner
