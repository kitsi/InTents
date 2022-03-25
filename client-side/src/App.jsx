import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Router from "./Router";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
