<template>
<section class="py-5 max-md:px-2 lg:px-30 bg-(--navy2)">

  <div class="flex max-md:flex-col max-md:gap-4 items-center justify-between">

    <div>
      <div class="text-(--og) text-xs mb-5 max-md:text-center">+ Nos prestations</div>
      <div class="text-5xl max-md:text-xl mfont max-md:text-center">CE QUE FAIT<br>TRANS MADEL</div>
    </div>

    <button class="px-10 py-1.5 text-white bg-(--og) rounded-lg hover:shadow-lg hover:shadow-orange-600/30">Contactez Nos →</button>
  </div>

  <div class="border border-(--og)/20 grid grid-cols-3 max-md:grid-cols-1 bg-black/10 rounded-2xl mt-10 overflow-hidden">

    <div v-for="(service, i) in services"  class="p-10 hover:bg-white/5 transition-all duration-300 ease-in-out border border-white/5">
      <div class="text-xs text-(--og)/80">0{{ i + 1}} · {{ service.label }}</div>
      <UIcon :name="service.icon" size="16" class="bg-white/40 size-6 text-center rounded-lg my-4 "/>
      <div class="mfont text-xl">{{ service.name }}</div>
      <div class="text-sm text-white/60 my-7">{{ service.discription }}</div>
      <div class="flex items-center justify-end gap-x-5">
        <UButton icon="i-lucide-phone" size="md" class="bg-(--og) text-white"/>
        <UButton icon="i-lucide-mail" size="md" class="bg-(--og) text-white"/>
      </div>
    </div>
    
  </div>
</section>

</template>

<style scoped>
.mfont{
    font-family: var(--font-h);
    font-weight:800;
}
</style>

<script setup>
const services = [
    {
        label : "FRET",
        icon : "i-lucide-truck",
        name : "Transport de marchandises",
        discription : "Livraison de colis, palettes et fret de proximité. Véhicules utilitaires ≤ 3,5 t avec conducteur professionnel."
    },
    {
        label : "RÉSIDENTIEL",
        icon : "i-lucide-home",
        name : "Déménagement particuliers",
        discription : "Appartements, studios, maisons. Emballage, transport et installation avec soin et ponctualité."
    },
    {
        label : "ENTREPRISE",
        icon : "i-lucide-building-2",
        name : "Déménagement professionnel",
        discription : "Bureaux, commerces, entrepôts. Planification complète pour minimiser l'interruption de votre activité."
    },
    {
        label : "LOCATION",
        icon : "i-mdi-car-rental",
        name : "Location avec conducteur",
        discription : "Mise à disposition de véhicules industriels ≤ 3,5 t avec chauffeur qualifié pour vos besoins ponctuels."
    },
    {
        label : "STOCKAGE",
        icon : "i-vaadin-storage",
        name : "Garde-meubles & stockage",
        discription : "Solutions de stockage sécurisées courte ou longue durée. Vos biens en sécurité, accessibles à tout moment."
    },
        {
        label : "ÉVACUATION",
        icon : "i-lucide-recycle",
        name : "Vide maison & évacuation",
        discription : "Encombrants, vide appartement, déchets chantier. Tri sélectif et dépôt agréé inclus dans la prestation."
    },


]
</script>