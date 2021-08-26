import React from "react"
import Input from "../../Input/CreateStudent.js"
import Students from "../../Students/Students.js"
import Sidebar from '../Sidebar/Sidebar.js'
const Main =()=>{


    return(
        <div className='row'>
            <div className='col-md-2 bg-success'>
             <Sidebar />
            </div>
            <div className='col-md-8 '>
              <Students />
            </div>
        </div>
    )
}

export default Main;