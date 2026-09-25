import type { Metadata } from 'next'
import { SectionEyebrow } from '@/components/section-eyebrow'
import { ContactForm } from '@/components/contact-form'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | In Context Learning Solutions',
  description:
    "Start turning your district's literacy mandates into classroom movements. Book a strategy audit or send an inquiry for consulting and professional development.",
  alternates: { canonical: 'https://incontextlearningsolutions.com/contact' },
}

async function getContactPageData() {
  const query = `
    query GetContactPage {
      page(id: "/contact/", idType: URI) {
        contactpagecontent {
          cntHeroEyebrow
          cntHeroTitle
          cntHeroDesc

          cntFormTitle
          cntFormDesc

          cntSbTitle1
          cntSbName
          cntSbRoles
          cntSbTitle2
          cntSbEmail
          cntSbLinkedinUrl
          cntSbLinkedinLabel
        }
      }
    }
  `

  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
        'https://1276612.us31.myftpupload.com/?graphql=true',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 3600 },
      }
    )

    const result = await res.json()

    console.log('CONTACT WORDPRESS GRAPHQL RESULT:', result)

    if (!res.ok) {
      console.error('CONTACT WORDPRESS HTTP ERROR:', result)
      return null
    }

    if (result.errors) {
      console.error('CONTACT WORDPRESS GRAPHQL ERRORS:', result.errors)
      return null
    }

    return result?.data?.page?.contactpagecontent ?? null
  } catch (error) {
    console.error('CONTACT WORDPRESS FETCH ERROR:', error)
    return null
  }
}

export default async function ContactPage() {
  const wpData = await getContactPageData()

  const rawRoles = wpData?.cntSbRoles || 'Professional Learning Specialist, Curriculum Specialist, Editor'
  const roles = rawRoles.split(',').map((role: string) => role.trim())

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-[#0A1628] pt-32 pb-16 px-6 lg:px-8" aria-label="Contact hero">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <SectionEyebrow className="mb-3 text-[#C9963A]">
            {wpData?.cntHeroEyebrow || 'Let’s Collaborate'}
          </SectionEyebrow>
          <h1 className="font-serif font-bold text-white text-4xl sm:text-5xl tracking-[-0.02em] mb-6 text-balance leading-tight">
            {wpData?.cntHeroTitle || 'Start Turning Your District’s Literacy Mandates into Classroom Movements.'}
          </h1>
          <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl">
            {wpData?.cntHeroDesc || 'Whether you are a district curriculum director planning your next professional learning day, a principal looking to inject rigor into your social studies department, or a team lead seeking embedded coaching support, let’s connect.'}
          </p>
        </div>
      </section>

      {/* TWO-COLUMN LAYOUT: SCHEDULING/FORM + SIDEBAR */}
      <section className="bg-white py-20 px-6 lg:px-8" aria-label="Contact form and scheduling">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* MAIN CONTENT AREA (Form) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-16">
            <div>
              <h2 className="font-serif font-bold text-[#0A1628] text-2xl tracking-[-0.02em] mb-4">
                {wpData?.cntFormTitle || 'Send an Inquiry'}
              </h2>
              <p className="font-sans text-base text-[#4A5568] leading-relaxed mb-8 max-w-2xl">
                {wpData?.cntFormDesc || 'Have a specific question about our service tiers, standard contract rates, or the availability of custom workshops? Fill out the secure form below, and our team will respond within 24 business hours.'}
              </p>
              
              {/* Client-side form component */}
              <ContactForm />
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-[#F4F6F9] p-8 rounded-sm border border-[#E2E8F0] sticky top-24">
              <h3 className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-[#C9963A] mb-5">
                {wpData?.cntSbTitle1 || 'How Can We Help Your Team?'}
              </h3>
              
              <div className="mb-8">
                <h4 className="font-serif font-bold text-[#0A1628] text-xl mb-1">
                  {wpData?.cntSbName || 'Dr. Kimberly Miles'}
                </h4>
                <div className="font-sans text-sm text-[#4A5568] leading-relaxed">
                  {roles.map((role: string) => (
                    <p key={role}>{role}</p>
                  ))}
                </div>
              </div>

              <hr className="border-[#E2E8F0] mb-8" />

              <h3 className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-[#C9963A] mb-5">
                {wpData?.cntSbTitle2 || 'Direct Contact Channels'}
              </h3>
              
              <div className="flex flex-col gap-5">
                {/* Email Link */}
                <a
                  href={`mailto:${wpData?.cntSbEmail || 'info@incontextlearningsolutions.com'}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="bg-white border border-[#E2E8F0] p-2 rounded-sm group-hover:border-[#C9963A] transition-colors">
                    <Mail size={16} className="text-[#C9963A]" aria-hidden="true" />
                  </div>
                  <span className="font-sans text-sm font-medium text-[#1A202C] group-hover:text-[#C9963A] transition-colors">
                    {wpData?.cntSbEmail || 'info@incontextlearningsolutions.com'}
                  </span>
                </a>

                {/* LinkedIn Link */}
                <a
                  href={wpData?.cntSbLinkedinUrl || 'https://www.linkedin.com/in/kmilesbsedmed'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="bg-white border border-[#E2E8F0] p-2 rounded-sm group-hover:border-[#C9963A] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#0A1628] group-hover:text-[#C9963A] transition-colors" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </div>
                  <span className="font-sans text-sm font-medium text-[#1A202C] group-hover:text-[#C9963A] transition-colors">
                    {wpData?.cntSbLinkedinLabel || 'Connect on LinkedIn'}
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}