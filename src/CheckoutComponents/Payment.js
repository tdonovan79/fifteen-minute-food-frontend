// => imports
import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';

// => URLs
const BASE_URL = 'http://localhost:3000'
const CHARGES_URL = BASE_URL + '/charge_adapter'

// => app component
export default function Payment(props) {

    const price = props.total
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
            <StripeCheckout
                token={onToken}
                stripeKey={'pk_test_IPcPeFrETWjmr9mFIYFwZlqn00nfwg4xZi'}
            />
        </div>
    )
}
