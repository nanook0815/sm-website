<template>
  <div class="flex min-h-screen flex-col bg-white">
    <AppHeader />
    <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
