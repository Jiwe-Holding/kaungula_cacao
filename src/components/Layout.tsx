import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { FloatingWhatsApp } from './WhatsApp'
import { WhatsAppNoticeProvider } from './WhatsAppNotice'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
      return () => window.clearTimeout(id)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export function Layout() {
  return (
    <WhatsAppNoticeProvider>
      <ScrollManager />
      <Header />
      <main id="contenu">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </WhatsAppNoticeProvider>
  )
}
