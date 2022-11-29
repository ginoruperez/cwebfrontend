import React from 'react';
import dolphinico from './images/contractorlogo-tiny.png';
import { footer } from './Footer';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        ///emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

        emailjs.sendForm('service_mwpry5k', 'template_63p1hng', form.current, 'CgvUGqcWoNhleQFqn')
            .then((result) => {
                console.log(result.text);
                alert('MESSAGE SENT')
            }, (error) => {
                console.log(error.text);
            });
    }
    /*
const handleSubmit = (event) => {
    window.alert(`Message delivered Successfully! Thank you.`)
}
*/

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

                <div className="container-fluid jumbotron jumbotron-contact py-5">
                    <div className="container">
                        <h1 className="display-3 fw-bold text-white">Contact Us</h1>
                    </div>
                </div>

                <div className="container">

                    <nav className="my-3 ms-3" >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item">Contact</li>
                        </ol>
                    </nav>

                    <h1 className="fw-bolder">Contact Us
                        <small className="fw-normal fst-italic"> Send us an email, we'd love to hear from you.</small>
                    </h1>


                    <form ref={form} className="needs-validation" action="/" onSubmit={handleSubmit}  >


                        <div className="row mt-3">
                            <div className="col-md-6">
                                <div className="mb-2">

                                    <input type="text" className="form-control" placeholder="Your Name *" name="user_name" required />
                                    <div className="invalid-feedback">
                                        Valid Name is required.
                                    </div>

                                </div>
                                <div className="mb-2">

                                    {/*
                                    <input type="text" className="form-control" placeholder="Services Required, comma separated *" name="service" required />
                                    <div className="invalid-feedback">
                                        Valid service is required.
                                    </div>
                                    */}
                                     
                                    <h5>Select Services required</h5>
                                    <select className="form-control" name="service">
                                        <option>***Select Service***</option>
                                        <option value="Roofing">Roofing</option>
                                        <option value="Painting">Painting</option>
                                        <option value="Heating">Heating</option>
                                        <option value="Plumbing">Plumbing</option>
                                        <option value="Air-condition">Air-Condition</option>
                                        <option value="Electrical">Electrical</option>
                                        <option value="Drywall">Drywall</option>
                                        <option value="Carpets">Carpets</option>
                                        <option value="Glass">Glass</option>
                                        <option value="others">Others</option>
                                    </select>
                                    

                                </div>

                                <div className="mb-2">
                                    <input type="email" className="form-control" placeholder="Your Email *"
                                        aria-label="email" name="email" required />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Your Phone Number *"
                                        aria-label="phone" name="phone" required />
                                </div>
                                <div className="mb-2">
                                    <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                                        Send Message
                                    </button>

                                </div>

                            </div>
                            <div className="col-md-6">
                                <div>
                                    {/*<input type="text"  className="form-control" placeholder="Your Message *" rows="5" name="message" required />*/}
                                    <textarea className="form-control" name="message" placeholder="Your Message *" rows="5" required></textarea>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9888.972367128525!2d-8.5153887!3d51.710295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x73558083d696c6a2!2sGPD%20Building%20Contractors!5e0!3m2!1sen!2sie!4v1669673836518!5m2!1sen!2sie" width="600" height="450"                        
                            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="location"></iframe>
                    </div>

                    {/* src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d33251.37800359915!2d-8.52782481229902!3d51.725289697707915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe1763db1d99ded19!2sSouth%20West%20Technical%20Diving!5e0!3m2!1sen!2sie!4v1657224321670!5m2!1sen!2sie" */}

                    
                </div>

            </main>
            {footer}

        </div >
    );
}

export default Contact;