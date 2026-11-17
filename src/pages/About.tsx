import { Compass, Eye, Handshake, Heart, ShieldCheck, Sparkles, Target } from 'lucide-react'
import { useSeo } from '@/lib/seo'
import { CtaBand, PageHero } from '@/components/sections'
import { Eyebrow, Ornament, Picture, Reveal, SectionHeading } from '@/components/ui'
import { images } from '@/lib/images'

const values = [
  { icon: Sparkles, title: 'Exigence', text: 'Un soin constant apporté à notre produit et à la façon dont nous le présentons.' },
  { icon: Heart, title: 'Proximité', text: 'Une relation simple et humaine avec chacun de nos clients.' },
  { icon: ShieldCheck, title: 'Transparence', text: 'Des informations claires et vérifiées, sans promesse superflue.' },
  { icon: Handshake, title: 'Respect', text: 'Des engagements tenus envers les familles comme envers les professionnels.' },
]

export default function About() {
  useSeo({
    title: 'À propos — Kaungula Cacao',
    description:
      'Découvrez Kaungula Cacao, marque de cacao en poudre basée à Kinshasa : notre vision, notre mission, nos valeurs et notre approche commerciale.',
  })

  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            Kaungula Cacao, <em className="font-medium text-gold-300">l’exigence d’un seul produit</em>
          </>
        }
        lead="Une marque qui a choisi de concentrer son savoir-faire sur le cacao en poudre, pour les foyers comme pour les professionnels."
      />

      <section className="py-16 sm:py-24 lg:py-32" aria-labelledby="presentation-titre">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Présentation</Eyebrow>
            <h2 id="presentation-titre" className="mt-4 text-[2.25rem] leading-[1.05] font-medium text-cacao-900 sm:text-5xl">
              Une entreprise tournée vers ses clients
            </h2>
            <Ornament className="mt-5 text-gold-500" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:mt-7 sm:space-y-5 sm:text-lg">
              <p>
                Basée à Kinshasa, Kaungula Cacao commercialise du cacao en poudre sous sa propre marque, auprès des
                particuliers comme des professionnels de République démocratique du Congo.
              </p>
              <p>
                Notre choix de nous consacrer à un produit unique nous permet d’y apporter une attention entière : à
                sa présentation, à la qualité de nos échanges et à la satisfaction de ceux qui nous font confiance.
              </p>
            </div>
          </Reveal>
          <Reveal className="mx-auto w-full max-w-[17rem] sm:max-w-sm lg:max-w-md">
            <Picture
              image={images.packshot}
              sizes="(min-width: 1024px) 28rem, 24rem"
              className="w-full rounded-[2rem] shadow-[0_40px_80px_-30px_rgb(18_10_5/0.6)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-cacao-900 py-16 sm:py-24 lg:py-28" aria-label="Vision et mission">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2">
          {[
            {
              icon: Eye,
              eyebrow: 'Notre vision',
              title: 'Faire de Kaungula Cacao un nom de confiance',
              text: 'Devenir une marque de cacao en poudre reconnue en RDC pour le soin qu’elle porte à son produit et la confiance qu’elle inspire.',
            },
            {
              icon: Target,
              eyebrow: 'Notre mission',
              title: 'Rendre le cacao en poudre accessible',
              text: 'Proposer aux foyers et aux professionnels un cacao en poudre facile à commander, avec un service simple, direct et attentif.',
            },
          ].map((block, i) => (
            <Reveal key={block.eyebrow} delay={i * 120} className="rounded-3xl bg-cacao-800 p-6 ring-1 ring-gold-400/15 sm:p-12">
              <block.icon className="size-7 text-gold-400" aria-hidden="true" />
              <p className="mt-6 text-xs font-semibold sm:mt-8 tracking-[0.28em] text-gold-300 uppercase">{block.eyebrow}</p>
              <h2 className="mt-3 text-[1.75rem] leading-tight font-medium text-cream-50 sm:text-4xl">{block.title}</h2>
              <p className="mt-5 leading-relaxed text-cream-100/75">{block.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32" aria-labelledby="valeurs-titre">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-10 sm:mb-14">
            <SectionHeading eyebrow="Nos valeurs" title={<span id="valeurs-titre">Ce qui nous guide</span>} align="center" />
          </Reveal>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal as="li" key={value.title} delay={i * 80} className="rounded-3xl bg-cream-100 p-6 ring-1 sm:p-8 ring-cacao-900/10">
                <span className="grid size-12 place-items-center rounded-full bg-cacao-900 text-gold-300">
                  <value.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl font-medium text-cacao-900 sm:mt-6 sm:text-3xl">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{value.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24 lg:py-32" aria-labelledby="approche-titre">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Notre approche commerciale"
              title={<span id="approche-titre">Un contact direct, deux parcours</span>}
              intro="Nous privilégions l’échange direct, sans complexité : un message suffit pour obtenir une réponse, que vous soyez un particulier ou un professionnel."
            />
          </Reveal>
          <div className="grid gap-6">
            {[
              {
                icon: Heart,
                title: 'Pour les particuliers',
                text: 'Une commande simple par WhatsApp, avec toutes les informations utiles sur les conditionnements et les tarifs disponibles.',
              },
              {
                icon: Compass,
                title: 'Pour les professionnels',
                text: 'Une étude de vos besoins en volume, des échanges sur les conditions commerciales et les possibilités d’approvisionnement.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 120} className="flex gap-4 rounded-3xl bg-cream-50 p-6 ring-1 sm:gap-6 sm:p-8 ring-cacao-900/10">
                <item.icon className="size-7 shrink-0 text-gold-700" aria-hidden="true" />
                <div>
                  <h3 className="text-2xl font-medium text-cacao-900 sm:text-3xl">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Faisons connaissance" />
    </>
  )
}
