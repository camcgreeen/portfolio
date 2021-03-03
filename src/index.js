import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import reportWebVitals from './reportWebVitals';

const routing = (
  <BrowserRouter>
    <div id='routing-container'>
      <Route path='/' exact component={Home}></Route>
      <Route path='/projects/:name' exact component={ProjectDetail}></Route>
      <Route path='/contact' component={Contact}></Route>
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
