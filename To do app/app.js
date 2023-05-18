import './App.css';
// import Car from './car.js';
// import Login from './loginpage';
// import {Form,Row,Col,InputGroup} from 'react-bootstrap';
// import { BrowserRouter, Routes, Route,Link ,Outlet} from "react-router-dom";
// import { ReactSession } from 'react-client-session';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect}from 'react';
function App(){

 const styles={
  // border:"solid 5px blue",
  cursor:"pointer"
 }; 

 const [dat,setdat]=useState([]);
 const [type,settype]=useState("All");
 const [dt,setdt]=useState("");
 
 useEffect(() => {
  getData(type);
}, []);

function getData(){
  if(localStorage.getItem("taskdata")!=null){
    const fdata=JSON.parse(localStorage.getItem("taskdata") || "[]");
    setdat(fdata);
  }
}
function typedata(types){
  document.getElementById("all").style.border="none";
  document.getElementById("active").style.border="none";
  document.getElementById("completed").style.border="none";
if(types=="All"){
    settype("All");
    getData();
    document.getElementById("all").style.border="solid 5px blue";
  }
  else if(types=="active"){
  settype("active");
  getData();
  document.getElementById("active").style.border="solid 5px blue";
}else if(types=="done"){
settype("completed");
getData();
document.getElementById("completed").style.border="solid 5px blue";
}


}

function handlechange(index){
// alert(index);
let ind;
dat.map((val,i)=>{
if(i==index){
ind=i;
}
})

// console.log("Before update: ", dat[ind]);

//Update object's name property.
dat[ind].status = "done";
//Log object to console again.
// console.log("After update: ", dat);
localStorage.setItem("taskdata", JSON.stringify(dat));
getData("ALL");
}


 function submit(){
  let task=document.getElementById("tasks").value;
  if(task!==""){
  const data=[];
  const obj={
  date:(new Date()).toLocaleDateString(),
  task:task,
  status:"active"
  };
  if(localStorage.getItem("taskdata")!=null){
  let datas=JSON.parse(localStorage.getItem("taskdata") || "[]");
  for(let i=0;i<datas.length;i++){
    data.push(datas[i]);
  }
data.push(obj);
  }else{
    data.push(obj);
  }
localStorage.setItem("taskdata", JSON.stringify(data));
setdat(data);
 console.log(data);
 document.getElementById("tasks").value="";
}else{
alert("input is Emprty");
}
 }
function getdate(){
let date=document.getElementById("dates").value;
let convtdata=new Date(date);

if(convtdata!="Invalid Date"){setdt(convtdata.toLocaleDateString())}else{
  setdt("")
}

}
return(
  <>
<div class='container mt-3'>
  <div class="card">
 <div class='card-header'><h1>Things to Do</h1>
 <div class="col-md-3">
  <input type='text' class="form-control" placeholder='Add new' id="tasks"/>
  </div>
<div class="float-end">
  <button class="btn btn-primary" onClick={submit}>ADD+</button>
 &nbsp;&nbsp;<input type="date" id="dates" onChange={getdate}/>
 {/* <button class="btn btn-primary">search</button> */}
 </div>
  </div>
  <br/>
  <div class="card-body" style={{height:500,overflowY:"scroll"}}>

  {dat.filter(vals => type=="completed"?(vals.status.includes('done')  && vals.date.includes(dt)):type=="active"?(vals.status.includes('active') && vals.date.includes(dt)):((vals.status=="done"|| vals.status=="active")&& vals.date.includes(dt))).map((val,index)=>(
    <div className='cards' key={index}>{val.status=="active"&& <input type="checkbox" onClick={()=>{handlechange(index)}}/>} &nbsp;<b>{(val.task).toUpperCase()}</b> <br/>&nbsp;&nbsp;{val.date}<br/>
    &nbsp;&nbsp;<b style={{color:val.status=="active"?"red":"green"}}>{(val.status).toUpperCase()}</b></div>
  ))
   }
  </div>
  <div class="card-footer"> 
<span>{type!="completed" && <h4>{dat.filter(vals => type=="completed"?(vals.status.includes('done')  && vals.date.includes(dt)):type=="active"?(vals.status.includes('active') && vals.date.includes(dt)):((vals.status=="done"|| vals.status=="active")&& vals.date.includes(dt))).length} Tasks left</h4>}
 {type!="active" && <h4>{(dat.filter(vals=>(vals.status.includes('done')&& vals.date.includes(dt)))).length} Tasks Done</h4>}</span>
<div class="btn-group float-end">
<h2><span class="badge bg-secondary" style={styles}  onClick={()=>typedata("All")} id="all">ALL</span></h2> &nbsp;&nbsp;
<h2><span class="badge bg-secondary" style={styles} onClick={()=>typedata("active")} id="active">Active</span></h2> &nbsp;&nbsp;
<h2><span class="badge bg-secondary" style={styles} onClick={()=>typedata("done")} id="completed">Completed</span></h2>
</div>
  </div>
  </div>
</div>
  </>
);

}

  export default App;
