import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Router from "./Router";
import theme from "./theme";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div style={{ minHeight: "calc(100vh - 100px)" }}>
            <NavBar />
            <Router />
          </div>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
