import { stripe } from './';
import Stripe from 'stripe';

/**
 * Creates and returns a Stripe Checkout session with line items as arguments 
**/
export async function createStripeCheckoutSession(
    line_items: Stripe.Checkout.SessionCreateParams.LineItem[]
) {
    // Example Item OUTDATED, no currency, amount, description, etc.
    // {    
    //   "price": "price_..", 
    //   "quantity": 1
    // }

    const url = process.env.WEBAPP_URL;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment', // add mode here in new update, payment is one time
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/failed`,
    });

    return session;
}

