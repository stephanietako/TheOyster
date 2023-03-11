import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Oyster from "./components/Oyster";

// Pages
import Home from "./pages/Home";

// Styles
import "./App.scss";

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Oyster />
              <Home />
            </>
          }
        />
      </Routes>
    </Router>
  </div>
);

export default App;
