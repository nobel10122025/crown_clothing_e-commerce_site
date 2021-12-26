import React from 'react'
import StripeCheckoutOut from 'react-stripe-checkout';
function StripButton({price}) {
    const priceForStripe= price *100;
    const publishableKey = 'pk_test_51KAv6jSJ4p3rdRSWwbTKawkBkGpcNJP1Z6YobZWqYhyyIChqKoXSyqQpFaNRzxYKQVPrDcetxqdjifAQ6bSsq08m00uhjBJDBr'
    const onToken = (token) => {
        console.log(token)
        alert("Payment Successful")
    }
    return (
        <div>
            <StripeCheckoutOut 
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
        </div>
    )
}

export default StripButton
