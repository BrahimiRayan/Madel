<template>
  <div class="min-h-screen bg-(--navy) text-white font-sans">
    <div class="mx-auto max-w-3xl px-6 py-16 max-md:py-10">

      <NuxtLink to="/" class="inline-flex items-center gap-2 text-(--muted) hover:text-white text-sm font-medium tracking-wider uppercase transition-colors duration-200 mb-10 group">
        <span class="transition-transform duration-200 group-hover:-translate-x-1">←</span>
        Retour à l'accueil
      </NuxtLink>

      <div class="mb-12">
        <div class="text-(--og) text-xs uppercase tracking-[0.3em] mb-4">{{ eyebrow }}</div>
        <h1 class="mfont text-5xl max-md:text-3xl font-black uppercase leading-none tracking-tight mb-4">
          {{ title }}
        </h1>
        <p class="text-(--muted) text-sm">Dernière mise à jour : {{ updatedAt }}</p>
      </div>

      <div class="prose-legal space-y-8">
        <slot />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  eyebrow?: string
  updatedAt?: string
}>()
</script>

<style scoped>
.mfont { font-family: var(--font-h); font-weight: 800; }

.prose-legal :deep(h2) {
  font-family: var(--font-h);
  font-weight: 800;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--og);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}
.prose-legal :deep(h3) {
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
}
.prose-legal :deep(p) {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.75;
  font-size: 0.875rem;
}
.prose-legal :deep(ul) {
  list-style: disc;
  padding-left: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  line-height: 1.75;
}
.prose-legal :deep(li) { margin-bottom: 0.5rem; }
.prose-legal :deep(a) {
  color: var(--og);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.prose-legal :deep(strong) { color: white; font-weight: 600; }
</style>