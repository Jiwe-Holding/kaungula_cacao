import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Package, Users } from 'lucide-react'
import { useSeo } from '@/lib/seo'
import { AudienceSplit, CtaBand, UsesGrid } from '@/components/sections'
import { Eyebrow, Ornament, Picture, Reveal, SectionHeading } from '@/components/ui'
import { WhatsAppButton } from '@/components/WhatsApp'
import { product } from '@/content/site'
import { images } from '@/lib/images'
import { buttonClass } from '@/lib/ui'

const facts = [
  { icon: Package, label: 'Sachet de 200 g' },
  { icon: Users, label: 'Pour particuliers et professionnels' },
  { icon: MessageCircle, label: 'Commande directe sur WhatsApp' },
]

const commitments = [
  {
    title: 'Un produit soigné',
    text: 'Un seul produit, auquel nous consacrons toute notre attention, de sa présentation à sa remise entre vos mains.',
  },
  {
    title: 'Une relation directe',
    text: 'Un interlocuteur joignable simplement, pour chaque question, chaque commande et chaque demande professionnelle.',
  },
  {
    title: 'L’écoute de vos besoins',
    text: 'De la commande familiale à l’approvisionnement professionnel, chaque demande mérite une réponse attentive.',
  },
  {
    title: 'Une information honnête',
    text: 'Nous ne communiquons que des informations vérifiées sur notre produit et nos conditions.',
  },
]

