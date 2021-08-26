/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import { useMutation, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAll } from '../GraphQL/query';
import { DELETE_USER } from '../GraphQL/mutaion';
// eslint-disable-next-line import/no-cycle
import { MainContext } from '../../App';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Students = () => {
  const { loading, data } = useQuery(getAll);
  const [deleteUser] = useMutation(DELETE_USER);
  const { setUpdatedId } = useContext(MainContext);

  const removeUser = (id) => {
    deleteUser({
      variables: {
        id,
      },
    });
  };

  return (
    <div>
      {
                loading ? <LoadingSpinner />
                  : (
                    <div className="table-responsive">

                      <table className="table table-sm container mb-5 mt-3">
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
                                    data.getAll.map((d) => (
                                      <tr>

                                        <th>{d.name}</th>
                                        {' '}
                                        <th>
                                          {d.email}
                                          {' '}
                                        </th>
                                        <th>
                                          {d.date}
                                          {' '}
                                        </th>
                                        <th>
                                          {d.phone}
                                          {' '}
                                        </th>
                                        <th>
                                          {
                                                d.subject.map((s) => <li style={{ listStyle: 'none' }}>{s}</li>)
                                            }

                                        </th>

                                        <th>
                                          <FontAwesomeIcon icon={faTrash} onClick={() => removeUser(d.id)} className="text-danger" />
                                          <Link to="/update">
                                            <FontAwesomeIcon icon={faEdit} onClick={() => setUpdatedId(d.id)} className="text-dark ms-3" />

                                          </Link>
                                        </th>

                                      </tr>
                                    ))
                                }
                        </tbody>
                      </table>
                    </div>
                  )
            }
    </div>
  );
};

export default Students;
