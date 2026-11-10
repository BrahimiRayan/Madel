<template>
  <section class="lg:my-10 lg:px-30 max-md:px-4 py-16 max-md:py-10 overflow-hidden">
    <div class="w-full flex items-center justify-center flex-col my-5 gap-4">
      <div class="text-(--og) flex items-center justify-center gap-3 max-md:text-center">
        <span class="w-1.5 h-1.5 rounded-full bg-(--og) animate-pulse"></span>
        Avis clients
      </div>
      <div class="mfont text-5xl text-center mb-3 max-md:text-center max-md:text-xl">
        ILS NOUS ONT FAIT<br>CONFIANCE
      </div>
      <p class="text-white/40 text-sm text-center max-w-md">
        Avis authentiques publiés avec l'accord de nos clients.
      </p>
    </div>

    <UMarquee pause-on-hover reverse class="mt-12 [--gap:1.25rem]">
      <article
        v-for="(review, i) in reviews"
        :key="i"
        class="w-80 max-md:w-72 p-6 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-(--og)/50 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 flex flex-col"
      >
        <div class="flex gap-1 mb-4">
          <UIcon
            v-for="n in 5"
            :key="n"
            name="i-solar-star-bold"
            class="size-3.5"
            :class="n <= review.rating ? 'text-(--og)' : 'text-white/10'"
          />
        </div>

        <p class="text-sm text-white/70 leading-relaxed flex-1 mb-5">{{ review.text }}</p>

        <div class="flex items-center gap-3 pt-4 border-t border-white/5">
          <div class="w-9 h-9 rounded-full bg-(--og)/15 border border-(--og)/30 flex items-center justify-center shrink-0">
            <span class="mfont text-[10px] text-(--og)">{{ initials(review.name) }}</span>
          </div>
          <div class="min-w-0">
            <p class="text-xs text-white truncate">{{ review.name }}</p>
            <p class="text-[9px] text-white/40 uppercase tracking-wider">{{ review.service }}</p>
          </div>
        </div>
      </article>
    </UMarquee>
  </section>
</template>

<script setup lang="ts">
const reviews = [
  {
    name: 'Rayan Brahimi',
    service: 'Déménagement particuliers',
    rating: 5,
    text: 'Équipe ponctuelle, soigneuse et très organisée. Tout a été emballé et protégé correctement. Je recommande sans hésiter.',
  },
  {
    name: 'Sophie Martin',
    service: 'Déménagement professionnel',
    rating: 5,
    text: 'Transfert de nos bureaux réalisé un week-end pour ne pas interrompre l\'activité. Très professionnel du début à la fin.',
  },
  {
    name: 'Karim Benali',
    service: 'Transport de meubles',
    rating: 4,
    text: 'Bon rapport qualité-prix, communication claire et devis respecté. Merci pour votre réactivité.',
  },
  {
    name: 'Julie Lefèvre',
    service: 'Emballage & protection',
    rating: 5,
    text: 'Emballage impeccable, aucune casse à déplorer. L\'équipe a pris le temps de protéger chaque objet fragile.',
  },
  {
    name: 'Marc Dubois',
    service: 'Livraison électroménager',
    rating: 5,
    text: 'Livraison rapide et installation soignée. Très bon contact avec l\'équipe, je referai appel à eux.',
  },
]

const initials = (name: string) =>
  name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
</script>

<style scoped>
.mfont { font-family: var(--font-h); font-weight: 800; }
</style>