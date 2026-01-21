<script setup>
  import VueApexCharts from 'vue3-apexcharts'
  import { ref, computed } from 'vue'

  //Ämen och betyg (4-10)
const subjects = ref([
  {name: 'Svenska', grade: 4},
  {name: 'Engelska', grade: 4},
  {name: 'Matte', grade: 4},
  {name: 'Samhälla', grade: 4},
  {name: 'Kemi', grade: 4},
  {name: 'Fysik', grade: 4},
  {name: 'Religionskunskap', grade: 4},
  {name: 'Historia', grade: 4},
  {name: 'Idrott', grade: 4},
  {name: 'Teknikslöjd', grade: 4},
  {name: 'Textilslöjd', grade: 4},
  {name: 'Hälsokunskap', grade: 4}
])

const displayedSeries = ref([])

// Inställningar för radardiagrammet
const chartOptions = computed(() => ({
  chart: {
    id: 'radChart'
  },
  xaxis: {
    categories: subjects.value.map(subject => subject.name)
  },
  yaxis: {
    min: 4,
    max: 10,
    tickAmount: 6
  },
  markers: {
    size: 4
  },
  fill: {
    opacity: 0.2
  },
  legend: {
    position: 'bottom'
  }
}))

// Funktion för att uppdatera diagrammet
function updateChart() {
  // Validera betygen 4-10
  const validateGrades = subjects.value.map(subject => {
    if (subject.grade < 4) subject.grade =4
    if (subject.grade > 10) subject.grade = 10
    return subject.grade
  })

  // Updatera diagrammet
  displayedSeries.value = [
    {
      name: 'Mina betyg',
      data: validateGrades
    }
  ]
}
</script>

<template>
  <div class="betyg-vy">
    <h1>Mina betyg från åk 9</h1>

    <!-- Formulär -->
    <div class="form">
      <div v-for="(subject, index) in subjects" :key="index" class="form-row">
        <label>{{ subject.name }}</label>
        <input type="number" min="4" max="10" v-model.number="subject.grade">
      </div>
    </div>

    <!-- Knapp för att uppdatera diagram -->
     <div class="button-container">
      <button @click="updateChart">Visa i diagram</button>
     </div>

    <!-- Radardiagram -->
    <VueApexCharts v-if="displayedSeries.length" type="radar" height="400" :options="chartOptions" :series="displayedSeries" />
  </div>
</template>

<style scoped>
.betyg-vy h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

/* Formulär */
.form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem 1rem;
  margin-bottom: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.form-row {
  display: contents;
}

label {
  font-weight: 500;
  white-space: nowrap;
}

input {
  padding: 0.4rem;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  text-align: center;
  width: 60px;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

/* Knapp */
.button-container {
  text-align: center;
  margin-bottom: 2rem;
}

button {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #2563eb;
}

/* Responsiv justering */
@media (max-width: 500px) {
  .form {
    grid-template-columns: 1fr 50px;
    gap: 0.5rem 0.5rem;
  }

  input {
    width: 50px;
  }
}
</style>
