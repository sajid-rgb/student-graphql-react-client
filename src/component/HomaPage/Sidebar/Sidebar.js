import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="d-flex flex-md-column flex-row justify-content-md-start justify-content-between mt-md-5 mt-3 ms-md-5 ms-2 sidebar">
    <Link to="/input" className="link"><h5 className="nav-bar">Home</h5></Link>
    <div className="d-flex flex-md-column flex-row">
      <Link to="/student" className="link"><h5 className="nav-bar me-2">Students</h5></Link>
      <Link to="/subject" className="link"><h5 className="nav-bar me-2">Subject</h5></Link>
    </div>

  </div>
);

export default Sidebar;
