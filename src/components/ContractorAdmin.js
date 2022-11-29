import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


import { useNavigate } from "react-router-dom";

import dolphinico from './images/contractorlogo-tiny.png';

function ContractorAdmin() {


    const navigate = useNavigate();

    const refreshPage = () => {
        window.location.reload(false);
    }


    const [contractorData, setcontractorData] = useState([])
    const [roleData, setroleData] = useState([])
    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        axios.get('http://localhost:8080/contractorweb/contractors').then(res => {
            setcontractorData(res.data);
            setLoading(false)
        })
    }, [])


    const checkAuthenticate = () => {
        let username = localStorage.getItem('username')
        let userid = localStorage.getItem('userid')

        if ((typeof username === 'string' && username.trim().length === 0) || username == null) {
            console.log('string is empty');
            alert('Sign-In required for this page!');

            // Somewhere in your code, e.g. inside a handler:
            navigate("/SignInLink");

        } else {

            axios.get('http://localhost:8080/contractorweb/contractors/role/' + userid).then(res => {
                setroleData(res.data);
                console.log('userid', userid.toString());
                console.log('role data', roleData);
                console.log('myrole ', roleData.name);
                console.log('RES VALUE ', res);


            }).catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    alert(error.response.status);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    alert(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    alert(error.message);
                }
                console.log(error.config);
                alert('Restricted page, for Admin only!')
                navigate("/");
            });




        }


    }

    return (<div>


        { /* {refreshPage} */}
        {checkAuthenticate()}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />

        <header>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={dolphinico} width="30" height="30" className="d-inline-block align-top" alt="K2G Contracting Logo" />
                        K 2 G Contractor Ltd.
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
                            <li className="nav-item">
                                <a className="nav-link" href="/Services">Services</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/Contractors">Contractors</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/AboutUs">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Contact">Contact</a>
                            </li>


                            <li className="nav-item dropdown">

                                <a className="nav-link dropdown-toggle active" href="/" id="nav-dropdown" data-bs-toggle="dropdown"
                                    aria-expanded="false" >
                                    Extras
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="nav-dropdown">
                                    <li><a className="dropdown-item" href="/Testimonial">Testimonial</a></li>
                                    <li><a className="dropdown-item" href="/Faq">FAQ</a></li>
                                    <li><a className="dropdown-item" href="/">External Links &raquo; </a>
                                        <ul className="submenu dropdown-menu">
                                            <li><a className="dropdown-item" target="_blank" href="https://www.seai.ie/" rel="noreferrer">SEAI Website</a></li>
                                            <li><a className="dropdown-item" href="/ContractorAdmin" >Contractor (Admin)</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>


                        </ul>

                    </div>
                </div>

                <div className="nav-item dropdown" style={{ "width": "170px", "height": "20px" }} >

                    <div className="profile-pic dropdown-toggle" data-bs-toggle="dropdown">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </div>


                    <ul className="dropdown-menu" aria-labelledby="nav-dropdown">
                        <li><a className="dropdown-item" href="/SignInLink">Sign-In</a></li>
                        <li><a className="dropdown-item" href="/SignUp">Sign-Up</a></li>
                        <li><a className="dropdown-item" href="/MyProfile">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="/SignOut">Logout</a></li>
                    </ul>

                </div>

            </nav>

        </header>



        <h2>Contractors:</h2>
        <Link to={'/addcontractor'}><font size="5">Register contractor</font></Link><br></br>
        <button onClick={refreshPage}>Click to reload!</button>
        <table align='center'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Specialties</th>
                    <th>Size</th>
                    <th>Rate</th>
                    <th>Owner</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {!isLoading ? contractorData.map(contractor => <RowCreator item={contractor} />) : ""}

            </tbody>
        </table>
        <br />
        <Link to={'/addcontractor'}><font size="5">Register contractor</font></Link>

    </div>)
}

function RowCreator(props) {

    var contractor = props.item;
    let id = contractor.id;

    return <tr>

        <td>{id}</td>
        <td>{contractor.name}</td>
        <td>{contractor.location}</td>
        <td>{contractor.specialties}</td>
        <td>{contractor.size}</td>
        <td>{contractor.rate}</td>
        <td>{contractor.owner}</td>
        <td><Link to={'/deletecontractor/' + id}>Delete</Link></td>
        <td><Link to={'/updatecontractor/' + id}>Update </Link></td>
    </tr>

}

export default ContractorAdmin;