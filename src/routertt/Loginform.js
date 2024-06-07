import React from "react";
import {Link} from 'react-router-dom';
import Movie from './MovieBooking.js';
import './Login.css';

function Loginf()   {
    return(
        <div >
        <div id="bgl">
            <div class="flex-container">
            <form id="lgnform" action="MovieBooking.js" >
            <h1 id="heading">Login Form</h1>
                    <label>UserName:</label>
                    <input type="text" name="name" id="tbox" placeholder="Enter Registered UserName"  />

                    <label>Password:</label>
                    <input type="password" name="pwd" id="tbox" placeholder="Enter password" /><br></br>
                    <div align="center">
                    

                    <Link to={"/Movie"} >Login</Link>
                    </div>
            </form>
            </div>
            </div>
        </div>
    )
}  

export default Loginf
