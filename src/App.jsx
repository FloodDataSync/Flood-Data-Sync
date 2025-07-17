import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import theme, { themeConfig } from "./theme";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import ReportForm from "./pages/ReportForm.jsx";
import Validation from "./pages/Validation";
import Dashboard from "./pages/Dashboard";
import ApiOutput from "./pages/ApiOutput";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const globalStyles = {
  '*': {
    boxSizing: 'border-box',
  },
  html: {
    height: '100%',
  },
  body: {
    height: '100%',
    margin: 0,
    padding: 0,
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    background: themeConfig.gradients.background,
    minHeight: '100vh',
  },
  '#root': {
    height: '100%',
    minHeight: '100vh',
  },
  // Custom scrollbar
  '*::-webkit-scrollbar': {
    width: '5px',
    height: '8px',
  },
  '*::-webkit-scrollbar-track': {
    background: themeConfig.neutral[100],
    borderRadius: '4px',
  },
  '*::-webkit-scrollbar-thumb': {
    background: themeConfig.primary[300],
    borderRadius: '4px',
    '&:hover': {
      background: themeConfig.primary[400],
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/report" element={<ReportForm />} />
          <Route path="/validate" element={<Validation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/api" element={<ApiOutput />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}


export default App;
