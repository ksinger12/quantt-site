import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index2.scss';

ReactDOM.render(
    <>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </>,
    document.getElementById('root')
);


// {/* <div className="container-fluid nav_bg">
//             <div className="row">
//                 <div className="col-10 mx-auto">
                    
//                 </div>
//             </div>
// </div> */}
