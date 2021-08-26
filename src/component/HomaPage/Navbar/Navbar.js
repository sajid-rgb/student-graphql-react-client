import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="bg-success">
            <div className="d-flex align-items-center justify-content-between ms-2" style={{ height: "10vh" }}>
                <Link to="/input" className="link"><h5 className="nav-bar">Home</h5></Link>
                <div className="d-flex" ><Link to="/student" className="link"><h5 className="me-2 nav-bar">Students</h5></Link>
                    <Link to="/subject" className="link"><h5 className="me-2 nav-bar">Subject</h5></Link></div>

            </div>
        </div>
    );
};

export default Navbar;