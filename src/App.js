import './App.css';
import Movies from './Components/Products/Movies';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";

import Headers from './Components/Header/header';
import MovieDetails from './Components/ProductsDetails/MovieDetails';
import Register from './Components/Register/register';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
      {/* <Router>

      <div className="container-fluid">
      
          <Switch>
            <Route path="/" exact component={Movies}/>
            <Route path="/details/:id" component={MovieDetails}/>
          </Switch>
      </div>
      </Router> */}
      <BrowserRouter>
        <Headers />
        <div className="container-fluid">
        <Switch>

            <Route exact path="/">
              <Movies />
            </Route>
            <Route path="/details/:id">
              <MovieDetails />
            </Route>
          
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
