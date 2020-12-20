import './css/test.css'

//import Routes
import PrivateRoute from "./Routes/PrivateRoute ";
import PublicRoute from "./Routes/PublicRoute";
import { Redirect, Route, Switch } from "react-router-dom";

// import packages
import "font-awesome/css/font-awesome.min.css";

//components
import SelectRole from './Components/SelectRole/SelectRole';


function App() {
  return (
    <Switch>
      <Route exact path="/select-role" component={SelectRole}/>
    </Switch>
  );
}

export default App;
