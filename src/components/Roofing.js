import React from 'react';
import dolphinico from './images/contractorlogo-tiny.png';
import { footer } from './Footer';

function Roofing() {

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
                <div className="container-fluid jumbotron jumbotron-roofservice py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">Roofing Service</h1>
                    </div>
                </div>

                <div className="container">

                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/">Services</a></li>
                            <li className="breadcrumb-item">Roofing</li>
                        </ol>
                    </nav>

                    <h1 className="fw-bolder">Roofing Service
                        <small className="fw-normal fst-italic"> Get to know our Roofing Service!</small>
                    </h1>

                    <div className="row ">
                        <div className="col-6 col-lg-8">

                            <div className="container-openwater" >
                                <iframe className="responsive-iframe" src="https://www.youtube.com/embed/4OhTteTsyIU"
                                    title="YouTube video player" ></iframe>

                            </div>
                        </div>


                        <div className="col-6 col-lg-4">
                            <h3 className="my-3">About Roofing Service</h3>
                            <p className="lead text-center">Hurry and Avail our high quality standard roofing Services!</p>
                            <p className="user-select-none">All roofing work we carry out is of the highest standard by highly trained personnel and
                                we always exceed your expectations. We also provide a professional guttering service that includes repairs and replacement
                                of fascias and soffits. For high quality guttering and roofing services contact K2G contractor to discuss your requirements.
                            </p>
                            <h3>We cover all aspects of roofing including:</h3>
                            <ul>
                                <li>Slates</li>
                                <li>Tiles</li>
                                <li>Felting</li>
                                <li>Lead work</li>
                                <li>Chimney work</li>
                                <li>Full roofs</li>


                            </ul>
                            <p className="user-select-none">All materials are guaranteed of high quality and standard</p>

                            <div className="row">

                                <div className="col-md-4">
                                    <strong>€ 250.00</strong>
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
                        <h4>Quote from John F. Kennedy</h4>
                        <p className="mb-0 fst-italic"> The best time to repair the Roof is when the SUN is Shining!

                        </p>
                    </div>



                </div>

            </main>
            {footer}

        </div >
    );
}

export default Roofing;