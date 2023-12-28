"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const checkout_1 = require("./checkout");
exports.app = express_1.default();
// Allows cross origin requests to the api
const cors_1 = __importDefault(require("cors"));
exports.app.use(cors_1.default({ origin: true }));
// middleware to enable json parsing from default strings
exports.app.use(express_1.default.json());
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
// checkoiuts takes json body of line items and returns a stripe checkout session
exports.app.post('/checkouts/', runAsync(async ({ body }, res) => {
    res.send(await checkout_1.createStripeCheckoutSession(body.line_items));
}));
//# sourceMappingURL=api.js.map