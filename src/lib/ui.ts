export type ButtonVariant = 'gold' | 'outlineLight' | 'outlineDark' | 'dark'

const variants: Record<ButtonVariant, string> = {
  gold: 'bg-gold-400 text-cacao-950 hover:bg-gold-300 shadow-[0_10px_30px_-12px_rgb(217_171_79/0.6)]',
  outlineLight: 'border border-gold-300/50 text-cream-50 hover:border-gold-300 hover:bg-gold-300/10',
  outlineDark: 'border border-cacao-800/30 text-cacao-900 hover:border-cacao-900 hover:bg-cacao-900 hover:text-cream-50',
  dark: 'bg-cacao-900 text-cream-50 hover:bg-cacao-700',
}

export function buttonClass(variant: ButtonVariant = 'gold', extra = '') {
  return [
    'inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer text-center',
    variants[variant],
    extra,
  ].join(' ')
}
