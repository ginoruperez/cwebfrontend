import React from 'react';
import contractorlog from './images/contractorlogo-tiny.png';
import { footer } from './Footer';

function Faq() {

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={contractorlog} width="30" height="30" className="d-inline-block align-top" alt="K2G Contracting Logo" />
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
                <div className="container-fluid jumbotron jumbotron-faq py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">FAQ</h1>
                    </div>
                </div>

                <div className="container">
                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/">Extras</a></li>
                            <li className="breadcrumb-item">FAQ</li>
                        </ol>
                    </nav>
                    <h1 className="fw-bolder">FAQ
                        <small className="fw-normal fst-italic"> For other query please contact us, we will be glad to answer you.</small>
                    </h1>

                    <div className="accordion" id="beginnerAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What type of training and certifications do you have?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#diveAccordion">
                                <div className="accordion-body">
                                    <p>
                                        We are accredited and approved contractor in Ireland. Certified by SEAI (Sustainable Energy Authority of Ireland)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What kind of constractor services do you specialize in?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#diveAccordion">
                                <div className="accordion-body">
                                    <div>
                                        Home improvement services

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    How long does a typical contractor services take?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree"
                                data-bs-parent="#diveAccordion">
                                <div className="accordion-body">
                                    <p>
                                        Depending on the extent of damages that needs to repair
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    Do you have your own crew or do you hire subcontractors?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour"
                                data-bs-parent="#diveAccordion">
                                <div className="accordion-body">
                                    <p>
                                       We have enormous list of contractors for different home repair services
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    What is your service area?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive"
                                data-bs-parent="#diveAccordion">
                                <div className="accordion-body">
                                    <p>
                                        We are located in Kinsale and all our contractors are well distributed nationwide
                                    </p>
                                </div>
                            </div>
                        </div>










                    </div>

                </div>

            </main>
            {footer}

        </div >
    );
}

export default Faq;