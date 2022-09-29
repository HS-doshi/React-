/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
import React, { useState } from "react"
import ReactDom from "react-dom"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
//import { Second, Third } from "./test_compo";

/*unction alt(name) {
  alert("This is my External Event");
  console.log("Hello" + name)
}

function EventTest() {
  return <div><button onMouseOut={() => { alt("Heet!") }}>Click me to test a Event</button>
    <button onMouseOut={alt}>This is my second Event</button></div >
}
//Event is basic kind of Functionality.
//We have to pass event is JSS Curly braches.
ReactDom.render(<EventTest></EventTest>, document.getElementById("root"));


// Tag is used there are Jss Tag & this are javascript exible tag.
// exible stands for extensible markup language.
*/
function FormTest() {

  var [name, setName] = useState("Name");
  var [age, setAge] = useState("Age");

  return <><h1>Enter Your Name : </h1><input type="text" value={name} onChange={(e) => { setName(e.target.value); console.log(name) }}></input>
    <h1>Enter Your Age : </h1><input type="text" value={age} onChange={(e) => { setAge(e.target.value); console.log(age) }}></input>
    <button onClick={() => { console.log("My Name is : " + name + "My Age is : " + age) }}>Submit Data!</button>
  </>
}

function Sample1() {
  return <h1>This is Sample1 tag</h1>
}
function Sample2() {
  return <h1>This is Sample2 tag</h1>
}
function Sample3() {
  return <h1>This is Sample3 tag</h1>
}

function RoutingTest() {
  return <>
    <BrowserRouter>
      <nav>
        <Link to="/">First</Link>
        <Link to="test">second</Link>
        <Link to="test2">Third</Link>
        <Link to="test3">Fourth</Link>
      </nav>

      <Routes>
        <Route path="/" element={<FormTest></FormTest>} ></Route>
        <Route path="test" element={<Sample1></Sample1>}></Route>
        <Route path="test2" element={<Sample2></Sample2>}></Route>
        <Route path="test3" element={<Sample3></Sample3>}></Route>

      </Routes>
    </BrowserRouter>
  </>
}
ReactDom.render(<RoutingTest></RoutingTest>, document.getElementById("root"))