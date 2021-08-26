import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import { CREATE_USER } from '../GraphQL/mutaion';
import { useMutation } from '@apollo/client';
import DatePicker from "react-datepicker";
import User from "../../images/user.jpg"
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import {
  useHistory
} from "react-router-dom";
import "./CreateStudent.css"
import Navbar from '../HomaPage/Navbar/Navbar';
const Input = () => {
    const [createUser, { err }] = useMutation(CREATE_USER)
    const [startDate, setStartDate] = useState(new Date());
    const history = useHistory()
    const options = ["Bangla", "English", "Math", "Physics", "Islam"]
    const [selectedValue, setSelectedValue] = useState({})
    const [users, setUsers] = useState({
        subject: selectedValue,
        date:startDate
    })
    const [errorMessage, setErrorMessage] = useState("")
    const onSelect = (selectedItem) => {
        setSelectedValue(selectedItem)
        handleRefactor(selectedItem,"subject")
        handleError("")
    }


    const onRemove = (removedItem) => {
        setSelectedValue(removedItem)
        handleRefactor(removedItem,"subject")
    }
    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const re = /\S+@\S+\.\S+/;
            const isEmailValid = re.test(e.target.value)
            if (isEmailValid) {
                handleRefactor(e.target.value,"email")
                handleError("")
            }
            else if(e.target.value===""){
                handleError("")
            }
            else {
                handleError("Enter valid email address")
            }
        }
        if (e.target.name === 'name') {
            handleRefactor(e.target.value,"name")
            handleError("")
        }
        if (e.target.name === 'phone') {
            const re = /^[+][8]{2}[0]{1}[1-9]{2}[0-9]{8}$/
            const isPhoneValid = re.test(e.target.value)
            if (isPhoneValid) {
                handleRefactor(e.target.value,"phone")
                handleError("")
            }
            else if(e.target.value===""){
                handleError("")
            }
            else {
                handleError("Please start with +880 then enter your next 10 digit of phone number")
            }
        }

    }
    const handleSubmit = () => {
        if (users.email && users.subject && users.name && users.subject.length > 0) {
            createUser({
                variables: {
                    name: users.name,
                    email: users.email,
                    phone:users.phone,
                    date:moment(startDate).format('DD/MM/YYYY'),
                    subject: users.subject

                }
            })
            history.push("/student")
            handleError("")
        }
        else {
            handleError("please fill all the field correctly")
        }
    }

    const handleRefactor=(value,name)=>{
        const newUsers = { ...users }
        newUsers[name] = value
        setUsers(newUsers);
    
       }
    
       const handleError=(error)=>{
        setErrorMessage(error)
     }

    return (
     <div>
        <div>
            <Navbar />
        </div>

        <div className="row bg-dark">
            <div className="col-md-6 bg-dark">
                <img src={User} className="img-fluid" />
            </div>
            <div className="col-md-6 d-flex align-items-center flex-column justify-content-center mt-md-0 mt-5 mb-md-0 mb-5">
                <div>
                    <h4 className='text-white'>Enter Student Information here</h4>
                </div>
                <input type="text" className="input" style={{ }} placeholder="Enter Student Name" name="name" onChange={handleChange} /> <br />
                <input type="text" className="input"  placeholder="Enter Student email" name="email" onChange={handleChange} /><br />
                <input type="text" className="input" placeholder="Enter Student Phone Number" name="phone" onChange={handleChange} /> <br />
                <div style={{ width: "80%" }}>
                    <Multiselect
                        isObject={false}
                        onRemove={onRemove}
                        placeholder="Assign Some Subjects"
                        avoidHighlightFirstOption={true}
                        style={{ backgroundColor: "red", borderRadius: '10px' }}
                        selectedValues={selectedValue}
                        onSelect={onSelect}
                        options={options}
                    />
                </div>
                <div className='d-flex flex-md-row flex-column mt-2 mb-2' >
                  <p className='text-white mt-md-0 mt-4 me-2'>Pick Your Date of Birth</p> 
                  <div className='ms-0'>
                  <DatePicker selected={startDate} onChange={(e) => setStartDate(e)} />
                  </div>
                </div>
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
                {
                    errorMessage && <p className="text-danger">{errorMessage}</p>
                }
            </div>
        </div>
        </div>

    );
};

export default Input;