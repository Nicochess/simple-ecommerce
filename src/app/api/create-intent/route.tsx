import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET || "", {
  typescript: true,
  apiVersion: "2024-06-20",
});

export const POST = async (request: any) => {
  const data = await request.json();
  const amount = data.amount;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
    });

    return NextResponse.json(paymentIntent, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 400 });
  }
};
