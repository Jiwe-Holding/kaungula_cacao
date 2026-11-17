import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { uses } from '@/content/site'
import { images } from '@/lib/images'
import { buttonClass } from '@/lib/ui'
import { WhatsAppButton } from './WhatsApp'
import { Eyebrow, Ornament, Picture, Reveal } from './ui'

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead: ReactNode }) {
  return (
    <section className="grain relative overflow-hidden bg-cacao-950 pt-32 pb-14 sm:pt-44 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-[2.3rem] leading-[1.05] font-medium text-cream-50 sm:text-6xl lg:text-[4rem]">
          {title}
        </h1>
        <Ornament className="mt-7 text-gold-400" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream-100/75 sm:mt-7 sm:text-lg">{lead}</p>
      </div>
    </section>
  )
}

export function UsesGrid() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-3xl bg-cacao-900/10 sm:grid-cols-2 lg:grid-cols-5">
      {uses.map((use, i) => (
        <Reveal as="li" key={use.title} delay={i * 80} className="flex flex-col bg-cream-50 p-6 sm:p-7 lg:p-8">
          <div className="flex items-center justify-between">
            <span className="grid size-12 place-items-center rounded-full bg-cacao-900 text-gold-300">
              <use.icon className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-2xl text-gold-500" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
          <h3 className="mt-5 text-2xl sm:mt-8 leading-tight font-medium text-cacao-900">{use.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{use.text}</p>
        </Reveal>
      ))}
    </ol>
  )
}

function Checklist({ items, tone }: { items: string[]; tone: 'dark' | 'light' }) {
  return (
    <ul className="mt-7 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm">
          <Check
            className={`mt-0.5 size-4 shrink-0 ${tone === 'light' ? 'text-gold-300' : 'text-gold-700'}`}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function AudienceSplit() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Reveal className="flex flex-col rounded-3xl bg-cream-100 p-6 ring-1 ring-cacao-900/10 sm:p-10">
        <Eyebrow>Particuliers</Eyebrow>
        <h3 className="mt-4 text-3xl leading-tight font-medium text-cacao-900 sm:text-4xl">Pour la maison</h3>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Petits-déjeuners, goûters, recettes en famille : découvrez Kaungula Cacao et commandez directement auprès de
          nous, en quelques messages.
        </p>
        <div className="text-ink">
          <Checklist
            tone="dark"
            items={[
              'Commande simple via WhatsApp',
              'Échange direct avec notre équipe',
              'Informations sur les conditionnements et les tarifs',
            ]}
          />
        </div>
        <div className="mt-auto pt-8 sm:pt-10">
          <WhatsAppButton context="b2c" variant="dark" className="w-full sm:w-auto">
            Commander sur WhatsApp
          </WhatsAppButton>
        </div>
      </Reveal>

      <Reveal
        delay={120}
        className="grid overflow-hidden rounded-3xl bg-cacao-900 text-cream-100/80 ring-1 ring-gold-400/15 sm:grid-cols-[1fr_11rem] xl:grid-cols-[1fr_14rem]"
      >
        <div className="flex flex-col p-6 sm:p-10">
          <Eyebrow tone="light">Professionnels</Eyebrow>
          <h3 className="mt-4 text-3xl leading-tight font-medium text-cream-50 sm:text-4xl">Pour votre activité</h3>
          <p className="mt-4 leading-relaxed">
            Entreprises, boulangeries, pâtisseries, hôtels, distributeurs et acteurs de l’agroalimentaire : parlons de
            vos besoins en cacao en poudre et des possibilités d’approvisionnement.
          </p>
          <Checklist
            tone="light"
            items={[
              'Étude de vos besoins en volume',
              'Échanges sur les conditions commerciales',
              'Perspectives de collaboration dans la durée',
            ]}
          />
          <div className="mt-auto pt-8 sm:pt-10">
            <WhatsAppButton context="b2b" className="w-full sm:w-auto">
              Nous contacter pour vos besoins professionnels
            </WhatsAppButton>
          </div>
        </div>
        <Picture
          image={images.pile}
          sizes="(min-width: 640px) 14rem, 100vw"
          className="hidden h-full w-full object-cover sm:block"
        />
      </Reveal>
    </div>
  )
}

export function CtaBand({
  title = 'Envie de goûter Kaungula Cacao ?',
  text = 'Une question, une commande ou un projet professionnel ? Écrivez-nous sur WhatsApp, nous serons heureux de vous répondre.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-cacao-950 py-16 sm:py-24 lg:py-32">
      <Picture image={images.etales} sizes="100vw" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cacao-950/90 via-cacao-950/70 to-cacao-950/95" />
      <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Ornament className="mx-auto text-gold-400" />
        <h2 className="mt-6 text-[2.1rem] leading-tight font-medium text-cream-50 sm:text-6xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg text-cream-100/80">{text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton context="general">Contactez-nous sur WhatsApp</WhatsAppButton>
          <Link to="/contact" className={buttonClass('outlineLight')}>
            Voir nos coordonnées
          </Link>
        </div>
      </Reveal>
    </section>
  )
}

