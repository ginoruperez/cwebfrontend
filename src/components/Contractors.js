import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';



import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Rating, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import dolphinico from './images/contractorlogo-tiny.png';
import { footer } from './Footer';

import useToken from './useToken';
import { Token } from '@mui/icons-material';
import SignIn from './SignIn';
import Main from './Main';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', type: 'number', width: 70 },
    { field: 'name', headerName: 'Company Name', width: 200 },
    { field: 'location', headerName: 'Location', width: 200 },
    {
        field: 'specialties',
        headerName: 'Specialties',
        width: 350,
    },
    {
        field: 'size',
        headerName: 'Staff Size',
        type: 'number',
        width: 100,
    },
    {
        field: 'rate',
        headerName: 'Rate',
        type: 'number',
        width: 100,
    },
    { field: 'owner', headerName: 'Owner', width: 200 },


];



export default function DataTable() {

    const [contractorData, setcontractorData] = useState([])
    const [isLoading, setLoading] = useState(true)

    
    useEffect(() => {
        axios.get('http://localhost:8080/contractorweb/contractors').then(res => {
            setcontractorData(res.data);
            setLoading(false)
        })
    }, [])

    const rows = contractorData

    const checkAuthenticate = () => {
        let username=localStorage.getItem('username') 

        if ( (typeof username === 'string' && username.trim().length === 0) || username==null) {
            console.log('string is empty');
            alert('Sign-In required for this page!');
            return < Main />  

          } else {
            { /* alert(username); */ }
          }
          
        
    }

    return (
        <div>
            {checkAuthenticate()}
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
                                    <a className="nav-link active" href="/Contractors">Contractors</a>

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

            <main role="main">

                <div className="container-fluid jumbotron jumbotron-team py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">Contractors List</h1>
                    </div>
                </div>

                <div className="container">




                    <div style={{ height: 800, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={20}
                            rowsPerPageOptions={[20]}
                            checkboxSelection
                        />
                    </div>

                </div>
            </main>
            {footer}
        </div>
    );
}