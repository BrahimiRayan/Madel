<template>
  <section class="lg:px-30 max-md:px-4 py-24 max-md:py-14 bg-(--navy2)">
    <div class="relative flex flex-col items-center text-center">

      <div class="text-[10px] font-bold uppercase tracking-[0.3em] text-(--og) mb-6">Contact</div>
      <div class="mfont text-7xl max-md:text-4xl leading-[0.9] mb-6">
        VOTRE PROJET,<br>
        <span class="text-(--og)">ON S'EN CHARGE.</span>
      </div>
      <p class="text-white/50 text-sm leading-relaxed max-w-md mb-12">
        Devis personnalisé, détaillé et sans surprise. Trans Madel s'occupe de tout, de l'étude à l'intervention.
      </p>

      <div class="w-full max-w-2xl p-2 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
        <div class="flex max-md:flex-col items-stretch gap-2">
          <NuxtLink to="/devise" class="flex-1 px-6 py-4 bg-(--og) text-white rounded-2xl font-medium text-center hover:brightness-110 transition-all duration-300">
            Demander un devis
          </NuxtLink>
          <NuxtLink to="tel:+33661294686" class="flex-1 px-6 py-4 rounded-2xl font-medium text-center hover:bg-white/5 transition-all duration-300">
            06 61 29 46 86
          </NuxtLink>
        </div>

        <div class="flex max-md:flex-col items-center justify-center gap-x-6 gap-y-2 py-4 text-xs text-white/40">
          <span>Île-de-France &amp; toute la France</span>
          <span class="hidden md:block w-1 h-1 rounded-full bg-white/20"></span>
          <span>Réservation à partir de 48h</span>
          <span class="hidden md:block w-1 h-1 rounded-full bg-white/20"></span>
          <span>Assurance professionnelle</span>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.mfont { font-family: var(--font-h); font-weight: 800; }
</style>