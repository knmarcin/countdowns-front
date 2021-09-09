import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <div className="App">
            <h4>Hello World!</h4>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
