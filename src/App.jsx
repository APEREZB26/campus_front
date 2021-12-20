import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://campus-project.herokuapp.com/student")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <ul className="flex flex-wrap">
          {students.map((student) => (
            <li>
              <p>
                {student.name} - {student.lastnames}
              </p>
              <p>{student.email}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
