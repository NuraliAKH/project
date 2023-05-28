import React from 'react'
import Logo from '../assets/Group 1030.png'
import Rus from '../assets/Flag.png'
import Uzb from '../assets/Flag (1).png'
import Img from '../assets/Frame 4.png'
import './Header.comp.css'

export default function Header() {
  return (
    <div className='container' >
      <div className="header_container">
        <img src={Logo} alt="" />
        <div className="languages">
          <div className="rus_language">
            <img src={Rus} alt="" />
            <p>Русский</p>
          </div>
          <div className="uzb_language">
            <img src={Uzb} alt="" />
            <p>O'zbek</p>
          </div>
        </div>
      </div>
      <img className='main_image' src={Img} alt="" />
    </div>
  )
}
