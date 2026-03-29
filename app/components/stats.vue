<template>
    <div class="mb-20">
        <UMarquee pause-on-hover class="p-6 mb-20">
          <div v-for="val in vals" class="flex items-center gap-x-2">
            <div class="w-2 h-2 bg-(--og) rounded-full"></div>
            <p class="max-md:text-xs">{{ val }}</p>
          </div>
         </UMarquee>    
         <section class="flex items-center max-md:flex-col justify-around bg-white/5 lg:h-40 gap-5 max-md:p-3 ">
            <div v-for="stat in stats" class="hover:bg-(--og)/10 hover:scale-110 w-full h-full flex flex-col items-center justify-center transition-all duration-300 ease-in-out max-md:border-b max-md:border-b-white/10 max-md:pb-3">
                <h2 class="text-5xl font-bold ">{{ stat.stat }} <span class="text-(--og) text-3xl">{{ stat.sign }}</span></h2>
                <p class="text-gray-500 text-sm max-w-45 text-wrap text-center mt-3">{{ stat.description }}</p>
            </div>
         </section>
    </div>

</template>


<script setup>

const vals = [
  "Transport fret de proximité",
  "Déménagement résidentiel",
  "Déménagement d'entreprise",
  "Location véhicule avec conducteur",
  "Véhicules ≤ 3,5 tonnes",
  "Service 7j/7j",
  "Devis sous 24h"
]

const stats = [
    {
        stat : "900",
        sign : "+",
        description : "Clients satisfaits"
    },
    {
        stat : "3",
        sign : "+",
        description : "Ans d'expérience"
    },
    {
        stat : "97",
        sign : "%",
        description : "Taux de satisfaction"
    },
    {
        stat : "≤ 3,5",
        sign : "T",
        description : "Véhicules conformes homologués & assurés"
    },
]
</script>