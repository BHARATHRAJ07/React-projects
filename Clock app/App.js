import {useEffect,useState} from 'react';
import Clock from './clock';

function Time(){
const [ctime,settime]=useState(()=>new Date());
useEffect(()=>{
const id=setInterval(() => {
  settime(new Date());
}, 1000);
return ()=>clearInterval(id);
},[]);
return ctime;
}


function App(){
  const [color,setcolor]=useState("red");
  const time=Time();

  function handleclick(){
    const colors=document.getElementById("ccolor").value;
    if (colors== document.getElementById("select").value){
    document.getElementById("select").value=colors;
    }else{
alert("not found");
    }
    setcolor(colors);
    }
return(
<div>
  <input type="text" id="ccolor" />
  <button onClick={handleclick} >Change</button>
  <select onChange={e=>setcolor(e.target.value)} id="select">
  <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="orange">orange</option>
    </select>
  <Clock color={color} time={time.toLocaleTimeString()}/>
  <Clock color={color} time={time.toLocaleTimeString()}/>
  </div>
);
}
export default App;
