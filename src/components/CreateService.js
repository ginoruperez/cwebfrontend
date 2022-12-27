import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Rating, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import contractorico from './images/contractorlogo-tiny.png';
import { footer } from './Footer';


export default function CreateService() {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('snorkel');
    const [rating, setRating] = useState(0);
    const [price, setPrice] = useState(0);
    const [image, setFilename] = useState('');
    const navigateTo = useNavigate();


    const handleProductCreation = (e) => {
        e.preventDefault();
        if (title && name && type && price) {
            console.log({ title, type, name, rating, price, image });


            const priceTotal = parseFloat(price, 10)

            fetch('http://localhost:8000/products', {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ title, type, name, rating, price: priceTotal, image })

            }).then(() => navigateTo('/Services'))
        }
    }
    return (


        <div>

            <header>
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={contractorico} width="30" height="30" className="d-inline-block align-top" alt="K2G Contracting Logo" />
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

                                    <a className="nav-link active dropdown-toggle" href="/" id="nav-dropdown" data-bs-toggle="dropdown"
                                        aria-expanded="false" >
                                        Extras
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="nav-dropdown">
                                        <li><a className="dropdown-item" href="/Testimonial">Testimonial</a></li>
                                        <li><a className="dropdown-item" href="/Faq">FAQ</a></li>
                                        <li><a className="dropdown-item" href="/">External Links &raquo; </a>
                                            <ul className="submenu dropdown-menu">
                                                <li><a className="dropdown-item" target="_blank" href="https://www.seai.ie/" rel="noreferrer">SEAI Website</a></li>
                                                <li><a className="dropdown-item"  href="/CreateService" >Create Service</a></li>
                                                <li><a className="dropdown-item"  href="/ContractorAdmin" >Contractor (Admin)</a></li>
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

                <div className="container py-5 h-100">

                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/">Extras</a></li>
                            <li className="breadcrumb-item"><a href="/">External Links</a></li>
                            <li className="breadcrumb-item">Create Service</li>
                        </ol>
                    </nav>

                    <h1> Add new Service</h1>
                    <form noValidate onSubmit={handleProductCreation}>
                        <TextField
                            label='Service Name'
                            onChange={(e) => setTitle(e.target.value)}
                            fullWidth
                            required
                            autoFocus
                            variant='outlined'
                            color="info"
                            margin="dense">

                        </TextField>

                        <TextField
                            label='Service name'
                            onChange={(e) => setName(e.target.value)}
                            required

                            fullWidth
                            variant='outlined'
                            color='info'
                            multiline
                            rows={6}
                            margin="dense">

                        </TextField>

                        <TextField
                            label='Average Rate'
                            type='number'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            fullWidth
                            variant='outlined'
                            color='info'
                            margin="dense"
                        >

                        </TextField>
                        <TextField
                            label='Image URL Address'
                            onChange={(e) => setFilename(e.target.value)}

                            fullWidth
                            variant='outlined'

                            color='info'
                            margin="dense">

                        </TextField>

                        <FormLabel> Select the service category</FormLabel>

                        <FormControl fullWidth>
                            <RadioGroup
                                defaultValue='Dive Suit'
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <FormControlLabel control={<Radio />} label='Home Repair' value='Repair' />
                                <FormControlLabel control={<Radio />} label='Home Maintenance' value='Maintenance' />
                                <FormControlLabel control={<Radio />} label='Home Improvement' value='Improvement' />
                                <FormControlLabel control={<Radio />} label='Others' value='others' />


                            </RadioGroup>


                        </FormControl >
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange=
                            {(event, rating) => {
                                setRating(rating);
                            }}
                        />

                        <Button type='submit' fullWidth variant='outlined' >Submit</Button>
                        <Button type='reset' fullWidth variant='outlined'>Reset</Button>
                    </form>

                </div>
            </main>

            {footer}

        </div>
    )
}
