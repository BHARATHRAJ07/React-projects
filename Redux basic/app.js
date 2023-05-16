import './App.css';
import Car from './car.js';
import Login from './loginpage';
// import { BrowserRouter, Routes, Route,Link ,Outlet} from "react-router-dom";
// import { ReactSession } from 'react-client-session';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,Component}from 'react';
const data=["Anbu","pandiya","arjun","Bharath"];

class App extends Component{
render(){
  return(
<>
<h2>Hello</h2>
<Car/>
</>
  );
  }
}
  export default App;
