'use client'

import { useState } from 'react'

type FormData = {
  full_name: string
  email: string
  phone: string
  organization: string
  message: string
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    full_name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  })

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')

        setForm({
          full_name: '',
          email: '',
          phone: '',
          organization: '',
          message: '',
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#C9963A]/10 border border-[#C9963A] rounded-sm p-6 text-center">
        <p className="font-serif text-xl font-bold text-[#0A1628] mb-2">
          Message Received
        </p>

        <p className="font-sans text-sm text-[#4A5568]">
          Thank you for reaching out. Dr. Miles will respond within 1–2
          business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      {/* Full Name */}
      <div>
        <label
          htmlFor="full_name"
          className="block font-sans text-xs font-semibold text-[#1A202C] mb-1.5 uppercase tracking-wide"
        >
          Full Name <span className="text-[#C9963A]">*</span>
        </label>

        <input
          id="full_name"
          name="full_name"
          type="text"
          value={form.full_name}
          onChange={handleChange}
          required
          autoComplete="name"
          className="w-full border border-[#E2E8F0] font-sans text-sm text-[#1A202C] px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#C9963A] transition-colors duration-150"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block font-sans text-xs font-semibold text-[#1A202C] mb-1.5 uppercase tracking-wide"
        >
          Email <span className="text-[#C9963A]">*</span>
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="email"
          className="w-full border border-[#E2E8F0] font-sans text-sm text-[#1A202C] px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#C9963A] transition-colors duration-150"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block font-sans text-xs font-semibold text-[#1A202C] mb-1.5 uppercase tracking-wide"
        >
          Phone
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel"
          className="w-full border border-[#E2E8F0] font-sans text-sm text-[#1A202C] px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#C9963A] transition-colors duration-150"
        />
      </div>

      {/* School / District / Organization */}
      <div>
        <label
          htmlFor="organization"
          className="block font-sans text-xs font-semibold text-[#1A202C] mb-1.5 uppercase tracking-wide"
        >
          School / District / Organization
        </label>

        <input
          id="organization"
          name="organization"
          type="text"
          value={form.organization}
          onChange={handleChange}
          autoComplete="organization"
          className="w-full border border-[#E2E8F0] font-sans text-sm text-[#1A202C] px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#C9963A] transition-colors duration-150"
        />
      </div>

      {/* How Can We Support You? */}
      <div>
        <label
          htmlFor="message"
          className="block font-sans text-xs font-semibold text-[#1A202C] mb-1.5 uppercase tracking-wide"
        >
          How Can We Support You?{' '}
          <span className="text-[#C9963A]">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border border-[#E2E8F0] font-sans text-sm text-[#1A202C] px-3 py-2.5 rounded-sm focus:outline-none focus:border-[#C9963A] transition-colors duration-150 resize-none"
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <p className="text-red-500 text-sm">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-[#C9963A] text-white font-sans text-sm font-semibold px-6 py-3 rounded-sm hover:bg-[#0A1628] transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}