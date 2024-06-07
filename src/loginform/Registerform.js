import React from "react";
import {Link} from 'react-router-dom';

import './Register.css';

function Registerf() {
    return(
        <div id="bgr">
        <div class="flex-container">    
            <form id="regform" action="" >
            <h1 id="heading">Register Form</h1>
	            <label>User Name :</label><input type="text" name="name" id="tbox" placeholder="Enter UserName" required /><br></br>

	            <label>Email :</label>
                <input type="text" name="email" id="tbox" placeholder="Enter Email" required /><br></br>

	            <label>Create Password :</label> <input type="password" name="pwd" id="tbox" placeholder="Enter Password"required /><br></br>

	            <label>Phone Number :</label> <input type="number" name="phn" id="tbox"required /><br></br>

                <div align="center">
	            <input type="submit" name="submit" id="button" value="Register" /><br></br>

                <label>Already have an Account?</label>
                <Link to={"/MOvieBooking"} >Book Movie</Link>

                </div>
                    
            </form>
        </div>
        </div>
    )
}

export default Registerf