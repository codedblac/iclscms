'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/procurement', label: 'Procurement' },
  // { href: '/blog', label: 'Blog' },
  // { href: '/articles', label: 'Articles' },
  { href: '/contact', label: 'Contact' },
]

const CALENDLY_URL =
  'https://calendly.com/incontextlearningsolutions-info/strategy-audit'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    // Set initial scroll state
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent page scrolling while mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isAdmin = pathname.startsWith('/admin')

  if (isAdmin) return null

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_1px_8px_rgba(0,0,0,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* =========================================================
            LOGO
            Actual logo ratio: 2048 × 449
            The aspect-ratio container prevents distortion/warnings.
        ========================================================== */}
        <Link
          href="/"
          className="relative flex w-[190px] shrink-0 items-center sm:w-[220px] lg:w-[250px]"
          aria-label="In Context Learning Solutions — Home"
        >
          <div
            className="relative w-full"
            style={{ aspectRatio: '2048 / 449' }}
          >
            {/* Light logo — visible before scrolling */}
            <Image
              src="/wkim.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 250px, (min-width: 640px) 220px, 190px"
              className={`object-contain object-left transition-opacity duration-300 ${
                scrolled ? 'opacity-0' : 'opacity-100'
              }`}
              aria-hidden="true"
            />

            {/* Dark logo — visible after scrolling */}
            <Image
              src="/bkim.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 250px, (min-width: 640px) 220px, 190px"
              className={`object-contain object-left transition-opacity duration-300 ${
                scrolled ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden="true"
            />
          </div>
        </Link>

        {/* =========================================================
            DESKTOP NAVIGATION
        ========================================================== */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-150 ${
                  isActive
                    ? 'text-[#C9963A]'
                    : scrolled
                      ? 'text-[#1A202C] hover:text-[#C9963A]'
                      : 'text-white/90 hover:text-[#C9963A]'
                }`}
              >
                {link.label}

                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#C9963A]" />
                )}
              </Link>
            )
          })}

          {/* Desktop Calendly Button */}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 whitespace-nowrap rounded-sm bg-[#C9963A] px-5 py-2.5 font-sans text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#F0C97A] hover:text-[#0A1628]"
          >
            Book a Strategy Audit
          </a>
        </div>

        {/* =========================================================
            MOBILE MENU BUTTON
        ========================================================== */}
        <button
          type="button"
          className={`rounded-sm p-2 transition-colors duration-150 lg:hidden ${
            scrolled
              ? 'text-[#0A1628] hover:bg-[#0A1628]/5'
              : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* =========================================================
          MOBILE MENU
      ========================================================== */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-[#0A1628] transition-all duration-300 lg:hidden ${
          mobileOpen
            ? 'max-h-[calc(100vh-5rem)] opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-6 py-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-b border-white/10 py-3 font-sans text-base font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-[#C9963A]'
                      : 'text-white hover:text-[#C9963A]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Mobile Calendly Button */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-sm bg-[#C9963A] px-5 py-3 text-center font-sans text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#F0C97A] hover:text-[#0A1628]"
            >
              Book a Strategy Audit
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}