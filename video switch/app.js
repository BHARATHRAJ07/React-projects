import { useState } from "react";
const data = [
  {
    name: "bharath",
    age: "20"
  },
  {
    name: "shankar",
    age: "24"
  },
  {
    name: "Tharun",
    age: "27"
  },
  {
    name: "ganesh",
    age: "30"
  }
];

export default function App() {
  const [dat, setdat] = useState([]);

  function handlechange() {
    const text = document.getElementById("texts").value;
    console.log(text);
    const filtered = data.filter((val) => {
      return (text && (val.name===text.toLowerCase()||val.name.includes(text)));
    });
    setdat(filtered);
  }
  console.log(dat);
  return (
    <section>
      <input type="text" id="texts" onChange={handlechange} />
      <br />
      <br />
      {dat && dat.map((val, index) => <li key={index}>{val.name}</li>)}
    </section>
  );
}
