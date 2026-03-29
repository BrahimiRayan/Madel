<template>
    <section class="lg:my-10 p-10">

        <div class="w-full flex items-center justify-center flex-col my-5 gap-4">
            <div class="text-(--og) flex items-center justify-center gap-3 max-md:text-center "><div class="animate-ping">✦</div> Avis clients</div>
            <div class="mfont text-5xl text-center mb-5 max-md:text-center max-md:text-xl">ILS NOUS ONT FAIT <br>CONFIANCE</div>
        </div>


        <UMarquee pause-on-hover reverse >
            <div v-for="_ in 6" class="border border-white/5 max-w-80 p-5 rounded-2xl flex flex-col gap-3 bg-white/5 hover:border-(--og) transition-all duration-300 ease-in-out">
                <div class="flex gap-2 items-center ">
                    <UAvatar alt="RAYAN Brahimi" class="w-10 h-10 rounded-full bg-(--og) text-white font-black"/>
                    <div class="flex flex-col gap-0.5">
                        <p class="text-[12px]">Rayan Brahimi</p>
                        <p class="text-[9px] text-white/70">2026/06/10</p>
                    </div>
                </div>
    
                <div class="flex gap-1">
                    <UIcon v-for="(_, index) in 5" :key="index" name="i-solar-star-bold" class="size-4 bg-(--og)"/>
                </div>
                    <p class="text-sm p-1">
                        ❝Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, dolores!❞
                    </p>
            </div>
        </UMarquee>
    </section>
</template>

<style scoped>
.mfont{
    font-family: var(--font-h);
    font-weight:800;
}
</style>