import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret')

  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { ok: false, message: 'Unauthorized' },
      { status: 401 }
    )
  }

  revalidatePath('/')
  revalidatePath('/about')
  revalidatePath('/services')
  revalidatePath('/procurement')
  revalidatePath('/contact')

  return NextResponse.json({
    ok: true,
    revalidated: true,
    paths: [
      '/',
      '/about',
      '/services',
      '/procurement',
      '/contact',
    ],
  })
}