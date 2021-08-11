import React from 'react';
import ReactDOM from 'react-dom';
// 1. soo dajiso react-router npm 
import {BrowserRouter as Router} from 'react-router-dom'
// Import React Router dom
import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work
//humi rooter app waa inaad humisaaa 
ReactDOM.render(
    <Router>
        <App />
    </Router>

, document.getElementById('root'));
