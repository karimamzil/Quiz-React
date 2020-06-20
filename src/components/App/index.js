import React from 'react';
import  '../../App.css';
import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Welcome from '../Welcome'
import Login from '../Login'
import SingnUp from '../SignUp'
import ErrorPage from '../ErrorPage'
import {BrowserRouter as Router,Route,Switch }  from 'react-router-dom';
function App() {
  return (
    <Router>
      
      <Header/>
      <Switch>
      <Route  exact path="/" component={Landing}/>
      <Route   path="/Welcome" component={Welcome}/>
      <Route   path="/Login" component={Login}/>
      <Route   path="/SignUp" component={SingnUp}/>
      <Route    component={ErrorPage}/>
      </Switch>


      <Footer/>
    </Router>
  );
}

export default App;
