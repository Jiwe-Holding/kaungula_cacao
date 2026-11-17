import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { navigation } from '@/content/site'
import { BrandMark } from './Header'
import { WhatsAppButton } from './WhatsApp'
import { Ornament } from './ui'

const year = new Date().getFullYear()

export function Footer() {
  const { contact, socials } = siteConfig

  return (
    <footer className="bg-cacao-950 text-cream-100/75">
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-24 sm:px-8 sm:pb-10 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" aria-label="Kaungula Cacao — Accueil" className="inline-block rounded-lg">
              <BrandMark />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed">
              Kaungula Cacao propose un cacao en poudre destiné aux particuliers et aux professionnels en République
              démocratique du Congo.
            </p>
            <Ornament className="mt-6 text-gold-500/70" />
          </div>

          <nav aria-label="Navigation du pied de page">
            <h2 className="font-sans text-xs font-semibold tracking-[0.28em] text-gold-300 uppercase">Navigation</h2>
            <ul className="mt-4 space-y-1 text-sm">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="inline-block py-1.5 transition-colors hover:text-gold-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-xs font-semibold tracking-[0.28em] text-gold-300 uppercase">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {contact.city && (
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden="true" />
                  <span>{contact.address ? `${contact.address}, ${contact.city}` : contact.city}</span>
                </li>
              )}
              {contact.phone && (
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden="true" />
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-gold-300">
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.email && (
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden="true" />
                  <a href={`mailto:${contact.email}`} className="break-all hover:text-gold-300">
                    {contact.email}
                  </a>
                </li>
              )}
            </ul>
            <WhatsAppButton context="general" variant="outlineLight" className="mt-6 !min-h-11">
              Écrire sur WhatsApp
            </WhatsAppButton>
            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-4 text-sm">
                {socials.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-14 border-t border-gold-400/10 pt-8 text-xs text-cream-100/55">
          © {year} Kaungula Cacao. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
