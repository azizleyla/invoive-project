import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyles } from "./components/Globalstyle";
import InvoiceDetails from "./components/invoices/InvoiceDetails";
import InvoiceLists from "./components/invoices/InvoiceLists";
import PageHeader from "./components/PageHeader";
import Demo from "./components/sidebar/Demo";
import Sidebar from "./components/sidebar/Sidebar";
import { light, dark } from "./components/Theme";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const [isShowAddForm, setIsShowAddForm] = useState(false);
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <>
        <GlobalStyles />

        <div className={isShowAddForm ? "overlay" : ""}></div>
        <div className="row">
          <Sidebar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home
                  isShowAddForm={isShowAddForm}
                  setIsShowAddForm={setIsShowAddForm}
                />
              }
            />
            <Route path="/invoice-details" element={<InvoiceDetails />} />
          </Routes>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
