<template>
<section >
  <div >

    <div class="w-full flex items-center justify-center flex-col my-5 gap-4">
      <div class="text-(--og) flex items-center justify-center gap-3 max-md:text-center"><div class="animate-bounce">✦</div> Pour qui ?</div>
      <div class="mfont text-5xl text-center max-md:text-xl max-md:text-center ">ON S'ADAPTE <br>À VOTRE SITUATION</div>
    </div>

    <div class="grid grid-cols-3 max-md:grid-cols-1 gap-10 px-30 max-md:px-7 ">

      <div v-for="info in infos" class="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-(--og)/40 hover:scale-105 transition-all duration-300 ease-in-out">
        <UIcon :name="info.icon" class="size-10 ml-4 mb-2 bg-(--og)"/>
        <div class="mfont px-4 text-2xl text-wrap">{{ info.title }}</div>

        <div class="p-4 mb-4">
          <div v-for="func in info.funcs" class="flex items-center gap-3 text-xs my-4">
            <div class="border w-5 h-5 rounded-lg bg-(--og)/20 border-(--og)/30 text-(--og) text-center">✓</div>
            <p class="text-white/70 text-xs text-wrap">
                {{ func }}
            </p>
        </div>
        </div>
      </div>
      
    </div>

  </div>
</section>
</template>

<script setup>

const infos = [
    {
        icon : "i-material-symbols-person",
        title : "Particuliers",
        funcs : ["Déménagement appartement ou maison","Vide maison, vide appartement","Garde-meubles courte ou longue durée","Transport d'objets volumineux","Évacuation d'encombrants"]
    },
    {
        icon : "i-streamline-plump-mall-remix",
        title : "Commerces & artisans",
        funcs : ["Livraison de marchandises" , "Transport de stock ou matériel", "Déménagement de boutique ou atelier" , "Réaménagement de local commercial" , "Livraisons régulières sous contrat"]
    },
    {
        icon : "i-mdi-company",
        title : "Entreprises",
        funcs : ["Déménagement de bureaux" , "Transport de matériel professionnel" ,"Vidage d'entrepôt ou de local" ,"Logistique ponctuelle ou régulière" , "Intervention planifiée hors heures"]
    },
]

</script>


<style scoped>
.mfont{
    font-family: var(--font-h);
    font-weight:800;
}
</style>