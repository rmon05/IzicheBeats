import React, { useState } from 'react';
import { fetchFromAPI } from '../helpers';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// PLACEHOLDER
const Checkout = () => {
    // const stripe = useStripe();
    const stripePromise = loadStripe('pk_test_51OS0vvAVvQlWf9IvcUcIgG6tsmisWkS2YLwR7fNHhTEP4S5mxi0mVdM7UnWODl9KqGRdSsJthwdmOnSIz1mMBXzR00pdgA4P2h');


    // temp product OUTDATED
    const [product, setProduct] = useState({
        // name: 'Hat',
        // description: 'Pug hat. A hat your pug will love.',
        images: [
        'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        ],
        // amount: 799,
        // currency: 'usd',
        // quantity: 0,
        price: "price_1OS194AVvQlWf9IvZRRVtlWq", // this is pineapple, edit
        quantity: 0,
    });

    const changeQuantity = (v) => setProduct({ ...product, quantity: Math.max(0, product.quantity + v) });

    const handleClick = async (event) => {
        const stripe = await stripePromise;

        // remove the images
        const body = { line_items: [{price: product.price, quantity: product.quantity}] }

        const { id: sessionId } = await fetchFromAPI('checkouts', {body});

        const { error } = await stripe.redirectToCheckout({sessionId,});

        if (error) {
            console.log(error);
        }
    };

    return (
        <>

            <div>
                <h3>{product.name}</h3>
                <h4>Stripe Amount: {product.amount}</h4>

                <img src={product.images[0]} width="250px" alt="product" />

                <button onClick={() => changeQuantity(-1)}> - </button>
                <span> {product.quantity} </span>
                <button onClick={() => changeQuantity(1)}> + </button>
            </div>

            <hr />

            <button
                onClick={handleClick}
                disabled={product.quantity < 1}>
                Start Checkout
            </button>
        </>
    );
}

export default Checkout;

export function CheckoutSuccess() {
    const url = window.location.href;
    const sessionId = new URL(url).searchParams.get('session_id');
    return <h3>Checkout was a Success! {sessionId}</h3>
}

export function CheckoutFail() {
    return <h3>Checkout failed!</h3>    
}