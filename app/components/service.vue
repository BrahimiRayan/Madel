<template>
<section class="py-16 max-md:py-10 max-md:px-4 lg:px-15 bg-(--navy2)">

  <div class="flex max-md:flex-col max-md:gap-6 items-end justify-between mb-12">
    <div>
      <div class="text-(--og) text-xs mb-4 max-md:text-center uppercase tracking-[0.3em]">+ Nos prestations</div>
      <div class="text-5xl max-md:text-3xl mfont max-md:text-center leading-none">CE QUE FAIT<br>TRANS MADEL</div>
    </div>

    <NuxtLink to="/devise" class="px-10 py-2.5 max-md:mx-auto max-md:w-full max-md:text-center text-white bg-(--og) rounded-full font-medium hover:bg-(--og)/90 hover:shadow-lg hover:shadow-orange-600/30 transition-all duration-300">
      Contactez-nous →
    </NuxtLink>
  </div>

  <div class="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
    <div
      v-for="(service, i) in services"
      :key="service.label"
      class="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-(--og)/50 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden"
    >
      <span class="absolute top-4 right-5 text-6xl font-black text-white/[0.04] group-hover:text-(--og)/10 transition-colors duration-300 select-none">
        0{{ i + 1 }}
      </span>

      <div class="relative flex items-center gap-3 mb-6">
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-(--og)/15 border border-(--og)/30 group-hover:bg-(--og) transition-colors duration-300">
          <UIcon :name="service.icon" class="size-5 text-(--og) group-hover:text-white transition-colors duration-300" />
        </div>
        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-(--og)/80">{{ service.label }}</span>
      </div>

      <div class="relative mfont text-lg leading-snug mb-3">{{ service.name }}</div>
      <div class="relative text-sm text-white/50 leading-relaxed mb-6">{{ service.description }}</div>

      <div class="relative flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <a href="tel:+33661294686" class="flex items-center justify-center w-9 h-9 rounded-full bg-(--og)/20 hover:bg-(--og) text-(--og) hover:text-white transition-colors">
          <UIcon name="i-lucide-phone" class="size-4" />
        </a>
        <NuxtLink to="/devise" class="flex items-center justify-center w-9 h-9 rounded-full bg-(--og)/20 hover:bg-(--og) text-(--og) hover:text-white transition-colors">
          <UIcon name="i-lucide-mail" class="size-4" />
        </NuxtLink>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
.mfont {
  font-family: var(--font-h);
  font-weight: 800;
}
</style>

<script setup>
const services = [
  {
    label: "RÉSIDENTIEL",
    icon: "i-lucide-home",
    name: "Déménagement particuliers",
    description: "Appartements et maisons. Accompagnement des familles et des particuliers pour leur changement de logement, en Île-de-France et partout en France."
  },
  {
    label: "ENTREPRISE",
    icon: "i-lucide-building-2",
    name: "Déménagement professionnel",
    description: "Bureaux, commerces et locaux professionnels. Organisation du transfert adaptée pour limiter les interruptions d'activité."
  },
  {
    label: "MOBILIER",
    icon: "i-lucide-truck",
    name: "Transport de meubles & équipements",
    description: "Transport de mobilier et de matériel, avec soin apporté aux biens transportés."
  },
  {
    label: "PROTECTION",
    icon: "i-lucide-package",
    name: "Emballage et protection",
    description: "Protection des biens pour limiter les risques de dommages pendant le transport."
  },
  {
    label: "MOBILIER",
    icon: "i-lucide-wrench",
    name: "Démontage et remontage",
    description: "Prise en charge du mobilier nécessitant un démontage, puis remontage à l'arrivée."
  },
  {
    label: "ÉLECTROMÉNAGER",
    icon: "i-lucide-tv",
    name: "Livraison d'électroménager",
    description: "Transport et livraison d'appareils électroménagers."
  },
  {
    label: "MANUTENTION",
    icon: "i-lucide-hand",
    name: "Manutention et portage",
    description: "Chargement, déchargement et déplacement des biens."
  },
  {
    label: "SPÉCIFIQUE",
    icon: "i-lucide-arrow-up-from-line",
    name: "Monte-meubles",
    description: "Service proposé selon disponibilité — à confirmer avec Trans Madel avant intervention."
  },
]
</script>