import { useEffect, useState } from "react";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login_form from "./pages/Login";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://campus-project.herokuapp.com/student")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className="App">
        <div className="side_img">
          <img src={logo}></img>
        </div>
        <div>
          <Login_form/>
        </div>
    </div>
  );
}

export default App;
