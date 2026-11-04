'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from '@/components/navbar'

export function ConditionalNavbar() {
  const pathname = usePathname()

  if (pathname === '/thank-you') {
    return null
  }

  return <Navbar />
}