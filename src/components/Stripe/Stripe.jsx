import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './Checkout';
const CLIENT_KEY = `sk_secret_51L51QMSJK4PR9O3A2GgL6680K0EMi4we31CEV2mkyBxWGSfBVzVcWwczCeYwHxNq9CmcoT1gVwcRTzTdTOgLFCHN00s1EvgbA4`

const stripePromise = loadStripe('pk_test_51L51QMSJK4PR9O3A1g3q6PAkvrpfXdeGdPuMvxskmNht7VemRQiTEAzQRUqTLq8lB9i5MwwFvo5Cl2r6VXZv4oWL00UqBQCpdp')
const Stripe = () => {
   const options = {
       clientSecret : CLIENT_KEY

   }
  return (
    <Elements stripe={stripePromise} options={options} >
       <CheckoutForm/>
  </Elements>
  )
}

export default Stripe