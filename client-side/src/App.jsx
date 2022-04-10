import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import PageContainer from "./PageContainer";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <PageContainer />
          </Elements>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
