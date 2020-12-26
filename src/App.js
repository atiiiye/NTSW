

//import Routes
import PrivateRoute from "./Routes/PrivateRoute ";
import PublicRoute from "./Routes/PublicRoute";
import { Redirect, Route, Switch } from "react-router-dom";

// import packages
import "font-awesome/css/font-awesome.min.css";

//components
import SelectRole from './Components/SelectRole/SelectRole';
import DefultPage from './Components/Users/DefaultPage';
import Home from './Components/Home';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/select-role" component={SelectRole} />
      <Route exact path="/DefultPage" component={DefultPage} />
    </Switch>
  );
}

export default App;
