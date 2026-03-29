<template>

<section class="p-30 bg-(--navy2)">
    <div class="w-full flex items-center justify-center my-5 gap-4">
            <div class="mfont text-6xl text-center mb-5">VOTRE PROJET,<br>
                <span class="text-(--og)">
                    ON S'EN CHARGE.
                </span>
            </div>
    </div>
    <div class="text-center text-white/60">Devis gratuit et sans engagement sous 24h. <br> Trans Madel s'occupe de tout.</div>
 <div class="flex flex-col items-center justify-center">
     <div class="my-5 flex gap-5">
       <NuxtLink to="/devise" class="px-9 py-3 bg-(--og) rounded-xl hover:shadow-xl shadow-orange-600/50 hover:scale-105 transition-all duration-300 ease-in-out">Demander un devis →</NuxtLink>
       <NuxtLink to="tel:0778892122" class="px-9 py-3 bg-transparent border border-white/20 rounded-xl hover:shadow-xl shadow-white/5 hover:scale-105 transition-all duration-300 ease-in-out">📞 Nous appeler </NuxtLink>
       
     </div>
     <div class="flex items-center justify-center gap-4">
       <div class="py-1 px-2 border border-white/30 rounded-xl bg-white/5 text-xs text-center">📍Île-de-France & national</div>
       <div class="py-1 px-2 border border-white/30 rounded-xl bg-white/5 text-xs text-center">⏱ Réponse sous <strong>24h</strong></div>
       <div class="py-1 px-2 border border-white/30 rounded-xl bg-white/5 text-xs text-center">🛡 RC Pro <strong>incluse</strong></div>
      
     </div>
 </div>

  <div class="cta-line"></div>
</section>
</template>

<style scoped>
.mfont{
    font-family: var(--font-h);
    font-weight:800;
}
</style>