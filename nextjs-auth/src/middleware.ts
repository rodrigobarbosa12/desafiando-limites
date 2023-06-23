import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicRoutes = ['/auth']

export function middleware(request: NextRequest) {
  const cookies = request.cookies.get('session_token')
  const { pathname } = request.nextUrl

  if (cookies && cookies?.value && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (publicRoutes.includes(pathname) && (!cookies || !cookies?.value)) {
    return NextResponse.next()
  }

  if (!cookies || !cookies?.value) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/auth'],
}
