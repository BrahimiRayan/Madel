<template>
<section class="px-30 max-md:px-5 mt-10">
  <div class="">

    <div class="max-md:hidden px-5 py-2 border bg-(--og)/20 w-max rounded-2xl flex items-center gap-4 border-orange-600">
      <div class="h-2 w-2 animate-pulse bg-(--og) rounded-full"></div>
      <span class="text-orange-600 text-xs ">5 ans d'expérience — Île-de-France &amp; toute la France</span>
    </div>

    <div class="flex max-md:flex-col gap-5 my-5 justify-between ">
      <div class=" max-w-190 py-6">
        <div class="flex flex-col max-md:items-center max-md:justify-center">
            <h1 class="main-text flex flex-col max-md:items-center max-md:justify-center">
                <span class="text-(--og) text-7xl max-md:text-5xl">TRANS</span>
                <span class="word-madel text-7xl max-md:text-5xl">MADEL</span>
            </h1>
          <span class="text-3xl max-md:text-xl text-white/40 mt-2 font-light ">Transport · Déménagement</span>
        </div>

        <p class="text-gray-400 text-sm leading-6.5 mt-8 lg:max-w-130 max-md:px-5 max-md:text-center font-extralight">
          Déménagement de particuliers et de professionnels — familles, entreprises, commerces et artisans.
          5 ans d'expérience, environ 500 clients satisfaits, en Île-de-France et partout en France, selon les prestations et disponibilités.
        </p>
        <div class="mt-10 flex max-md:items-center max-md:justify-center">
          <NuxtLink to="/devise" class="mfont py-2 px-10 max-md:px-4 mr-4 bg-(--og) rounded-lg text-white hover:scale-105 transition-all duration-300 ease-in-out">Demander un devis →</NuxtLink>
          <a href="tel:+33661294686" target="_blank" class="py-2 px-10 max-md:px-4 mr-4 bg-transparent border border-gray-300/10 mfont rounded-lg text-white">Appeler-nous</a>
        </div>
      </div>

      <div class="max-md:min-w-xs max-md:mx-auto border border-white/10 text-white py-8 px-5 mfont h-max rounded-2xl bg-white/3 backdrop-blur-2xl">
        <div class="text-center text-(--og) tracking-[0.2em] mb-4">Nous contacter</div>

        <div class="border-b border-white/10">
          <div class="text-sm text-gray-500">Téléphone</div>
          <div class="mb-2">06 61 29 46 86</div>
        </div>

        <div class="border-b border-white/10">
          <div class="text-sm text-gray-500">Email</div>
          <div class="mb-2">transmadel06@gmail.com</div>
        </div>

        <!-- ⚠️ Horaires exacts NON renseignés dans le PDF (Partie 1.8 vide / Partie 5 "à confirmer") -->
        <div class="border-b border-white/10">
          <div class="text-sm text-gray-500">Disponibilité</div>
          <div class="mb-2">Sur rendez-vous · à confirmer</div>
        </div>

        <div class="border-b border-white/10">
          <div class="text-sm text-gray-500">Devis</div>
          <div class="mb-2">Réponse rapide — réservation à partir de 48h</div>
        </div>

        <div>
          <div class="text-sm text-gray-500">Adresse</div>
          <div class="mb-2">18 rue d'Aulnay, 95500 Gonesse</div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>


<style scoped>

.word-madel{-webkit-text-stroke:1.5px rgba(255,255,255,0.25);color:transparent}
.main-text{font-family:var(--font-h);font-weight:800;line-height:.95;text-transform:uppercase;color:var(--text);animation:fadeUp .9s ease both .2s}
.mfont{
    font-family: var(--font-h);
    font-weight:500;
}
</style>