<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { getTest } from '../services/test-service'
import { onMounted } from 'vue'

onMounted(async () => {
  console.log(await getTest())
})
</script>
