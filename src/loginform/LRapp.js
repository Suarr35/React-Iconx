import React  from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Loginf from './Loginform';
import Registerf from './Registerform';

function Lr() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginf />}></Route>
          <Route path='/Register' element={<Registerf />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Lr