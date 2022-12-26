import contractorico from './images/contractorlogo-tiny.png';
import heatingsmall from './images/products/heating.jpg';
import roofrepairsmall from './images/products/roofrepair.jpg';
import plumbingsmall from './images/products/plumbing.jpg';
import seaiapproved from './images/products/seai-approved-2.jpg';
import { footer } from './Footer';

function Main() {

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

            <main className="container" role="main">
                <div id="welcomeCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Welcome 1"></button>
                        <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="1"
                            aria-label="Welcome 2"></button>
                        <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="2"
                            aria-label="Welcome 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item welcome-carousel-image1 active">
                            <div className="carousel-caption">
                                <h1>Welcome to K2G Contractor Ltd.</h1>
                                <p>The best place for your Home Improvement Needs!</p>
                            </div>
                        </div>
                        <div className="carousel-item welcome-carousel-image2">
                            <div className="carousel-caption text-start">
                                <h1>High Quality House Painting</h1>
                                <p>Get to know our highly qulified contractors</p>
                                <p><a className="btn btn-lg btn-primary" href="/Services" role="button">Services</a></p>
                            </div>
                        </div>
                        <div className="carousel-item welcome-carousel-image3">
                            <div className="carousel-caption text-end">
                                <h1>Bathroom Fixtures.</h1>
                                <p>Avail our affordable rates from wide selections of contractor!</p>
                                <p><a className="btn btn-lg btn-primary" href="/Contractors" role="button">Contractors</a></p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="container history">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="pb-4 mb-4 fst-italic">
                                Our Company
                            </h2>
                            <section>
                                Our Company is located in Kinsale, Southwest coast of Ireland near Celtic Sea. 
                                
                                With over 10 years of experience, we guarantee the highest standards of quality in
                                terms of home improvement and services.

                                
                            </section>
                            <br />

                            <section>
                                The K2G Contractor Company aims to provide you the highest quality services you need 
                                for your home improvement and services.
                            </section>
                            <br />
                            <section>
                                

                            </section>
                            <br />
                            <section>
                                Since 2010, K2G is one of the premier contractor  in the country and it is a
                                proud <strong><em>SEAI certified </em></strong>.
                            </section>
                            <br />
                        </div>

                        <aside className="col-lg-4">
                            <div className="p-4 mb-3 mt-2 bg-light rounded">
                                <h4>Thank You for Joining Us !</h4>
                                <p className="mb-0 fst-italic">We are a proud SEAI certified <a target="_blank" href="https://www.seai.ie/" rel="noreferrer">SEAI</a>  facility incorporating our own company
                                    and Services, we thrive on quality service for home improvement!</p>

                                <img className="card-img-top" src={seaiapproved} alt="padi 5 star" />
                            </div>

                        </aside>
                    </div>
                </div>
                <div className="container history">
                    <h2 className="pb-4 mb-2 mt-5">Available Services Most In-demand!</h2>
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
                        <div className="col">
                            <div className="card rounded mb-4 shadow-sm">
                                <img className="card-img-top" src={heatingsmall} alt="dolphinsmall" />
                                <div className="card-body">
                                    <h5 className="card-title">Taking care of your Heating</h5>
                                    <p className="card-text">Warm your Home during the Winter cold season!</p>
                                </div>
                                <div className="card-footer">
                                    <a href="/Heating" className="btn btn-primary">View details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card rounded mb-4 shadow-sm">
                                <img className="card-img-top" src={plumbingsmall} alt="services open water" />
                                <div className="card-body">
                                    <h5 className="card-title">Unclog your pipes!</h5>
                                    <p className="card-text">We take care of your pipes at Home</p>
                                </div>
                                <div className="card-footer">
                                    <a href="/Plumbing" className="btn btn-primary">View details</a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card rounded mb-4 shadow-sm">
                                <img className="card-img-top" src={roofrepairsmall} alt="services advanced open water" />
                                <div className="card-body">
                                    <h5 className="card-title">Roof Repair</h5>
                                    <p className="card-text">An Irish way of repairing Roof!</p>
                                </div>
                                <div className="card-footer">
                                    <a href="/Roofing" className="btn btn-primary">View details</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </main>
            {footer}

            
        </div>
    );
}

export default Main;