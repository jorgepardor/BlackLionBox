import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "bootswatch/dist/lux/bootstrap.min.css";

/* Variable para conectarse a Stripe */
const stripePromise = loadStripe(
  "pk_test_51KlcoTDjIaCZ8ivKJ7uBmV6bBluePd7rPDg2vscin7K5BnvJGgBxsPEyI4Nb1c7gTovHYByUH7SZ0bCoc298yhoJ00YLQ49ETM"
);

/* Funcion formulario de pago */
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

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
    <form onSubmit={handleSubmit} className="card card-body">
      <img
        src="https://m.media-amazon.com/images/I/61nWszKX1-L._AC_SL1500_.jpg"
        alt="Krom Kluster Keyboard"
        className="img-fluid"
      />

      <div className="form-group">
        <CardElement className="form-control" />
      </div>

      <button className="btn btn-success">Comprar</button>
    </form>
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
