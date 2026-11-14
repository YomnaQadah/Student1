import React, { useEffect, useState } from 'react'

const StudentForm = ({saveStudent,editStudent}) => {
    // variables 
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [major,setMajor]=useState("")

    useEffect(()=>{
if(editStudent){
setName(editStudent.name)
setAge(editStudent.age)
setMajor(editStudent.major)
}
    } ,[editStudent])

    const handleButton =()=>{ 
     
         saveStudent({
        id:editStudent?.id,
        name,
        age,
        major
    })
    setName("")
    setAge("")
    setMajor("")}
  
  return (<>
     {editStudent?<h5>edit student</h5>:<h5>add student</h5>}
    <div className='d-flex gap-2 mt-4'>
      <input type="text" placeholder='name' value={name} 
      className='form-control' onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder='age' value={age}
       className='form-control' onChange={(e)=>setAge(e.target.value)}/>
      <input type="text" placeholder='major' value={major} 
      className='form-control' onChange={(e)=>setMajor(e.target.value)}/>
      <button
      onClick={handleButton}
      className='btn btn-primary'
     type='button'
      >save </button>
    </div></>
  )
}

export default StudentForm
