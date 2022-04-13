const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      username: "",
      user_id: null,
      codigo_stripe: "",
    },
    actions: {
      pay: (codigo_stripe, user_id) => {
        let stripe = Stripe(
          "pk_test_51KlcoTDjIaCZ8ivKJ7uBmV6bBluePd7rPDg2vscin7K5BnvJGgBxsPEyI4Nb1c7gTovHYByUH7SZ0bCoc298yhoJ00YLQ49ETM"
        );
        stripe
          .redirectToCheckout({
            lineItems: [{ price: codigo_stripe, quantity: 1 }],
            mode: "subscription",
            successUrl:
              "https://3000-jmmonzonn-finalprojectbl-zeavhkau3qo.ws-eu39b.gitpod.io/success",
            cancelUrl:
              "https://3000-jmmonzonn-finalprojectbl-zeavhkau3qo.ws-eu39b.gitpod.io/cancel",
          })
          .then(function (result) {
            if (result.error) {
              var displayError = document.getElementById("error-message");
              displayError.textContent = result.error.message;
            }
          });
      },

      createUser: () => {},
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      validate: async () => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/validate",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        return data.validate;
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/signup")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
