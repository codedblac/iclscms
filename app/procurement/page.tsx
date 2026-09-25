import Link from 'next/link'
import type { Metadata } from 'next'
import { SectionEyebrow } from '@/components/section-eyebrow'
import { Download, FileText, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Procurement & Vendor Data | In Context Learning Solutions',
  description:
    'A contract-ready partner for school districts and educational agencies. NAICS 611710, Georgia LLC compliance data, core capabilities, and downloadable corporate assets.',
  alternates: { canonical: 'https://incontextls.com/procurement' },
}

async function getProcurementPageData() {
  const query = `
    query GetProcurementPage {
      page(id: "/procurement/", idType: URI) {
        procurementpagecontent {
          procHeroEyebrow
          procHeroTitle
          procHeroDesc

          procVendorTitle
          procVendorLegal
          procVendorFocus
          procVendorNaics
          procVendorNigp
          procVendorCerts
          procVendorArea
          procVendorFounder

          procCapEyebrow
          procCapTitle
          procCapDesc
          procCap1Title
          procCap1Desc
          procCap2Title
          procCap2Desc
          procCap3Title
          procCap3Desc
          procCap4Title
          procCap4Desc

          procAssetsEyebrow
          procAssetsTitle
          procAssetsDesc

          procAsset1Tag
          procAsset1Title
          procAsset1Desc
          procAsset1Btn
          procAsset1Url

          procAsset2Tag
          procAsset2Title
          procAsset2Desc
          procAsset2Btn
          procAsset2Url

          procCtaTitle
          procCtaDesc
          procCtaBtn
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
        cache: 'no-store',
      }
    )

    const result = await res.json()

    console.log('PROCUREMENT WORDPRESS GRAPHQL RESULT:', result)

    if (!res.ok) {
      console.error('PROCUREMENT WORDPRESS HTTP ERROR:', result)
      return null
    }

    if (result.errors) {
      console.error('PROCUREMENT WORDPRESS GRAPHQL ERRORS:', result.errors)
      return null
    }

    return result?.data?.page?.procurementpagecontent ?? null
  } catch (error) {
    console.error('PROCUREMENT WORDPRESS FETCH ERROR:', error)
    return null
  }
}

export default async function ProcurementPage() {
  const wpData = await getProcurementPageData()

  const vendorData = [
    { label: 'Legal Entity Name', value: wpData?.procVendorLegal || 'In Context Learning Solutions, LLC' },
    { label: 'Core Focus', value: wpData?.procVendorFocus || 'K-12 Educational Support Services, Social Studies Curriculum Consultation, Secondary Literacy Integration.' },
    { label: 'Primary NAICS Code', value: wpData?.procVendorNaics || '611710 — Educational Support Services' },
    { label: 'NIGP Class/Item Codes', value: wpData?.procVendorNigp || 'Applicable Georgia state procurement codes' },
    { label: 'Certifications & Structure', value: wpData?.procVendorCerts || 'State-registered Georgia Limited Liability Company (LLC)' },
    { label: 'Service Area', value: wpData?.procVendorArea || 'Georgia (primary) · National (virtual & hybrid)' },
    { label: 'Founder & Principal Consultant', value: wpData?.procVendorFounder || 'Dr. Kimberly Nicole Miles, Ed.D.' },
  ]

  const coreCapabilities = [
    {
      title: wpData?.procCap1Title || 'Curriculum Realignment',
      desc: wpData?.procCap1Desc || 'Auditing secondary social studies curriculum maps to blend foundational adolescent literacy strategies with advanced historical inquiry frameworks.',
    },
    {
      title: wpData?.procCap2Title || 'Job-Embedded Coaching',
      desc: wpData?.procCap2Desc || 'Facilitating on-site PLC (Professional Learning Community) workshops that build internal teacher capacity without interrupting instructional pacing.',
    },
    {
      title: wpData?.procCap3Title || 'Assessment Development',
      desc: wpData?.procCap3Desc || 'Designing rigorous, text-dependent Depth of Knowledge (DOK) level 2 and 3 assessment items that reflect state testing demands and historical thinking skills.',
    },
    {
      title: wpData?.procCap4Title || 'Disciplinary Literacy Modules',
      desc: wpData?.procCap4Desc || 'Developing targeted primary and secondary source analysis modules that improve student evidence-based writing performance.',
    },
  ]

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] pt-32 pb-20 px-6 lg:px-8" aria-label="Procurement hero">
        <div className="max-w-4xl mx-auto">
          <SectionEyebrow className="mb-3 text-[#C9963A]">
            {wpData?.procHeroEyebrow || 'Vendor Procurement & Corporate Data'}
          </SectionEyebrow>
          <h1 className="font-serif font-bold text-white text-4xl sm:text-5xl tracking-[-0.02em] mb-4 text-balance leading-tight">
            {wpData?.procHeroTitle || 'A Contract-Ready Partner for School Districts and Educational Agencies.'}
          </h1>
          <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl">
            {wpData?.procHeroDesc || 'In Context Learning Solutions, LLC is a fully registered, compliant corporate entity equipped to streamline the procurement process for public school systems, state agencies, and grant-funded educational programs.'}
          </p>
        </div>
      </section>

      {/* VENDOR DATA & CORE CAPABILITIES */}
      <section className="bg-white py-24 px-6 lg:px-8" aria-label="Vendor information and capabilities">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Vendor Information Table */}
            <div className="lg:col-span-5 bg-[#F4F6F9] p-8 rounded-sm border border-[#E2E8F0]">
              <h2 className="font-serif font-bold text-[#0A1628] text-2xl tracking-[-0.02em] mb-6">
                {wpData?.procVendorTitle || 'Corporate Identifiers & Registrations'}
              </h2>
              <dl className="divide-y divide-[#E2E8F0]">
                {vendorData.map(({ label, value }) => (
                  <div key={label} className="py-3.5 flex flex-col gap-1">
                    <dt className="font-sans text-xs font-bold uppercase tracking-wider text-[#C9963A]">{label}</dt>
                    <dd className="font-sans text-sm text-[#1A202C]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right: Core Capabilities */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <SectionEyebrow className="mb-2">{wpData?.procCapEyebrow || 'Service Breakdown'}</SectionEyebrow>
                <h2 className="font-serif font-bold text-[#0A1628] text-3xl tracking-[-0.02em] mb-4">
                  {wpData?.procCapTitle || 'Core Capabilities'}
                </h2>
                <p className="font-sans text-base text-[#4A5568] leading-relaxed mb-6">
                  {wpData?.procCapDesc || 'Our professional service engagements are structured for seamless integration into existing district improvement grants and institutional budgets.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreCapabilities.map((item) => (
                  <div key={item.title} className="border border-[#E2E8F0] p-6 rounded-sm bg-white shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 size={16} className="text-[#C9963A] shrink-0" aria-hidden="true" />
                        <h3 className="font-serif font-bold text-[#0A1628] text-lg">{item.title}</h3>
                      </div>
                      <p className="font-sans text-sm text-[#4A5568] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DOWNLOAD DIGITAL ASSETS */}
      <section className="bg-[#F4F6F9] py-24 px-6 lg:px-8 border-t border-[#E2E8F0]" aria-label="Digital assets and downloads">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionEyebrow className="mb-3">{wpData?.procAssetsEyebrow || 'Procurement Resources'}</SectionEyebrow>
            <h2 className="font-serif font-bold text-[#0A1628] text-3xl sm:text-4xl tracking-[-0.02em] mb-4">
              {wpData?.procAssetsTitle || 'Download Digital Assets'}
            </h2>
            <p className="font-sans text-base text-[#4A5568] leading-relaxed">
              {wpData?.procAssetsDesc || 'Procurement officers, contract managers, and curriculum directors can instantly download our complete physical asset pack below to accelerate vendor onboarding.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Capability Statement Card */}
            <div className="bg-white border-2 border-[#C9963A] rounded-sm p-8 flex flex-col justify-between shadow-sm">
              <div>
                <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-[#C9963A] mb-3 block">
                  {wpData?.procAsset1Tag || 'Official Document'}
                </span>
                <h3 className="font-serif font-bold text-[#0A1628] text-xl tracking-[-0.02em] mb-3">
                  {wpData?.procAsset1Title || 'Full Capability Statement (PDF)'}
                </h3>
                <p className="font-sans text-sm text-[#4A5568] leading-relaxed mb-6">
                  {wpData?.procAsset1Desc || 'Comprehensive overview of ICLS core competencies, past performance indicators, NAICS alignments, and consulting frameworks designed for RFQ and grant responses.'}
                </p>
              </div>
              <a
                href={wpData?.procAsset1Url || '/ICLS_Capability_Statement_Branded.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center bg-[#C9963A] text-white font-sans font-semibold text-sm px-5 py-3.5 rounded-sm hover:bg-[#0A1628] transition-colors duration-150"
                aria-label="Open Full Capability Statement PDF in a new tab"
              >
                <Download size={16} aria-hidden="true" />
                {wpData?.procAsset1Btn || 'Download Capability Statement (PDF)'}
              </a>
            </div>

            {/* Corporate Vendor Profile Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-sm p-8 flex flex-col justify-between shadow-sm">
              <div>
                <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-[#C9963A] mb-3 block">
                  {wpData?.procAsset2Tag || 'Onboarding Profile'}
                </span>
                <h3 className="font-serif font-bold text-[#0A1628] text-xl tracking-[-0.02em] mb-3">
                  {wpData?.procAsset2Title || 'Corporate Vendor Profile'}
                </h3>
                <p className="font-sans text-sm text-[#4A5568] leading-relaxed mb-6">
                  {wpData?.procAsset2Desc || 'Detailed packet including company background, W-9 metadata summary, insurance clearances, and standard educational service agreement parameters.'}
                </p>
              </div>
              <a
                href={wpData?.procAsset2Url || '/ICLS_Corporate_Vendor_Profile_Branded.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center bg-[#0A1628] text-white font-sans font-semibold text-sm px-5 py-3.5 rounded-sm hover:bg-[#C9963A] transition-colors duration-150"
                aria-label="Open Corporate Vendor Profile PDF in a new tab"
              >
                <FileText size={16} aria-hidden="true" />
                {wpData?.procAsset2Btn || 'Download Corporate Vendor Profile (PDF)'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-white py-24 px-6 lg:px-8 text-center" aria-label="Procurement contact CTA">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif font-bold text-[#0A1628] text-3xl sm:text-4xl tracking-[-0.02em] mb-4">
            {wpData?.procCtaTitle || 'Ready to Clear ICLS as an Approved Vendor?'}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4A5568] leading-relaxed mb-8">
            {wpData?.procCtaDesc || 'Our onboarding process is straightforward. Contact us with your district’s specific vendor registration requirements or custom contract paperwork.'}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9963A] text-white font-sans font-semibold text-sm px-8 py-4 rounded-sm hover:bg-[#0A1628] transition-colors duration-150"
          >
            {wpData?.procCtaBtn || 'Contact the Procurement Team'}
          </Link>
        </div>
      </section>
    </>
  )
}