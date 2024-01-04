import { stripe } from './';
import Stripe from 'stripe';
import {sendRawEmail} from './sendEmail';
import { fileToBase64 } from './base64Converter';
import {getAllFromPrices} from './database';


export const handleStripeWebhook = async(req, res) => {
    // grab signature stripe attached to the request
    const sig = req.headers['stripe-signature'];
    // convert all rawbody data to json, uses signature and wh secret key for verification
    const event = stripe.webhooks.constructEvent(req['rawBody'], sig, process.env.STRIPE_WEBHOOK_SECRET);
    
    // handle different types of webhook events
    try {
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;

            // get email entered during payment
            const orderEmail = session.customer_details.email;
            console.log('Email:', orderEmail);

            // retrieve line_items
            const id = session.id;
            const purchasedItems = (await stripe.checkout.sessions.listLineItems(id)).data;

            // Extract price IDs from purchased items
            const priceIds = purchasedItems.map(item => item.price.id);
            
            // Access database to retrieve the proper files based on priceid
            const filePaths = await getAllFromPrices(priceIds);
            
            // email the products with AWS SES one by one since 10MB limit
            const sender = "trikenotbike@gmail.com";
            const subject = "Your Beat";
            const text = "Thank you for your order from Iziche Beats!";
            filePaths.forEach(item => sendRawEmail(sender, orderEmail, subject, text, item.title, fileToBase64(item.file_path)));
            

          }
        res.send({received: true});
    } catch (err) {
        console.error(err)
        res.status(400).send(`Webhook Error: ${err.message}`);
    }
}

