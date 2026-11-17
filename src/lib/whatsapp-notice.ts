import { createContext, useContext } from 'react'

export const WhatsAppNoticeContext = createContext({ notifyUnavailable: () => {} })

export function useWhatsAppNotice() {
  return useContext(WhatsAppNoticeContext)
}
