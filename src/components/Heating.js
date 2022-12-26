import React from 'react';
import dolphinico from './images/contractorlogo-tiny.png';
import { footer } from './Footer';

function Heating() {

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
                <div className="container-fluid jumbotron jumbotron-heating-service py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">Heating Services</h1>
                    </div>
                </div>

                <div className="container">

                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/Services">Services</a></li>
                            <li className="breadcrumb-item">Heating</li>
                        </ol>
                    </nav>

                    <h1 className="fw-bolder">Heating Services
                        <small className="fw-normal fst-italic"> More Information about Home Heating!</small>
                    </h1>

                    <div className="row ">
                        <div className="col-6 col-lg-8">

                            <div className="container-openwater" >
                                <iframe className="responsive-iframe" src="https://www.youtube.com/embed/yl42yEh4oBI"
                                    title="YouTube video player" ></iframe>

                            </div>
                        </div>


                        <div className="col-6 col-lg-4">
                            <h3 className="my-3">About Home Heating</h3>
                            <p className="lead text-center">Central Heating system explained</p>
                            <p className="user-select-none">A central heating system has pipework and radiators which are connected to a boiler.
                                The boiler provides the heat and the pump moves heated water from the boiler through the pipework to the radiators,
                                and back to the boiler for reheating. It also provides hot water to the hot taps in your home.
                            </p>
                            <h3>There are genarally two types of boiler :</h3>
                            <ul>
                                <li><strong>A conventional boiler </strong> - this system has a pump, a programmer and a room thermostat.
                                     You can control the heating and hot water separately by using the programmer. 
                                     It heats hot water and stores it in a cylinder, usually found in your airing cupboard.</li>
                                <li><strong>A combination (combi) boiler </strong> - this system has a programmer and a thermostat. 
                                It only needs to control the heating, as it heats hot water on demand. Hot water is available whenever you turn on 
                                the hot water taps and so does not need a cylinder to store it in.</li>
                                
                            </ul>
                            {/* 
                            <p className="user-select-none">All equipment will be provided for
                                the length of the course.</p> */}

                            <div className="row">

                                <div className="col-md-4">
                                    <strong>Rate € 80.00</strong>
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
                        <h4>Quote from Unknown...</h4>
                        <p className="mb-0 fst-italic"> It takes hands to build HOUSE, but only HEART can build a HOME!

                        </p>
                    </div>

                    {/* 
                    <h3 className="display-5 my-4">Other customers also tried...</h3>

                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/AllCourses">
                                <img className="img-fluid" src={fundive} alt="dolphin" />
                            </a>
                            <p>Fun Dive for Kids and Adult</p>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/AllCourses">
                                <img className="img-fluid" src={mermaid} alt="mermaid" />
                            </a>
                            <p>Discover Mermaid</p>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/AllCourses">
                                <img className="img-fluid" src={photography} alt="photography" />
                            </a>
                            <p>Underwater Photography</p>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-3">
                            <a href="/AllCourses">
                                <img className="img-fluid" src={boatdiver} alt="boat dive" />
                            </a>
                            <p>Boat Diving</p>

                        </div>
                    </div>

                    */}
                </div>



            </main>
            {footer}

        </div >
    );
}

export default Heating;