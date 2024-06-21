import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque beatae quidem animi voluptates minus soluta quos, fugit temporibus blanditiis tempore tenetur! Distinctio nesciunt dolore optio a doloremque cum corporis!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} />
                    <img src={assets.twitter_icon} />
                    <img src={assets.linkedin_icon} />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-123-456-789</li>
                    <li>foodorder@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © FoodOrder.com - All rights Reserved</p>
    </div>
  )
}

export default Footer