<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Betyg</RouterLink>
      <RouterLink to="/weather">Väder</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>
