import './App.css';
import Movies from './Components/Products/Movies';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Headers from './Components/Header/header';
import MovieDetails from './Components/ProductsDetails/MovieDetails';

function App() {
  return (
    <>
      <Router>
      <Headers/>
      <div className="container-fluid">
        
          <Switch>
            <Route path="/" exact component={Movies}/>
            <Route path="/details/:id" component={MovieDetails}/>
          </Switch>
        

      </div>
      </Router>
    </>
  );
}

export default App;
