import "./App.css";

import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Router from "./Router";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
