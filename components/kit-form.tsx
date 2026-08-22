'use client'

import { useEffect, useRef } from 'react'

export function KitForm() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const existingScript = containerRef.current.querySelector(
      'script[data-uid="68e8f9615a"]'
    )

    if (existingScript) return

    const script = document.createElement('script')

    script.async = true
    script.dataset.uid = '68e8f9615a'
    script.src =
      'https://in-context-learning-solutions-llc.kit.com/68e8f9615a/index.js'

    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full"
      aria-label="Contextual Shift Guide signup form"
    />
  )
}