import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import Student from './Components/Student';
let url = "http://localhost:9000"


function App() {

  const [students, setStudents] = useState([])

  useEffect(() => {
    axios.get(url+'/students').then((res) => {
      console.log(res.data)
      setStudents(res.data)
    })
  }, [])

  return (
    <div className="App">
      <Student students={students}/>
    </div>
  );
}

export default App;
