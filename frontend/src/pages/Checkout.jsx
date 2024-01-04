import React, { useState } from 'react';
import { fetchFromAPI } from '../helpers';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// PLACEHOLDER
const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51OS0vvAVvQlWf9IvcUcIgG6tsmisWkS2YLwR7fNHhTEP4S5mxi0mVdM7UnWODl9KqGRdSsJthwdmOnSIz1mMBXzR00pdgA4P2h');


    // temp product1 OUTDATED
    const [product1, setProduct1] = useState({
        images: [
        'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        ],
        price: "price_1OUHRTAVvQlWf9Ivl7WaJWwL", // this is cold blooded
        quantity: 0,
    });
    const changeQuantity = (v) => setProduct1({ ...product1, quantity: Math.max(0, product1.quantity + v) });


    // temp product2 OUTDATED
    const [product2, setProduct2] = useState({
        images: [
        'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        ],
        price: "price_1OUM7oAVvQlWf9IvxOzajxBg", // this is changes
        quantity: 0,
    });
    const changeQuantity2 = (v) => setProduct2({ ...product2, quantity: Math.max(0, product2.quantity + v)});

    // click
    const handleClick = async (event) => {
        const stripe = await stripePromise;

        // remove the images
        const body = { line_items: [{price: product1.price, quantity: product1.quantity}, {price: product2.price, quantity: product2.quantity}] }
        body.line_items = body.line_items.filter((item) => item.quantity);
        const { id: sessionId } = await fetchFromAPI('checkouts', {body});

        const { error } = await stripe.redirectToCheckout({sessionId,});

        if (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-row">
            <div className='flex-1 mx-4'>
                <div>
                    <h3>{product1.name}</h3>
                    <h4>Cold Blooded - Iziche Beats {product1.amount}</h4>

                    <img src={product1.images[0]} width="250px" alt="product1" />

                    <audio controls>
                        <source src="" type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>

                    <button onClick={() => changeQuantity(-1)}> - </button>
                    <span> {product1.quantity} </span>
                    <button onClick={() => changeQuantity(1)}> + </button>
                </div>

                <hr />

                <button
                    onClick={handleClick}
                    disabled={product1.quantity < 1}>
                    Start Checkout
                </button>
            
            </div>

            <div className='flex-1 mx-4'>
        
                <div>
                    <h3>{product2.name}</h3>
                    <h4>Changes - Iziche Beats {product1.amount}</h4>

                    <img src={product2.images[0]} width="250px" alt="product1" />

                    <audio controls>
                        <source src={product2.audio} type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>

                    <button onClick={() => changeQuantity2(-1)}> - </button>
                    <span> {product2.quantity} </span>
                    <button onClick={() => changeQuantity2(1)}> + </button>
                </div>

                <hr />

                <button
                    onClick={handleClick}
                    disabled={product2.quantity < 1}>
                    Start Checkout
                </button>

            </div>
        </div>
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