'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Mail,
} from 'lucide-react'
import { SectionEyebrow } from '@/components/section-eyebrow'

const SPEAKING_TOPICS = [
  {
    number: '01',
    title: 'Disciplinary Literacy in Secondary Social Studies',
    description:
      'Practical frameworks for integrating reading and writing into Social Studies instruction without losing content pacing.',
  },
  {
    number: '02',
    title: 'Coaching Teachers Toward Instructional Rigor',
    description:
      'How instructional leaders can build teacher capacity through job-embedded coaching that moves the needle on student outcomes.',
  },
  {
    number: '03',
    title: 'Advocating for Social Studies in a Standards-Driven Landscape',
    description:
      'Making the case, with data and stories, for protecting and expanding Social Studies in the schedule.',
  },
  {
    number: '04',
    title: 'From Compliance to Curiosity: Rethinking Student Engagement',
    description:
      'Strategies for designing instruction that develops students who think critically, ask hard questions, and engage with the world around them.',
  },
]

export default function MediaPage() {
  const [isSpeechExpanded, setIsSpeechExpanded] = useState(false)

  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden bg-[#0A1628] pt-32 pb-20 lg:pb-24 px-6 lg:px-8"
        aria-label="Media and speaking hero"
      >
        {/* Decorative concentric gold accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-56 w-[540px] h-[540px] rounded-full border border-[#F0C97A]/15"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[14%] -bottom-48 w-[260px] h-[260px] rounded-full border border-[#F0C97A]/15"
        />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7">
            <SectionEyebrow className="mb-4 text-[#F0C97A]">
              Media &amp; Speaking
            </SectionEyebrow>

            <h1 className="font-serif font-bold text-white text-4xl sm:text-5xl lg:text-6xl tracking-[-0.025em] leading-[1.08] mb-6">
              Voice. Research.{' '}
              <span className="text-[#F0C97A] italic font-semibold">Impact.</span>
            </h1>

            <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed mb-9 max-w-2xl">
              Dr. Kimberly Miles brings the same rigor she brings to classrooms into every room she
              enters, whether that is a district leadership meeting, a conference stage, or a
              published journal. Here, you will find her public contributions to the field of
              Social Studies education.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#featured-talk"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#C9963A] hover:bg-[#b8862e] text-[#0A1628] font-sans text-xs font-bold tracking-[0.08em] uppercase rounded-sm transition-colors"
              >
                <span>Explore Featured Talk</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>

              <a
                href="#published-research"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-white/30 hover:border-[#F0C97A] text-white hover:text-[#F0C97A] font-sans text-xs font-semibold tracking-[0.08em] uppercase rounded-sm transition-colors"
              >
                View Published Research
              </a>
            </div>

            <div className="mt-12 flex items-center gap-3.5 text-white/60 font-sans text-[10px] font-semibold tracking-[0.14em] uppercase">
              <span className="w-10 h-[1px] bg-[#C9963A]" aria-hidden="true" />
              <span>Leadership in Social Studies Education</span>
            </div>
          </div>

          {/* Right Column: Dr. Kimberly Miles Portrait */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Offset gold accent frame */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -inset-3 translate-x-3 translate-y-3 border border-[#C9963A]/45 rounded-sm pointer-events-none"
              />

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/15 bg-[#12233D] shadow-2xl">
                <Image
                  src="/kimct.jpeg"
                  alt="Dr. Kimberly Miles"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-top"
                />

                {/* Subtle bottom gradient & caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/55 to-transparent pt-16 pb-5 px-6">
                  <p className="font-serif font-bold text-white text-xl leading-snug">
                    Dr. Kimberly Miles
                  </p>
                  <p className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-[#F0C97A] mt-1">
                    Educator · Researcher · Keynote Speaker
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: FEATURED TALK & SPEECH */}
      <section
        id="featured-talk"
        className="bg-[#F4F6F9] py-20 lg:py-24 px-6 lg:px-8 scroll-mt-20"
        aria-label="Featured talk"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <SectionEyebrow className="mb-3 text-[#C9963A]">
              Featured Talk
            </SectionEyebrow>
            <h2 className="font-serif font-bold text-[#0A1628] text-3xl sm:text-4xl tracking-[-0.02em] leading-tight mb-3">
              2026 GCSS Social Studies Leadership Award: Acceptance Remarks
            </h2>
            <p className="font-sans text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase text-[#64748B]">
              Georgia Council for the Social Studies &nbsp;|&nbsp; 2026 Annual Conference
            </p>
          </div>

          {/* Two-Column Introduction & Video Embed */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Context & Pull Quote */}
            <div className="lg:col-span-6">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="px-3 py-1.5 bg-[#E2E8F0] text-[#1E293B] font-sans text-[10px] font-bold tracking-[0.1em] uppercase rounded-sm">
                  Award Keynote Remarks
                </span>
                <span className="px-3 py-1.5 bg-[#E2E8F0] text-[#1E293B] font-sans text-[10px] font-bold tracking-[0.1em] uppercase rounded-sm">
                  Civic &amp; Instructional Leadership
                </span>
              </div>

              <p className="font-sans text-base text-[#4A5568] leading-relaxed mb-7">
                In her acceptance remarks for the Social Studies Leadership Award, Dr. Miles
                delivered a call to action to educators across Georgia: advocate louder for the
                discipline, invest in the next generation, and never stop defending social
                studies&apos; place in the schedule.
              </p>

              {/* Featured Pull Quote Card with Sizeable Speech Marks */}
              <div className="bg-white border border-[#E2E8F0] border-l-[3px] border-l-[#C9963A] p-7 sm:p-8 rounded-sm shadow-sm">
                <blockquote className="font-serif italic text-[#0A1628] text-lg sm:text-xl leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="font-serif not-italic text-4xl sm:text-5xl leading-none text-[#C9963A] mr-1.5 align-[-0.18em] select-none"
                  >
                    “
                  </span>
                  Social studies is not just a subject we teach. It is a promise we keep to every
                  student: that they will never walk into the world unprepared to shape it.
                  <span
                    aria-hidden="true"
                    className="font-serif not-italic text-4xl sm:text-5xl leading-none text-[#C9963A] ml-1.5 align-[-0.25em] select-none"
                  >
                    ”
                  </span>
                </blockquote>
                <cite className="block not-italic mt-4 font-sans text-[10px] font-bold tracking-[0.14em] uppercase text-[#64748B]">
                  Dr. Kimberly Miles, 2026 GCSS Leadership Award
                </cite>
              </div>
            </div>

            {/* Right Column: Video Embed Container */}
            <div className="lg:col-span-6">
              <div className="relative aspect-video w-full rounded-sm overflow-hidden border border-[#E2E8F0] bg-[#0A1628] shadow-lg">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/ZUVV0RTMSHI"
                  title="2026 GCSS Social Studies Leadership Award: Acceptance Remarks — Dr. Kimberly Miles"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* SPEECH MANUSCRIPT CARD WITH READ MORE EXPANSION */}
          <div className="mt-12 bg-white border border-[#E2E8F0] rounded-sm shadow-sm overflow-hidden">
            {/* Manuscript Header */}
            <div className="p-6 sm:p-10 border-b border-[#E2E8F0] bg-[#FAFBFD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C9963A] mb-1.5">
                  Full Speech Transcript · 2026 GCSS Annual Conference
                </p>
                <h3 className="font-serif font-bold text-[#0A1628] text-2xl sm:text-3xl tracking-[-0.015em]">
                  Acceptance Remarks: Dr. Kimberly Miles
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsSpeechExpanded((prev) => !prev)}
                aria-expanded={isSpeechExpanded}
                aria-controls="full-speech-transcript"
                className="inline-flex items-center justify-center gap-2 self-start sm:self-auto px-5 py-3 bg-[#0A1628] hover:bg-[#12233D] text-white font-sans text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm transition-colors cursor-pointer"
              >
                <span>{isSpeechExpanded ? 'Show Less' : 'Read the Full Remarks'}</span>
                {isSpeechExpanded ? (
                  <ChevronUp size={15} className="text-[#F0C97A]" aria-hidden="true" />
                ) : (
                  <ChevronDown size={15} className="text-[#F0C97A]" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Speech Body: Sizeable Opening Speech Mark at Start & Closing Speech Mark at End */}
            <div id="full-speech-transcript" className="p-6 sm:p-10">
              <div className="max-w-3xl space-y-5 font-sans text-[15px] text-[#334155] leading-[1.95]">
                <p className="relative">
                  <span
                    aria-hidden="true"
                    className="float-left font-serif text-5xl sm:text-6xl leading-[0.78] text-[#C9963A] pr-3 pt-1 select-none"
                  >
                    “
                  </span>
                  Thank you to the Georgia Council for the Social Studies Board of Trustees and
                  the Awards Committee. I am deeply honored, and truly humbled, to stand in a room
                  full of people who do this work, and who do it so well.
                </p>

                <p>
                  No one leads alone, so let me begin where I always begin. To my husband, Lenwood
                  Miles: my editor, my sounding board, and the one who reads every draft and tells
                  me the truth. To my sons, Lenwood III and Ashton, who have watched their mother
                  grade papers at ballgames and build lessons on vacation, and who remind me every
                  day why this work matters.
                </p>

                {!isSpeechExpanded && (
                  <div className="relative pt-1">
                    <p className="text-[#64748B] line-clamp-2">
                      To my Henry County Schools village: Melanie Kellam, Zackery Barfield, LaRita
                      Wiggins, Kristin McRae, and Attenya Scott. You make me better every single
                      day. And to my team, especially Jake Kessinger, who is in the trenches with
                      me every week...
                    </p>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent"
                    />
                  </div>
                )}

                {isSpeechExpanded && (
                  <>
                    <p>
                      To my Henry County Schools village: Melanie Kellam, Zackery Barfield, LaRita
                      Wiggins, Kristin McRae, and Attenya Scott. You make me better every single
                      day. And to my team, especially Jake Kessinger, who is in the trenches with
                      me every week: none of this happens without you.
                    </p>

                    <p>
                      And to my mentors in social studies education: Heather Coody, Angie Battle,
                      Tomika McClinton, Jemeka Rhode-Fields, Tony DeSario, and Virnilisa Printup.
                      You opened doors and held them until I walked through. I stand here because
                      you stood there first.
                    </p>

                    <p className="font-serif font-semibold text-[#0A1628] text-xl pt-3">
                      Now, a word to all of us.
                    </p>

                    <p>
                      Social studies is the only discipline whose entire purpose is to prepare a
                      child to live among other people. Not to pass a test. To live. To read a map,
                      a ballot, a headline. To critically ask who is telling this story, and whose
                      voice is missing. To disagree with a neighbor on Monday and still wave at
                      them on Tuesday. Every other subject teaches students what to know. Ours
                      teaches them how to think.
                    </p>

                    <p>
                      And yet, we are the only subject that sometimes has to justify our place in
                      the schedule. My family likes to say I turn every vacation into a field trip.
                      They are right. Once you have taught social studies, you cannot stand
                      anywhere, a courthouse, a cemetery, a parking lot, without seeing the story
                      underneath it: who built this, who was kept out, who fought to change it. That
                      is the gift we give our students: a way of traveling through the world with
                      their eyes open and their questions ready. And still, we are asked to prove
                      that we are relevant. So let me say plainly what this award represents to me:
                      not a finish line, but a call to action.
                    </p>

                    <p>
                      Keep advocating. When social studies is cut, speak up. When it gets squeezed
                      into the last twenty minutes of a Friday, speak louder. Bring the data. Bring
                      the stories. Bring the students themselves. Our field will only be as strong
                      as our collective courage to fight for it in the rooms where decisions are
                      made.
                    </p>

                    <p>
                      And keep encouraging the next generation. Somewhere in your classroom right
                      now sits the next journalist, the next civics teacher, the next public
                      servant, the next leader who will stand where I am standing today. And yes, I
                      mean the one in the back row who will not stop asking why. Some of them
                      already carry those dreams. Most of them do not know it yet.
                    </p>

                    <blockquote className="my-8 pl-6 border-l-[3px] border-[#C9963A] font-serif italic text-xl sm:text-2xl text-[#0A1628] leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="font-serif not-italic text-4xl sm:text-5xl leading-none text-[#C9963A] mr-1.5 align-[-0.18em] select-none"
                      >
                        “
                      </span>
                      Social studies is not just a subject we teach. It is a promise we keep to
                      every student: that they will never walk into the world unprepared to shape
                      it.
                      <span
                        aria-hidden="true"
                        className="font-serif not-italic text-4xl sm:text-5xl leading-none text-[#C9963A] ml-1.5 align-[-0.25em] select-none"
                      >
                        ”
                      </span>
                    </blockquote>

                    <p className="font-serif font-semibold text-xl text-[#0A1628] pt-1">
                      Thank you for keeping that promise with me.
                      <span
                        aria-hidden="true"
                        className="inline-block font-serif font-normal text-5xl sm:text-6xl leading-none text-[#C9963A] ml-2 align-[-0.32em] select-none"
                      >
                        ”
                      </span>
                    </p>
                  </>
                )}
              </div>

              {/* Bottom Read More / Collapse Action */}
              <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setIsSpeechExpanded((prev) => !prev)}
                  aria-expanded={isSpeechExpanded}
                  aria-controls="full-speech-transcript"
                  className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-[0.12em] uppercase text-[#C9963A] hover:text-[#0A1628] transition-colors cursor-pointer"
                >
                  <span>
                    {isSpeechExpanded ? 'Collapse Full Speech ↑' : 'Read the Full Remarks ↓'}
                  </span>
                </button>

                <span className="font-sans text-xs text-[#64748B]">
                  2026 GCSS Social Studies Leadership Award
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PUBLISHED RESEARCH */}
      <section
        id="published-research"
        className="bg-white py-20 lg:py-24 px-6 lg:px-8 scroll-mt-20"
        aria-label="Published research"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <SectionEyebrow className="mb-3 text-[#C9963A]">
              Published Research
            </SectionEyebrow>
            <h2 className="font-serif font-bold text-[#0A1628] text-3xl sm:text-4xl tracking-[-0.02em] leading-tight mb-3">
              Peer-Reviewed Publication
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#4A5568] leading-relaxed">
              Scholarship grounded in classroom practice, making the case for disciplinary literacy
              in secondary Social Studies.
            </p>
          </div>

          <article className="grid grid-cols-1 md:grid-cols-[200px_1fr] border border-[#E2E8F0] rounded-sm bg-white shadow-sm overflow-hidden">
            {/* Left Monograph Badge */}
            <div
              className="bg-[#0A1628] text-[#F0C97A] min-h-[150px] md:min-h-full flex flex-col items-center justify-center p-6"
              aria-hidden="true"
            >
              <span className="font-serif text-5xl font-semibold tracking-tight">01</span>
              <span className="mt-2 font-sans text-[9px] font-semibold tracking-[0.18em] uppercase text-white/60">
                Journal Article
              </span>
            </div>

            {/* Right Publication Details */}
            <div className="p-7 sm:p-10">
              <p className="font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C9963A] mb-2">
                Peer-Reviewed Journal Publication
              </p>

              <h3 className="font-serif font-bold text-[#0A1628] text-2xl sm:text-[28px] leading-snug mb-1.5">
                Adolescent Literacy: Bridging Literacy Gaps in Georgia&apos;s Social Studies
                Classrooms
              </h3>

              <p className="font-serif italic text-[#C9963A] text-lg mb-4">
                A Call for Disciplinary Literacy in Secondary Education
              </p>

              <p className="font-sans text-sm sm:text-[15px] text-[#4A5568] leading-relaxed max-w-3xl mb-6">
                This peer-reviewed article examines the literacy gaps facing adolescent learners in
                secondary Social Studies classrooms and makes the case for disciplinary literacy as
                a framework for closing them without sacrificing content rigor or instructional
                pacing.
              </p>

              <div className="pt-5 mb-6 border-t border-[#E2E8F0] font-sans text-xs text-[#64748B]">
                Published in{' '}
                <strong className="font-semibold text-[#1A202C]">
                  Teaching Social Studies in the Peach State, Vol. 4, Iss. 1
                </strong>{' '}
                · Georgia Southern University Digital Commons
              </div>

              <a
                href="https://digitalcommons.georgiasouthern.edu/sspeach/vol4/iss1/5/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-[0.12em] uppercase text-[#C9963A] hover:text-[#0A1628] transition-colors group"
              >
                <span>Read the Publication →</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION 3: TOPICS DR. MILES SPEAKS ON */}
      <section
        id="speaking-topics"
        className="bg-[#F4F6F9] py-20 lg:py-24 px-6 lg:px-8"
        aria-label="Speaking topics"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <SectionEyebrow className="mb-3 text-[#C9963A]">
              Speaking Topics
            </SectionEyebrow>
            <h2 className="font-serif font-bold text-[#0A1628] text-3xl sm:text-4xl tracking-[-0.02em] leading-tight mb-4">
              Topics Dr. Miles Speaks On
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#4A5568] leading-relaxed">
              Dr. Miles draws on over 20 years in education as a classroom teacher, instructional
              coach, and published researcher to speak directly to the challenges Social Studies
              educators and instructional leaders face.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SPEAKING_TOPICS.map((topic) => (
              <article
                key={topic.number}
                className="bg-white border border-[#E2E8F0] rounded-sm p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#C9963A]/50"
              >
                <div>
                  <span className="font-serif text-2xl font-semibold text-[#C9963A]">
                    {topic.number}
                  </span>
                  <h3 className="font-serif font-bold text-[#0A1628] text-xl leading-snug mt-4 mb-3">
                    {topic.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-[#4A5568] leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA & INQUIRY NOTE */}
      <section
        id="media-inquiry"
        className="bg-[#0A1628] py-20 lg:py-24 px-6 lg:px-8 text-center"
        aria-label="Invite Dr. Miles to speak"
      >
        <div className="max-w-3xl mx-auto">
          <SectionEyebrow className="justify-center mb-4 text-[#F0C97A]">
            Speaking &amp; Media Inquiries
          </SectionEyebrow>

          <h2 className="font-serif font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] leading-tight mb-5">
            Invite Dr. Miles to Speak
          </h2>

          <p className="font-sans text-white/80 text-base leading-relaxed max-w-2xl mx-auto mb-8">
            If you are planning a district professional learning day, conference session, or
            leadership convening, Dr. Miles is available for keynote presentations and panel
            discussions.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#C9963A] hover:bg-[#b8862e] text-[#0A1628] font-sans text-xs font-bold tracking-[0.1em] uppercase rounded-sm transition-colors"
          >
            <span>Get in Touch</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 font-sans text-xs text-white/70">
            <Mail size={14} className="text-[#F0C97A]" aria-hidden="true" />
            <span>
              For media inquiries or booking:{' '}
              <a
                href="mailto:info@incontextlearningsolutions.com"
                className="text-[#F0C97A] hover:underline font-medium"
              >
                info@incontextlearningsolutions.com
              </a>
            </span>
            <span className="text-white/30" aria-hidden="true">
              ·
            </span>
            <a
              href="https://incontextlearningsolutions.com"
              className="text-white/80 hover:text-[#F0C97A] transition-colors"
            >
              incontextlearningsolutions.com
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}