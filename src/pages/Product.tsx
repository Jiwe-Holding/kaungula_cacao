import { useSeo } from '@/lib/seo'
import { AudienceSplit, CtaBand, UsesGrid } from '@/components/sections'
import { Eyebrow, Ornament, Picture, Reveal, SectionHeading } from '@/components/ui'
import { WhatsAppButton } from '@/components/WhatsApp'
import { product } from '@/content/site'
import { images } from '@/lib/images'

export default function Product() {
  useSeo({
    title: 'Notre cacao en poudre — Kaungula Cacao',
    description:
      'Kaungula Cacao, cacao en poudre en sachet de 200 g pour particuliers et professionnels en RDC. Utilisations, conditionnement et commande sur WhatsApp.',
  })

  return (
    <>
      <section className="grain relative overflow-hidden bg-cacao-950 pt-24 pb-14 sm:pt-36 sm:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:gap-14 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-md lg:order-2 lg:max-w-lg">
            <div className="absolute inset-[10%] rounded-full bg-ember-500/35 blur-3xl" aria-hidden="true" />
            <Picture
              image={images.packshot}
              sizes="(min-width: 1024px) 32rem, (min-width: 640px) 28rem, 90vw"
              priority
              className="relative w-full rounded-[2rem] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)] ring-1 ring-gold-400/20"
            />
          </div>

          <div className="lg:order-1">
            <Eyebrow tone="light">Notre produit</Eyebrow>
            <h1 className="mt-5 text-[2.45rem] leading-[1.05] font-medium text-cream-50 sm:text-6xl lg:text-7xl">
              {product.name}
              <span className="mt-3 block text-2xl font-medium text-gold-300 italic sm:text-5xl">{product.type}</span>
            </h1>
            <Ornament className="mt-7 text-gold-400" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/75 sm:mt-7 sm:text-lg">
              Notre unique produit, et toute notre attention. Le cacao en poudre Kaungula Cacao se présente dans un
              sachet noir et or au visuel reconnaissable, prêt à rejoindre votre cuisine ou votre atelier.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <WhatsAppButton context="b2c">Commander sur WhatsApp</WhatsAppButton>
              <WhatsAppButton context="b2b" variant="outlineLight">
                Demande professionnelle
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32" aria-labelledby="details-titre">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="mx-auto w-full max-w-[17rem] sm:max-w-sm lg:max-w-none">
            <Picture
              image={images.etiquette}
              sizes="(min-width: 1024px) 30vw, 24rem"
              className="w-full rounded-[2rem] ring-1 ring-cacao-900/10"
            />
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Caractéristiques & conditionnement"
                title={<span id="details-titre">L’essentiel à savoir</span>}
              />
              <dl className="mt-8 divide-y sm:mt-10 divide-cacao-900/10 border-y border-cacao-900/10">
                <div className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:py-5">
                  <dt className="text-sm font-semibold tracking-wide text-gold-700 uppercase">Produit</dt>
                  <dd className="font-display text-xl text-cacao-900 sm:text-2xl">{product.type}</dd>
                </div>
                {product.packaging.map((item) => (
                  <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:py-5">
                    <dt className="text-sm font-semibold tracking-wide text-gold-700 uppercase">{item.label}</dt>
                    <dd className="font-display text-xl text-cacao-900 sm:text-2xl">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                Pour connaître les conditionnements disponibles, les quantités et les tarifs, contactez-nous
                directement : nous vous répondrons avec toutes les informations à jour.
              </p>
            </Reveal>

            <Reveal className="mt-10 rounded-3xl bg-cacao-900 p-6 text-cream-100/80 sm:mt-14 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.28em] text-gold-300 uppercase">Préparation conseillée</p>
              <h3 className="mt-3 text-2xl font-medium text-cream-50 sm:text-3xl">Une tasse en quelques secondes</h3>
              <p className="mt-4 leading-relaxed">{product.preparation}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24 lg:py-32" aria-labelledby="usages-titre">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-10 sm:mb-14">
            <SectionHeading
              eyebrow="Utilisations"
              title={<span id="usages-titre">De la tasse du matin à l’atelier</span>}
              intro="Quelques idées d’utilisation du cacao en poudre, à adapter selon vos recettes et vos besoins."
            />
          </Reveal>
          <UsesGrid />
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32" aria-labelledby="pour-qui-titre">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-10 sm:mb-14">
            <SectionHeading
              eyebrow="Pour qui ?"
              title={<span id="pour-qui-titre">Particuliers et professionnels</span>}
              intro="Deux parcours, un même interlocuteur : choisissez celui qui vous correspond et écrivez-nous sur WhatsApp."
              align="center"
            />
          </Reveal>
          <AudienceSplit />
        </div>
      </section>

      <section className="bg-cacao-950 py-14 sm:py-20 lg:py-24" aria-labelledby="galerie-titre">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 id="galerie-titre" className="sr-only">
            Le produit en images
          </h2>
          <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0">
            <Picture
              image={images.situation}
              sizes="(min-width: 640px) 33vw, 100vw"
              className="aspect-[4/5] w-[78%] shrink-0 snap-center rounded-3xl object-cover sm:h-full sm:w-full"
            />
            <Picture
              image={images.etales}
              sizes="(min-width: 640px) 33vw, 100vw"
              className="aspect-[4/5] w-[78%] shrink-0 snap-center rounded-3xl object-cover sm:h-full sm:w-full"
            />
            <Picture
              image={images.pile}
              sizes="(min-width: 640px) 33vw, 100vw"
              className="aspect-[4/5] w-[78%] shrink-0 snap-center rounded-3xl object-cover sm:h-full sm:w-full"
            />
          </div>
        </div>
      </section>

      <CtaBand title="Prêt à commander ?" />
    </>
  )
}
