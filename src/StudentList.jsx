
const StudentList = ({ editing, deleteStudent, students }) => {
    return (
        <div>
            <h5 className="my-4">Student List</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Major</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => 
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.major}</td>
                            <td>
                                <button
                                onClick={()=>editing(student)}
                                    className="btn btn-warning ">Edit</button>
                                <button
                                onClick={()=>deleteStudent(student.id)}
                                className="btn btn-danger ms-3">Delete</button>
                            </td>
                        </tr>

                    )}
                </tbody>
            </table>
        </div>
    )
}

export default StudentList
