import React, {useState} from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  
} from "@stripe/react-stripe-js";
import "bootswatch/dist/lux/bootstrap.min.css";

/* Variable para conectarse a Stripe */
const stripePromise = loadStripe(
  "process.env.REACT_APP_STRIPE_KEY"
);

/* Funcion formulario de pago */
const CheckoutForm = () => {
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const item = {
      price: "price_1Kmd3IDjIaCZ8ivK9L7ZbYPQ",
      quantity: 1
    };
  
const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`
      };
 const redirectToCheckout = async () => {
        setLoading(true);
        console.log("redirectToCheckout");
    
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        console.log("Stripe checkout error", error);
    
        if (error) setStripeError(error.message);
        setLoading(false);
      };
    
      if (stripeError) alert(stripeError);
    
  /* Funcion para capturar la informacion del imput*/
   const handleSubmit = async (event) => {
    event.preventDefault();

    /* Variable informacion del pago*/
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log(paymentMethod);
    }
  };

  return (
    <button onClick={handleSubmit}  disabled={isLoading} className="checkout-button">
      <img
        src="https://m.media-amazon.com/images/I/61nWszKX1-L._AC_SL1500_.jpg"
        alt="Krom Kluster Keyboard"
        className="img-fluid"
      />

      <div className="form-group">
        <CardElement className="form-control" />
      </div>

      <button className="btn btn-success">Comprar</button>
    </button>
  );
};
/* funcion del componente*/
export const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
  );
};
