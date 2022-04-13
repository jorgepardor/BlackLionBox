import React from "react";
import { Context } from "../store/appContext.js";
import "bootswatch/dist/lux/bootstrap.min.css";

/* Abrimos el componente */
export const Payment = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <img
        src="https://m.media-amazon.com/images/I/61nWszKX1-L._AC_SL1500_.jpg"
        alt="Krom Kluster Keyboard"
        className="img-fluid"
      />

      <div className="form-group">
        <CardElement className="form-control" />
      </div>

      <button
        type="button"
        onClick={() => {
          actions.pay(codigo_stripe, store.user_id);
        }}
        className="btn btn-success"
        id="pay"
      >
        Comprar
      </button>
    </div>
  );
};
