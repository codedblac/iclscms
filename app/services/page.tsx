import Link from 'next/link'
import type { Metadata } from 'next'
import { SectionEyebrow } from '@/components/section-eyebrow'
import { CheckCircle, BookOpen, PenTool } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services | In Context Learning Solutions',
  description:
    'Scalable, High-Impact Professional Learning. Explore our instructional consulting tiers, academic editing services, and picture book editing.',
  alternates: { canonical: 'https://incontextls.com/services' },
}

function getImgUrl(val: any, fallback: string): string {
  if (typeof val === 'string' && val.trim() !== '') return val
  if (val?.node?.sourceUrl) return val.node.sourceUrl
  if (val?.sourceUrl) return val.sourceUrl
  return fallback
}

async function getServicesPageData() {
  const query = `
    query GetServicesPage {
      page(id: "/services/", idType: URI) {
        servicespagecontent {
          srvHeroEyebrow
          srvHeroTitle
          srvHeroDesc
          srvHeroBtn

          srvPillarsEyebrow
          srvPillarsTitle
          srvPillarsDesc
          srvPillar1Tag
          srvPillar1Title
          srvPillar1Sub
          srvPillar1Desc
          srvPillar2Tag
          srvPillar2Title
          srvPillar2Sub
          srvPillar2Desc

          srvConsEyebrow
          srvConsTitle

          srvCt1Tag
          srvCt1Title
          srvCt1Best
          srvCt1Desc

          srvCt2Tag
          srvCt2Title
          srvCt2Best
          srvCt2Desc

          srvCt3Tag
          srvCt3Title
          srvCt3Best
          srvCt3Desc

          srvEditEyebrow
          srvEditTitle
          srvEditP1
          srvEditP2

          srvEditImage {
            node {
              sourceUrl
            }
          }

          srvEt1Tag
          srvEt1Title
          srvEt1Best
          srvEt1Desc

          srvEt2Tag
          srvEt2Title
          srvEt2Best
          srvEt2Desc

          srvEt3Tag
          srvEt3Title
          srvEt3Best
          srvEt3Desc

          srvWe1Title
          srvWe1Desc
          srvWe2Title
          srvWe2Desc
          srvWe3Title
          srvWe3Desc
          srvWe4Title
          srvWe4Desc

          srvPbEyebrow
          srvPbTitle
          srvPbP1
          srvPbP2

          srvPbImage {
            node {
              sourceUrl
            }
          }

          srvPbt1Tag
          srvPbt1Title
          srvPbt1Best
          srvPbt1Desc

          srvPbt2Tag
          srvPbt2Title
          srvPbt2Best
          srvPbt2Desc

          srvEl1Bold
          srvEl1Text
          srvEl2Bold
          srvEl2Text
          srvEl3Bold
          srvEl3Text

          srvCtaTitle
          srvCtaDesc
          srvCtaBtn1
          srvCtaBtn2
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

    console.log('SERVICES WORDPRESS GRAPHQL RESULT:', result)

    if (!res.ok) {
      console.error('SERVICES WORDPRESS HTTP ERROR:', result)
      return null
    }

    if (result.errors) {
      console.error('SERVICES WORDPRESS GRAPHQL ERRORS:', result.errors)
      return null
    }

    return result?.data?.page?.servicespagecontent ?? null
  } catch (error) {
    console.error('SERVICES WORDPRESS FETCH ERROR:', error)
    return null
  }
}

export default async function ServicesPage() {
  const wpData = await getServicesPageData()

  // Arrays populated from WP Data or Fallbacks
  const consultingTiers = [
    {
      tag: wpData?.srvCt1Tag || 'Workshops',
      title: wpData?.srvCt1Title || 'Foundational PD Workshops',
      bestFor: wpData?.srvCt1Best || 'Districts seeking a high-impact, immediate catalyst to shift their school culture.',
      desc: wpData?.srvCt1Desc || 'Dynamic single-day or half-day interactive workshops designed for school site or district-wide professional learning days. We unpack the tactical difference between adolescent and disciplinary literacy, providing teachers with a bank of "Monday-ready" inquiry routines.',
      highlight: false,
    },
    {
      tag: wpData?.srvCt2Tag || 'Coaching',
      title: wpData?.srvCt2Title || 'Collaborative Coaching Cohorts',
      bestFor: wpData?.srvCt2Best || 'Departments committed to transforming text instruction into long-term student achievement.',
      desc: wpData?.srvCt2Desc || 'Our premier delivery model. We embed directly into your school building, joining teachers during their regular collaborative planning times. Together, we analyze student data, co-design rigorous lesson plans, model strategies in real classrooms, and provide immediate feedback. This ensures teachers feel deeply seen, heard, and understood.',
      highlight: true,
    },
    {
      tag: wpData?.srvCt3Tag || 'Partnerships',
      title: wpData?.srvCt3Title || 'Strategic District Partnerships & Rigor Audits',
      bestFor: wpData?.srvCt3Best || 'District leaders looking for long-term systemic alignment.',
      desc: wpData?.srvCt3Desc || 'A comprehensive, year-long partnership. We conduct thorough curriculum audits to identify structural literacy gaps, align your district pacing guides with advanced disciplinary inquiry standards, and train building-level instructional coaches to sustain the growth long after our engagement concludes.',
      highlight: false,
    },
  ]

  const academicEditingTiers = [
    {
      tag: wpData?.srvEt1Tag || 'Tier 1',
      title: wpData?.srvEt1Title || 'Developmental & Pedagogical Editing',
      bestFor: wpData?.srvEt1Best || 'Rough drafts, early manuscripts, or curriculum designs that need structural alignment.',
      desc: wpData?.srvEt1Desc || 'We look at the "big picture" of your book. We evaluate chapter flow, the logical progression of your arguments, and the alignment of your pedagogical frameworks. For social studies and literacy texts, we ensure the crucial distinction between foundational adolescent literacy support and advanced disciplinary literacy inquiry is maintained with absolute precision.',
    },
    {
      tag: wpData?.srvEt2Tag || 'Tier 2',
      title: wpData?.srvEt2Title || 'Content & Copy Editing (Line Editing)',
      bestFor: wpData?.srvEt2Best || 'Completed drafts that require fine-tuning for clarity, academic tone, and reading engagement.',
      desc: wpData?.srvEt2Desc || 'We dive deep into the sentence level. We eliminate academic fluff, clarify dense educational jargon, and improve overall readability while preserving your unique professional voice. We ensure your tone resonates perfectly with school administrators, university peers, or classroom teachers.',
    },
    {
      tag: wpData?.srvEt3Tag || 'Tier 3',
      title: wpData?.srvEt3Title || 'Academic Formatting & Citation Compliance',
      bestFor: wpData?.srvEt3Best || 'Manuscripts preparing for submission to peer-reviewed journals, university presses, or district procurement boards.',
      desc: wpData?.srvEt3Desc || 'We handle the meticulous details of academic formatting. We ensure absolute adherence to formatting styles (APA, Chicago Manual of Style, etc.), clean up bibliography entries, format text callout boxes, and verify that all curriculum standards referenced are properly cited.',
    },
  ]

  const whatWeEdit = [
    { title: wpData?.srvWe1Title || 'Educational Non-Fiction Books', desc: wpData?.srvWe1Desc || 'Professional development manuals, instructional leadership books, and teacher guidebooks.' },
    { title: wpData?.srvWe2Title || 'Curriculum Materials & Textbooks', desc: wpData?.srvWe2Desc || 'Grade-level history programs, secondary text sets, and instructional frameworks.' },
    { title: wpData?.srvWe3Title || 'Peer-Reviewed Journal Articles', desc: wpData?.srvWe3Desc || 'Articles aiming for publication in state, regional, or national social studies and literacy journals.' },
    { title: wpData?.srvWe4Title || 'White Papers & Capability Statements', desc: wpData?.srvWe4Desc || 'Authoritative industry papers designed to secure large district-level or state-level educational contracts.' },
  ]

  const pictureBookTiers = [
    {
      tag: wpData?.srvPbt1Tag || 'Early Stage',
      title: wpData?.srvPbt1Title || 'The Picture Book Manuscript Critique',
      bestFor: wpData?.srvPbt1Best || 'Completed raw drafts needing an expert eye on the overarching concept before moving to layout.',
      desc: wpData?.srvPbt1Desc || 'We evaluate the core theme, character arc, emotional resonance, and commercial viability of your story. We look closely at your target age demographic (e.g., ages 3–5 vs. 6–8) to ensure the concept and themes match their developmental level.',
    },
    {
      tag: wpData?.srvPbt2Tag || 'Line Stage',
      title: wpData?.srvPbt2Title || 'Pacing, Rhythm, & Pagination Editing',
      bestFor: wpData?.srvPbt2Best || 'Drafts ready to be mapped out into standard publishing layouts (typically the traditional 32-page picture book format).',
      desc: wpData?.srvPbt2Desc || 'We refine word choice, eliminate unnecessary exposition, and optimize the meter and rhyme (if applicable) for read-aloud appeal. Crucially, we provide concrete "Illustrator Notes" and map out the exact page turns to build tension, humor, or emotional impact from page to page.',
    },
  ]

  const earlyLiteracy = [
    { bold: wpData?.srvEl1Bold || 'Historical Fiction & Biographical Picture Books:', text: wpData?.srvEl1Text || 'Transforming complex historical events or figures into accessible, inspiring narratives for primary elementary students.' },
    { bold: wpData?.srvEl2Bold || 'Multicultural & Inclusive Stories:', text: wpData?.srvEl2Text || 'Ensuring authentic representation, rich cultural context, and diverse perspectives are seamlessly woven into early childhood literature.' },
    { bold: wpData?.srvEl3Bold || 'Social-Emotional Learning (SEL) Books:', text: wpData?.srvEl3Text || 'Crafting character-driven stories that help early learners navigate emotions, community, and relationships.' },
  ]

  const editImgSrc = getImgUrl(wpData?.srvEditImage, '/readers.jpeg')
  const pbImgSrc = getImgUrl(wpData?.srvPbImage, '/editing.jpeg')

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] pt-32 pb-20 px-6 lg:px-8" aria-label="Services hero">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <SectionEyebrow className="mb-3 text-[#C9963A]">
            {wpData?.srvHeroEyebrow || 'Our Core Themes & Service Delivery Tiers'}
          </SectionEyebrow>
          <h1 className="font-serif font-bold text-white text-4xl sm:text-5xl tracking-[-0.02em] mb-6 text-balance leading-tight">
            {wpData?.srvHeroTitle || 'Scalable, High-Impact Professional Learning Built for Sustained Growth.'}
          </h1>
          <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
            {wpData?.srvHeroDesc || 'We do not believe in generic, one-size-fits-all reading mandates. Our service framework is divided into two precise instructional pillars to help departments target the exact needs of their students.'}
          </p>
          <div>
            <Link
              href="#cta-section"
              className="inline-block bg-[#C9963A] text-white font-sans font-semibold text-sm px-8 py-4 rounded-sm hover:bg-white hover:text-[#0A1628] transition-colors duration-150"
            >
              {wpData?.srvHeroBtn || 'Book a Strategy Audit'}
            </Link>
          </div>
        </div>
      </section>

      {/* TWO PILLARS - WHITE BACKGROUND WITH CARDS */}
      <section className="bg-white py-24 px-6 lg:px-8" aria-label="The Two Pillars of Our Framework">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow className="mb-3">{wpData?.srvPillarsEyebrow || 'Our Core Instructional Framework'}</SectionEyebrow>
            <h2 className="font-serif font-bold text-[#0A1628] text-3xl sm:text-4xl tracking-[-0.02em] mb-4">
              {wpData?.srvPillarsTitle || 'Two Pillars. One Mission.'}
            </h2>
            <p className="font-sans text-base text-[#4A5568] leading-relaxed">
              {wpData?.srvPillarsDesc || 'Our service framework is divided into two precise instructional pillars — helping departments target the exact needs of their students and teachers.'}
            </p>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 Card */}
            <div className="bg-[#F4F6F9] border border-[#E2E8F0] p-10 lg:p-12 rounded-sm shadow-sm flex flex-col justify-between transition-shadow duration-300 hover:shadow-md">
              <div>
                <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-[#C9963A] mb-3 block">
                  {wpData?.srvPillar1Tag || 'Pillar 1'}
                </span>
                <h3 className="font-serif font-bold text-[#0A1628] text-2xl lg:text-3xl tracking-[-0.02em] mb-4">
                  {wpData?.srvPillar1Title || 'Adolescent Literacy Foundations'} <span className="text-[#4A5568] block mt-1 text-xl font-normal">{wpData?.srvPillar1Sub || '(The Access Tier)'}</span>
                </h3>
                <p className="font-sans text-base text-[#4A5568] leading-relaxed">
                  {wpData?.srvPillar1Desc || 'We equip middle and high school teachers with actionable, low-prep reading, writing, and comprehension strategies. These foundational tools ensure that struggling readers can successfully decode, process, and extract basic information from dense secondary textbooks and complex informational texts.'}
                </p>
              </div>
            </div>

            {/* Pillar 2 Card */}
            <div className="bg-[#0A1628] border border-[#0A1628] p-10 lg:p-12 rounded-sm shadow-sm flex flex-col justify-between transition-shadow duration-300 hover:shadow-md">
              <div>
                <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-[#C9963A] mb-3 block">
                  {wpData?.srvPillar2Tag || 'Pillar 2'}
                </span>
                <h3 className="font-serif font-bold text-white text-2xl lg:text-3xl tracking-[-0.02em] mb-4">
                  {wpData?.srvPillar2Title || 'Disciplinary Literacy Specialization'} <span className="text-white/60 block mt-1 text-xl font-normal">{wpData?.srvPillar2Sub || '(The Inquiry Tier)'}</span>
                </h3>
                <p className="font-sans text-base text-white/80 leading-relaxed">
                  {wpData?.srvPillar2Desc || 'We move students beyond basic comprehension and train them to read, write, and think like true historians. Teachers learn how to build advanced inquiry units focused on the core habits of the discipline: sourcing documents, analyzing historical context, identifying institutional bias, and corroborating conflicting evidence.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE TIERS (Consulting) */}
      <section className="bg-[#F4F6F9] py-24 px-6 lg:px-8 border-t border-[#E2E8F0]" aria-label="Our Service Tiers">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionEyebrow className="mb-3">{wpData?.srvConsEyebrow || 'How We Work Together'}</SectionEyebrow>
            <h2 className="font-serif font-bold text-[#0A1628] text-3xl sm:text-4xl tracking-[-0.02em]">
              {wpData?.srvConsTitle || 'Our Service Tiers'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {consultingTiers.map((tier) => (
              <div
                key={tier.title}
                className={`rounded-sm flex flex-col p-8 gap-5 ${
                  tier.highlight
                    ? 'border-2 border-[#C9963A] shadow-[0_4px_20px_rgba(201,150,58,0.15)] bg-white relative top-[-10px]'
                    : 'border border-[#E2E8F0] shadow-[0_1px_4px_rgba(0,0,0,0.08)] bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#C9963A]">
                    {tier.tag}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-[#0A1628] text-2xl tracking-[-0.02em]">
                  {tier.title}
                </h3>
                
                <div className="flex flex-col gap-4 flex-1">
                  <div className="bg-[#F4F6F9] p-4 rounded-sm border border-[#E2E8F0]">
                    <span className="font-sans text-xs font-bold text-[#0A1628] uppercase tracking-wider block mb-1">
                      Best For:
                    </span>
                    <span className="font-sans text-sm text-[#4A5568] leading-snug">
                      {tier.bestFor}
                    </span>
                  </div>
                  <div>
                    <span className="font-sans text-xs font-bold text-[#0A1628] uppercase tracking-wider block mb-1">
                      What It Is:
                    </span>
                    <p className="font-sans text-sm text-[#4A5568] leading-relaxed">
                      {tier.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIC EDITING SECTION */}
      <section className="bg-white py-24 px-6 lg:px-8 border-t border-[#E2E8F0]" aria-label="Academic Editing Services">
        <div className="max-w-7xl mx-auto">
          {/* Header Split with Image */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center mb-16">
            <div className="md:col-span-3">
              <SectionEyebrow className="mb-3 flex items-center gap-2">
                <PenTool size={16} /> {wpData?.srvEditEyebrow || 'Editing Services'}
              </SectionEyebrow>
              <h2 className="font-serif font-bold text-[#0A1628] text-3xl sm:text-4xl tracking-[-0.02em] mb-4">
                {wpData?.srvEditTitle || 'Elevating Academic Voices: Authoritative Editing for Educational Texts'}
              </h2>
              <p className="font-sans text-base text-[#4A5568] leading-relaxed mb-4">
                {wpData?.srvEditP1 || 'Transforming complex educational research, pedagogy, and curriculum into polished, publishable manuscripts.'}
              </p>
              <p className="font-sans text-base text-[#4A5568] leading-relaxed">
                {wpData?.srvEditP2 || 'Writing an educational textbook, a peer-reviewed journal article, or a curriculum framework requires balancing dense academic research with engaging, readable prose. At In Context Learning Solutions, we provide premium, specialized developmental and copy editing services specifically tailored for academic authors, curriculum developers, independent education consultants, and publishers. We ensure your manuscript is instructionally sound, structurally rigorous, and ready for publication.'}
              </p>
            </div>
            <div className="md:col-span-2">
              <div
                className="relative w-full border-2 border-[#C9963A] rounded-sm overflow-hidden bg-[#F4F6F9] shadow-md"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={editImgSrc}
                  alt="Authoritative Editing for Educational Texts"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {academicEditingTiers.map((tier) => (
              <div key={tier.tag} className="bg-[#F4F6F9] border border-[#E2E8F0] p-8 rounded-sm shadow-sm flex flex-col">
                <span className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#C9963A] mb-3">
                  {tier.tag}
                </span>
                <h3 className="font-serif font-bold text-[#0A1628] text-xl tracking-[-0.02em] mb-5">
                  {tier.title}
                </h3>
                <div className="flex flex-col gap-4 flex-1">
                  <div>
                    <span className="font-sans text-xs font-bold text-[#0A1628] uppercase tracking-wider block mb-1">
                      Best For:
                    </span>
                    <p className="font-sans text-sm text-[#4A5568] leading-snug">
                      {tier.bestFor}
                    </p>
                  </div>
                  <div>
                    <span className="font-sans text-xs font-bold text-[#0A1628] uppercase tracking-wider block mb-1">
                      What We Do:
                    </span>
                    <p className="font-sans text-sm text-[#4A5568] leading-relaxed">
                      {tier.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* What We Edit List */}
          <div className="bg-[#0A1628] p-8 md:p-12 rounded-sm text-white">
            <h3 className="font-serif font-bold text-2xl mb-8">What We Edit</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whatWeEdit.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <BookOpen className="text-[#C9963A] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold font-sans text-lg mb-1">{item.title}</h4>
                    <p className="font-sans text-white/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHILDREN'S LITERATURE SECTION */}
      <section className="bg-[#F4F6F9] py-24 px-6 lg:px-8 border-t border-[#E2E8F0]" aria-label="Children's Literature Editing">
        <div className="max-w-7xl mx-auto">
          {/* Header Split with Image */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center mb-12">
            <div className="md:col-span-3">
              <SectionEyebrow className="mb-3">{wpData?.srvPbEyebrow || "Children's Literature & Picture Books"}</SectionEyebrow>
              <h2 className="font-serif font-bold text-[#0A1628] text-3xl sm:text-4xl tracking-[-0.02em] mb-4">
                {wpData?.srvPbTitle || 'Crafting Impactful Stories for Young Readers'}
              </h2>
              <p className="font-sans text-base text-[#4A5568] leading-relaxed mb-4">
                {wpData?.srvPbP1 || 'Writing a picture book requires an entirely unique set of rules. Every single word must earn its place on the page, the rhythm must feel effortless when read aloud, and the text must leave perfect structural room for the illustrator to bring the story to life.'}
              </p>
              <p className="font-sans text-base text-[#4A5568] leading-relaxed">
                {wpData?.srvPbP2 || 'Whether you are writing a historical narrative, a multicultural story, or an early childhood concept book, we help you refine your manuscript to captivate young minds, engage parents, and align with early literacy standards.'}
              </p>
            </div>
            <div className="md:col-span-2">
              <div
                className="relative w-full border-2 border-[#C9963A] rounded-sm overflow-hidden bg-white shadow-md"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={pbImgSrc}
                  alt="Crafting Impactful Picture Books for Young Readers"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* Picture Book Tiers */}
          <h3 className="font-serif font-bold text-[#0A1628] text-2xl mb-8">Specialized Picture Book Editing Tiers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {pictureBookTiers.map((tier) => (
              <div key={tier.tag} className="border-l-4 border-[#C9963A] pl-6 py-2 bg-white p-6 rounded-r-sm shadow-sm">
                <h4 className="font-serif font-bold text-[#0A1628] text-xl tracking-[-0.02em] mb-3">
                  {tier.title}
                </h4>
                <div className="mb-3">
                  <span className="font-sans text-xs font-bold text-[#0A1628] uppercase tracking-wider block mb-1">
                    Best For:
                  </span>
                  <p className="font-sans text-sm text-[#4A5568] leading-snug">
                    {tier.bestFor}
                  </p>
                </div>
                <div>
                  <span className="font-sans text-xs font-bold text-[#0A1628] uppercase tracking-wider block mb-1">
                    What We Do:
                  </span>
                  <p className="font-sans text-sm text-[#4A5568] leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* What We Edit in Early Literacy */}
          <div className="bg-white rounded-sm p-8 md:p-12 border border-[#E2E8F0] shadow-sm">
            <h3 className="font-serif font-bold text-[#0A1628] text-2xl mb-6">What We Edit in Early Literacy</h3>
            <ul className="space-y-4">
              {earlyLiteracy.map((item) => (
                <li key={item.bold} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#C9963A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="font-sans text-base text-[#1A202C]">
                    <strong className="text-[#0A1628]">{item.bold} </strong> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section id="cta-section" className="bg-[#0A1628] py-20 px-6 lg:px-8 text-center scroll-mt-20" aria-label="Call to action">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif font-bold text-white text-3xl sm:text-4xl tracking-[-0.02em] mb-6">
            {wpData?.srvCtaTitle || 'Ready to Bring Your Story to Life?'}
          </h2>
          <p className="font-sans text-white/80 text-base leading-relaxed mb-10">
            {wpData?.srvCtaDesc || 'Let’s ensure your manuscript, curriculum framework, or picture book is tight, rhythmic, and perfectly aligned for its intended audience.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[#C9963A] text-white font-sans font-semibold text-sm px-8 py-4 rounded-sm hover:bg-white hover:text-[#0A1628] transition-colors duration-150 w-full sm:w-auto"
            >
              {wpData?.srvCtaBtn1 || 'Submit Your Draft for Review'}
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent border border-white/30 text-white font-sans font-semibold text-sm px-8 py-4 rounded-sm hover:bg-white/10 transition-colors duration-150 w-full sm:w-auto"
            >
              {wpData?.srvCtaBtn2 || 'Book a Strategy Audit'}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}