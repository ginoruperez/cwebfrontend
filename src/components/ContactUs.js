import React, { useRef } from 'react';
//import emailjs from '@emailjs/browser';
//import  { useState } from "react";


function ContactUs()  {
  const form = useRef();

  const sendEmail = (e) => {
    
    

  };
  
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};


export default ContactUs;



