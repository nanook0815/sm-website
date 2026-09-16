<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-gray-200 bg-white">
    <div class="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500 sm:px-6">
      © {{ year }} Firmenname. Alle Rechte vorbehalten.
    </div>
  </footer>
</template>
