<template>
<nav class="max-md:hidden sticky top-0 z-10 bg-(--navy) border-b border-white/5 flex items-center justify-between px-4">
  <NuxtLink to="/">
    <div class="bg-[url('~/assets/images/Logo.png')] bg-center bg-contain w-40 h-20 bg-no-repeat">
    </div>
  </NuxtLink>
  <ul class="flex items-center gap-5 text-gray-500 text-sm">
    <li class="hover:text-(--og) transition-colors duration-300 ease-in-out"><NuxtLink to="/#services">Services</NuxtLink></li>
    <li class="hover:text-(--og) transition-colors duration-300 ease-in-out"><NuxtLink to="/#forWho">Pour qui ?</NuxtLink></li>
    <li class="hover:text-(--og) transition-colors duration-300 ease-in-out"><NuxtLink to="/#clients">Avis clients</NuxtLink></li>
    <li class="hover:text-(--og) transition-colors duration-300 ease-in-out"><NuxtLink to="/#faq">FAQ</NuxtLink></li>
    <li class="hover:text-(--og) transition-colors duration-300 ease-in-out"><NuxtLink to="/#contacts">Contact</NuxtLink></li>
  </ul>
  <button class="px-4 py-1 bg-(--og) text-center rounded mr-4 hover:scale-105 transition-all duration-300 ease-in-out">Contactez-nos</button>
</nav>

<nav class="md:hidden flex items-center justify-between border-b border-white/5 nth-last-[1]:bg-green-500 px-3">
  <NuxtLink to="/">
    <div class="bg-[url('~/assets/images/Logo.png')] bg-center bg-contain w-30 h-15 bg-no-repeat">
    </div>
  </NuxtLink>
  <UDropdownMenu
    :items="items"
    :content="{
      align: 'start',
      side: 'bottom',
      sideOffset: 8
    }"
    :ui="{
      content: 'w-48',
      item : 'hover:text-(--og) nth-last-[1]:bg-(--og) nth-last-[1]:rounded-xl p-2',
    }"
  >
    <UButton icon="i-lucide-menu" class="bg-transparent border border-white/40 text-white/70 size-7 text-center hover:bg-(--og)/70 p-0.5" />
  </UDropdownMenu>
</nav>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref<DropdownMenuItem[]>([

  {
    label: 'Services',
    to : '/#services',
    type : 'link'
  },
  {
    label: 'Pour qui ?',
    to : '/#forWho',
    type : 'link'
  },
  {
    label: 'Avis clients',
    to : '/#clients',
    type : 'link'
  },
  {
    label: 'FAQ',
    to : '/#faq',
    type : 'link'
  },
  {
    label: 'Contact',
    to : '/#contacts',
    type : 'link'
  }
  ,{
  type: 'separator' as const
},
  {
    label: 'Device',
    to : '/devise',
    type : 'link'
  }

])
</script>