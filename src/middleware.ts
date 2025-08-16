import { NextResponse } from 'next/server'

// Middleware no-op: mantido apenas para compatibilidade. Não altera requisições.
export function middleware() {
	return NextResponse.next()
}

// Opcionalmente, poderíamos restringir com matcher se necessário no futuro.
export const config = {
	matcher: [
		// Ex.: '/usuario/:path*', '/admin/:path*'
	],
}
