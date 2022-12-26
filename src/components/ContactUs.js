import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs()  {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    ///emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')

    emailjs.sendForm('service_mwpry5k', 'template_63p1hng', form.current, 'CgvUGqcWoNhleQFqn')
      .then((result) => {
          console.log(result.text);
          alert('MESSAGE SENT')
      }, (error) => {
          console.log(error.text);
      });

      //emailjs.send("service_mwpry5k","template_63p1hng",{
      // from_name: "grsharedemail@gmail.com",
      // to_name: "ginoruperez@gmail.com",
      // message: "test",
      // reply_to: "test"
      // });
    

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



