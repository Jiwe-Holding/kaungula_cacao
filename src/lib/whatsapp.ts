import { siteConfig } from '@/config/site'

export type WhatsAppContext = 'b2c' | 'b2b' | 'general'

const messages: Record<WhatsAppContext, string> = {
  b2c: `Bonjour Kaungula Cacao,

Je souhaite obtenir des informations sur votre cacao en poudre et connaître les conditionnements ainsi que les tarifs disponibles.

Merci.`,
  b2b: `Bonjour Kaungula Cacao,

Je vous contacte dans le cadre d'un besoin professionnel en cacao en poudre.

Je souhaiterais obtenir des informations sur vos conditions commerciales et les possibilités d'approvisionnement.

Merci de me recontacter.`,
  general: `Bonjour Kaungula Cacao,

Je souhaite obtenir des informations sur votre cacao en poudre.

Merci.`,
}

const number = siteConfig.whatsappNumber.replace(/\D/g, '')

export const isWhatsAppConfigured = /^\d{8,15}$/.test(number)

export function getWhatsAppUrl(context: WhatsAppContext): string | null {
  if (!isWhatsAppConfigured) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(messages[context])}`
}
