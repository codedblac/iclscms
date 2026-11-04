
import Image from 'next/image'

const strategies = [
  {
    number: '01',
    title: 'The 3-Minute Sourcing Routine',
    description:
      'A pre-reading habit that builds historical context before students read a single line.',
  },
  {
    number: '02',
    title: 'Annotation for Historical Context',
    description:
      'Turn passive reading into active historical analysis with a structured "detective hunt."',
  },
  {
    number: '03',
    title: 'Strategic Corroboration Pairs',
    description:
      'Two conflicting sources. One powerful inquiry routine. Multiple standards at once.',
  },
  {
    number: '04',
    title: 'Fact vs. Perspective Tracking',
    description:
      'A two-column note strategy that sharpens critical thinking without slowing down pacing.',
  },
]

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F7F6F2] font-sans text-[#1A2744]">

      {/* Logo header */}
      <header className="bg-[#1A2744] pt-8">
        <div className="mx-auto flex max-w-6xl justify-center px-6 pb-7">
          <Image
            src="/kimlt.png"
            alt="In Context Learning Solutions"
            width={240}
            height={110}
            priority
            className="h-auto w-[190px] object-contain md:w-[220px]"
          />
        </div>

        {/* Full-width gold separator */}
        <div className="h-[5px] w-full bg-[#C9933A]" />
      </header>

      <main>
        {/* Hero section */}
        <section className="bg-[#1A2744] px-6 pb-36 pt-16 text-center text-white md:pb-44 md:pt-24">
          <div className="mx-auto max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A34D] md:text-sm">
              You're in — let's get you set up
            </p>

            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Your guide is on its way.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              One last step — check your inbox to access{' '}
              <em>The Contextual Shift</em>.
            </p>
          </div>
        </section>

        {/* Inbox confirmation card */}
        <section className="relative z-10 -mt-24 px-5 md:-mt-28">
          <div className="mx-auto max-w-3xl rounded-2xl border border-[#EAE5DB] bg-white px-7 py-11 text-center shadow-[0_18px_55px_rgba(26,39,68,0.10)] md:px-16 md:py-14">

            {/* Email icon */}
            <div className="mx-auto mb-7 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#F7F3EA]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-8 w-8 text-[#C9933A]"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5 12 14l9-6.5M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
                />
              </svg>
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#C9933A]">
              Your next step
            </p>

            <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-[#1A2744] md:text-4xl">
              Check your inbox
            </h2>

            {/* Centered inbox text */}
            <div className="mx-auto max-w-2xl space-y-5 text-center text-sm leading-8 text-[#596273] md:text-base">
              <p>
                We just sent{' '}
                <strong className="font-bold text-[#1A2744]">
                  The Contextual Shift
                </strong>{' '}
                to your email. Open it, click the download link, and you'll
                have all 5 strategies ready to use with your team.
              </p>

              <p>
                Don't see it? Check your promotions or spam folder — then add{' '}
                <strong className="font-bold text-[#1A2744]">
                  info@incontextls.com
                </strong>{' '}
                to your contacts so you never miss an update.
              </p>
            </div>

            {/* Download button */}
            <div className="mt-9">
              <a
                href="mailto:info@incontextls.com?subject=The%20Contextual%20Shift%20Guide"
                className="inline-flex min-h-14 w-full items-center justify-center rounded-md bg-[#C9933A] px-8 py-4 text-sm font-bold tracking-wide text-[#1A2744] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#D9A94F] hover:shadow-md sm:w-auto"
              >
                Download the Guide Now
              </a>

              <p className="mt-5 text-sm leading-6 text-[#777F8C]">
                Or open the email we just sent you — it's there too.
              </p>
            </div>
          </div>
        </section>

        {/* Guide contents */}
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-5xl">

            <div className="mb-12 text-center md:mb-14">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#C9933A] md:text-sm">
                The Contextual Shift
              </p>

              <h2 className="font-serif text-3xl font-bold leading-tight text-[#1A2744] md:text-4xl">
                What's inside the guide
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {strategies.map((strategy) => (
                <article
                  key={strategy.number}
                  className="group rounded-xl border border-[#EAE5DB] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D9BC89] hover:shadow-lg md:p-9"
                >
                  <span className="mb-5 block font-serif text-3xl font-bold text-[#C9933A]">
                    {strategy.number}
                  </span>

                  <h3 className="mb-4 font-serif text-xl font-bold leading-snug text-[#1A2744] md:text-2xl">
                    {strategy.title}
                  </h3>

                  <p className="text-sm leading-7 text-[#596273] md:text-base">
                    {strategy.description}
                  </p>

                  <div className="mt-6 h-[2px] w-10 bg-[#C9933A] transition-all duration-300 group-hover:w-16" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy audit CTA */}
        <section className="bg-[#1A2744] px-6 py-20 text-center text-white md:py-28">
          <div className="mx-auto max-w-3xl">

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#D6A34D] md:text-sm">
              Ready to go deeper?
            </p>

            <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Let's look at your curriculum together.
            </h2>

            <p className="mx-auto mb-10 mt-6 max-w-2xl text-sm leading-8 text-white/75 md:text-base">
              In 20 minutes, we can identify your highest-leverage
              opportunities to strengthen instructional rigor — without
              disrupting your pacing.
            </p>

            <a
              href="https://calendly.com/incontextlearningsolutions-info/strategy-audit?month=2026-11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-md bg-[#C9933A] px-9 py-4 text-sm font-bold tracking-wide text-[#1A2744] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#D9A94F] hover:shadow-md"
            >
              Book a Strategy Audit
              <span className="ml-3 text-lg" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
