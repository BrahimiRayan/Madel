import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body) throw createError({ statusCode: 400, message: 'No body provided' })

  // 1. Champs obligatoires (alignés sur le formulaire + Partie 2 du PDF)
  const required = [
    'prenom', 'nom', 'telephone', 'email',
    'villeDepart', 'villeArrivee',
    'date', 'flexibilite',
    'service',
  ] as const

  for (const field of required) {
    if (!body[field]?.toString().trim()) {
      throw createError({ statusCode: 400, message: `Champ manquant : ${field}` })
    }
  }

  // 2. Validation format (côté serveur, ne pas se fier au client)
  if (!/^[\d\s+\-.()]{9,20}$/.test(String(body.telephone).trim())) {
    throw createError({ statusCode: 400, message: 'Téléphone invalide' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email).trim())) {
    throw createError({ statusCode: 400, message: 'Email invalide' })
  }

  // 3. Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) || 587,
    secure: process.env.MAIL_SECURE === 'true',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  // 4. Libellés — SERVICES (Partie 2.1 du PDF)
  const serviceLabels: Record<string, string> = {
    'demenagement-particulier': 'Déménagement maison / appartement',
    'demenagement-pro':         'Transfert bureaux / commerces',
    'transport-meubles':        'Transport de meubles & équipements',
    'emballage':                'Emballage et protection',
    'demontage-remontage':      'Démontage / remontage',
    'livraison-electromenager': 'Livraison électroménager',
    'manutention':              'Manutention et portage',
    'monte-meubles':            'Monte-meubles (selon dispo.)',
  }

  // 5. Libellés — OPTIONS (Partie 2.3 du PDF)
  const optionLabels: Record<string, string> = {
    'emballage':          'Emballage des cartons et protection des objets',
    'fourniture-cartons': 'Fourniture de cartons et matériel (selon dispo.)',
    'montage':            'Démontage et remontage des meubles',
    'protection-fragile': 'Protection spécifique objets fragiles',
    'objets-lourds':      'Transport d\'objets lourds ou volumineux',
    'monte-meubles':      'Mise à disposition d\'un monte-meubles (selon dispo.)',
    'etage':              'Intervention en étage sans ascenseur',
    'weekend':            'Intervention week-end ou jour férié (exceptionnel)',
    'urgent':             'Intervention urgente sous 48h (selon dispo.)',
    'livraison-meubles':  'Livraison et transport de meubles / électroménager',
    'manutention-supp':   'Manutention supplémentaire',
  }

  // 6. Libellés — OBJETS SPÉCIAUX (Partie 2.2 du PDF)
  const objetLabels: Record<string, string> = {
    lourds:     'Objets lourds',
    fragiles:   'Objets fragiles',
    volumineux: 'Objets volumineux',
  }

  // 7. Libellés — FLEXIBILITÉ DATE
  const flexLabels: Record<string, string> = {
    'imperative':    'Impérative (date fixe)',
    'flexible-1sem': 'Flexible (± 1 semaine)',
    'flexible-1mois':'Flexible (± 1 mois)',
    'tres-flexible': 'Très flexible',
  }

  // 8. Libellés — TYPE DE LIEU
  const lieuLabels: Record<string, string> = {
    appartement: 'Appartement',
    maison:      'Maison',
    bureau:      'Bureau',
    commerce:    'Commerce / local',
  }

  // Helpers d'affichage
  const esc = (v: unknown) =>
    String(v ?? '').replace(/[&<>"']/g, (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string)
    )

  const row = (label: string, value: unknown, last = false) => {
    if (value === undefined || value === null || String(value).trim() === '') return ''
    const border = last ? '' : 'border-bottom:1px solid #f0f0f0;'
    return `
      <tr>
        <td style="padding:8px 0;${border}font-size:12px;color:#888;width:40%">${esc(label)}</td>
        <td style="padding:8px 0;${border}font-size:14px;font-weight:600;color:#111">${esc(value)}</td>
      </tr>`
  }

  const optionsList = ((body.options as string[]) ?? [])
    .map((el) => `<li style="margin:4px 0">✓ ${esc(optionLabels[el] ?? el)}</li>`)
    .join('') || '<li style="color:#6B7B8D">Aucune option sélectionnée</li>'

  const objetsList = ((body.objetsSpeciaux as string[]) ?? [])
    .map((el) => `<li style="margin:4px 0">• ${esc(objetLabels[el] ?? el)}</li>`)
    .join('') || '<li style="color:#6B7B8D">Aucun objet signalé</li>'

  const dateFormatted = body.date
    ? new Date(body.date).toLocaleDateString('fr-FR', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      })
    : '—'

  // 9. Bloc "étage / ascenseur" réutilisable
  const etageBloc = (label: string, etage: unknown, ascenseur: unknown) => {
    if (
      (etage === undefined || etage === null || String(etage).trim() === '') &&
      (ascenseur === undefined || ascenseur === null || String(ascenseur).trim() === '')
    ) return ''
    const asc = ascenseur === 'oui' ? 'Ascenseur : oui' : ascenseur === 'non' ? 'Ascenseur : non' : ''
    const etg = etage !== undefined && etage !== null && String(etage).trim() !== ''
      ? `Étage : ${etage === '0' || etage === 0 ? 'RDC' : etage}`
      : ''
    return row(label, [etg, asc].filter(Boolean).join(' · '))
  }

  // 10. Mail interne
  const internalMail = {
    from: `"Trans Madel Site" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    replyTo: body.email,
    subject: `📋 Nouveau devis — ${serviceLabels[body.service] ?? body.service} — ${body.prenom} ${body.nom}`,
    html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center" style="padding:32px 16px">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08)">

        <!-- Header -->
        <tr>
          <td style="background:#102A43;padding:28px 36px">
            <p style="margin:0;font-size:22px;font-weight:900;color:#ffffff;letter-spacing:2px;text-transform:uppercase">
              TRANS <span style="color:#F59E0B">MADEL</span>
            </p>
            <p style="margin:6px 0 0;font-size:12px;color:#9FB3C8;letter-spacing:1px;text-transform:uppercase">Nouvelle demande de devis</p>
          </td>
        </tr>

        <!-- Bandeau service -->
        <tr>
          <td style="background:#F59E0B;padding:14px 36px">
            <p style="margin:0;font-size:14px;font-weight:700;color:#102A43;text-transform:uppercase;letter-spacing:1px">
              ${esc(serviceLabels[body.service] ?? body.service)}
            </p>
          </td>
        </tr>

        <!-- Contenu -->
        <tr>
          <td style="padding:32px 36px">

            <!-- Coordonnées -->
            <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#F59E0B;letter-spacing:2px;text-transform:uppercase">Coordonnées</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px">
              ${row('Nom complet', `${body.prenom} ${body.nom}`)}
              <tr>
                <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:12px;color:#888;width:40%">Téléphone</td>
                <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;font-size:14px;font-weight:600;color:#111">
                  <a href="tel:${esc(body.telephone)}" style="color:#F59E0B;text-decoration:none">${esc(body.telephone)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 0;${body.societe ? 'border-bottom:1px solid #f0f0f0;' : ''}font-size:12px;color:#888">Email</td>
                <td style="padding:8px 0;${body.societe ? 'border-bottom:1px solid #f0f0f0;' : ''}font-size:14px;font-weight:600;color:#111">
                  <a href="mailto:${esc(body.email)}" style="color:#F59E0B;text-decoration:none">${esc(body.email)}</a>
                </td>
              </tr>
              ${row('Société', body.societe, true)}
            </table>

            <!-- Détails mission -->
            <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#F59E0B;letter-spacing:2px;text-transform:uppercase">Détails de la mission</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px">
              ${row('Adresse de départ', body.villeDepart)}
              ${row('Adresse d\'arrivée', body.villeArrivee)}
              ${row('Date souhaitée', dateFormatted)}
              ${row('Flexibilité', flexLabels[body.flexibilite] ?? body.flexibilite)}
              ${row('Volume estimé', body.volumeM3 ? `${body.volumeM3} m³` : '')}
              ${row('Type de lieu', lieuLabels[body.typeLieu] ?? body.typeLieu)}
              ${etageBloc('Au départ', body.etageDepart, body.ascenseurDepart)}
              ${etageBloc('À l\'arrivée', body.etageArrivee, body.ascenseurArrivee)}
              ${row('Accès / stationnement', body.acces, true)}
            </table>

            <!-- Objets -->
            <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#F59E0B;letter-spacing:2px;text-transform:uppercase">Objets à transporter</p>
            ${body.listeObjets ? `
            <div style="background:#f8f8f8;border-left:3px solid #F59E0B;padding:14px 18px;border-radius:0 8px 8px 0;margin-bottom:16px">
              <p style="margin:0;font-size:14px;color:#333;line-height:1.7">${esc(body.listeObjets).replace(/\n/g, '<br>')}</p>
            </div>` : ''}
            <ul style="margin:0 0 28px;padding-left:18px;font-size:13px;color:#444;line-height:1.8">
              ${objetsList}
            </ul>

            <!-- Description -->
            <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#F59E0B;letter-spacing:2px;text-transform:uppercase">Informations complémentaires</p>
            <div style="background:#f8f8f8;border-left:3px solid #F59E0B;padding:14px 18px;border-radius:0 8px 8px 0;margin-bottom:28px">
              <p style="margin:0;font-size:14px;color:#333;line-height:1.7">${esc(body.description ?? '').replace(/\n/g, '<br>') || '<span style="color:#6B7B8D">Non renseigné</span>'}</p>
            </div>

            <!-- Options -->
            <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#F59E0B;letter-spacing:2px;text-transform:uppercase">Options demandées</p>
            <ul style="margin:0 0 28px;padding-left:18px;font-size:13px;color:#444;line-height:1.8">
              ${optionsList}
            </ul>

            <!-- CTA répondre -->
            <div style="text-align:center;margin-top:8px">
              <a href="mailto:${esc(body.email)}?subject=Votre devis Trans Madel"
                style="display:inline-block;background:#F59E0B;color:#102A43;padding:13px 32px;border-radius:8px;font-size:13px;font-weight:700;text-decoration:none;text-transform:uppercase;letter-spacing:1px">
                Répondre à ${esc(body.prenom)} →
              </a>
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8f8f8;padding:20px 36px;border-top:1px solid #eee">
            <p style="margin:0;font-size:11px;color:#aaa;text-align:center">
              Demande reçue le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
              — Trans Madel · transmadel.fr
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
  }

  // 11. Mail client (récap enrichi)
  const clientMail = {
    from: `"Trans Madel" <${process.env.MAIL_USER}>`,
    to: body.email,
    subject: `✅ Votre demande de devis a bien été reçue — Trans Madel`,
    html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center" style="padding:32px 16px">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08)">

        <tr>
          <td style="background:#102A43;padding:28px 36px">
            <p style="margin:0;font-size:22px;font-weight:900;color:#ffffff;letter-spacing:2px;text-transform:uppercase">
              TRANS <span style="color:#F59E0B">MADEL</span>
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding:36px 36px 28px">
            <p style="margin:0 0 8px;font-size:22px;font-weight:700;color:#111">Bonjour ${esc(body.prenom)} 👋</p>
            <p style="margin:0 0 24px;font-size:15px;color:#555;line-height:1.7">
              Nous avons bien reçu votre demande de devis pour <strong>${esc(serviceLabels[body.service] ?? body.service)}</strong>.
              Notre équipe vous contacte sous <strong>24h</strong> au numéro <strong>${esc(body.telephone)}</strong>.
            </p>

            <div style="background:#f8f8f8;border-radius:10px;padding:20px 24px;margin-bottom:24px">
              <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#F59E0B;letter-spacing:2px;text-transform:uppercase">Récapitulatif de votre demande</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size:12px;color:#888;padding:5px 0;width:40%">Prestation</td>
                  <td style="font-size:13px;font-weight:600;color:#111;padding:5px 0">${esc(serviceLabels[body.service] ?? body.service)}</td>
                </tr>
                <tr>
                  <td style="font-size:12px;color:#888;padding:5px 0">Départ → Arrivée</td>
                  <td style="font-size:13px;font-weight:600;color:#111;padding:5px 0">${esc(body.villeDepart)} → ${esc(body.villeArrivee)}</td>
                </tr>
                <tr>
                  <td style="font-size:12px;color:#888;padding:5px 0">Date souhaitée</td>
                  <td style="font-size:13px;font-weight:600;color:#111;padding:5px 0">
                    ${dateFormatted}${body.flexibilite ? ` <span style="color:#888;font-weight:400">(${esc(flexLabels[body.flexibilite] ?? body.flexibilite)})</span>` : ''}
                  </td>
                </tr>
                ${body.volumeM3 ? `
                <tr>
                  <td style="font-size:12px;color:#888;padding:5px 0">Volume</td>
                  <td style="font-size:13px;font-weight:600;color:#111;padding:5px 0">${esc(body.volumeM3)} m³</td>
                </tr>` : ''}
              </table>
            </div>

            <p style="margin:0 0 28px;font-size:13px;color:#777;line-height:1.7">
              Réservation possible à partir de <strong>48h à l'avance</strong>, sous réserve de disponibilité du planning.
              Si vous avez une question urgente, appelez-nous directement :
            </p>

            <div style="text-align:center">
              <a href="tel:${esc(process.env.MAIL_PHONE ?? '')}"
                style="display:inline-block;background:#F59E0B;color:#102A43;padding:13px 32px;border-radius:8px;font-size:13px;font-weight:700;text-decoration:none;text-transform:uppercase;letter-spacing:1px">
                📞 Nous appeler
              </a>
            </div>
          </td>
        </tr>

        <tr>
          <td style="background:#f8f8f8;padding:20px 36px;border-top:1px solid #eee">
            <p style="margin:0;font-size:11px;color:#aaa;text-align:center">
              Trans Madel · Transport &amp; Déménagement · Île-de-France<br>
              Lun–Sam 7h–20h · transmadel.fr
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
  }

  // 12. Envoi
  try {
    await Promise.all([
      transporter.sendMail(internalMail),
      transporter.sendMail(clientMail),
    ])
  } catch (err) {
    console.error('[devis] sendMail error:', err)
    throw createError({ statusCode: 500, message: 'Erreur lors de l\'envoi de l\'email.' })
  }

  return { success: true }
})