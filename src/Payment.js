// => imports
import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';

// => URLs
const BASE_URL = 'http://localhost:3000'
const CHARGES_URL = BASE_URL + '/charge_adapter'

// => app component
export default function Payment(props) {

    // const [price, setPrice] = props.total
    const price = props.total

    // const handlePrice = (event) => {
    //     setPrice(props.total)
    // }

    const onToken = (token) => {

        const charge = {
            token: token.id
        };

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ charge: charge, price: price * 100 })
        };

        fetch(CHARGES_URL, config)
        .then(res => res.json())
        .then(console.log)
    }

    return (
        <div>
            {/* <form> */}
                {/* <p>Price: {price}</p> */}
                {/* <input
                    type="number"
                    value={ price }
                    // onChange={ handlePrice }
                />
            </form> */}

            <StripeCheckout
                token={onToken}
                // stripeKey={process.env.STRIPE_KEY}
                stripeKey={'pk_test_IPcPeFrETWjmr9mFIYFwZlqn00nfwg4xZi'}
            />
        </div>
    )
}
