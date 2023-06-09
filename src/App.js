import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={SearchPage} />
    </Router>
  );
};

export default App;
