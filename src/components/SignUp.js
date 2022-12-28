import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';

import { footer } from './Footer';
import dolphinico from './images/contractorlogo-tiny.png';


const theme = createTheme();

async function signUp(credentials) {

    //http://ec2-44-197-178-102.compute-1.amazonaws.com/  AWS endpoint can be changed to localhost for testing
    return fetch('http://ec2-44-197-178-102.compute-1.amazonaws.com:8081/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}


export default function SignUp() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [chkpassword, setchkPassword] = useState();




    const handleSubmit = async e => {
        e.preventDefault();
        console.log(password, email);
        if (chkpassword === password) {
            alert("Confirmed password matched!")

            const token = await signUp({
                firstName,
                lastName,
                email,
                password
            });

            console.log(token, "token");
            window.alert('Successfully added')

        } else {

            alert("Confirmed passwword does not match!")
        }

        //setToken(token);
    }

    return (
        <div>
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

                                    <a className="nav-link dropdown-toggle" href="/" id="nav-dropdown" data-bs-toggle="dropdown"
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

                    <div className="nav-item dropdown active " style={{ "width": "170px", "height": "20px" }} >

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
                            <li><a className="dropdown-item" href="/">Logout</a></li>
                        </ul>

                    </div>

                </nav>

            </header>
            <main role="main">
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth='xs'>
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Grid container spacing={2}>
                                <Typography variant='h1' component='h5'>
                                    Sign Up
                                </Typography>

                                <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete='first-name'
                                                name="firstName"
                                                onChange={(e) => setFirstName(e.target.value)}
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                autoFocus
                                            />

                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete='last-name'
                                                name="lastName"
                                                onChange={(e) => setLastName(e.target.value)}
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                autoFocus
                                            />

                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                onChange={(e) => setEmail(e.target.value)}
                                                name="email"
                                                autoComplete='email'
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="password"
                                                type="password"
                                                onChange={(e) => setPassword(e.target.value)}
                                                label="Password"
                                                id="password"
                                                autoComplete='new-password'
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="chkpassword"
                                                type="password"
                                                onChange={(e) => setchkPassword(e.target.value)}
                                                label="Confirm Password"
                                                id="chkpassword"
                                                autoComplete='chk-password'
                                            />
                                        </Grid>



                                        <Grid item xs={12}>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="I want to receive inspiration, marketing promotions and updates via email." />


                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}>
                                        Sign Up
                                    </Button>
                                    <Grid item>
                                        <Link
                                            to="/SignInLink"

                                        >
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Box>

                            </Grid>
                        </Box>

                    </Container>
                </ThemeProvider>
            </main>
            {footer}
        </div>

    )
}
