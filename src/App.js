import Navigation from "../src/Components/Shared/Navigation/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Router>
    </>
  );
}

export default App;
