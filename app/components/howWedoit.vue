<template>
    <section class="mt-6 px-30 py-20 bg-(--navy2)">

        <div class="w-full flex items-center justify-center flex-col my-5 gap-4">
            <div class="text-(--og) flex items-center justify-center gap-3"><div class="animate-spin">✦</div> Comment ça marcheComment ça marche ?</div>
            <div class="mfont text-5xl text-center mb-5">Simple en 4 étapes</div>
        </div>

        <UStepper :items="items" class="w-full" :ui="{
            indicator : 'rounded-full bg-(--og)/90',
            description : 'text-xs mt-3'

        }" />
    </section>

</template>

<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui'

const items = ref<StepperItem[]>([
  {
    title: 'Vous nous contactez',
    description: 'Par téléphone , email ou formulaire. Décrivez votre besoin en 2 minutes.',
  },
  {
    title: 'On vous envoie un devis',
    description: 'Gratuit, détaillé, sans engagement. Réponse garantie sous 24h.',
  },
  {
    title: 'On planifie ensemble',
    description: "Date, heure, équipe dédiée. Tout est confirmé par écrit avant l'intervention."
  },
  {
    title: "On s'occupe de tout",
    description: "Ponctualité garantie. Vous validez la mission une fois terminée."
  }
])
</script>

<style scoped>
.mfont{
    font-family: var(--font-h);
    font-weight:800;
}
</style>