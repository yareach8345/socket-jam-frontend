<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col items-center justify-between min-h-screen bg-[url(/image/background/dark-blue.png)] bg-cover bg-center">
    <header></header>
    <main class="bg-gray-400 bg-opacity-20 rounded-md shadow-sm border-white/40 backdrop-blur-md">
      <slot/>
    </main>
    <footer></footer>
  </div>
</template>

<style scoped>

</style>