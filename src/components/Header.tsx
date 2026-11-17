import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navigation } from '@/content/site'
import { images } from '@/lib/images'
import { WhatsAppButton } from './WhatsApp'

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <img
        src={images.logo.src}
        srcSet={images.logo.srcSet}
        sizes="48px"
        width={48}
        height={48}
        alt=""
        className="size-11 rounded-lg ring-1 ring-gold-400/30 sm:size-12"
      />
      <span className={`leading-none ${compact ? 'hidden sm:block' : ''}`}>
        <span className="block font-display text-lg font-semibold tracking-[0.16em] sm:text-xl sm:tracking-[0.18em] text-cream-50">KAUNGULA</span>
        <span className="mt-1 block text-[0.65rem] font-semibold tracking-[0.42em] text-gold-300">CACAO</span>
      </span>
    </span>
  )
}

function isActive(to: string, pathname: string, hash: string) {
  if (to === '/#engagements') return pathname === '/' && hash === '#engagements'
  if (to === '/') return pathname === '/' && hash !== '#engagements'
  return pathname.startsWith(to)
}

export function Header() {
  const { pathname, hash } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'border-b border-gold-400/15 bg-cacao-950/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-full focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cacao-950"
      >
        Aller au contenu
      </a>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <Link to="/" aria-label="Kaungula Cacao — Accueil" onClick={() => setOpen(false)} className="shrink-0 rounded-lg">
          <BrandMark />
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => {
              const active = isActive(item.to, pathname, hash)
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    aria-current={active ? 'page' : undefined}
                    className={`relative py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold-400 after:transition-transform ${
                      active
                        ? 'text-gold-300 after:scale-x-100'
                        : 'text-cream-100/80 after:scale-x-0 hover:text-cream-50 hover:after:scale-x-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <WhatsAppButton context="b2c" className="!min-h-11 !px-5">
              Commander
            </WhatsAppButton>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="grid size-11 place-items-center rounded-full border border-gold-300/30 text-cream-50 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain sm:h-[calc(100dvh-5rem)] border-t border-gold-400/15 bg-cacao-950 px-5 pt-6 pb-10 lg:hidden"
      >
        <nav aria-label="Navigation mobile">
          <ul className="divide-y divide-gold-400/10">
            {navigation.map((item) => {
              const active = isActive(item.to, pathname, hash)
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={`block py-3.5 font-display text-[1.75rem] font-semibold ${active ? 'text-gold-300' : 'text-cream-50'}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <WhatsAppButton context="b2c" className="mt-8 w-full">
          Commander sur WhatsApp
        </WhatsAppButton>
      </div>
    </header>
  )
}
