import {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('https://campus-project.herokuapp.com/student')
      .then(res => console.log(res))
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <li>
          {students.map(student => (
            <div>
              <p>{student.name} {student.lastNames}</p>
              <p>{student.email}</p>
            </div>
          ))}
          }
        </li>
      </header>
    </div>
  )
}

export default App
