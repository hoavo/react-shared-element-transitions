import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/home";
import Profile from "pages/profile";
import Header from "components/Header";
import Transition from "hooks/transition";

function App() {
  return (
    <Router>
      <Header />
      <Transition />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
