"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentIntent = void 0;
const _1 = require("./");
/**
 * Create a Payment Intent with a specific amount and export it
 */
async function createPaymentIntent(amount) {
    // returns both an id and a status, the status will change over its lifecycle
    const paymentIntent = await _1.stripe.paymentIntents.create({
        amount,
        currency: 'cad',
    });
    paymentIntent.status;
    return paymentIntent;
}
exports.createPaymentIntent = createPaymentIntent;
//# sourceMappingURL=payments.js.map