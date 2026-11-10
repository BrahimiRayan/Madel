<template>
  <div class="min-h-screen bg-(--navy) text-white font-sans">
    <div class="mx-auto px-6 py-10">

      
        <div class="mb-16">
          <NuxtLink to="/" class="mfont text-sm"> ← Retour à l'accueil</NuxtLink>
        <div class="flex flex-col items-center justify-center gap-5 text-center mt-10">
          <div class="absolute w-sm h-30 bg-(--og)/40 blur-2xl"></div>
          <h1 class="mfont text-6xl max-md:text-4xl font-black uppercase leading-none tracking-tight">
            Demander<br><span class="text-(--og)">un devis</span>
          </h1>
          <p class="mt-5 text-(--muted) text-base leading-relaxed max-w-xl text-center">
            Remplissez ce formulaire en 2 minutes. Notre équipe vous contacte avec un devis personnalisé,
            détaillé et sans surprise. Réservation possible à partir de 48h à l'avance, sous réserve de disponibilité.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-8 items-start max-w-4xl mx-auto">
        <form class="space-y-8" @submit.prevent="submitForm" novalidate>

          <!-- 01 — TYPE DE PRESTATION -->
          <div class="bg-white/3 border border-white/8 rounded-2xl p-8">
            <h2 class="mfont text-xs font-bold uppercase tracking-[3px] text-(--og) mb-6">
              01 — Type de prestation
            </h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <button v-for="service in services" :key="service.id" type="button" :class="[
                'flex flex-col items-start gap-2 p-4 rounded-xl border text-left transition-all duration-200',
                form.service === service.id
                  ? 'border-(--og) bg-(--og)/10 text-white'
                  : 'border-white/8 bg-white/2 text-(--muted) hover:border-white/20 hover:text-white'
              ]" @click="form.service = service.id">
                <UIcon :name="service.icon" class="size-6 bg-(--og)" />
                <span class=" font-bold uppercase md:text-xs max-sm:text-[10px] tracking-wider leading-tight">{{ service.label }}</span>
              </button>
            </div>
            <p v-if="errors.service" class="mt-3 text-red-400 text-xs">{{ errors.service }}</p>
          </div>

          <!-- 02 — COORDONNÉES -->
          <div class="bg-white/3 border border-white/8 rounded-2xl p-8">
            <h2 class="mfont text-xs font-bold uppercase tracking-[3px] text-(--og) mb-6">
              02 — Vos coordonnées
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="flex flex-col gap-2">
                <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Prénom *</label>
                <input v-model="form.prenom" type="text" placeholder="Jean"
                  :class="inputClass(errors.prenom)" @blur="validateField('prenom')" required />
                <p v-if="errors.prenom" class="text-red-400 text-xs">{{ errors.prenom }}</p>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Nom *</label>
                <input v-model="form.nom" type="text" placeholder="Dupont"
                  :class="inputClass(errors.nom)" @blur="validateField('nom')" required />
                <p v-if="errors.nom" class="text-red-400 text-xs">{{ errors.nom }}</p>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Téléphone *</label>
                <input v-model="form.telephone" type="tel" placeholder="06 61 29 46 86"
                  :class="inputClass(errors.telephone)" @blur="validateField('telephone')" required />
                <p v-if="errors.telephone" class="text-red-400 text-xs">{{ errors.telephone }}</p>
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Email *</label>
                <input v-model="form.email" type="email" placeholder="jean@exemple.fr"
                  :class="inputClass(errors.email)" @blur="validateField('email')" required />
                <p v-if="errors.email" class="text-red-400 text-xs">{{ errors.email }}</p>
              </div>
              <div class="sm:col-span-2 flex flex-col gap-2">
                <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">
                  Société <span class="text-(--muted)/50 normal-case font-normal">(professionnels uniquement)</span>
                </label>
                <input v-model="form.societe" type="text" placeholder="Nom de votre entreprise"
                  :class="inputClass()" />
              </div>
            </div>
          </div>

          <!-- 03 — ADRESSES ET DATE -->
          <div class="bg-white/3 border border-white/8 rounded-2xl p-8">
            <h2 class="mfont text-xs font-bold uppercase tracking-[3px] text-(--og) mb-6">
              03 — Adresses et date
            </h2>
            <div class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Adresse complète de départ *</label>
                  <input v-model="form.villeDepart" type="text" placeholder="18 rue d'Aulnay, 95500 Gonesse"
                    :class="inputClass(errors.villeDepart)" @blur="validateField('villeDepart')" required />
                  <p v-if="errors.villeDepart" class="text-red-400 text-xs">{{ errors.villeDepart }}</p>
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Adresse complète d'arrivée *</label>
                  <input v-model="form.villeArrivee" type="text" placeholder="25 Av Aristide Briand, 91000 Évry"
                    :class="inputClass(errors.villeArrivee)" @blur="validateField('villeArrivee')" required />
                  <p v-if="errors.villeArrivee" class="text-red-400 text-xs">{{ errors.villeArrivee }}</p>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Date souhaitée *</label>
                  <input v-model="form.date" type="date" :min="minDate"
                    :class="inputClass(errors.date)" @blur="validateField('date')" required />
                  <p v-if="errors.date" class="text-red-400 text-xs">{{ errors.date }}</p>
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Flexibilité de la date *</label>
                  <select v-model="form.flexibilite" :class="inputClass(errors.flexibilite)"
                    @blur="validateField('flexibilite')" required>
                    <option value="" disabled>Sélectionner...</option>
                    <option value="imperative">Impérative (date fixe)</option>
                    <option value="flexible-1sem">Flexible (± 1 semaine)</option>
                    <option value="flexible-1mois">Flexible (± 1 mois)</option>
                    <option value="tres-flexible">Très flexible</option>
                  </select>
                  <p v-if="errors.flexibilite" class="text-red-400 text-xs">{{ errors.flexibilite }}</p>
                </div>
              </div>

              <p class="text-(--muted)/70 text-xs italic">
                ⓘ Réservation possible à partir de 48h à l'avance, sous réserve de disponibilité du planning.
              </p>
            </div>
          </div>

          <!-- 04 — VOLUME ET LIEUX -->
          <div class="bg-white/3 border border-white/8 rounded-2xl p-8">
            <h2 class="mfont text-xs font-bold uppercase tracking-[3px] text-(--og) mb-6">
              04 — Volume et lieux
            </h2>
            <div class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Volume estimé (m³)</label>
                  <input v-model="form.volumeM3" type="number" min="0" step="0.5" placeholder="Ex: 25"
                    :class="inputClass()" />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Type de lieu</label>
                  <select v-model="form.typeLieu" :class="inputClass()">
                    <option value="" disabled>Sélectionner...</option>
                    <option value="appartement">Appartement</option>
                    <option value="maison">Maison</option>
                    <option value="bureau">Bureau</option>
                    <option value="commerce">Commerce / local</option>
                  </select>
                </div>
              </div>

              <!-- Étage / ascenseur départ & arrivée -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="bg-white/2 border border-white/8 rounded-xl p-4 space-y-3">
                  <p class="mfont text-[10px] font-bold uppercase tracking-[2px] text-(--og)">Au départ</p>
                  <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col gap-2">
                      <label class="text-[11px] text-(--muted) uppercase tracking-wider">Étage</label>
                      <input v-model="form.etageDepart" type="number" min="0" placeholder="0 = RDC" :class="inputClass()" />
                    </div>
                    <div class="flex flex-col gap-2">
                      <label class="text-[11px] text-(--muted) uppercase tracking-wider">Ascenseur</label>
                      <select v-model="form.ascenseurDepart" :class="inputClass()">
                        <option value="" disabled>Sélectionner...</option>
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="bg-white/2 border border-white/8 rounded-xl p-4 space-y-3">
                  <p class="mfont text-[10px] font-bold uppercase tracking-[2px] text-(--og)">À l'arrivée</p>
                  <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col gap-2">
                      <label class="text-[11px] text-(--muted) uppercase tracking-wider">Étage</label>
                      <input v-model="form.etageArrivee" type="number" min="0" placeholder="0 = RDC" :class="inputClass()" />
                    </div>
                    <div class="flex flex-col gap-2">
                      <label class="text-[11px] text-(--muted) uppercase tracking-wider">Ascenseur</label>
                      <select v-model="form.ascenseurArrivee" :class="inputClass()">
                        <option value="" disabled>Sélectionner...</option>
                        <option value="oui">Oui</option>
                        <option value="non">Non</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Accès & stationnement -->
              <div class="flex flex-col gap-2">
                <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">
                  Conditions d'accès et stationnement camion
                </label>
                <textarea v-model="form.acces" rows="3"
                  placeholder="Rue étroite, cour intérieure, parking disponible, code portail, distance camion/entrée..."
                  :class="inputClass()" />
              </div>
            </div>
          </div>

          <!-- 05 — OBJETS À TRANSPORTER -->
          <div class="bg-white/3 border border-white/8 rounded-2xl p-8">
            <h2 class="mfont text-xs font-bold uppercase tracking-[3px] text-(--og) mb-6">
              05 — Objets à transporter
            </h2>
            <div class="space-y-4">
              <div class="flex flex-col gap-2">
                <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">
                  Liste des meubles et objets principaux
                </label>
                <textarea v-model="form.listeObjets" rows="3"
                  placeholder="Canapé, lit 2 places, armoire, électroménager, cartons..."
                  :class="inputClass()" />
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label v-for="obj in objetsSpeciaux" :key="obj.id" :class="[
                  'flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200',
                  form.objetsSpeciaux.includes(obj.id)
                    ? 'border-(--og)/50 bg-(--og)/5'
                    : 'border-white/8 hover:border-white/20'
                ]">
                  <input type="checkbox" :value="obj.id" v-model="form.objetsSpeciaux" class="hidden" />
                  <span :class="[
                    'w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-all duration-200',
                    form.objetsSpeciaux.includes(obj.id)
                      ? 'bg-(--og) border-(--og) text-white'
                      : 'border-white/20'
                  ]">
                    <svg v-if="form.objetsSpeciaux.includes(obj.id)" viewBox="0 0 12 12"
                      class="w-3 h-3 fill-none stroke-white stroke-2">
                      <path d="M2 6l3 3 5-5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <span class="text-sm text-(--muted) leading-tight">{{ obj.label }}</span>
                </label>
              </div>
            </div>
          </div>

          <!-- 06 — OPTIONS SUPPLÉMENTAIRES -->
          <div class="bg-white/3 border border-white/8 rounded-2xl p-8">
            <h2 class="mfont text-xs font-bold uppercase tracking-[3px] text-(--og) mb-6">
              06 — Options supplémentaires
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label v-for="opt in options" :key="opt.id" :class="[
                'flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200',
                form.options.includes(opt.id)
                  ? 'border-(--og)/50 bg-(--og)/5'
                  : 'border-white/8 hover:border-white/20'
              ]">
                <input type="checkbox" :value="opt.id" v-model="form.options" class="hidden" />
                <span :class="[
                  'w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-all duration-200',
                  form.options.includes(opt.id)
                    ? 'bg-(--og) border-(--og) text-white'
                    : 'border-white/20'
                ]">
                  <svg v-if="form.options.includes(opt.id)" viewBox="0 0 12 12"
                    class="w-3 h-3 fill-none stroke-white stroke-2">
                    <path d="M2 6l3 3 5-5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span class="text-sm text-(--muted) leading-tight">{{ opt.label }}</span>
              </label>
            </div>
          </div>

          <!-- 07 — INFORMATIONS COMPLÉMENTAIRES -->
          <div class="bg-white/3 border border-white/8 rounded-2xl p-8">
            <h2 class="mfont text-xs font-bold uppercase tracking-[3px] text-(--og) mb-6">
              07 — Informations complémentaires
            </h2>
            <div class="flex flex-col gap-2">
              <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">
                Champ libre (optionnel)
              </label>
              <textarea v-model="form.description" rows="4"
                placeholder="Toute information utile : contraintes particulières, précisions sur les objets, demandes spécifiques..."
                :class="inputClass()" />
            </div>
          </div>

          <!-- SUBMIT -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button type="submit" :disabled="isSubmitting || submitted" :class="[
              'relative overflow-hidden mfont font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-lg transition-all duration-300',
              submitted
                ? 'bg-green-500/20 border border-green-500/50 text-green-400 cursor-default'
                : 'bg-(--og) text-white hover:shadow-[0_8px_32px_rgba(232,57,10,0.45)] hover:-translate-y-0.5 active:scale-95',
              isSubmitting ? 'opacity-70 cursor-wait' : ''
            ]">
              <span v-if="isSubmitting">Envoi en cours...</span>
              <span v-else-if="submitted">✓ Demande envoyée !</span>
              <span v-else>Envoyer ma demande →</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  { id: 'demenagement-particulier', icon: 'i-lucide-home', label: 'Déménagement maison / appartement' },
  { id: 'demenagement-pro', icon: 'i-lucide-building', label: 'Transfert bureaux / commerces' },
  { id: 'transport-meubles', icon: 'i-lucide-truck', label: 'Transport de meubles & équipements' },
  { id: 'emballage', icon: 'i-lucide-package', label: 'Emballage et protection' },
  { id: 'demontage-remontage', icon: 'i-lucide-wrench', label: 'Démontage / remontage' },
  { id: 'livraison-electromenager', icon: 'i-lucide-tv', label: 'Livraison électroménager' },
  { id: 'manutention', icon: 'i-lucide-hand', label: 'Manutention et portage' },
  { id: 'monte-meubles', icon: 'i-lucide-arrow-up-from-line', label: 'Monte-meubles (selon dispo.)' },
]

