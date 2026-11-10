<template>
  <section class="mt-6 lg:px-30 py-20 max-md:py-10 bg-(--navy2)">
    <div class="w-full flex items-center justify-center flex-col my-5 gap-4">
      <div class="text-(--og) flex items-center justify-center gap-3 max-md:text-center">
        <div class="animate-spin">✦</div> Comment ça marche ?
      </div>
      <div class="mfont text-5xl text-center mb-16 max-md:text-center max-md:text-xl">Simple en 4 étapes</div>
    </div>

    <div class="max-w-2xl mx-auto relative">
      <div class="absolute left-13 top-4 bottom-4 w-px bg-linear-to-b from-(--og)/50 via-(--og)/20 to-transparent max-md:left-[28px]"></div>

      <div
        v-for="(item, i) in items"
        :key="i"
        class="relative flex gap-8 max-md:gap-5 pb-12 last:pb-0 group"
      >
        <div class="relative shrink-0 flex items-start justify-center w-[104px] max-md:w-[56px]">
          <span
            class="mfont text-6xl max-md:text-3xl leading-none text-transparent transition-all duration-500 group-hover:text-(--og) select-none"
            style="-webkit-text-stroke: 1.5px var(--og)"
          >
            {{ String(i + 1).padStart(2, '0') }}
          </span>
        </div>

        <div class="pt-1 flex-1">
          <div class="mfont text-2xl max-md:text-lg mb-2 group-hover:text-(--og) transition-colors duration-300">{{ item.title }}</div>
          <div class="text-sm text-white/50 leading-relaxed max-w-md">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mfont { font-family: var(--font-h); font-weight: 800; }
</style>

<script setup lang="ts">
const items = [
  { title: 'Vous nous contactez', description: 'Remplissez le formulaire de demande de devis en ligne en 2 minutes.' },
  { title: 'Nous étudions votre demande', description: 'Trans Madel analyse vos besoins et les informations transmises.' },
  { title: 'Vous recevez un devis', description: 'Un devis personnalisé, détaillé et sans surprise vous est envoyé.' },
  { title: 'Nous organisons la prestation', description: 'Vous confirmez la réservation, Trans Madel organise l\'intervention.' },
]
</script>