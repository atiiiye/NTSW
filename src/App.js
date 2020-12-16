import './css/test.css'

//import Routes
import PrivateRoute from "./Routes/PrivateRoute ";
import PublicRoute from "./Routes/PublicRoute";
import { Redirect, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
      سامانه جامع تجارت ایران
        </a>
    </div>
  );
}

export default App;
