<template>

    <section class="my-10">

        <div class="w-full flex items-center justify-center flex-col my-5 gap-4">
            <div class="text-(--og) flex items-center justify-center gap-3 max-md:text-center"><div class="animate-pulse">✦</div> Questions fréquentes</div>
            <div class="mfont text-5xl text-center mb-5 max-md:text-center max-md:text-xl">VOUS AVEZ DES <br>QUESTIONS ?</div>
        </div>

        <UAccordion :items="items" class="lg:max-w-xl max-md:max-w-sm mx-auto" 
            :ui="{
                header : 'text-2xl mfont',
                content : 'text-2xl text-(--og)/90'
            }"
        />
    </section>

</template>

        <script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'Comment obtenir un devis ?',
    content: "Appelez-nous directement ou remplissez le formulaire en ligne. Nous vous répondons sous 24h avec un devis détaillé."
  },
  {
    label: 'Intervenez-vous le week-end ?',
    content: "Oui, nous sommes disponibles du lundi au samedi de 7h à 20h. Pour des cas urgents ou des interventions le dimanche, contactez-nous directement pour trouver une solution."
  },
  {
    label: 'Combien coûte un déménagement ?',
    content: "Le prix dépend du volume à transporter, de la distance et des services choisis (emballage, montage, garde-meubles). C'est pourquoi nous proposons un devis personnalisé sous 24h — il n'y a pas de tarif unique, mais il n'y a jamais de mauvaise surprise non plus."
  },
  {
    label: 'Que se passe-t-il si un objet est endommagé pendant le transport ?',
    content: "Tous vos biens sont couverts par notre assurance Responsabilité Civile Professionnelle pendant toute la durée de l'intervention. En cas de problème, nous prenons en charge le dossier directement. Vous n'avez rien à gérer seul."
  },
  {
    label: "Combien de temps à l'avance faut-il réserver ?",
    content: "Idéalement 1 à 2 semaines pour un déménagement, et 48h pour un transport de marchandises. Cela dit, nous faisons notre possible pour les demandes urgentes — n'hésitez pas à nous appeler même au dernier moment."
  },
])
</script>

<style scoped>
.mfont{
    font-family: var(--font-h);
    font-weight:800;
}
</style>