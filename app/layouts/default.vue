<template>
  <div class="flex min-h-screen flex-col bg-paper text-body">
    <div class="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <img
        src="/images/brand/export/icon-fokusfeld-graphit-einfarbig.svg"
        alt=""
        class="parallax-bg absolute left-1/2 top-1/2 w-[130vw] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.04] select-none md:w-[900px]"
      />
    </div>
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
