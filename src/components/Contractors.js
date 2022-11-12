import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Rating, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import dolphinico from './images/dolphin.ico';
import { footer } from './Footer';


function Contractors() {

    const [contractorData, setcontractorData] = useState([])
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        axios.get('http://localhost:8080/contractorweb/contractors').then(res => {
            setcontractorData(res.data);
            setLoading(false)
        })
    }, [])

    return (<div>
        <header>

            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={dolphinico} width="30" height="30" className="d-inline-block align-top" alt="Celtic Sea Dive Shop Logo" />
                        Celtic Sea Dive Shop
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="nav navbar-nav mr-auto">
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">

                                <a className="nav-link dropdown-toggle" href="test.html" id="nav-dropdown" data-bs-toggle="dropdown"
                                    aria-expanded="false" >
                                    Courses
                                </a>

                                <ul className="dropdown-menu " aria-labelledby="nav-dropdown">
                                    <li><a className="dropdown-item" href="/OpenWater">Open Water</a></li>
                                    <li><a className="dropdown-item" href="/AdvOpenWater">Advanced Open Water</a></li>
                                    <li><a className="dropdown-item" href="/Rescue">Rescue Diving</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="/AllCourses">All Dive Courses</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/Products">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/AboutUs">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Contact">Contact</a>
                            </li>
                            <li className="nav-item dropdown">

                                <a className="nav-link dropdown-toggle" href="/" id="nav-dropdown" data-bs-toggle="dropdown"
                                    aria-expanded="false" >
                                    Extras
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="nav-dropdown">
                                    <li><a className="dropdown-item" href="/Testimonial">Testimonial</a></li>
                                    <li><a className="dropdown-item" href="/Faq">FAQ</a></li>
                                    <li><a className="dropdown-item" href="/">External Links &raquo; </a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a className="dropdown-item" target="_blank" href="https://www.padi.com/" rel="noreferrer">PADI Website</a></li>
                                            <li><a className="dropdown-item" target="_blank" href="https://www.daneurope.org/en/home" rel="noreferrer">DAN Website</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav-item dropdown" style={{ "width": "170px", "height": "20px" }} >

                    <div className="profile-pic dropdown-toggle" data-bs-toggle="dropdown" >
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>


                    <ul className="dropdown-menu" aria-labelledby="nav-dropdown">
                        <li><a className="dropdown-item" href="/SignInLink">Sign-In</a></li>
                        <li><a className="dropdown-item" href="/SignUp">Sign-Up</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="/">Logout</a></li>
                    </ul>

                </div>
            </nav>

        </header>

        <main role="main">

            <h2>Contractors:</h2>
            <table align='center'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Specialties</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading ? contractorData.map(contractor => <RowCreator item={contractor} />) : ""}

                </tbody>
            </table>
            <br />
            <Link to={'/AddContractor'}><font size="5">Register contractor</font></Link>
        </main>

        {footer}
    </div>)
}

function RowCreator(props) {

    var contractor = props.item;
    return <tr>
        <td>{contractor.id}</td>
        <td>{contractor.name}</td>
        <td>{contractor.location}</td>
        <td>{contractor.specialties}</td>
        <td><Link to={'/contractorDetails/' + contractor.id}>Add Data</Link></td>
        <td><Link to={'/analyze/' + contractor.id}>Analyze</Link></td>
    </tr>

}

export default Contractors;