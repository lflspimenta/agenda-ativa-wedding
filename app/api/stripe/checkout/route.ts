import { NextResponse } from "next/server";
import Stripe from "stripe";
import { requiredEnv } from "@/lib/env";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const stripe = new Stripe(requiredEnv("STRIPE_SECRET_KEY"));
  const { email } = await request.json().catch(() => ({ email: undefined }));
  const appUrl = requiredEnv("NEXT_PUBLIC_APP_URL");

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: email,
    line_items: [
      {
        price: requiredEnv("STRIPE_PRICE_ID"),
        quantity: 1
      }
    ],
    success_url: `${appUrl}/entrar?estado=enviado`,
    cancel_url: appUrl
  });

  return NextResponse.json({ url: session.url });
}
