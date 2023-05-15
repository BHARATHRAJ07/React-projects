import './App.css';
import Car from './car.js';
import Login from './loginpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState}from 'react';

function App() {
const [val,setval]=useState("");
function parse(str) {
  return Function(`'use strict'; return (${str})`)()
}

function handlesum(){
  console.log(parse(val));
  setval((parseFloat(parse(val))).toString());
}

return(
  <div className='container'>
<div class="calculator card">

<input type="text" class="calculator-screen z-depth-1" value={val}  id="out"disabled />

<div class="calculator-keys">
  <button type="button" class="operator btn btn-info" value="+" onClick={()=>setval(val+"+")}>+</button>
  <button type="button" class="operator btn btn-info" value="-" onClick={()=>setval(val+"-")}>-</button>
  <button type="button" class="operator btn btn-info" value="*" onClick={()=>setval(val+"*")}>&times;</button>
  <button type="button" class="operator btn btn-info" value="/" onClick={()=>setval(val+"/")}>&divide;</button>

  <button type="button" value="7" class="btn btn-light waves-effect"  onClick={()=>setval(val+"7")}>7</button>
  <button type="button" value="8" class="btn btn-light waves-effect"  onClick={()=>setval(val+"8")}>8</button>
  <button type="button" value="9" class="btn btn-light waves-effect"  onClick={()=>setval(val+"9")}>9</button>


  <button type="button" value="4" class="btn btn-light waves-effect"  onClick={()=>setval(val+"4")}>4</button>
  <button type="button" value="5" class="btn btn-light waves-effect"  onClick={()=>setval(val+"5")}>5</button>
  <button type="button" value="6" class="btn btn-light waves-effect"  onClick={()=>setval(val+"6")}>6</button>


  <button type="button" value="1" class="btn btn-light waves-effect" onClick={()=>setval(val+"1")}>1</button>
  <button type="button" value="2" class="btn btn-light waves-effect" onClick={()=>setval(val+"2")}>2</button>
  <button type="button" value="3" class="btn btn-light waves-effect"  onClick={()=>setval(val+"3")}>3</button>


  <button type="button" value="0" class="btn btn-light waves-effect"  onClick={()=>setval(val+"0")}>0</button>
  <button type="button" class="decimal function btn btn-secondary" value="." onClick={()=>setval(val+".")}>.</button>
  <button type="button" class="all-clear function btn btn-danger btn-sm" value="all-clear" onClick={()=>setval("")}>AC</button>

  <button type="button" class="equal-sign operator btn btn-secondary" value="=" onClick={()=>handlesum()}>=</button>
  <button type="button" class="\ operator btn btn-info" value="" onClick={()=>setval(val.slice(0, -1))}>Clear</button>

</div>
</div>
</div>
);
}

export default App;
