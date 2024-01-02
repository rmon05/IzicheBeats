"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const checkout_1 = require("./checkout");
const webhooks_1 = require("./webhooks");
exports.app = express_1.default();
// Allows cross origin requests to the api
const cors_1 = __importDefault(require("cors"));
exports.app.use(cors_1.default({ origin: true }));
// middleware to enable json parsing from default string data form
// plus storing rawBody of json requests for webhook handling WAIT THIS MIGHT ALSO WORK 
exports.app.use(express_1.default.json({
    verify: (req, res, buffer) => (req['rawBody'] = buffer),
}));
// API endpoints
exports.app.post('/test', (req, res) => {
    const amount = req.body.amount;
    res.status(200).send({ with_tax: amount * 7 });
});
// helper for async
const runAsync = (callback) => {
    return (req, res, next) => {
        callback(req, res, next).catch(next);
    };
};
// checkouts takes json body of line items and returns a stripe checkout session
exports.app.post('/checkouts', runAsync(async ({ body }, res) => {
    res.send(await checkout_1.createStripeCheckoutSession(body.line_items));
}));
// handle webhooks
exports.app.post('/hooks', runAsync(webhooks_1.handleStripeWebhook));
//# sourceMappingURL=api.js.map