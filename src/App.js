import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
//komponensek
import Home from "./pages/Home/Home";



function App() {
  
 

  return (
    <div className="App">
     
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
