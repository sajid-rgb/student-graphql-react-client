import { useMutation, useQuery } from '@apollo/client';
import React, { useContext, useEffect, useState } from 'react';
import { getAll } from '../GraphQL/query';
import { defaults, Pie } from 'react-chartjs-2';
import { DELETE_USER, UPDATE_USER } from '../GraphQL/mutaion';
import { stud, stud2, stud3, stud4, stud5 } from '../Constant/Constant';
import { getAllData } from '../Constant/functions';
import { Link } from 'react-router-dom';
import { MainContext } from '../../App';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Students = () => {
    const { loading, error, data } = useQuery(getAll)
    const [deleteUser, { err }] = useMutation(DELETE_USER)
    const { updatedId, setUpdatedId } = useContext(MainContext)

    const removeUser = (id) => {
        deleteUser({
            variables: {
                id: id,
            },
        });
    };

    return (
        <div>
            {
                loading ? <LoadingSpinner /> :
                    <div className="table-responsive">

                        <table class="table table-sm container mb-5 mt-3">
                            <thead>
                                <tr>

                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date Of Birth</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Subjects</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.getAll.map(d => <tr>

                                        <th>{d.name}</th> <th>{d.email} </th>
                                        <th>{d.date} </th>
                                        <th>{d.phone} </th>
                                        <th>
                                            {
                                                d.subject.map(s => <li style={{ listStyle: "none" }}>{s}</li>)
                                            }

                                        </th>


                                        <th>
                                            <FontAwesomeIcon icon={faTrash} onClick={() => removeUser(d.id)} className='text-danger' />
                                            <Link to="/update" >
                                                <FontAwesomeIcon icon={faEdit} onClick={() => setUpdatedId(d.id)} className='text-dark ms-3' />

                                            </Link>
                                        </th>

                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default Students;