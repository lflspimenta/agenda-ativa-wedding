"use server";

import { createSupabaseAdminClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import { requiredEnv } from "@/lib/env";

export async function sendMagicLink(formData: FormData) {
  const email = String(formData.get("email") || "").trim().toLowerCase();

  if (!email) {
    redirect("/entrar?estado=email");
  }

  // Verificar se o utilizador tem acesso (existe em public.users)
  const admin = createSupabaseAdminClient();
  
  const { data: userAccess } = await admin
    .from("users")
    .select("email")
    .eq("email", email)
    .single();

  if (!userAccess) {
    redirect("/entrar?estado=sem_acesso");
  }

  // Enviar magic link com PKCE flow (sem flowType implicit)
 const { createClient } = await import("@supabase/supabase-js");
const otpClient = createClient(
  requiredEnv("NEXT_PUBLIC_SUPABASE_URL"),
  requiredEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY")
    }
  });

  if (error) {
    redirect("/entrar?estado=erro");
  }

  redirect("/entrar?estado=enviado");
}
