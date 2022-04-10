import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import PageContainer from "./PageContainer";

function App() {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <PageContainer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
