import "./styles.css";
import {useState} from 'react';
const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];
export default function App() {
  const [image,setimage]=useState(0);
function handleinc(){
  if(image<images.length-1){
setimage(image+1);
  }
}
function handledec(){
  if(!image<=0){
    setimage(image-1);
  }
}
  return (
    <div className="App">
    <img src={images[image]} style={{
      width:200,
      height:200
    }}/>
    <br/>
    <button style={{width:100}} onClick={handledec}>-</button>
    <button style={{width:100}} onClick={handleinc}>+</button>&nbsp;
    <h1>{image+1} of {images.length}</h1>
    </div>
  );
}
