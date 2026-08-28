'use client'

import { usePathname } from 'next/navigation'

export function Footer() {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')

  if (isAdmin) return null

  return (
    <footer className="bg-[#0A1628] text-white" aria-label="Site footer">
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="font-sans text-xs text-white/40 text-center sm:text-left">
            © 2026 In Context Learning Solutions, LLC
            <span className="mx-2">|</span>
            All Rights Reserved
            <span className="mx-2">|</span>

            <a
              href="/ICLS_Privacy_Policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Open ICLS Privacy Policy in a new tab"
            >
              Privacy Policy
            </a>
          </p>

          <div className="text-xs text-white/40 font-sans text-center sm:text-right">
            NAICS Code: 611710 — Educational Support Services
          </div>

        </div>
      </div>
    </footer>
  )
}