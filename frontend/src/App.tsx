import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import { light, dark } from "./styles/theme";

import SideBar from "./components/SideBar";

import Entries from "./pages/Entries";
import Spents from "./pages/Spents";
import Login from "./pages/Login";
import Home from "./pages/Home/";

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entries" element={<Entries />} />
          <Route path="/spents" element={<Spents />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
