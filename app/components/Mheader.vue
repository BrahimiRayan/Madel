<template>
<nav class="sticky top-0 z-10 bg-(--navy) border-b border-white/5 flex items-center justify-between px-4">
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
</template>