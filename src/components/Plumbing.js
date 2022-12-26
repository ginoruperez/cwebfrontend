import React from 'react';
import dolphinico from './images/contractorlogo-tiny.png';
import { footer } from './Footer';


function Plumbing() {

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
                                    <a className="nav-link active" href="/">Home</a>
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
                <div className="container-fluid jumbotron jumbotron-plumbing py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">Plumbing Services</h1>
                    </div>
                </div>

                <div className="container">
                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/Services">Services</a></li>
                            <li className="breadcrumb-item">Plumbing</li>
                        </ol>
                    </nav>

                    <h1 className="fw-bolder">Plumbing Service
                        <small className="fw-normal fst-italic"> Affordable Service for your home pipes requirements</small>
                    </h1>

                    <div className="row ">

                        <div className="col-6 col-lg-8">
                            {/*src="https://www.youtube.com/embed/hlJUezuNFuI" */}

                            <div className="container-openwater">
                                <iframe className="responsive-iframe"                                    
                                    src="https://www.youtube.com/embed/haCIPCfgT30" 
                                    title="YouTube video player">
                                </iframe>


                            </div>

                        </div>



                        <div className="col-6 col-lg-4">
                            <h3 className="my-3">About Plumbing Service</h3>
                            <p className="lead text-center">Know more about our Plumbing service!</p>
                            <p className="user-select-none">Drain clogs, blockages, damaged sewage lines, and poor water supply can all cause plumbing 
                            issues at your home. Pipe installation and maintenance is the most typical service for a residential. Outdoor and indoor 
                            domestic plumbing, drainage system changes, and gas plumbing are among the several types of residential services.
                            </p>


                            <h3>Plumbing covers the following :</h3>
                            <ul>
                                <li>Proper garbage disposalt</li>
                                <li>Maintenance of valves and pipes</li>
                                <li>Fixing water jets</li>
                                <li>Detecting and fixing any gas leaks</li>
                                <li>Cleaning main pipelines</li>
                                <li>Water filtration, softener and heater</li>
                                <li>Sewage disposal and repair</li>
                            </ul>

                            <p className="user-select-none">All equipment use are of high quality and standard</p>

                            <div className="row">

                                <div className="col-md-4">
                                    <strong>Rate € 60.00</strong>
                                </div>
                                <div className="col-md-8">
                                    <a type="button" href="/Contact" className="btn btn-success float-end">
                                        Get a Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 mb-3 mt-2 bg-light rounded border border-primary">
                        <h4>A quote from John F. Kennedy...</h4>
                        <p className="mb-0 fst-italic"> “Modern cynics and skeptics… see no harm in paying those to whom they entrust the minds of their children a smaller wage than is paid to those to whom they entrust the care of their plumbing.”
                        </p>
                    </div>

                    
                </div>

            </main>
            {footer}

        </div >
    );
}

export default Plumbing;