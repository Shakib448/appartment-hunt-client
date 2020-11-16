import Navigation from "../src/Components/Shared/Navigation/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Home />
      </Router>
    </>
  );
}

export default App;
