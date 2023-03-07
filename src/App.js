import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Oyster from "./components/Oyster";

const App = () => {
  return (
    <div className="App">
      {/* <Oyster /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Oyster />
                <HomePage />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
