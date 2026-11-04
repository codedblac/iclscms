'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export function SiteChrome() {
  const pathname = usePathname()

  return (
    <>
      {pathname !== '/thank-you' && <Navbar />}
      <Footer />
    </>
  )
}