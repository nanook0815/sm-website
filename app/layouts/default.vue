<template>
  <div class="flex min-h-screen flex-col bg-paper text-body">
    <div class="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <img
        src="/images/brand/export/icon-fokusfeld-graphit-einfarbig.svg"
        alt=""
        class="absolute left-1/2 top-1/2 w-[130vw] max-w-none opacity-[0.04] select-none md:w-[900px]"
        :style="{ transform: `translate(-50%, calc(-50% + ${scrollOffset * 0.05}px))` }"
      />
    </div>
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const scrollOffset = ref(0)
let ticking = false

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    scrollOffset.value = window.scrollY
    ticking = false
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
