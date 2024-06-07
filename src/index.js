import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

//import './index.css';

//import App from './App';
// import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

class Apps extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Apps />)   */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import Apps from './routertt/Apps' 

//import Tableform from './formtable/Ftapp'

 //import './loginform/Login.css'
 //import './loginform/Register.css'
//import Login from './loginform/LRapp'

ReactDOM.render(<Apps />, document.getElementById('root')) 
