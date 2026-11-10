<template>
  <section class="my-10">
    <div class="w-full flex items-center justify-center flex-col my-5 gap-4">
      <div class="text-(--og) flex items-center justify-center gap-3 max-md:text-center">
        <div class="animate-pulse">✦</div> Questions fréquentes
      </div>
      <div class="mfont text-5xl text-center mb-5 max-md:text-center max-md:text-xl">VOUS AVEZ DES <br>QUESTIONS ?</div>
    </div>

    <UAccordion
      :items="items"
      class="lg:max-w-xl max-md:max-w-sm mx-auto"
      :ui="{
        header: 'text-2xl mfont',
        content: 'text-2xl text-(--og)/90'
      }"
    />
  </section>
</template>

<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'Comment obtenir un devis ?',
    content: "Remplissez le formulaire de demande de devis en ligne ou contactez-nous par téléphone ou email. Trans Madel étudie votre demande et vos besoins, puis vous envoie un devis personnalisé et détaillé."
  },
  {
    label: 'Quelles sont vos zones d\'intervention ?',
    content: "Trans Madel intervient dans toute l'Île-de-France et partout en France, selon la nature de la prestation et les disponibilités."
  },
  {
    label: 'Combien de temps à l\'avance faut-il réserver ?',
    content: "La réservation est possible à partir de 48 heures à l'avance, sous réserve de disponibilité du planning. Les demandes urgentes peuvent être étudiées selon les disponibilités — n'hésitez pas à nous contacter."
  },
  {
    label: 'Combien coûte un déménagement ?',
    content: "Le prix dépend du volume à transporter, de la distance et des services choisis (emballage, démontage/remontage, manutention…). C'est pourquoi nous établissons un devis personnalisé, détaillé et sans surprise après étude de votre demande."
  },
  {
    label: 'Que se passe-t-il en cas de casse ou de dommage ?',
    content: "En cas de casse, de perte ou de dommage pendant une prestation, Trans Madel prend en charge le traitement du dossier auprès de son assurance professionnelle. Une déclaration est effectuée afin que le sinistre soit étudié et que les modalités d'indemnisation soient déterminées conformément aux garanties et conditions du contrat d'assurance."
  },
  {
    label: 'Intervenez-vous le week-end ou les jours fériés ?',
    content: "Une intervention le week-end ou un jour férié peut être envisagée à titre exceptionnel, selon disponibilité. Contactez-nous directement pour vérifier les possibilités."
  },
  {
    label: 'Le service de monte-meubles est-il disponible ?',
    content: "Le monte-meubles peut être proposé selon disponibilité et selon l'organisation de la prestation. Contactez-nous pour confirmer sa disponibilité pour votre projet."
  },
  {
    label: 'Quels sont les moyens de paiement acceptés ?',
    content: "Contactez-nous pour connaître les moyens de paiement acceptés pour votre prestation. Les modalités sont confirmées avec le devis."
  },
])
</script>

<style scoped>
.mfont {
  font-family: var(--font-h);
  font-weight: 800;
}
</style>