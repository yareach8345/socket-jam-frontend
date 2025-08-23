<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col items-center justify-between min-h-screen bg-[url(/image/background/dark-blue.png)] bg-cover bg-center">
    <header>
      HEADER
    </header>
    <main class="bg-gray-400 bg-opacity-20 rounded-md border-white/20 backdrop-blur-md">
      <slot/>
    </main>
    <footer>
      FOOTER
    </footer>
  </div>
</template>

<style scoped>

</style>