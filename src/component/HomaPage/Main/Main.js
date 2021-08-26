import React from 'react';
// eslint-disable-next-line import/no-cycle
import Students from '../../Students/Students';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="row">
    <div className="col-md-2 bg-success">
      <Sidebar />
    </div>
    <div className="col-md-8 ">
      <Students />
    </div>
  </div>
);

export default Main;
