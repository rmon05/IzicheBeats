// Environment Variables (Stripe API Key)
import { config } from "dotenv"
if (process.env.NODE_ENV !== 'production') {
    config();
}

// Initialize stripe using api key from environment variables
import Stripe from "stripe";
export const stripe = new Stripe(process.env.STRIPE_SECRET, {
    apiVersion: '2023-10-16',
})

// Start the API with Express
import { app } from './api';
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API available on http://localhost:${port}`));



