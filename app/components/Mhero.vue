<template>
<section class="px-30 mt-10">
  <div>

    <div class="px-5 py-2 border bg-(--og)/20 w-max rounded-2xl flex items-center gap-4 border-orange-600">
      <div class="h-2 w-2 animate-pulse bg-(--og) rounded-full"></div>
      <span class="text-orange-600 text-xs">Code NAF 4941B — Transport routier de fret de proximité</span>
    </div>

    <div class="flex gap-5 my-5 justify-between">

      <div class=" max-w-190 py-6">
        <div class="flex flex-col">
            <h1 class="main-text flex flex-col">
                <span class="text-(--og) text-7xl">TRANS</span>
                <span class="word-madel text-7xl">MADEL</span>
            </h1>
          <span class="text-3xl text-white/40 mt-2 font-light ">Transport · Déménagement</span>
        </div>

        <p class="text-gray-400 text-sm leading-6.5 mt-8 max-w-130 font-extralight">Spécialiste du transport routier de marchandises et du déménagement avec véhicules ≤ 3,5 tonnes. Réactif, assuré, professionnel — en Île-de-France et partout en France.</p>
        <div class="mt-10">
          <button class="mfont py-2 px-10 mr-4 bg-(--og) rounded-lg text-white">Contactez Nos →</button>
          <button class="py-2 px-10 mr-4 bg-transparent border border-gray-300/10 mfont rounded-lg text-white">Nos services</button>
        </div>
      </div>

      <div class="border border-white/10 text-white py-8 px-5 mfont h-max rounded-2xl bg-white/3 backdrop-blur-2xl">
        <div class="text-center text-(--og) tracking-[0.2em] mb-4">Nous contacter</div>

        <div class="border-b border-white/10">
          <div class="text-sm text-gray-500">Téléphone</div>
          <div class="mb-2">07 xx xx xx xx</div>
        </div>

        <div class="border-b border-white/10">
          <div class="text-sm text-gray-500">Email</div>
          <div class="mb-2">contact@transmadel.fr</div>
        </div>

        <div class="border-b border-white/10">
          <div class="text-sm text-gray-500">Disponibilité</div>
          <div class="mb-2">Lun – Sam · 7h–20h</div>
        </div>
        <div class="border-b border-white/10">
          <div class="text-sm text-gray-500">Devis</div>
          <div class="mb-2">Réponse sous 24h</div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>


<style scoped>

.word-madel{-webkit-text-stroke:1.5px rgba(255,255,255,0.25);color:transparent}
.main-text{font-family:var(--font-h);font-size:76px;font-weight:800;line-height:.95;text-transform:uppercase;color:var(--text);animation:fadeUp .9s ease both .2s}
.mfont{
    font-family: var(--font-h);
    font-weight:500;
}
</style>
