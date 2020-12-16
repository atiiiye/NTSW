import './css/test.css'

//import Routes
import PrivateRoute from "./Routes/PrivateRoute ";
import PublicRoute from "./Routes/PublicRoute";
import { Redirect, Route, Switch } from "react-router-dom";

//components
import SelectRole from './Components/SelectRole/SelectRole';


function App() {
  return (
    <switch>
      <Route exact path="/select-role" component={SelectRole}/>
    </switch>
  );
}

export default App;
