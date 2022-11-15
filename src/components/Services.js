import Header from './Header';
import ServicesMain from './ServicesMain';
import Basket from './Basket';
import { data } from './data';

import React, { useState } from 'react';

import dolphinico from './images/contractorlogo-tiny.png';

import dolphin3 from './images/contractorlogo.png';


function Services() {

  const [products, setProducts] = React.useState(data);
  console.log(products);

  const removeItem = async (id) => {

    const confirmBox = window.confirm(
      "Do you really want to delete the item?"
    )

    if (confirmBox === true) {
      let newProducts = products.filter((item) => item.id !== id);
      console.log(newProducts);
      setProducts(newProducts);

    }






  };



  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


  return (
    <div>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
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
                  <a className="nav-link active" href="/Services">Services</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/ContractorsList">Contractors</a>

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
              <li><a className="dropdown-item" href="/Profile">Profile</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/">Logout</a></li>
            </ul>

          </div>

        </nav>

      </header>

      {/*Shopping Cart */}

      <Header countCartItems={cartItems.length}></Header>
      <div className="container">
        <ServicesMain products={products} onAdd={onAdd} removeItem={removeItem}></ServicesMain>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}>
        </Basket>
      </div>

      {/*End of Shopping Cart*/}



      <div className='footer-shop'>

        <footer className="main-footer text-white text-center text-lg-start bg-primary">

          <div className="container p-4">

            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">

                <img src={dolphin3} width="180" height="180" className="d-inline-block align-top"
                  alt="Celtic Sea Dive Shop Logo" />

              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">

                <h5 className="text-uppercase mb-4">Follow Us</h5>


                <div className="mt-4">
                  <a type="button" className="btn btn-floating btn-primary btn-lg" href="https://www.facebook.com/Celtic-Sea-Dive-Shop-100920469106278"><i className="fab fa-facebook-f"></i></a>
                  <a type="button" className="btn btn-floating btn-primary btn-lg" href="https://www.instagram.com/celticdive/"><i className="fab fa-instagram"></i></a>
                  <a type="button" className="btn btn-floating btn-primary btn-lg" href="https://twitter.com/CelticDive"><i className="fab fa-twitter"></i></a>
                  <a type="button" className="btn btn-floating btn-primary btn-lg" href="https://www.youtube.com/watch?v=wijB506FJTc"><i className="fab fa-youtube"></i></a>
                </div>


                <ul className="fa-ul" >
                  <li className="mb-3">
                    <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-1">Unit 1 Blackrock Road Kinsale Ireland</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-1">
                      <a href="mailto:info@celticdiveshop.ie">info@k2gcontractor.com </a> </span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-1">+ 353 234 567 88</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-1">+ 353 234 567 89</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Opening hours</h5>

                <table className="table text-center text-white">
                  <tbody className="font-weight-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 5pm</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 7pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


          </div>

          <div className="copyright text-center py-3">Copyright © 2022 K2G Contractor Ltd. All Rights Reserved.</div>

        </footer>

      </div>

    </div>
  );
}

export default Services;