const objetsSpeciaux = [
  { id: 'lourds', label: 'Objets lourds' },
  { id: 'fragiles', label: 'Objets fragiles' },
  { id: 'volumineux', label: 'Objets volumineux' },
]

const options = [
  { id: 'emballage', label: 'Emballage des cartons et protection des objets' },
  { id: 'fourniture-cartons', label: 'Fourniture de cartons et matériel (selon dispo.)' },
  { id: 'montage', label: 'Démontage et remontage des meubles' },
  { id: 'protection-fragile', label: 'Protection spécifique objets fragiles' },
  { id: 'objets-lourds', label: 'Transport d\'objets lourds ou volumineux' },
  { id: 'monte-meubles', label: 'Mise à disposition d\'un monte-meubles (selon dispo.)' },
  { id: 'etage', label: 'Intervention en étage sans ascenseur' },
  { id: 'weekend', label: 'Intervention week-end ou jour férié (exceptionnel)' },
  { id: 'urgent', label: 'Intervention urgente sous 48h (selon dispo.)' },
  { id: 'livraison-meubles', label: 'Livraison et transport de meubles / électroménager' },
  { id: 'manutention-supp', label: 'Manutention supplémentaire' },
]

const form = reactive({
  service: '',
  prenom: '',
  nom: '',
  telephone: '',
  email: '',
  societe: '',
  villeDepart: '',
  villeArrivee: '',
  date: '',
  flexibilite: '',
  volumeM3: '',
  typeLieu: '',
  etageDepart: '',
  ascenseurDepart: '',
  etageArrivee: '',
  ascenseurArrivee: '',
  acces: '',
  listeObjets: '',
  objetsSpeciaux: [],
  options: [],
  description: '',
})

