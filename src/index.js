import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Header from './components/header';
import LandingPage from './components/landingPage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


if (window.performance) {
  if (performance.navigation.type === 1) {
    localStorage.clear();
  } //else {
    //alert( "This page is not reloaded");
  //}
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
  <Header />
  <LandingPage />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
