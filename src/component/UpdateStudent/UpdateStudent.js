import { useMutation, useQuery } from '@apollo/client';
import moment from 'moment';
import Multiselect from 'multiselect-react-dropdown';
import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../App';
import { UPDATE_USER } from '../GraphQL/mutaion';
import { getAll } from '../GraphQL/query';
import Sidebar from '../HomaPage/Sidebar/Sidebar';
import './UpdateStudent.css'
const UpdateStudent = () => {
    const { loading, error, data } = useQuery(getAll)
    const {updatedId,setUpdatedId} = useContext(MainContext)
    const history = useHistory()
    const filterData = data?.getAll.find(d=>d.id===updatedId)
    console.log(filterData)
    const [selectedValue, setSelectedValue] = useState(filterData?.subject)
    const [startDate, setStartDate] = useState(new Date());
    const options = ["Bangla", "English", "Math", "Physics", "Islam"]
    const [upUser, { er }] = useMutation(UPDATE_USER)
    const [users, setUsers] = useState({
        name:filterData?.name,
        email:filterData?.email,
        phone:filterData?.phone,
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
        const newUsers = { ...users }
        newUsers.subject = removedItem
        setUsers(newUsers);
    }

    const handleRefactor=(value,name)=>{
        const newUsers = { ...users }
        newUsers[name] = value
        setUsers(newUsers);
    
       }
    
       const handleError=(error)=>{
    
        setErrorMessage(error)
    
    
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

    const updateUser = () => {
        upUser({
            variables: {
                id: updatedId,
                name: users.name,
                email:users.email,
                phone:users.phone,
                date: moment(startDate).format('DD/MM/YYYY'),
                subject: selectedValue
            },
        });
        history.push("/student")
            handleError("")
    };




    return (
        <div className="row">
            <div className="col-md-2 bg-success">
                <Sidebar />
            </div>
            <div className="col-md-10 bg-dark align-items-center">
                <div className="">
                    <div >
                        <h4 className='text-white'>Enter Updated Information here</h4>
                    </div>
                    <input type="text" value={users?.name} className="updated-input" placeholder="Enter Student Name" name="name" onChange={handleChange}/> <br />
                    <input type="text"   className="updated-input" placeholder="Enter Student email" name="email" onChange={handleChange}/><br />
                    <input type="text" className="updated-input" placeholder="Enter Student Phone Number" name="phone" onChange={handleChange}/> <br />
                    <div style={{ width: "40%" }}>
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
                    <button className="submit-button" onClick={updateUser}>Update Now</button>
                    {/* {
                    errorMessage && <p className="text-danger">{errorMessage}</p>
                } */}

                </div>
            </div>
        </div>

    );
};

export default UpdateStudent;