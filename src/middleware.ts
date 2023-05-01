import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if( request.nextUrl.pathname.startsWith('/api/entries/')){
        console.log('Llego al if correctamente')
        const id = request.nextUrl.pathname.replace('/api/entries/','')
        console.log({id})
        console.log({req: request.nextUrl.pathname})
        const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");
        if( !checkMongoIDRegExp.test(id)){
            const url = request.nextUrl.clone();
            url.pathname = 'api/bad-request';
            url.search = `?message=Is not a valied Id ${id}`;
            return NextResponse.rewrite(url);

        }
    }
    return NextResponse.next();
}


// See "Matching Paths" below to learn more
/**
export const config = {
    matcher: '/about/:path*',
}
 *
 */
export const config = {
    matcher: [
        '/api/entries/:path*'
    ],
}
