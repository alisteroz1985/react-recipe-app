import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Default from './pages/Default';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import {BrowserRouter as  Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
      <Router>
        <main>
          <Navbar/>
          <Switch>
            <Route path = "/" exact component={Home} />
            <Route path = "/recipes" exact component={Recipes} />
            <Route path = "/recipes/:id" exact component={SingleRecipe} />
            <Route component={Default} />
          </Switch>
        </main>  
      </Router>
  );
}

export default App;
