<template>
  <nav
    class="max-md:hidden sticky top-0 bg-(--navy) z-100 border-b border-white/5 flex items-center justify-between px-4">
    <NuxtLink to="/">
      <div class="bg-[url('~/assets/images/Logo.png')] bg-center bg-contain w-40 h-20 bg-no-repeat" />
    </NuxtLink>

    <ul class="flex items-center gap-5 text-gray-500 text-sm">
      <li v-for="link in navLinks" :key="link.id"
        class="hover:text-(--og) transition-colors duration-300 ease-in-out cursor-pointer" @click="scrollTo(link.id)">
        {{ link.label }}
      </li>
    </ul>

    <NuxtLink to="/devise"
      class="px-4 py-1 bg-(--og) text-center rounded mr-4 hover:scale-105 transition-all duration-300 ease-in-out text-sm font-black">
      Demander un devis
    </NuxtLink>
  </nav>

  
  <nav class="md:hidden sticky top-0 z-100 bg-(--navy) border-b border-white/5 flex items-center justify-between px-3">
    <NuxtLink to="/">
      <div class="bg-[url('~/assets/images/Logo.png')] bg-center bg-contain w-30 h-15 bg-no-repeat" />
    </NuxtLink>

    <button
      class="bg-transparent border border-white/40 text-white/70 size-8 flex items-center justify-center rounded hover:bg-(--og)/70 transition-colors"
      @click="menuOpen = !menuOpen">
      <UIcon v-if="!menuOpen" name="i-lucide-menu" class="size-4" />
      <UIcon v-else name="i-lucide-x" class="size-4" />
    </button>
  </nav>

  <Transition name="slide-down">
    <div v-if="menuOpen"
      class="md:hidden fixed top-16 left-0 right-0 z-99 bg-(--navy) border-b border-white/5 shadow-xl">
      <ul class="flex flex-col py-2">
        <li v-for="link in navLinks" :key="link.id"
          class="px-5 py-3 text-sm text-gray-400 hover:text-(--og) hover:bg-white/5 transition-colors cursor-pointer"
          @click="handleMobileLink(link.id)">
          {{ link.label }}
        </li>

        <li class="px-4 pt-2 pb-4 mt-1 border-t border-white/5">
          <NuxtLink to="/devise"
            class="block w-full text-center px-4 py-2 bg-(--og) rounded text-sm font-black hover:scale-105 transition-transform"
            @click="menuOpen = false">
            Demander un devis
          </NuxtLink>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const menuOpen = ref(false)

const navLinks = [
  {
    id: 'services',
    label: 'Services'
  },
  {
    id: 'forWho',
    label: 'Pour qui ?'
  },
  {
    id: 'clients',
    label: 'Avis clients'
  },
  {
    id: 'faq',
    label: 'FAQ'
  },
  {
    id: 'contacts',
    label: 'Contact'
  },
]

const scrollToElement = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const scrollTo = async (id: string) => {
  if (route.path === '/') {
    scrollToElement(id)
  } else {
    await router.push('/')
    nextTick(() => setTimeout(() => scrollToElement(id), 150))
  }
}

const handleMobileLink = (id: string) => {
  menuOpen.value = false
  nextTick(() => setTimeout(() => scrollTo(id), 50))
}

watch(() => route.path, () => {
  menuOpen.value = false
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>