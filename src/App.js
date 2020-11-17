import Navigation from "../src/Components/Shared/Navigation/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import Notfound from "./Components/NotFound/Notfound";
import ApartmentDetails from "./Components/ApartmentDetails/ApartmentDetails";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/apartment-details" component={ApartmentDetails} />
          <Route exact path="*" component={Notfound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
