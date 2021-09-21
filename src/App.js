import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Countdowns from "./pages/Countdowns";
import Countdown from "./pages/Countdown";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={Countdowns} />
          <Route path="/countdowns/:id" component={Countdown} />
        </div>
      </div>
    </Router>
  );
}

export default App;
