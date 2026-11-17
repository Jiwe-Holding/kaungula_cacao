import { Briefcase, HelpCircle, Mail, MapPin, Phone, ShoppingBag } from 'lucide-react'
import { useSeo } from '@/lib/seo'
import { PageHero } from '@/components/sections'
import { Ornament, Reveal } from '@/components/ui'
import { WhatsAppButton, WhatsAppIcon } from '@/components/WhatsApp'
import { siteConfig } from '@/config/site'
import type { WhatsAppContext } from '@/lib/whatsapp'

const options: { icon: typeof ShoppingBag; title: string; text: string; context: WhatsAppContext; cta: string }[] = [
  {
    icon: ShoppingBag,
    title: 'Commande particulier',
    text: 'Vous souhaitez commander du cacao en poudre pour la maison ou connaître nos tarifs ?',
    context: 'b2c',
    cta: 'Commander sur WhatsApp',
  },
  {
    icon: Briefcase,
    title: 'Demande professionnelle',
    text: 'Boulangerie, pâtisserie, hôtel, distributeur ou entreprise : parlons de vos besoins d’approvisionnement.',
    context: 'b2b',
    cta: 'Nous contacter pour vos besoins professionnels',
  },
  {
    icon: HelpCircle,
    title: 'Question sur le produit',
    text: 'Une question sur notre cacao en poudre, son utilisation ou son conditionnement ?',
    context: 'general',
    cta: 'Poser une question',
  },
]

export default function Contact() {
  useSeo({
    title: 'Contact — Kaungula Cacao',
    description:
      'Contactez Kaungula Cacao sur WhatsApp pour commander du cacao en poudre ou pour vos besoins professionnels à Kinshasa et en RDC.',
  })

  const { contact } = siteConfig

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Parlons de <em className="font-medium text-gold-300">votre cacao</em>
          </>
        }
        lead="WhatsApp est notre canal privilégié : un message suffit pour commander, poser une question ou nous présenter votre projet professionnel."
      />

      <section className="py-16 sm:py-24 lg:py-32" aria-labelledby="options-titre">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 id="options-titre" className="sr-only">
            Choisissez votre demande
          </h2>
          <ul className="grid gap-6 lg:grid-cols-3">
            {options.map((option, i) => (
              <Reveal
                as="li"
                key={option.title}
                delay={i * 100}
                className="flex flex-col rounded-3xl bg-cream-100 p-6 ring-1 ring-cacao-900/10 sm:p-10"
              >
                <span className="grid size-12 place-items-center rounded-full bg-cacao-900 text-gold-300">
                  <option.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl font-medium text-cacao-900 sm:mt-6 sm:text-3xl">{option.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{option.text}</p>
                <div className="mt-auto pt-6 sm:pt-8">
                  <WhatsAppButton
                    context={option.context}
                    variant={option.context === 'b2b' ? 'gold' : 'dark'}
                    className="w-full"
                  >
                    {option.cta}
                  </WhatsAppButton>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-6 grid gap-10 overflow-hidden rounded-3xl bg-cacao-950 p-6 text-cream-100/80 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="grid size-14 place-items-center rounded-full bg-whatsapp text-white">
                <WhatsAppIcon className="size-7" />
              </span>
              <h2 className="mt-6 text-[2rem] leading-tight font-medium text-cream-50 sm:text-4xl">
                Une réponse directe, sur WhatsApp
              </h2>
              <Ornament className="mt-5 text-gold-400" />
              <p className="mt-5 max-w-lg leading-relaxed">
                Chaque bouton ouvre une conversation avec un message déjà rédigé : il ne vous reste plus qu’à
                l’envoyer, ou à le compléter avec vos précisions.
              </p>
            </div>

            <div className="rounded-2xl border border-gold-400/15 p-5 sm:p-8">
              <h3 className="font-sans text-xs font-semibold tracking-[0.28em] text-gold-300 uppercase">
                Nos coordonnées
              </h3>
              <ul className="mt-6 space-y-5">
                {contact.city && (
                  <li className="flex gap-4">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-gold-400" aria-hidden="true" />
                    <span>{contact.address ? `${contact.address}, ${contact.city}` : contact.city}</span>
                  </li>
                )}
                {contact.phone && (
                  <li className="flex gap-4">
                    <Phone className="mt-0.5 size-5 shrink-0 text-gold-400" aria-hidden="true" />
                    <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-gold-300">
                      {contact.phone}
                    </a>
                  </li>
                )}
                {contact.email && (
                  <li className="flex gap-4">
                    <Mail className="mt-0.5 size-5 shrink-0 text-gold-400" aria-hidden="true" />
                    <a href={`mailto:${contact.email}`} className="break-all hover:text-gold-300">
                      {contact.email}
                    </a>
                  </li>
                )}
              </ul>
              <WhatsAppButton context="general" className="mt-8 w-full">
                Contactez-nous sur WhatsApp
              </WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
