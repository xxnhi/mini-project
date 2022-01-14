import React from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddNewBlog from './pages/AddNewBlog';
import BlogDetail from './pages/BlogDetail';


const App =() => {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login"><Login/></Route>
      <Route path="/new"><AddNewBlog/></Route>
      <Route path="/detail"><BlogDetail/></Route>

    </Switch>
  </Router>
}

export default App;