const errors = reactive({})
const isSubmitting = ref(false)
const submitted = ref(false)

const minDate = computed(() => {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
})

const inputClass = (error) =>
  [
    'w-full bg-white/[0.04] border rounded-lg px-4 py-3 text-sm text-white placeholder-(--muted)/60',
    'focus:outline-none focus:ring-1 transition-all duration-200',
    error
      ? 'border-red-500/60 focus:border-red-500 focus:ring-red-500/20'
      : 'border-white/10 focus:border-(--og)/60 focus:ring-(--og)/10 hover:border-white/20',
  ].join(' ')

const validator = {
  service: (v) => (!v ? 'Veuillez choisir une prestation.' : null),
  prenom: (v) => (!v?.trim() ? 'Le prénom est requis.' : null),
  nom: (v) => (!v?.trim() ? 'Le nom est requis.' : null),
  telephone: (v) => {
    if (!v?.trim()) return 'Le téléphone est requis.'
    if (!/^[\d\s\+\-\.]{9,15}$/.test(v.trim())) return 'Numéro de téléphone invalide.'
    return null
  },
  email: (v) => {
    if (!v?.trim()) return 'L\'email est requis.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Adresse email invalide.'
    return null
  },
  villeDepart: (v) => (!v?.trim() ? 'L\'adresse de départ est requise.' : null),
  villeArrivee: (v) => (!v?.trim() ? 'L\'adresse d\'arrivée est requise.' : null),
  date: (v) => (!v ? 'La date souhaitée est requise.' : null),
  flexibilite: (v) => (!v ? 'Indiquez si la date est flexible ou impérative.' : null),
}

const validateField = (field) => {
  const rule = validator[field]
  if (rule) errors[field] = rule(form[field]) || ''
}

const validateAll = () => {
  let valid = true
  for (const field of Object.keys(validator)) {
    const err = validator[field](form[field])
    errors[field] = err || ''
    if (err) valid = false
  }
  return valid
}

const toast = useToast()

const submitForm = async () => {
  if (!validateAll()) return
  isSubmitting.value = true
  try {
    await $fetch('/api/devise', { method: 'POST', body: form })
    submitted.value = true
    toast.add({
      title: 'Demande envoyée !',
      description: `Merci ${form.prenom}, nous vous contactons sous 24h au ${form.telephone}.`,
      color: 'success',
      duration: 6000,
    })
  } catch (err) {
    toast.add({
      title: 'Erreur d\'envoi',
      description: 'Une erreur est survenue. Veuillez réessayer ou nous appeler directement au 06 61 29 46 86.',
      color: 'error',
      duration: 8000,
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.mfont { font-family: var(--font-h), sans-serif; }
</style>