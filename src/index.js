import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Garage from './components/Garage';
import Header from './components/Header';
import FavouriteColor from './components/FavouriteColor';
import Car1 from './components/Car1';
import Scooter from './components/Scooter';
import List from './components/List';
import Timer from './components/Timer';
import MyForm from './Forms/MyForms';
import Calculator from './calculator/cal';
import CustomerAdd from './Customer/CustomerAdd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Garage/> */}
    {/* <Header></Header> */}
    {/* <FavouriteColor/> */}
    {/* <Car1/> */}
    {/* <Scooter></Scooter> */}
    {/* <Timer></Timer>
    <List></List> */}
    {/* <MyForm></MyForm> */}
    {/* <Calculator></Calculator> */}
    <h1>React Redux Customer Example</h1>
    <CustomerAdd></CustomerAdd>
    </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
