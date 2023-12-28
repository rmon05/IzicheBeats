import express, { Request, Response, NextFunction } from 'express';
import { createStripeCheckoutSession } from './checkout';
export const app = express();

// Allows cross origin requests to the api
import cors from 'cors';
app.use(cors({ origin: true }));

// middleware to enable json parsing from default strings
app.use(express.json());


// API endpoints
app.post('/test', (req: Request, res: Response) => {
    const amount = req.body.amount;
    res.status(200).send({ with_tax: amount * 7 });
});

// helper for async
const runAsync = (callback: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
        callback(req, res, next).catch(next);
    };
}  
// checkoiuts takes json body of line items and returns a stripe checkout session
app.post('/checkouts/', runAsync(async ({ body }: Request, res: Response) => {
    res.send(await createStripeCheckoutSession(body.line_items));
}));