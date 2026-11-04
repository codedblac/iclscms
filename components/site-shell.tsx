
'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isThankYouPage =
    pathname.replace(/\/+$/, '') === '/thank-you'

  return (
    <>
      {!isThankYouPage && <Navbar />}

      <main id="main-content">{children}</main>

      <Footer />
    </>
  )
}
