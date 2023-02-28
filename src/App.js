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
    // axios.post(url+'/students/:id').then((res) => {
    //   console.log(res)
    // })
    // axios.delete(url+'/students/:id').then((res) => {
    //   console.log(res)
    // })
    // axios.post(url+'/students').then((res) => {
    //   console.log(res)
    // })
  }, [])

  // const deleteFunction = (e) => {
  //   console.log(e)
  //   // axios.delete(url+`/students/${e}`).then((res) => {
  //   //   console.log(res)
  //   // })
  // }
   
  // const addFunction = () => {
  //   axios.post(url+`/students/${e}`).then((res) => {
  //     console.log(res)
  //   })
  // }

  return (
    <div className="App">
      <Student students={students}/>
    </div>
  );
}

export default App;
