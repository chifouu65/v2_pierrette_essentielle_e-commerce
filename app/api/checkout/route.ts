import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
    const body = await req.json();
    
    if (body.line_items.length === 0) {
        return new NextResponse("Error", { status: 405 });
    }

    try {
        const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET ?? '', {
            apiVersion: '2022-11-15'
        })
        const session = await stripe.checkout.sessions.create({
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
            line_items: body.lineItems,
            mode: 'payment'
        })
        return NextResponse.json({ session })
    } catch (error) {
        console.log('BROKED')
        console.log(error)
        return new Response('Error', {
            status: 405,
        });  
    }
}