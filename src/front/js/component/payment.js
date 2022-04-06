import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KlcoTDjIaCZ8ivKJ7uBmV6bBluePd7rPDg2vscin7K5BnvJGgBxsPEyI4Nb1c7gTovHYByUH7SZ0bCoc298yhoJ00YLQ49ETM"
);

const CheckoutForm = () => {
  return (
    <form>
      <CardElement />
    </form>
  );
};

export const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <checkoutForm />
    </Elements>
  );
};
