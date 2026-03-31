<template>

    <div class="min-h-screen bg-(--navy) text-white font-sans ">
        <div class="mx-auto px-6 py-10 ">

            <div class="mb-16">

                <NuxtLink to="/"
                    class="inline-flex items-center lg:pl-10 gap-2 text-(--muted) hover:text-white text-sm font-medium tracking-wider uppercase transition-colors duration-200 mb-10 group">
                    <span class="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                    Retour à l'accueil
                </NuxtLink>
                <div class="flex flex-col items-center justify-center gap-5 text-center">
                        <div class="absolute w-sm h-30 bg-(--og)/40 blur-2xl"> </div>
                        <h1 class="mfont text-6xl max-md:text-4xl  font-black uppercase leading-none tracking-tight">
                            Demander<br>
                            <span class="text-(--og)">un devis</span>
                        </h1>
                        <p class="mt-5 text-(--muted) text-base leading-relaxed max-w-xl text-center">
                            Remplissez ce formulaire en 2 minutes. Notre équipe vous contacte avec un devis personnalisé,
                            détaillé et sans surprise.
                        </p>
                    </div>
               
            </div>

            <div class="grid grid-cols-1 gap-8 items-start max-w-4xl mx-auto">

                <form class="lg:col-span-2 space-y-8 " @submit.prevent="submitForm" novalidate>

                    <!-- kind of service they want ? -->
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
                                <span class="mfont font-bold uppercase text-xs tracking-wider leading-tight">{{
                                    service.label }}</span>
                            </button>

                        </div>
                        <p v-if="errors.service" class="mt-3 text-red-400 text-xs">{{ errors.service }}</p>
                    </div>

                    <!-- personel infos of the clients -->
                    <div class="bg-white/3 border border-white/8 rounded-2xl p-8">
                        <h2 class="mfont text-xs font-bold uppercase tracking-[3px] text-(--og) mb-6">
                            02 — Vos coordonnées
                        </h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            <div class="flex flex-col gap-2">
                                <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Prénom
                                    *</label>
                                <input v-model="form.prenom" type="text" placeholder="Jean"
                                    :class="inputClass(errors.prenom)" @blur="validateField('prenom')" required />
                                <p v-if="errors.prenom" class="text-red-400 text-xs">{{ errors.prenom }}</p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Nom
                                    *</label>
                                <input v-model="form.nom" type="text" placeholder="Dupont"
                                    :class="inputClass(errors.nom)" @blur="validateField('nom')" required />
                                <p v-if="errors.nom" class="text-red-400 text-xs">{{ errors.nom }}</p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Téléphone
                                    *</label>
                                <input v-model="form.telephone" type="tel" placeholder="07 xx xx xx xx"
                                    :class="inputClass(errors.telephone)" @blur="validateField('telephone')" required />
                                <p v-if="errors.telephone" class="text-red-400 text-xs">{{ errors.telephone }}</p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Email
                                    *</label>
                                <input v-model="form.email" type="email" placeholder="jean@exemple.fr"
                                    :class="inputClass(errors.email)" @blur="validateField('email')" required />
                                <p v-if="errors.email" class="text-red-400 text-xs">{{ errors.email }}</p>
                            </div>

                            <div class="sm:col-span-2 flex flex-col gap-2">
                                <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">
                                    Société <span class="text-(--muted)/50 normal-case font-normal">(optionnel)</span>
                                </label>
                                <input v-model="form.societe" type="text"
                                    placeholder="Nom de votre entreprise sinon lesser vide." :class="inputClass()" />
                            </div>

                        </div>
                    </div>

                    <!-- this block is for the mesion details -->
                    <div class="bg-white/3 border border-white/8 rounded-2xl p-8">
                        <h2 class="mfont text-xs font-bold uppercase tracking-[3px] text-(--og) mb-6">
                            03 — Détails de la mission
                        </h2>
                        <div class="space-y-5">

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div class="flex flex-col gap-2">
                                    <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Adress
                                        de départ *</label>
                                    <input v-model="form.villeDepart" type="text"
                                        placeholder="29 BV Jean Michelle , paris"
                                        :class="inputClass(errors.villeDepart)" @blur="validateField('villeDepart')"
                                        required />
                                    <p v-if="errors.villeDepart" class="text-red-400 text-xs">{{ errors.villeDepart }}
                                    </p>
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Adress
                                        d'arrivée *</label>
                                    <input v-model="form.villeArrivee" type="text"
                                        placeholder="25 Av Aristid Briand , Evry"
                                        :class="inputClass(errors.villeArrivee)" @blur="validateField('villeArrivee')"
                                        required />
                                    <p v-if="errors.villeArrivee" class="text-red-400 text-xs">{{ errors.villeArrivee }}
                                    </p>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div class="flex flex-col gap-2">
                                    <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Date
                                        souhaitée *</label>
                                    <input v-model="form.date" type="date" :min="minDate"
                                        :class="inputClass(errors.date)" @blur="validateField('date')" required />
                                    <p v-if="errors.date" class="text-red-400 text-xs">{{ errors.date }}</p>
                                </div>

                                <div class="flex flex-col gap-2">
                                    <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Volume
                                        estimé</label>
                                    <select v-model="form.volume" :class="inputClass()" required>
                                        <option value="" disabled>Sélectionner...</option>
                                        <option value="studio">Studio / petit appartement</option>
                                        <option value="t2t3">T2 – T3</option>
                                        <option value="t4plus">T4 et plus / maison</option>
                                        <option value="bureau">Bureaux / local pro</option>
                                        <option value="colis">Colis / palette</option>
                                        <option value="autre">Autre / je ne sais pas</option>
                                    </select>
                                </div>
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="text-xs font-semibold text-(--muted) uppercase tracking-wider">Description
                                    de votre besoin (optionnel)</label>
                                <textarea v-model="form.description" rows="4"
                                    placeholder="Décrivez votre mission : type d'objets, contraintes d'accès (étage, ascenseur, parking)..."
                                    :class="inputClass(errors.description)" @blur="validateField('description')" />
                                <p v-if="errors.description" class="text-red-400 text-xs">{{ errors.description }}</p>
                            </div>

                        </div>
                    </div>

                    <!-- extras thing that my cousin might want to offre -->
                    <div class="bg-white/3 border border-white/8 rounded-2xl p-8">
                        <h2 class="mfont text-xs font-bold uppercase tracking-[3px] text-(--og) mb-6">
                            04 — Options supplémentaires
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

                    <!-- Submit -->
                    <div
                        class="flex flex-col sm:flex-row lg:items-start max-md:items-center max-md:justify-center gap-4">
                        <button type="submit" :disabled="isSubmitting || submitted" :class="[
                            'relative overflow-hidden mfont font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-lg transition-all duration-300',
                            submitted
                                ? 'bg-green-500/20 border border-green-500/50 text-green-400 cursor-default'
                                : 'bg-(--og) text-white hover:shadow-[0_8px_32px_rgba(232,57,10,0.45)] hover:-translate-y-0.5 active:scale-95',
                            isSubmitting ? 'opacity-70 cursor-wait' : ''
                        ]">
                            <span v-if="isSubmitting" class="flex items-center gap-2">
                                Envoi en cours...
                            </span>
                            <span v-else-if="submitted">✓ Devis envoyé !</span>
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
    { id: 'demenagement-particulier', icon: 'i-lucide-home', label: 'Déménagement particulier' },
    { id: 'demenagement-entreprise', icon: 'i-lucide-building', label: 'Déménagement entreprise' },
    { id: 'transport-marchandises', icon: 'i-lucide-car', label: 'Transport marchandises' },
    { id: 'location-conducteur', icon: 'i-lucide-key', label: 'Location avec conducteur' },
    { id: 'garde-meubles', icon: 'i-lucide-box', label: 'Garde-meubles' },
    { id: 'vide-maison', icon: 'i-lucide-recycle', label: 'Vide maison / encombrants' },
]

const options = [
    { id: 'emballage', label: 'Emballage et protection des objets' },
    { id: 'montage', label: 'Démontage et remontage des meubles' },
    { id: 'etage', label: 'Accès difficile (étage sans ascenseur)' },
    { id: 'piano', label: 'Objets lourds ou fragiles (piano, œuvres)' },
    { id: 'weekend', label: 'Intervention week-end ou jour férié' },
    { id: 'urgent', label: 'Intervention urgente (moins de 48h)' },
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
    volume: '',
    description: '',
    options: [],
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
    villeDepart: (v) => (!v?.trim() ? 'La ville de départ est requise.' : null),
    villeArrivee: (v) => (!v?.trim() ? 'La ville d\'arrivée est requise.' : null),
    date: (v) => (!v ? 'La date souhaitée est requise.' : null),
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

const submitForm = async () => {
    if (!validateAll()) return
    isSubmitting.value = true
    // i need to send this in email
    console.log(form)
    isSubmitting.value = false
    submitted.value = true
}
</script>

<style scoped>
.mfont {
    font-family: var(--font-h), sans-serif;
}
</style>