import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

type CookieToSet = {
  name: string;
  value: string;
  options?: Record<string, unknown>;
};

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers
    }
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: CookieToSet[]) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value, options as never);
            response.cookies.set(name, value, options as never);
          });
        }
      }
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  if (!user && request.nextUrl.pathname.startsWith("/agenda")) {
    return NextResponse.redirect(new URL("/entrar", request.url));
  }

  if (user && request.nextUrl.pathname === "/entrar") {
    return NextResponse.redirect(new URL("/agenda", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/agenda/:path*", "/entrar"]
};
