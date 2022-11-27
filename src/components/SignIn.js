import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Avatar, Container, CssBaseline, Box, Typography, TextField, Grid, FormControlLabel, Checkbox, Button } from '@mui/material';
import { Link } from "react-router-dom"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PropTypes from 'prop-types';

import { footer } from './Footer';
import dolphinico from './images/contractorlogo-tiny.png';

async function loginUser(credentials) {
    return fetch('http://localhost:8081/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(res => {

            if (res.ok)
                return res.json()
            else {
                alert("Incorrect Password/Email!, Try Again" + res.status);
                console.log(res.status)
            }

        })
        .catch(err => {
            console.log('err', err);


        })

}



export default function SignIn({ setToken }) {

    const [name, setUserName] = useState('');


    const handle = () => {
        localStorage.setItem('username', email);
    };


    const mytheme = createTheme();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        const token = await loginUser({
            email,
            password
        });

        if (token) {
            console.log(token, "token");
            setToken(token);

            console.log('the password is correct test atest')

        }

        else if (token === "User does not exist")
            console.log("User does not exist");

        else if (token === "Incorrect Password!, Try Again")
            console.log("User does not exist");

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
                <ThemeProvider theme={mytheme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'


                            }}>

                            <Avatar sx={{
                                m: 1, bgcolor: 'secondery.main'
                            }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant='h5'>
                                Sign in
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            autoFocus>

                                        </TextField>


                                    </Grid>

                                    <Grid item xs={12}>

                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            id="password"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            onChange={(e) => setPassword(e.target.value)}

                                            autoFocus>
                                        </TextField>

                                    </Grid>
                                    <FormControlLabel
                                        control={<Checkbox value="remmber" color="secondary" />}
                                        label="Remember me" />



                                    <Button
                                        type='submit'
                                        onClick={handle}
                                        fullWidth
                                        variant='contained'
                                        sx={{ mt: 3, mb: 2 }}>
                                        Sign in
                                    </Button>
                                    <Grid item>
                                        <Link to="/SignUp">
                                            {"Don't have an account ? Sign up"}
                                        </Link>
                                    </Grid>

                                </Grid>





                            </Box>

                        </Box>




                    </Container>



                </ThemeProvider>

            </main>
            {footer}
        </div>
    )
}
SignIn.propTypes = {
    setToken: PropTypes.func.isRequired
};