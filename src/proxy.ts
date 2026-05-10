// STRICT auth check below:
import { NextRequest, NextResponse, ProxyConfig } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
export async function proxy(request: NextRequest) {
    // const session = await auth.api.getSession({
    //     headers: await headers()
    // });

    // const {success} = await auth.api.userHasPermission({ 
    //   headers: await headers(), 
    //   body:{
    //     permissions: {admin_dashboard:["view"]}
    //   }
    // });

    // if(!success) {
    //     return NextResponse.redirect(new URL("/sign-in", request.url));
    // }

    console.log('PROXY ENV', JSON.stringify(process.env, null, 2));

    return NextResponse.next();
}

export const config:ProxyConfig = {
  matcher: ["/admin/:path*"], // Specify the routes the middleware applies to
};

// LOOSE session cookie existence check below:
// import { NextRequest, NextResponse } from "next/server";
// import { getSessionCookie } from "better-auth/cookies";
// export async function proxy(request: NextRequest) {
// 	const sessionCookie = getSessionCookie(request);

//     // THIS IS NOT SECURE!
//     // This is the recommended approach to optimistically redirect users
//     // We recommend handling auth checks in each page/route
// 	if (!sessionCookie) {
// 		return NextResponse.redirect(new URL("/", request.url));
// 	}

// 	return NextResponse.next();
// }

// export const config = {
// 	matcher: ["/admin/:path*"], // Specify the routes the middleware applies to
// };