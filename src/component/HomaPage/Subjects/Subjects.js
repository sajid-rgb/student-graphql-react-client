import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { getAllData } from '../../Constant/functions';
import { getAll } from '../../GraphQL/query';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import Sidebar from '../Sidebar/Sidebar';

const Subjects = () => {
  const [shoPie, setShowPie] = useState(false);
  const { loading, data } = useQuery(getAll);
  const [sub, setSub] = useState([]);
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (loading) {
      return 'loading';
    }

    const s = getAllData(data);
    setSub(s);
  }, [data]);

  const dat = {
    labels: [
      'Bangla',
      'English',
      'Math',
      'Physics',
      'Islam',
    ],
    datasets: [{
      label: 'My First Dataset',
      // eslint-disable-next-line max-len
      data: [sub[0]?.user.length, sub[1]?.user.length, sub[2]?.user.length, sub[3]?.user.length, sub[4]?.user.length],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(105, 120, 86)',
        'rgb(100, 100, 86)',
      ],
      hoverOffset: 4,
      height: '200px',

    }],
  };
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="row">
      <div className="col-md-2 bg-success">
        <Sidebar />
      </div>
      <div className="col-md-10">
        {
                    loading ? <LoadingSpinner />
                      : (
                        <div className="row container mx-auto">
                          <div className="col-md-6 d-flex flex-column  justify-content-center order-md-1 order-2">

                            <table className="table table-sm">
                              <thead>
                                <tr>
                                  <th scope="col" className="w-50">Subject</th>
                                  <th scope="col" className="w-100">Student</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                            sub.map((d) => (
                                              <tr>

                                                <th className="mt-5">{d.name}</th>
                                                <th>
                                                  {
                                                        d.user.map((s) => <li style={{ listStyle: 'none' }}>{s}</li>)
                                                    }
                                                </th>
                                              </tr>
                                            ))
                                        }
                              </tbody>
                            </table>

                          </div>

                          <div style={{ width: '50%' }} className="col-md-6 order-md-2 order-1 mt-5">
                            {
                                    shoPie ? (
                                      <Pie
                                        data={dat}
                                        width={1}
                                        height={150}
                                      />
                                    ) : (
                                      <div className="d-flex align-items-center justify-content-center">
                                        <button type="button" className="btn btn-success  mt-5" onClick={() => setShowPie(true)}>I Want to see Pie Chart?</button>
                                      </div>
                                    )
                                }

                          </div>
                        </div>
                      )

                }
      </div>
    </div>
  );
};

export default Subjects;
