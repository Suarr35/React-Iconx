import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import MovieBooking from './MovieBooking.js';
import Loginf from './Loginform.js'
import './App.css'

class Apps extends Component {
  render() {
    return (
      <Router>
        <div>
        <h2>Movie Ticket Booking System</h2>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/admin'>Admin</Link></li>
          <li><Link to='/movie'>Book Movie</Link></li>
          <li> <Link to='/about'>About</Link></li>
        </ul>
        </div>
      

      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/admin' element={<Loginf />} />
      <Route path='/movie' element={<MovieBooking />} />
      <Route path='/about' element={<About/>} />
    
      </Routes>
      </Router> 

  /* Bootstrap    
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          { <BrowserRouter>
          </BrowserRouter> }
          <Routes>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Routes>
        </div>
      </Router>   */
    );
  }
}

export default Apps;