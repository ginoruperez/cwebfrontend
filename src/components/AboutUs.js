import React from 'react';
import dolphinico from './images/contractorlogo-tiny.png';
import aboutdiveteam from './images/products/about-us.jpg';
import divergino from './images/diver-gino1.jpg';
import diverjohn from './images/foreman.jpg';
import diverfiona from './images/foreman2.jpg';
import { footer } from './Footer';



function AboutUs() {

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
                                    <a className="nav-link active" href="/AboutUs">About Us</a>
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
                <div className="container-fluid jumbotron jumbotron-painting py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">About Us</h1>
                    </div>
                </div>

                <div className="container">

                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item">About Us</li>
                        </ol>
                    </nav>

                    <h1 className="fw-bolder"> Our Team
                        <small className="fw-normal fst-italic"> A Brief Story of Us!</small>
                    </h1>

                    <div className="row ">

                        <div className="col-6 col-lg-8">

                            <img src={aboutdiveteam} className="img-fluid rounded-1" alt="test" />

                        </div>

                        <div className="col-6 col-lg-12">
                            <h3 className="my-3">About Us!</h3>

                            <div className="user-select-none">
                                <section>
                                    Gino Ruperez is the owner of K2G Contractor located in Kinsale, Southwest coast of Ireland
                                    near Celtic Sea. It has been in operation for over 10 years in Ireland. The idea of forming the 
                                    company is based on his day to day experience in doing household chores, where he do an all around 
                                    work in the house like fixing the broken cabinets, lighting, broken flush.  Those jobs takes a bit 
                                    of a time for him to complete because he has no expertise on those kind of jobs. 
                                </section>
                                <br />

                                <section>
                                    So he came up with an idea of creating an web application that would help him to find the cheaper home services 
                                    and that can offer a Do It Yourself video instructions or provide people that can visit their home to provide 
                                    the required home repair services.
                                </section>
                                <br />
                                
                                
                                <section>
                                    Since 2010, K2G Contractor is one of the premier contractor in the country and it is a
                                    proud <strong><em>SEAI Certified!</em></strong>.
                                </section>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="p-4 mb-3 mt-2 bg-light rounded border border-primary">
                        <h4>A quote from Anonymous...</h4>
                        <p className="mb-0 fst-italic"> We Listen to your needs, Design it to your specifications, and Built it to your DREAMS!
                        </p>
                    </div>

                    <h3 className="display-5 my-4">Meet the Team...</h3>

                    <div className="container history">

                        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4">

                            <div className="col">
                                <div className="card rounded mb-4 shadow-sm">
                                    <img className="card-img-top" src={diverjohn} alt="diver" />
                                    <div className="card-body">
                                        <h5 className="card-title">David John Walker</h5>
                                        <div className="card-text"><strong> <em>Senior Customer Sales Representative</em> </strong> He used to work as Foreman from 
                                        a reputable construction company. Services he handles are as follows 
                                            <ul>
                                                <li>Plumbing Services</li>
                                                <li>Roofing Services</li>
                                                <li>House Painting</li>
                                                <li>Heating</li>
                                                <li>Air Conditioning</li>
                                                
                                            </ul></div>
                                    </div>

                                </div>
                            </div>

                            <div className="col">
                                <div className="card rounded mb-4 shadow-sm">
                                    <img className="card-img-top" src={divergino} alt="diver" />
                                    <div className="card-body">
                                        <h5 className="card-title">Gino Ruperez</h5>
                                        <p className="card-text">The owner of K2G Contractor</p>
                                    </div>

                                </div>
                            </div>

                            <div className="col">
                                <div className="card rounded mb-4 shadow-sm">
                                    <img className="card-img-top" src={diverfiona} alt="diver" />
                                    <div className="card-body">
                                        <h5 className="card-title">Jorge Madrigal</h5>
                                        <p className="card-text">joined in 2017 and qualified as Painter and Plumber
                                            since 2008.
                                            Jorge is an integral member of our company and is our Assistant CSR</p>
                                    </div>

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

export default AboutUs;