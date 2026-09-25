import Link from 'next/link'
import type { Metadata } from 'next'
import { SectionEyebrow } from '@/components/section-eyebrow'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Dr. Kimberly Miles | In Context Learning Solutions',
  description:
    'Learn about Dr. Kimberly Nicole Miles, Ed.D. — founder of ICLS with 20+ years of experience in secondary education, disciplinary literacy, and Social Studies instructional consulting.',
  alternates: { canonical: 'https://incontextls.com/about' },
}

function getImgUrl(val: any, fallback: string): string {
  if (typeof val === 'string' && val.trim() !== '') return val
  if (val?.node?.sourceUrl) return val.node.sourceUrl
  if (val?.sourceUrl) return val.sourceUrl
  return fallback
}

async function getAboutPageData() {
  const query = `
    query GetAboutPage {
      page(id: "/about/", idType: URI) {
        aboutpagecontent {
          aboutHeroEyebrow
          aboutHeroTitle

          aboutLegacyImage {
            node {
              sourceUrl
            }
          }

          aboutLegacyTitle
          aboutLegacyP1
          aboutLegacyP2

          aboutCredTitle
          aboutCredDesc
          aboutCred1Bold
          aboutCred1Text
          aboutCred2Bold
          aboutCred2Text
          aboutCred3Bold
          aboutCred3Text

          aboutCredImage {
            node {
              sourceUrl
            }
          }

          aboutPubEyebrow
          aboutPubTitle
          aboutPubIntro

          aboutPub1Tag
          aboutPub1Title
          aboutPub1Source
          aboutPub1Desc
          aboutPub1LinkText
          aboutPub1LinkUrl

          aboutPub2Tag
          aboutPub2Title
          aboutPub2Source
          aboutPub2Desc

          aboutPromiseEyebrow
          aboutPromiseTitle
          aboutPromiseDesc
          aboutPromiseBtn
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

    console.log('ABOUT WORDPRESS GRAPHQL RESULT:', result)

    if (!res.ok) {
      console.error('ABOUT WORDPRESS HTTP ERROR:', result)
      return null
    }

    if (result.errors) {
      console.error('ABOUT WORDPRESS GRAPHQL ERRORS:', result.errors)
      return null
    }

    return result?.data?.page?.aboutpagecontent ?? null
  } catch (error) {
    console.error('ABOUT WORDPRESS FETCH ERROR:', error)
    return null
  }
}

export default async function AboutPage() {
  const wpData = await getAboutPageData()

  const legacyImgSrc = getImgUrl(wpData?.aboutLegacyImage, '/dr-kim.jpeg')
  const credImgSrc = getImgUrl(wpData?.aboutCredImage, '/grad.jpeg')

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] pt-32 pb-16 px-6 lg:px-8" aria-label="About hero">
        <div className="max-w-4xl mx-auto">
          <SectionEyebrow className="mb-3 text-[#C9963A]">
            {wpData?.aboutHeroEyebrow || 'The Expertise Behind the Framework'}
          </SectionEyebrow>
          <h1 className="font-serif font-bold text-white text-4xl sm:text-5xl tracking-[-0.02em] mb-4 text-balance leading-tight">
            {wpData?.aboutHeroTitle || 'Rooted in Research. Proven in the Classroom. Empowering Secondary Educators.'}
          </h1>
          <div className="w-10 h-0.5 bg-[#C9963A]" aria-hidden="true" />
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section className="bg-white py-20 px-6 lg:px-8" aria-label="Biography">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          
          {/* Block 1: Image Left, Legacy Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2">
              <div
                className="relative w-full border-2 border-[#C9963A] rounded-sm overflow-hidden bg-[#F4F6F9]"
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src={legacyImgSrc}
                  alt="Dr. Kimberly Miles, Ed.D., Founder of In Context Learning Solutions"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <h2 className="font-serif font-bold text-[#0A1628] text-2xl mb-4">
                {wpData?.aboutLegacyTitle || 'Driven by a Legacy of Education'}
              </h2>
              <p className="font-sans text-base text-[#1A202C] leading-relaxed mb-4">
                {wpData?.aboutLegacyP1 || 'True instructional leadership isn’t born in a vacuum; it is forged through years of real-world classroom experience and a deep respect for the teaching profession. As the daughter of dedicated lifelong educators, my path was set early. I witnessed firsthand the profound impact that a supported, highly skilled teacher can have on a student’s life.'}
              </p>
              <p className="font-sans text-base text-[#1A202C] leading-relaxed">
                {wpData?.aboutLegacyP2 || 'Today, with over 20 years of cross-curricular experience spanning elementary, secondary, and collegiate levels, I carry that legacy forward. I know the unique pressures secondary teachers face—balancing heavy content pacing, evolving state standards, and diverse classroom reading dynamics. My mission through In Context Learning Solutions is to ensure that educators never have to navigate these challenges alone.'}
              </p>
            </div>
          </div>

          {/* Block 2: Credentials Text Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center pt-10 border-t border-[#E2E8F0]">
            <div className="md:col-span-3 order-2 md:order-1">
              <h3 className="font-serif font-bold text-[#0A1628] text-xl mb-3">
                {wpData?.aboutCredTitle || 'Academic & Professional Credentials'}
              </h3>
              <p className="font-sans text-base text-[#4A5568] leading-relaxed mb-5">
                {wpData?.aboutCredDesc || 'My approach to school district consulting combines practical, job-embedded classroom application with rigorous, evidence-based research.'}
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9963A] shrink-0" aria-hidden="true" />
                  <p className="font-sans text-sm text-[#1A202C] leading-relaxed">
                    <strong className="font-semibold text-[#0A1628]">{wpData?.aboutCred1Bold || 'Doctorate in Education (Ed.D.)'}</strong>
                    {wpData?.aboutCred1Text || ' | Academic Focus on Curriculum, Instruction, and Educational Leadership (3.9 GPA).'}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9963A] shrink-0" aria-hidden="true" />
                  <p className="font-sans text-sm text-[#1A202C] leading-relaxed">
                    <strong className="font-semibold text-[#0A1628]">{wpData?.aboutCred2Bold || 'Professional Endorsements:'}</strong>
                    {wpData?.aboutCred2Text || ' Advanced specializations in Instructional Coaching, Gifted Education, and ESOL (English to Speakers of Other Languages).'}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9963A] shrink-0" aria-hidden="true" />
                  <p className="font-sans text-sm text-[#1A202C] leading-relaxed">
                    <strong className="font-semibold text-[#0A1628]">{wpData?.aboutCred3Bold || 'Leadership Profiles:'}</strong>
                    {wpData?.aboutCred3Text || ' Director of regional secondary history tournaments, voting delegate on local Panhellenic educational executive boards, and active leader within Delta Sigma Theta Sorority, Inc.'}
                  </p>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2 order-1 md:order-2">
              <div
                className="relative w-full border-2 border-[#C9963A] rounded-sm overflow-hidden bg-[#F4F6F9]"
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src={credImgSrc}
                  alt="Dr. Kimberly Miles credentials and professional background"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="bg-[#F4F6F9] py-20 px-6 lg:px-8" aria-label="Publications">
        <div className="max-w-5xl mx-auto">
          <SectionEyebrow className="mb-3">{wpData?.aboutPubEyebrow || 'Published Works'}</SectionEyebrow>
          <h2 className="font-serif font-bold text-[#0A1628] text-3xl sm:text-4xl tracking-[-0.02em] mb-4">
            {wpData?.aboutPubTitle || 'Featured Thought Leadership & Publications'}
          </h2>
          <p className="font-sans text-base text-[#4A5568] leading-relaxed mb-10 max-w-3xl">
            {wpData?.aboutPubIntro || 'I actively contribute to the regional and national dialogue surrounding secondary literacy and historical inquiry. My published work serves as a foundational blueprint for districts looking to redefine their instructional approaches.'}
          </p>

          <div className="flex flex-col gap-6">
            {/* Featured publication */}
            <div className="bg-[#0A1628] rounded-sm p-8 text-white">
              <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-[#C9963A] mb-3 block">
                {wpData?.aboutPub1Tag || 'Featured Article'}
              </span>
              <h3 className="font-serif font-bold text-white text-xl sm:text-2xl tracking-[-0.02em] leading-snug mb-3 text-balance">
                {wpData?.aboutPub1Title || '“Adolescent Literacy: Bridging Literacy Gaps in Georgia’s Social Studies Classrooms — A Call for Disciplinary Literacy in Secondary Education”'}
              </h3>
              <p className="font-sans text-sm text-white/60 mb-4" dangerouslySetInnerHTML={{ __html: wpData?.aboutPub1Source || '<em>Teaching Social Studies in the Peach State</em> &middot; Vol. 4, Iss. 1' }} />
              <p className="font-sans text-sm text-white/80 leading-relaxed mb-6 max-w-2xl">
                {wpData?.aboutPub1Desc || 'In this peer-reviewed publication, I break down the critical cognitive distinction between foundational reading support and specialized historical thinking. The article outlines a practical roadmap for district leaders to elevate secondary classroom rigor without falling behind on curriculum maps.'}
              </p>
              <a
                href={wpData?.aboutPub1LinkUrl || 'https://digitalcommons.georgiasouthern.edu/sspeach/vol4/iss1/5/'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9963A] text-white font-sans font-semibold text-sm px-6 py-3 rounded-sm hover:bg-[#F0C97A] hover:text-[#0A1628] transition-colors duration-150"
              >
                {wpData?.aboutPub1LinkText || 'Access the Full Text via Georgia Southern University Digital Commons'} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Secondary publication */}
            <div className="bg-white border border-[#E2E8F0] rounded-sm p-7 shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
              <span className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-[#C9963A] mb-3 block">
                {wpData?.aboutPub2Tag || 'National Contribution'}
              </span>
              <h3 className="font-serif font-bold text-[#0A1628] text-lg tracking-[-0.02em] leading-snug mb-2">
                {wpData?.aboutPub2Title || '“Building Bridges: Integrating Multicultural Awareness in Early Learning (and Beyond)”'}
              </h3>
              <p className="font-sans text-sm text-[#4A5568] mb-4" dangerouslySetInnerHTML={{ __html: wpData?.aboutPub2Source || 'Published in <em>The Leader</em>' }} />
              <p className="font-sans text-sm text-[#4A5568] leading-relaxed">
                {wpData?.aboutPub2Desc || 'A national perspective focusing on cross-cultural alignment, disciplinary literacy frameworks, and the seamless integration of diverse viewpoints within social studies instruction.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ICLS PROMISE */}
      <section className="bg-white py-20 px-6 lg:px-8 text-center" aria-label="The ICLS Promise">
        <div className="max-w-[680px] mx-auto">
          <SectionEyebrow className="mb-4">{wpData?.aboutPromiseEyebrow || 'The ICLS Promise'}</SectionEyebrow>
          <h2 className="font-serif font-bold text-[#0A1628] text-3xl sm:text-4xl tracking-[-0.02em] mb-6">
            {wpData?.aboutPromiseTitle || 'Seen. Heard. Understood.'}
          </h2>
          <p className="font-sans text-base text-[#4A5568] leading-relaxed mb-8">
            {wpData?.aboutPromiseDesc || 'Sustainable instructional growth never happens through top-down mandates or generic professional development. It happens when educators feel deeply seen, heard, and understood in their specific content areas. Every ICLS engagement begins with listening.'}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9963A] text-white font-sans font-semibold text-sm px-7 py-3.5 rounded-sm hover:bg-[#0A1628] transition-colors duration-150"
          >
            {wpData?.aboutPromiseBtn || 'Start the Conversation'}
          </Link>
        </div>
      </section>
    </>
  )
}