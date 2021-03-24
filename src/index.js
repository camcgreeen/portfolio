import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Chatbox from './components/Chatbox';
import Jobstasy from './components/Jobstasy';
import ScrollToTop from './components/ScrollToTop';
import reportWebVitals from './reportWebVitals';

// var firebase = require('firebase/app');

import { firebase } from '@firebase/app';
require('firebase/firestore');

// firebase.initializeApp({
//   apiKey: 'AIzaSyDcG5oeS8TiyQ62rlNyEyRDimOYXVAnPFA',
//   authDomain: 'portfolio-6d7e1.firebaseapp.com',
//   projectId: 'portfolio-6d7e1',
//   storageBucket: 'portfolio-6d7e1.appspot.com',
//   messagingSenderId: '389882764684',
//   appId: '1:389882764684:web:4269f70291f987d2370aa9',
//   measurementId: 'G-6VC1ZMYG9Y',
// });

var firebaseConfig = {
  apiKey: 'AIzaSyDcG5oeS8TiyQ62rlNyEyRDimOYXVAnPFA',
  authDomain: 'portfolio-6d7e1.firebaseapp.com',
  projectId: 'portfolio-6d7e1',
  storageBucket: 'portfolio-6d7e1.appspot.com',
  messagingSenderId: '389882764684',
  appId: '1:389882764684:web:4269f70291f987d2370aa9',
  measurementId: 'G-6VC1ZMYG9Y',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const routing = (
  <BrowserRouter>
    <div id='routing-container'>
      <ScrollToTop>
        <Route path='/' exact component={Home}></Route>
        <Route path='/projects/chatbox' exact component={Chatbox}></Route>
        <Route path='/projects/jobstasy' exact component={Jobstasy}></Route>
      </ScrollToTop>
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
