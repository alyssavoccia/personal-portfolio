/* eslint-disable react/jsx-no-target-blank */
import React, { useRef } from 'react';
import './contact.scss';

import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_swkclzh', 'template_3egfdg8', formRef.current, 'user_iyYIp1k008f6S3OZmTLsC')
      .then((result) => {
          document.getElementById('user_name').value = '';
          document.getElementById('user_subject').value = '';
          document.getElementById('user_email').value = '';
          document.getElementById('user_message').value = '';
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className='contact' id='contact'>
      <div className="contact-bg-line"></div>
      <div className="wrapper">
        <div className="left-side">
          <h1 className="section-title">Let's discuss your next project</h1>
          <div className="section-socials">
            <a href="https://twitter.com/alyssa_voccia" target='_blank'><i class="fa fa-brands fa-twitter fa-2x"></i></a>
            <a href='https://github.com/alyssavoccia' target='_blank'><i class="fa fa-brands fa-github fa-2x"></i></a>
            <a href='https://www.linkedin.com/in/alyssa-voccia/' target='_blank'><i class="fa fa-brands fa-linkedin fa-2x"></i></a>

          </div>
        </div>
        <div className="right-side">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input id='user_name' type="text" name="user_name" placeholder='Name' />
            <input id='user_subject' type="text" name="user_subject" placeholder='Subject' />
            <input id='user_email' type="text" name="email" placeholder='Email' />
            <textarea id='user_message' rows="5" placeholder='Message' name='message' />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
