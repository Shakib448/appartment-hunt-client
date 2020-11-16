import Navigation from "../src/Components/Shared/Navigation/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navigation />
      </Router>
    </>
  );
}

export default App;
