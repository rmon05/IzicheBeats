"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleStripeWebhook = void 0;
const _1 = require("./");
const sendEmail_1 = require("./sendEmail");
exports.handleStripeWebhook = async (req, res) => {
    // grab signature stripe attached to the request
    const sig = req.headers['stripe-signature'];
    // convert all rawbody data to json, uses signature and wh secret key for verification
    const event = _1.stripe.webhooks.constructEvent(req['rawBody'], sig, process.env.STRIPE_WEBHOOK_SECRET);
    // handle different types of webhook events
    try {
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            // get email entered during payment
            const orderEmail = session.customer_details.email;
            console.log('Email:', orderEmail);
            // retrieve line_items
            const id = session.id;
            const purchasedItems = (await _1.stripe.checkout.sessions.listLineItems(id)).data;
            // Extract price IDs from purchased items
            const priceIds = purchasedItems.map(item => item.price.id);
            // Access database to retrieve the proper files based on priceid
            // WIP
            // email the products with AWS SES
            sendEmail_1.sendEmail(orderEmail, "test");
        }
        res.send({ received: true });
    }
    catch (err) {
        console.error(err);
        res.status(400).send(`Webhook Error: ${err.message}`);
    }
};
//# sourceMappingURL=webhooks.js.map