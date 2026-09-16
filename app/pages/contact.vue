<script setup lang="ts">
useHead({
  title: 'Kontakt'
})

const form = reactive({
  name: '',
  email: '',
  message: ''
})

function handleSubmit() {
  // Platzhalter: hier muss später die tatsächliche Formular-Logik rein
  // (z. B. Versand per API-Route, E-Mail-Service oder Formular-Anbieter).
  console.log('Formular abgeschickt:', form)
}
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-4xl font-bold text-gray-900">
      Kontakt
    </h1>
    <p class="max-w-2xl text-lg text-gray-600">
      Platzhalter-Formular – die eigentliche Versandlogik ist noch nicht
      angebunden.
    </p>

    <form class="max-w-md space-y-4" @submit.prevent="handleSubmit">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          name="name"
          class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
        >
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">E-Mail</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          name="email"
          class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
        >
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Nachricht</label>
        <textarea
          id="message"
          v-model="form.message"
          name="message"
          rows="4"
          class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
        />
      </div>
      <button
        type="submit"
        class="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
      >
        Nachricht senden
      </button>
    </form>
  </div>
</template>
