import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
          <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="About Image" />
              </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

               <article className='about__card'>
                 <FaAward className='about__icon'/>
                 <h5>Experience</h5>
                 <small>1+ Years Working</small>
               </article>
               
               <article className='about__card'>
                 <VscFolderLibrary className='about__icon'/>
                 <h5>Projects</h5>
                 <small>3 Completed</small>
               </article>
            </div>
            <p>
            I am a Symfony PHP developer with one year of experience, currently pursuing a Master’s in Cybersecurity with a focus on Data Analytics. With a strong foundation in backend development and system security, I am passionate about Full Stack Development and building secure, scalable applications. My goal is to integrate software engineering, data analytics, and cybersecurity to create innovative, high-performance solutions that bridge technology, security, and business needs.
            </p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        
      </div>


    </section>
  )
}

export default About