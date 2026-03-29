<script setup lang="ts">
import Wpromess from '~/components/Wpromess.vue';

</script>

<template>
   <div>
         <div class="w-80 h-80 rounded-full fixed right-0 bg-(--og)/20 -z-10 blur-2xl"></div>
        <Mhero/>
        <Stats/>
        <Service id="services"/>
        <Wpromess id="forWho"/>
        <HowWedoit/>
        <Reviews id="clients" />
        <QandA id="faq"/>
        <Contact id="contacts" />
   </div>
</template>