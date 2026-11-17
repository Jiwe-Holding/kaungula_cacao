import { Link } from 'react-router-dom'
import { useSeo } from '@/lib/seo'
import { PageHero } from '@/components/sections'
import { buttonClass } from '@/lib/ui'

export default function NotFound() {
  useSeo({
    title: 'Page introuvable — Kaungula Cacao',
    description: 'La page demandée est introuvable. Retrouvez Kaungula Cacao, cacao en poudre en RDC.',
  })

  return (
    <>
      <PageHero
        eyebrow="Erreur 404"
        title="Cette page est introuvable"
        lead="Le lien suivi semble incorrect ou la page n’existe plus. Retournez à l’accueil pour découvrir notre cacao en poudre."
      />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <Link to="/" className={buttonClass('dark')}>
          Retour à l’accueil
        </Link>
      </div>
    </>
  )
}
