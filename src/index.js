import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import Chatbox from './components/Chatbox';
import Jobstasy from './components/Jobstasy';
import reportWebVitals from './reportWebVitals';

const routing = (
  <BrowserRouter>
    <div id='routing-container'>
      <Route path='/' exact component={Home}></Route>
      <Route path='/projects/chatbox' exact component={Chatbox}></Route>
      <Route path='/projects/jobstasy' exact component={Jobstasy}></Route>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>{routing}</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
