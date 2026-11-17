import { useEffect, useRef, type ElementType, type ReactNode } from 'react'
import type { BrandImage } from '@/lib/images'

export function Picture({
  image,
  sizes,
  className = '',
  priority = false,
}: {
  image: BrandImage
  sizes: string
  className?: string
  priority?: boolean
}) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={className}
    />
  )
}

export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  as?: ElementType
  delay?: number
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  )
}

export function Ornament({ className = 'text-gold-400' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" aria-hidden="true" className={`h-3 w-28 ${className}`} fill="none">
      <path d="M0 6h48M72 6h48" stroke="currentColor" strokeWidth="1" />
      <path d="M60 1l5 5-5 5-5-5z" fill="currentColor" />
      <circle cx="51" cy="6" r="1.2" fill="currentColor" />
      <circle cx="69" cy="6" r="1.2" fill="currentColor" />
    </svg>
  )
}

export function Eyebrow({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'light' }) {
  return (
    <p
      className={`text-xs font-semibold tracking-[0.28em] uppercase ${
        tone === 'light' ? 'text-gold-300' : 'text-gold-700'
      }`}
    >
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = 'dark',
  align = 'left',
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
}) {
  const centered = align === 'center'
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 text-[1.95rem] leading-[1.1] font-medium sm:text-[2.6rem] lg:text-5xl ${
          tone === 'light' ? 'text-cream-50' : 'text-cacao-900'
        }`}
      >
        {title}
      </h2>
      <Ornament className={`mt-5 ${centered ? 'mx-auto' : ''} ${tone === 'light' ? 'text-gold-400' : 'text-gold-500'}`} />
      {intro && (
        <p className={`mt-5 text-[0.95rem] leading-relaxed sm:text-lg ${tone === 'light' ? 'text-cream-100/75' : 'text-ink-soft'}`}>
          {intro}
        </p>
      )}
    </div>
  )
}
