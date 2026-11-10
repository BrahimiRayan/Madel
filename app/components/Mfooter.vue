<template>
  <footer class="bg-(--navy2) border-t border-white/8 mt-20">

    <div class="lg:px-30 max-md:px-5 py-16 max-md:py-10">
      <div class="grid grid-cols-12 max-md:grid-cols-1 gap-10">

        <div class="col-span-4 max-md:col-span-1">
          <NuxtLink to="/" class="inline-flex flex-col leading-none mb-5 group">
            <span class="mfont text-3xl text-(--og) group-hover:opacity-80 transition-opacity">TRANS</span>
            <span class="mfont text-3xl text-white/80 group-hover:text-white transition-colors">MADEL</span>
          </NuxtLink>
          <p class="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
            Déménagement de particuliers et de professionnels — Île-de-France et toute la France,
            selon les prestations et les disponibilités.
          </p>
          <div class="flex items-center gap-2 text-xs text-white/40">
            <span class="w-1.5 h-1.5 rounded-full bg-(--og)"></span>
            <span>5 ans d'expérience · ~500 clients satisfaits</span>
          </div>
        </div>

        <div class="col-span-2 max-md:col-span-1">
          <h3 class="mfont text-xs font-bold uppercase tracking-[0.25em] text-(--og) mb-5">Prestations</h3>
          <ul class="space-y-3 text-sm text-white/50">
            <li><NuxtLink to="/services" class="hover:text-white transition-colors">Déménagement particuliers</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition-colors">Déménagement professionnel</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition-colors">Transport de meubles</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition-colors">Emballage &amp; protection</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition-colors">Démontage / remontage</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition-colors">Livraison électroménager</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition-colors">Manutention et portage</NuxtLink></li>
          </ul>
        </div>

        <div class="col-span-3 max-md:col-span-1">
          <h3 class="mfont text-xs font-bold uppercase tracking-[0.25em] text-(--og) mb-5">Contact</h3>
          <ul class="space-y-4 text-sm">
            <li>
              <div class="text-[10px] uppercase tracking-wider text-white/30 mb-1">Téléphone</div>
              <a href="tel:+33661294686" class="text-white/70 hover:text-(--og) transition-colors">06 61 29 46 86</a>
            </li>
            <li>
              <div class="text-[10px] uppercase tracking-wider text-white/30 mb-1">Email</div>
              <a href="mailto:transmadel06@gmail.com" class="text-white/70 hover:text-(--og) transition-colors break-all">transmadel06@gmail.com</a>
            </li>
            <li>
              <div class="text-[10px] uppercase tracking-wider text-white/30 mb-1">Adresse</div>
              <address class="not-italic text-white/70 leading-relaxed">
                18 rue d'Aulnay<br>
                95500 Gonesse, France
              </address>
            </li>
            <li>
              <div class="text-[10px] uppercase tracking-wider text-white/30 mb-1">Zone</div>
              <div class="text-white/70">Île-de-France &amp; toute la France</div>
            </li>
          </ul>
        </div>

        <div class="col-span-3 max-md:col-span-1">
          <h3 class="mfont text-xs font-bold uppercase tracking-[0.25em] text-(--og) mb-5">Un projet ?</h3>
          <p class="text-sm text-white/50 leading-relaxed mb-5">
            Devis personnalisé, détaillé et sans surprise.<br>
            Réservation à partir de 48h, sous réserve de disponibilité.
          </p>
          <NuxtLink to="/devise" class="inline-flex items-center gap-2 px-6 py-3 bg-(--og) text-white rounded-full text-sm font-medium hover:shadow-[0_8px_24px_rgba(232,57,10,0.35)] hover:-translate-y-0.5 transition-all duration-300">
            Demander un devis
          </NuxtLink>

 
        </div>

      </div>
    </div>

    <div class="border-t border-white/8">
      <div class="lg:px-30 max-md:px-5 py-6 flex max-md:flex-col items-center justify-between gap-4">

        <p class="text-xs text-white/40 text-center max-md:text-[11px]">
          © {{ year }} Trans Madel. Tous droits réservés.
        </p>

        <nav class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40">
          <NuxtLink to="/legale/mentions-legales" class="hover:text-white transition-colors">Mentions légales</NuxtLink>
          <NuxtLink to="/legale/politique-confidentialite" class="hover:text-white transition-colors">Politique de confidentialité</NuxtLink>
          <NuxtLink to="/legale/condition-generales" class="hover:text-white transition-colors">Conditions générales</NuxtLink>
        </nav>

        <p class="text-xs text-white/30 text-center max-md:text-[11px]">
          Site conçu avec soin · Trans Madel
        </p>

      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.mfont {
  font-family: var(--font-h);
  font-weight: 800;
}
</style>