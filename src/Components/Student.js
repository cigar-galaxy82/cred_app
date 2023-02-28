import axios from "axios";
import { useEffect, useState } from 'react';
let url = "http://localhost:9000"


function Student({students}) {

  const [name, setName] = useState('')

  const [branch, setBranch] = useState('')

  const [regno, setRegno] = useState('')

   
  const addFunction = () => {
    if(name !== '' && branch !== '' && regno !== '' )
    axios.post(url+'/students', {
        name:name,
        branch:branch,
        regNo:regno
    }).then((res) => {
        console.log("added")
    })
  }

  function deleteFun(e) {
    axios.delete(url + `/students/${students[e.target.id]._id}`).then(res => {
        console.log(res)
        window.location.reload()
    })
    console.log("RUNNING")
  }

  return (
    <div className="App">
      <form className="addStudentForm">
        <input placeholder="Name" onChange={(e) => {setName(e.target.value)}}></input>
        <input placeholder="Branch" onChange={(e) => {setBranch(e.target.value)}}></input>
        <input placeholder="Registration No." onChange={(e) => {setRegno(e.target.value)}}></input>
        <button className='opButton' onClick={addFunction}>Add</button>
      </form>
      {students.map((student, i) => {
        return (
          <div key={i} className="studentBlock">
            <div>{student.branch}</div>
            <div>{student.regNo}</div>
            <div>{student.name}</div>
            <button className='opButton' id={i} onClick={(student) => deleteFun(student)}>delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default Student;
