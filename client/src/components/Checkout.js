import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE =
  'sk_test_51K8j97Dz5PQBtODXmW5TAiIdyt9SzOpmmncCQmRcuL6yyGvZG1FMrJUvNseULUWfnVHnfJZfeI3T2emiD7oc4ngb00vzETQP1q';

const onToken = (user, checkout) => (token) => checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) => (
  <StripeCheckout
    amount={amount * 100}
    token={onToken(user, checkout)}
    currency="EUR"
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
