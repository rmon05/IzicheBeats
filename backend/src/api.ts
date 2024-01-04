import express, { Request, Response, NextFunction } from 'express';
import { createStripeCheckoutSession } from './checkout';
import { handleStripeWebhook } from './webhooks';
export const app = express();

// Allows cross origin requests to the api
import cors from 'cors';
app.use(cors({ origin: true }));

// middleware to enable json parsing from default string data form
// plus storing rawBody of json requests for webhook handling WAIT THIS MIGHT ALSO WORK 
app.use(express.json({
    verify: (req, res, buffer) => (req['rawBody'] = buffer),
}));


// helper for async
const runAsync = (callback: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
        callback(req, res, next).catch(next);
    };
}  

// API endpoints
// checkouts takes json body of line items and returns a stripe checkout session
app.post('/checkouts', runAsync(async ({ body }: Request, res: Response) => {
    res.send(await createStripeCheckoutSession(body.line_items));
}));
// handle webhooks
app.post('/hooks', runAsync(handleStripeWebhook));

