import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaViber} from 'react-icons/fa'
import { FaWhatsapp } from "react-icons/fa";

import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xzty4ne', 'template_mnedlsq', form.current, 'oyD465M7FeFTCplLk')
    e.target.reset()
  };

  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>ksulav10@gmail.com</h5>
          <a href="mailto:choteyy10@gmail.com" target='_blank'>Send a message</a>
        </article>

        <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Sulav Khatri</h5>
          <a href="https://www.facebook.com/profile.php?id=61568046008646" target='_blank'>Send a message</a>
        </article>

        <article className='contact__option'>
          
          <FaWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+1 5162335176</h5>
          <a href="https://wa.me/5162335176" target='_blank'>Send a message</a>
        </article>
      </div> 
      {/*END OF CONTACT OPTION  */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text"  name='name' placeholder='Yor Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
       
    </div>  
    </section>
  )
}

export default Contact