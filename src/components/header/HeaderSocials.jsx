import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
            <a href="https://facebook.com" target="_blank"><BsFacebook/></a>    
            <a href="https://github.com" target="_blank"><FaGithub/></a>
            <a href="https://instagram.com" target="_blank"><BsInstagram/></a>    
    </div>
  )
}

export default HeaderSocials