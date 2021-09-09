import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Countdowns from "./pages/Countdowns";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={Countdowns} />
        </div>
      </div>
    </Router>
  );
}

export default App;
