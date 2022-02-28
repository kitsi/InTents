import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
