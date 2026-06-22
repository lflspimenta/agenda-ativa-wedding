import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

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
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value, options);
            response.cookies.set(name, value, options);
          });
        }
      }
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  // Protege /agenda — redireciona para /entrar se não autenticado
  if (!user && request.nextUrl.pathname.startsWith("/agenda")) {
    return NextResponse.redirect(new URL("/entrar", request.url));
  }

  // Se já autenticado e vai para /entrar — redireciona para /agenda
  if (user && request.nextUrl.pathname === "/entrar") {
    return NextResponse.redirect(new URL("/agenda", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/agenda/:path*", "/entrar"]
};