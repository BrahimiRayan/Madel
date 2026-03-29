<template>
    <section class="mt-6 lg:px-30 py-20 max-md:py-10 bg-(--navy2)">

        <div class="w-full flex items-center justify-center flex-col my-5 gap-4">
            <div class="text-(--og) flex items-center justify-center gap-3 max-md:text-center"><div class="animate-spin">✦</div> Comment ça marche ?</div>
            <div class="mfont text-5xl text-center mb-5 max-md:text-center max-md:text-xl">Simple en 4 étapes</div>
        </div>

        <UStepper :items="items" class="w-full" :ui="{
            indicator : 'rounded-full bg-(--og)/90',
            title: 'max-md:text-xs',
            description : 'text-xs max-md:text-[11px] mt-3',
            trigger : 'text-white',
            separator : 'bg-(--og)/70'

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