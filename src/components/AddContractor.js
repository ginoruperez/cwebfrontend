import React from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import dolphinico from './images/contractorlogo-tiny.png';


class AddContractor extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            name: this.name,
            location: this.location,
            specialties: this.specialties,
            size: this.size,
            rate: this.rate,
            owner: this.owner
        }
        console.log(data);

        axios.post("http://localhost:8080/contractorweb/contractors", data)
            .then(res => {
                toast("Contractor added successfully")
            })

        alert("Contractor added successfully!")
    }

    render() {
        return (<div>

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
                                    <a className="nav-link active" href="/Contact">Contact</a>
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





            {/**            <h2>Create Contractor:</h2>


            <form>
                Company's Name:<input type="text" name="name" onChange={(event) => { this.name = event.target.value }} align="left" /><br></br>
                Location:<input type="text" name="location" onChange={(event) => { this.location = event.target.value }} align="left" />
                <br></br>
                Specialties:<input type="text" name="specialties" onChange={(event) => { this.specialties = event.target.value }} align="left" />
                <br></br>
                Size:<input type="text" name="size" onChange={(event) => { this.size = event.target.value }} align="left" />
                <br></br>
                Rate:<input type="text" name="rate" onChange={(event) => { this.rate = event.target.value }} align="left" />
                <br></br>
                owner:<input type="text" name="owner" onChange={(event) => { this.owner = event.target.value }} align="left" />
                <br></br>
                <button onClick={this.handleSubmit.bind(this)}>Save</button>
                <br></br>
            </form>

            <Link to={'/'}>Go Back</Link>
 */}


            <main role="main">

                <div className="container">

                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/ContractorAdmin">Contractors Admin</a></li>
                            <li className="breadcrumb-item">CRUD Facilities</li>
                        </ol>
                    </nav>

                    <h1 className="fw-bolder">Contractors Maintenance
                        <small className="fw-normal fst-italic"> Register and Update Contractors</small>
                    </h1>


                    <form className="needs-validation" action="/" onSubmit={this.handleSubmit.bind(this)}  >


                        <div className="row mt-3">
                            <div className="col-md-6">
                                <div className="mb-2">

                                    <input type="text" className="form-control" name="name"
                                        onChange={(event) => { this.name = event.target.value }} placeholder="Company's Name *" required />
                                    <div className="invalid-feedback">
                                        Valid Name is required.
                                    </div>
                                </div>

                                <div className="mb-2">


                                    <input type="text" className="form-control" name="location"
                                        onChange={(event) => { this.location = event.target.value }} placeholder="Location *" required />
                                    <div className="invalid-feedback">
                                        Valid location is required.
                                    </div>
                                </div>


                                <div className="mb-2">
                                    <h5>Select Specialties</h5>


                                    <select className="form-control" name="specialties"
                                        onChange={(event) => { this.specialties = event.target.value }} id="specialties">
                                        <option>Select Specialties</option>
                                        <option value="Roofing">Roofing</option>
                                        <option value="Painting">Painting</option>
                                        <option value="Heating">Heating</option>
                                        <option value="Plumbing">Plumbing</option>
                                        <option value="Air-condition">Air-Condition</option>
                                        <option value="Electrical">Electrical</option>
                                        <option value="Drywall">Drywall</option>
                                        <option value="Carpets">Carpets</option>
                                        <option value="Glass">Glass</option>
                                    </select>
                                </div>
                                <br></br>

                                <div className="mb-2">
                                    <input type="text" className="form-control" name="size"
                                        onChange={(event) => { this.size = event.target.value }} placeholder="Size *" aria-label="size" required />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" name="rate"
                                        onChange={(event) => { this.rate = event.target.value }} placeholder="Rate *"
                                        aria-label="rate" required />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" name="owner"
                                        onChange={(event) => { this.owner = event.target.value }} placeholder="Owner *"
                                        aria-label="owner" required />
                                </div>
                                <div className="mb-2">
                                    <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                                        Save
                                    </button>

                                </div>
                            </div>

                        </div>
                    </form>

                </div>

            </main>








        </div>)
    }
}

export default AddContractor;






