import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'
import HomeImg from "../../images/home.png"
import "./Barrier.css"
const Barrier = () => {
    const [isTheme, setIsTheme] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 2000 })
        let timeout
        timeout = setTimeout(() => setIsTheme(true), 2000);
        return () => {
            clearTimeout(timeout);
        };

    })
    return (
        <div className={isTheme ? "row main" : "row bg-white"} style={{ height: '100vh' }}>
            <div className="col-md-7 d-flex align-items-center justify-content-center" data-aos='fade-right'>
                <img src={HomeImg} className="img-fluid" style={{width:"90%"}} />
            </div>
            <div className="col-md-5 d-flex flex-column  justify-content-center mt-md-2 mt-0" data-aos='fade-left'>
                <h4 className="text-muted mt-md-5 mt-0 ms-md-3 ms-1">Thank you for visiting our Website</h4>
                <div className="ms-md-2 ms-4">
                    <Link to="/student"> <button className="btn btn-primary mt-3 ms-5 w-50">Go Main Page</button></Link>
                    <Link to="/input"><button className="btn btn-secondary mt-3 ms-5 w-50">Create User Page </button></Link>
                </div>
            </div>
        </div>

    )
}

export default Barrier