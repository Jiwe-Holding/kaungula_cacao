// Point unique de configuration : modifiez ce fichier pour mettre à jour les coordonnées du site.
export const siteConfig = {
  name: 'Kaungula Cacao',

  // URL publique du site une fois en ligne, sans slash final (ex. https://www.kaungulacacao.com).
  url: '',

  // Numéro WhatsApp officiel au format international, chiffres uniquement (ex. 243XXXXXXXXX).
  // Tant qu'il est vide, les boutons WhatsApp affichent un message d'attente au lieu d'ouvrir un lien.
  whatsappNumber: '243897759783',

  contact: {
    phone: '',
    email: '',
    address: '',
    city: 'Kinshasa, République démocratique du Congo',
  },

  // Ajoutez ici les réseaux sociaux officiels, ex. { label: 'Facebook', url: 'https://facebook.com/...' }
  socials: [] as { label: string; url: string }[],
}
