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

// Serie till radardiagrammet
const series = computed(() => [
  {
    name: 'Mina betyd',
    data: subjects.value.map(subject => subject.grade)
  }
])
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

    <!-- Radardiagram -->
    <VueApexCharts type="radar" height="400" :options="chartOptions" :series="series" />
  </div>
</template>

<style scoped>
.betyg-vy h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.form {
  display: grid;
  grid-template-columns: 1fr 80px;
  gap: 0.75rem 1rem;
  margin-bottom: 2rem;
}

.form-row {
  display: contents;
}

label {
  font-weight: 500;
}

input {
  padding: 0.4rem;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  text-align: center;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

</style>