export default function Home() {
  useSeo({
    title: 'Kaungula Cacao — Cacao en poudre à Kinshasa, RDC',
    description:
      'Kaungula Cacao, cacao en poudre pour particuliers et professionnels en RDC. Découvrez notre produit et commandez directement sur WhatsApp.',
  })

  return (
    <>
      <section className="grain relative overflow-hidden bg-cacao-950 pt-24 sm:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-12 sm:px-8 sm:pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-24">
          <div className="pt-6 lg:pt-0">
            <Eyebrow tone="light">Kaungula Cacao · Kinshasa, RDC</Eyebrow>
            <h1 className="mt-5 text-[2.45rem] leading-[1.05] font-medium text-cream-50 sm:mt-6 sm:text-7xl xl:text-[5.25rem]">
              Le cacao en poudre,{' '}
              <em className="font-medium text-gold-300">dans toute son élégance.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/75 sm:mt-8 sm:text-lg">
              Kaungula Cacao propose un cacao en poudre à la présentation soignée, pensé pour vos boissons chaudes,
              vos pâtisseries et les besoins des professionnels en RDC.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a href="#produit" className={buttonClass('gold')}>
                Découvrir notre cacao
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <WhatsAppButton context="b2c" variant="outlineLight">
                Commander sur WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-md lg:max-w-none">
            <div className="absolute inset-[12%] rounded-full bg-ember-500/35 blur-3xl" aria-hidden="true" />
            <Picture
              image={images.packshot}
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 90vw"
              priority
              className="relative w-full rounded-[2rem] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)] ring-1 ring-gold-400/20"
            />
          </div>
        </div>

        <div className="border-t border-gold-400/15">
          <ul className="mx-auto grid max-w-7xl gap-px px-5 py-2 sm:grid-cols-3 sm:px-8 sm:py-0">
            {facts.map((fact) => (
              <li key={fact.label} className="flex items-center gap-3 py-3.5 text-sm text-cream-100/80 sm:justify-center sm:py-5">
                <fact.icon className="size-5 shrink-0 text-gold-400" aria-hidden="true" />
                {fact.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32" aria-labelledby="marque-titre">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:gap-14 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <Picture
              image={images.situation}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[50%_60%]"
            />
            <div className="absolute -bottom-6 left-4 max-w-[15rem] rounded-2xl bg-cacao-900 p-4 sm:right-auto sm:-left-6 sm:p-5 text-sm text-cream-100/85 shadow-xl sm:-right-6">
              <p className="font-display text-xl leading-tight text-gold-300 sm:text-2xl">Un seul produit.</p>
              <p className="mt-1">Toute notre attention.</p>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <Eyebrow>La marque</Eyebrow>
            <h2 id="marque-titre" className="mt-4 text-[2.25rem] leading-[1.05] font-medium text-cacao-900 sm:text-5xl">
              Kaungula Cacao, une marque dédiée au cacao en poudre
            </h2>
            <Ornament className="mt-5 text-gold-500" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:mt-7 sm:space-y-5 sm:text-lg">
              <p>
                Kaungula Cacao a fait un choix clair : se consacrer à un seul produit, le cacao en poudre, et lui
                apporter tout le soin qu’il mérite.
              </p>
              <p>
                Du foyer qui prépare son chocolat chaud du matin à la pâtisserie qui travaille au quotidien, notre
                ambition reste la même : proposer un cacao en poudre facile à commander, présenté avec exigence et
                accompagné d’un service à l’écoute.
              </p>
            </div>
            <Link to="/a-propos" className={buttonClass('outlineDark', 'mt-10')}>
              En savoir plus sur nous
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="produit" className="grain relative overflow-hidden bg-cacao-900 py-16 sm:py-24 lg:py-32" aria-labelledby="produit-titre">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="mx-auto w-full max-w-[17rem] sm:max-w-sm lg:max-w-none">
            <Picture
              image={images.etiquette}
              sizes="(min-width: 1024px) 35vw, 24rem"
              className="w-full rounded-[2rem] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)]"
            />
          </Reveal>

          <Reveal>
            <Eyebrow tone="light">Notre produit</Eyebrow>
            <h2 id="produit-titre" className="mt-4 text-[2.2rem] leading-[1.08] font-medium text-cream-50 sm:text-6xl">
              {product.name}
              <span className="mt-2 block text-2xl font-medium text-gold-300 italic sm:text-4xl">{product.type}</span>
            </h2>
            <Ornament className="mt-6 text-gold-400" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/75 sm:mt-7 sm:text-lg">
              Un cacao en poudre présenté dans un sachet noir et or reconnaissable, qui s’invite aussi bien dans la
              tasse du matin que dans les recettes les plus gourmandes.
            </p>

            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-gold-400/15">
              {product.packaging.map((item) => (
                <div key={item.label} className="bg-cacao-900 p-4 sm:p-5">
                  <dt className="text-[0.65rem] tracking-[0.18em] text-cream-100/60 uppercase sm:text-xs sm:tracking-[0.2em]">{item.label}</dt>
                  <dd className="mt-1.5 font-display text-xl leading-tight text-cream-50 sm:mt-2 sm:text-2xl">{item.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-sm text-cream-100/70">
              <span className="font-semibold text-gold-300">Utilisations :</span> boissons chocolatées, pâtisserie,
              desserts, préparations culinaires et usages professionnels.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link to="/notre-produit" className={buttonClass('outlineLight')}>
                En savoir plus
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <WhatsAppButton context="b2c">Commander sur WhatsApp</WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24 lg:py-32" aria-labelledby="utilisations-titre">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-10 sm:mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Nos utilisations"
              title={<span id="utilisations-titre">Un cacao, de nombreuses façons de l’apprécier</span>}
            />
            <p className="max-w-md leading-relaxed text-ink-soft">
              Le cacao en poudre se prête à de multiples préparations. Voici quelques idées, à adapter selon vos
              recettes et vos besoins.
            </p>
          </Reveal>
          <UsesGrid />
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32" aria-labelledby="clients-titre">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-10 sm:mb-14">
            <SectionHeading
              eyebrow="Nos clients"
              title={<span id="clients-titre">Un cacao pour chaque besoin</span>}
              intro="Que vous cuisiniez pour votre famille ou pour vos clients, nous vous accompagnons avec un parcours adapté."
              align="center"
            />
          </Reveal>
          <AudienceSplit />
        </div>
      </section>

      <section id="engagements" className="bg-cacao-950 py-16 sm:py-24 lg:py-32" aria-labelledby="engagements-titre">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              tone="light"
              eyebrow="Nos engagements"
              title={<span id="engagements-titre">La qualité comme fil conducteur</span>}
              intro="Chez Kaungula Cacao, la satisfaction de nos clients guide nos décisions. Nos engagements reposent sur des principes simples, appliqués au quotidien."
            />
          </Reveal>
          <ol className="divide-y divide-gold-400/15 border-y border-gold-400/15">
            {commitments.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80} className="grid grid-cols-[3rem_1fr] gap-3 py-6 sm:grid-cols-[5rem_1fr] sm:gap-4 sm:py-8">
                <span className="font-display text-3xl text-gold-400 sm:text-4xl" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-2xl font-medium text-cream-50 sm:text-3xl">{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-cream-100/70 sm:mt-3 sm:text-base">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
