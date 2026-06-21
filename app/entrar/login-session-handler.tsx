"use client";

import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

export function LoginSessionHandler() {
  useEffect(() => {
    async function handleMagicLinkHash() {
      const hash = window.location.hash;

      if (!hash || !hash.includes("access_token")) {
        return;
      }

      const params = new URLSearchParams(hash.replace(/^#/, ""));
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");

      if (!accessToken || !refreshToken) {
        window.location.replace("/entrar?estado=erro");
        return;
      }

      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || "",
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
      );

      const { error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken
      });

      if (error) {
        window.location.replace("/entrar?estado=erro");
        return;
      }

      window.history.replaceState(null, "", "/entrar");
      window.location.replace("/agenda");
    }

    handleMagicLinkHash();
  }, []);

  return null;
}

export function hasMagicLinkHash() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.location.hash.includes("access_token");
}
