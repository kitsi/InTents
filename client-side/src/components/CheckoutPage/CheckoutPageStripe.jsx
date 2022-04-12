import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";

const StripeApiKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

const stripePromise = loadStripe(StripeApiKey);

function CheckoutPageStripe() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
}

export default CheckoutPageStripe;
