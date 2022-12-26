import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Plumbing from './components/Plumbing';
import Roofing from './components/Roofing';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import ContactUs from './components/ContactUs'
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
import SignInlocal from './components/SignIn-localstorage';
import SignInLink from './components/SignInLink';
import SignUp from './components/SignUp';
import Login from './components/Login';
import SignOut from './components/SignOut';
import Heating from './components/Heating';
import Contractors from './components/Contractors';
import AddContractor from './components/AddContractor';

import Services from './components/Services';
import MyProfile from './components/MyProfile';
import ContractorAdmin from './components/ContractorAdmin';
import UpdateContractor from './components/UpdateContractor';
import DeleteContractor from './components/DeleteContractor';
import CreateService from './components/CreateService';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />} />
      <Route path="Plumbing" element={<Plumbing />} />
      <Route path="Roofing" element={<Roofing />} />      
      <Route path="AboutUs" element={<AboutUs />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="ContactUs" element={<ContactUs />} />      
      <Route path="Testimonial" element={<Testimonial />} />
      <Route path="Faq" element={<Faq />} />
      <Route path="Contractors" element={<Contractors />} />    
      <Route path="Services" element={<Services />} />      
      <Route path="CreateService" element={<CreateService />} />      
      <Route path="ContractorAdmin" element={<ContractorAdmin />} />
      <Route path="AddContractor" element={<AddContractor />} />
      <Route path="/updatecontractor/:id" element={<UpdateContractor />} />
      <Route path="/deletecontractor/:id" element={<DeleteContractor />} />
 
      <Route path="SignIn" element={<SignInlocal />} />
      <Route path="SignOut" element={<SignOut />} />
      <Route path="SignInLink" element={<SignInLink />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="MyProfile" element={<MyProfile />} />
      <Route path="Login" element={<Login />} />
      <Route path="Heating" element={<Heating />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
