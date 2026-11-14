
import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import StudentForm from './StudentForm'
import StudentList from './StudentList'

function App() {
  // variables 
const [students,setStudents]=useState([])
const [editStudent,setEditStudent]=useState(null)

// functions 
const saveStudent=(student)=>{
  if(student.id){
    // update
    setStudents(students.map((std)=>std.id == student.id?student:std))

setEditStudent(null)
  }
  else{
    // create 
       student.id=Date.now();
      setStudents([...students,student])
  }
}
const deleteStudent = (id)=>{
  setStudents(students.filter((std)=>std.id !== id))
}

const editing=(s)=>{
setEditStudent(s)
}
return(
<div className='container '>
<h5 className='text-center m-5'>Student info System </h5>
<StudentForm 
saveStudent={saveStudent} 
editStudent={editStudent}/>
<StudentList 
  editing={editing}
  deleteStudent={deleteStudent}
  students={students}/>
</div>)}
export default App
