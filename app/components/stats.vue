<template>
  <div class="mb-20">
    <UMarquee pause-on-hover class="p-6 mb-20">
      <div v-for="val in vals" :key="val" class="flex items-center gap-x-2">
        <div class="w-2 h-2 bg-(--og) rounded-full"></div>
        <p class="max-md:text-xs">{{ val }}</p>
      </div>
    </UMarquee>

    <section class="flex items-center max-md:flex-col justify-around bg-white/5 lg:h-40 gap-5 max-md:p-3">
      <div
        v-for="stat in stats"
        :key="stat.description"
        class="hover:bg-(--og)/10 hover:scale-110 w-full h-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out max-md:border-b max-md:border-b-white/10 max-md:pb-3"
      >
        <h2 class="text-5xl font-bold">
          {{ stat.stat }} <span class="text-(--og) text-3xl">{{ stat.sign }}</span>
        </h2>
        <p class="text-gray-500 text-sm max-w-45 text-wrap text-center mt-3">{{ stat.description }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const vals = [
  "Déménagement de particuliers",
  "Déménagement professionnel",
  "Transport de meubles & équipements",
  "Emballage et protection",
  "Démontage et remontage",
  "Livraison d'électroménager",
  "Manutention et portage",
  "Île-de-France & toute la France"
]

const stats = [
  {
    stat: "500",
    sign: "+",
    description: "Clients satisfaits"
  },
  {
    stat: "5",
    sign: "",
    description: "Ans d'expérience"
  },
  {
    stat: "8",
    sign: "",
    description: "Prestations proposées"
  },
  {
    stat: "48",
    sign: "h",
    description: "Délai de réservation minimum, sous réserve de disponibilité"
  },
]
</script>