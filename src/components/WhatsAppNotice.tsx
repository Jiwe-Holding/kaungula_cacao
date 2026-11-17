import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { WhatsAppNoticeContext } from '@/lib/whatsapp-notice'

export function WhatsAppNoticeProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  const notifyUnavailable = useCallback(() => {
    setVisible(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setVisible(false), 5000)
  }, [])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  return (
    <WhatsAppNoticeContext.Provider value={{ notifyUnavailable }}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={`fixed inset-x-4 bottom-24 z-[60] mx-auto max-w-md rounded-2xl border border-gold-400/30 bg-cacao-900 px-5 py-4 text-sm text-cream-100 shadow-2xl transition-all duration-300 sm:bottom-28 ${
          visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        {visible && (
          <>
            <p className="font-semibold text-gold-300">Notre ligne WhatsApp arrive très bientôt.</p>
            <p className="mt-1 text-cream-100/80">
              Le numéro officiel de Kaungula Cacao est en cours de mise en ligne. Merci de votre patience.
            </p>
          </>
        )}
      </div>
    </WhatsAppNoticeContext.Provider>
  )
}
