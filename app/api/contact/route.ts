
import { NextRequest, NextResponse } from 'next/server'
import { resend } from '@/lib/resend'

/**
 * Contact Form API
 *
 * Flow:
 * Contact Form
 *      ↓
 * /api/contact
 *      ↓
 * Validation + Honeypot
 *      ↓
 * Resend
 *      ↓
 * info@incontextlearningsolutions.com
 *
 * No database.
 * No Upstash.
 * No Supabase.
 */

export async function POST(req: NextRequest) {
  try {
    // ==========================================
    // PARSE REQUEST
    // ==========================================

    let body: Record<string, unknown>

    try {
      body = await req.json()
    } catch {
      return NextResponse.json(
        {
          error: 'Invalid request.',
        },
        { status: 400 }
      )
    }

    const {
      full_name,
      email,
      phone,
      organization,
      message,
      website,
    } = body

    // ==========================================
    // HONEYPOT SPAM PROTECTION
    // ==========================================
    //
    // "website" is a hidden field on the form.
    //
    // Real users should leave it empty.
    //
    // Basic bots that automatically fill every
    // field may populate it.
    //
    // We return success without sending an email
    // so the bot does not know it was blocked.
    // ==========================================

    if (
      typeof website === 'string' &&
      website.trim() !== ''
    ) {
      return NextResponse.json(
        {
          success: true,
        },
        { status: 200 }
      )
    }

    // ==========================================
    // TYPE VALIDATION
    // ==========================================

    if (
      full_name !== undefined &&
      typeof full_name !== 'string'
    ) {
      return NextResponse.json(
        {
          error: 'Invalid name.',
        },
        { status: 400 }
      )
    }

    if (
      email !== undefined &&
      typeof email !== 'string'
    ) {
      return NextResponse.json(
        {
          error: 'Invalid email address.',
        },
        { status: 400 }
      )
    }

    if (
      phone !== undefined &&
      phone !== null &&
      typeof phone !== 'string'
    ) {
      return NextResponse.json(
        {
          error: 'Invalid phone number.',
        },
        { status: 400 }
      )
    }

    if (
      organization !== undefined &&
      organization !== null &&
      typeof organization !== 'string'
    ) {
      return NextResponse.json(
        {
          error: 'Invalid organization.',
        },
        { status: 400 }
      )
    }

    if (
      message !== undefined &&
      typeof message !== 'string'
    ) {
      return NextResponse.json(
        {
          error: 'Invalid message.',
        },
        { status: 400 }
      )
    }

    // ==========================================
    // REQUIRED FIELD VALIDATION
    // ==========================================

    if (
      typeof full_name !== 'string' ||
      !full_name.trim()
    ) {
      return NextResponse.json(
        {
          error: 'Please enter your full name.',
        },
        { status: 400 }
      )
    }

    if (
      typeof email !== 'string' ||
      !email.trim()
    ) {
      return NextResponse.json(
        {
          error: 'Please enter your email address.',
        },
        { status: 400 }
      )
    }

    if (
      typeof message !== 'string' ||
      !message.trim()
    ) {
      return NextResponse.json(
        {
          error:
            'Please tell us how we can support you.',
        },
        { status: 400 }
      )
    }

    // ==========================================
    // CLEAN DATA
    // ==========================================

    const cleanFullName = full_name.trim()

    const cleanEmail = email
      .trim()
      .toLowerCase()

    const cleanPhone =
      typeof phone === 'string' &&
      phone.trim()
        ? phone.trim()
        : 'Not provided'

    const cleanOrganization =
      typeof organization === 'string' &&
      organization.trim()
        ? organization.trim()
        : 'Not provided'

    const cleanMessage = message.trim()

    // ==========================================
    // EMAIL VALIDATION
    // ==========================================

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        {
          error:
            'Please provide a valid email address.',
        },
        { status: 400 }
      )
    }

    // ==========================================
    // LENGTH VALIDATION
    // ==========================================

    if (cleanFullName.length > 150) {
      return NextResponse.json(
        {
          error:
            'Please keep your name under 150 characters.',
        },
        { status: 400 }
      )
    }

    if (cleanEmail.length > 254) {
      return NextResponse.json(
        {
          error:
            'Please provide a valid email address.',
        },
        { status: 400 }
      )
    }

    if (cleanPhone.length > 50) {
      return NextResponse.json(
        {
          error:
            'Please keep your phone number under 50 characters.',
        },
        { status: 400 }
      )
    }

    if (cleanOrganization.length > 200) {
      return NextResponse.json(
        {
          error:
            'Please keep your organization name under 200 characters.',
        },
        { status: 400 }
      )
    }

    if (cleanMessage.length > 5000) {
      return NextResponse.json(
        {
          error:
            'Please keep your message under 5,000 characters.',
        },
        { status: 400 }
      )
    }

    // ==========================================
    // RESEND EMAIL
    // ==========================================

    const { data, error } =
      await resend.emails.send({
        from:
          'In Context Learning Solutions <info@incontextlearningsolutions.com>',

        to: [
          'info@incontextlearningsolutions.com',
        ],

        // When Dr. Kim clicks Reply,
        // the reply goes to the person
        // who submitted the form.
        replyTo: cleanEmail,

        subject:
          `New Consultation Request — ${cleanFullName}`,

        // ========================================
        // HTML EMAIL
        // ========================================

        html: `
<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>New Consultation Request</title>
</head>

<body
  style="
    margin: 0;
    padding: 0;
    background-color: #f4f6f8;
    font-family: Arial, Helvetica, sans-serif;
    color: #334155;
  "
>

  <div
    style="
      width: 100%;
      padding: 40px 16px;
      box-sizing: border-box;
      background-color: #f4f6f8;
    "
  >

    <div
      style="
        max-width: 680px;
        margin: 0 auto;
        background-color: #ffffff;
        border: 1px solid #e2e8f0;
      "
    >

      <!-- ================================= -->
      <!-- HEADER -->
      <!-- ================================= -->

      <div
        style="
          background-color: #0A1628;
          padding: 32px;
        "
      >

        <div
          style="
            font-size: 12px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #C9963A;
            font-weight: 600;
            margin-bottom: 10px;
          "
        >
          In Context Learning Solutions
        </div>

        <h1
          style="
            margin: 0;
            color: #ffffff;
            font-size: 24px;
            line-height: 1.3;
            font-weight: 600;
          "
        >
          New Consultation Request
        </h1>

        <p
          style="
            margin: 10px 0 0;
            color: #cbd5e1;
            font-size: 14px;
            line-height: 1.6;
          "
        >
          A new consultation request has been
          submitted through the In Context Learning
          Solutions website.
        </p>

      </div>


      <!-- ================================= -->
      <!-- CONTACT INFORMATION -->
      <!-- ================================= -->

      <div
        style="
          padding: 32px;
        "
      >

        <h2
          style="
            margin: 0 0 24px;
            color: #0A1628;
            font-size: 18px;
            font-weight: 600;
          "
        >
          Contact Information
        </h2>


        <!-- FULL NAME -->

        <div
          style="
            margin-bottom: 20px;
          "
        >

          <div
            style="
              margin-bottom: 5px;
              color: #64748b;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            "
          >
            Full Name
          </div>

          <div
            style="
              color: #0f172a;
              font-size: 15px;
              line-height: 1.6;
            "
          >
            ${escapeHtml(cleanFullName)}
          </div>

        </div>


        <!-- EMAIL -->

        <div
          style="
            margin-bottom: 20px;
          "
        >

          <div
            style="
              margin-bottom: 5px;
              color: #64748b;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            "
          >
            Email Address
          </div>

          <div
            style="
              font-size: 15px;
              line-height: 1.6;
            "
          >

            <a
              href="mailto:${escapeHtml(cleanEmail)}"
              style="
                color: #0A1628;
                text-decoration: none;
              "
            >
              ${escapeHtml(cleanEmail)}
            </a>

          </div>

        </div>


        <!-- PHONE -->

        <div
          style="
            margin-bottom: 20px;
          "
        >

          <div
            style="
              margin-bottom: 5px;
              color: #64748b;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            "
          >
            Phone
          </div>

          <div
            style="
              color: #0f172a;
              font-size: 15px;
              line-height: 1.6;
            "
          >
            ${escapeHtml(cleanPhone)}
          </div>

        </div>


        <!-- ORGANIZATION -->

        <div
          style="
            margin-bottom: 30px;
          "
        >

          <div
            style="
              margin-bottom: 5px;
              color: #64748b;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            "
          >
            School / District / Organization
          </div>

          <div
            style="
              color: #0f172a;
              font-size: 15px;
              line-height: 1.6;
            "
          >
            ${escapeHtml(cleanOrganization)}
          </div>

        </div>


        <!-- DIVIDER -->

        <div
          style="
            border-top: 1px solid #e2e8f0;
            margin: 0 0 30px;
          "
        ></div>


        <!-- ================================= -->
        <!-- MESSAGE -->
        <!-- ================================= -->

        <h2
          style="
            margin: 0 0 12px;
            color: #0A1628;
            font-size: 18px;
            font-weight: 600;
          "
        >
          How Can We Support You?
        </h2>

        <div
          style="
            background-color: #f8fafc;
            border-left: 4px solid #C9963A;
            padding: 20px;
            color: #334155;
            font-size: 15px;
            line-height: 1.7;
            white-space: pre-wrap;
          "
        >${escapeHtml(cleanMessage)}</div>


        <!-- ================================= -->
        <!-- RESPONSE NOTICE -->
        <!-- ================================= -->

        <div
          style="
            margin-top: 28px;
            padding: 18px;
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
          "
        >

          <div
            style="
              color: #64748b;
              font-size: 11px;
              font-weight: 600;
              letter-spacing: 0.8px;
              margin-bottom: 6px;
            "
          >
            READY TO RESPOND
          </div>

          <div
            style="
              color: #334155;
              font-size: 14px;
              line-height: 1.6;
            "
          >
            You can reply directly to this email
            to respond to
            <strong>
              ${escapeHtml(cleanFullName)}
            </strong>.
          </div>

        </div>

      </div>


      <!-- ================================= -->
      <!-- FOOTER -->
      <!-- ================================= -->

      <div
        style="
          background-color: #f8fafc;
          border-top: 1px solid #e2e8f0;
          padding: 20px 32px;
        "
      >

        <p
          style="
            margin: 0;
            color: #64748b;
            font-size: 12px;
            line-height: 1.6;
          "
        >
          This message was submitted through the
          official In Context Learning Solutions
          website.
        </p>

      </div>

    </div>

  </div>

</body>

</html>
        `,

        // ========================================
        // PLAIN TEXT FALLBACK
        // ========================================

        text: `
NEW CONSULTATION REQUEST

In Context Learning Solutions

----------------------------------------

CONTACT INFORMATION

Full Name:
${cleanFullName}

Email Address:
${cleanEmail}

Phone:
${cleanPhone}

School / District / Organization:
${cleanOrganization}

----------------------------------------

HOW CAN WE SUPPORT YOU?

${cleanMessage}

----------------------------------------

You can reply directly to this email to respond to ${cleanFullName}.

This message was submitted through the official In Context Learning Solutions website.
        `,
      })

    // ==========================================
    // RESEND ERROR
    // ==========================================

    if (error) {
      console.error(
        '[ICLS] Resend error:',
        error
      )

      return NextResponse.json(
        {
          error:
            'We could not send your message right now. Please try again.',
        },
        { status: 500 }
      )
    }

    // ==========================================
    // SUCCESS
    // ==========================================

    console.log(
      `[ICLS] Consultation request sent successfully: ${data?.id}`
    )

    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    )

  } catch (error) {

    console.error(
      '[ICLS] Contact API error:',
      error
    )

    return NextResponse.json(
      {
        error:
          'Something went wrong while sending your message. Please try again.',
      },
      { status: 500 }
    )
  }
}


// ==========================================
// HTML ESCAPING
// ==========================================

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

