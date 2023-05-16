import { useState } from "react";
import "./styles.css";
export default function App() {
  const videos = {
    deer:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider:
      "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
  };
  const [colors,setcolor]=useState(videos.deer);
  console.log(videos.deer);
  function handlechange(){
    const vals=document.querySelector("input[type='radio'][name=type]:checked").value;
    setcolor(videos[vals]);
  }
return(
  <>
  <input type="radio" name="type" value="deer" onClick={handlechange}/>deer
  <input type="radio" name="type"  value="snail" onClick={handlechange}/>snail
  <input type="radio" name="type" value="cat" onClick={handlechange} />cat
  <input type="radio" name="type" value="spider" onClick={handlechange} />spider
  <br/>
  <br/>
  <div className="card" >
  <video loop controls autostart="true" autoPlay muted src={colors} />
  </div>
  </>
);


}
