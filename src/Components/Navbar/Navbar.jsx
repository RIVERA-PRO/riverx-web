import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import logo from '../../img/logo.png'
import ButonNav from '../ButonNav/ButonNav';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)





    return (
        <header>
            <nav className="navbar">

                <div className='logo'>

                    <Anchor to={`/`} >   <img src={logo} alt="logo" /></Anchor>
                </div>
                <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`nav_items ${isOpen && "open"}`} >

                    <div className="cerrar-nav" onClick={() => setIsOpen(!isOpen)}>
                        x
                    </div>
                    <div className='logo-nav'>
                        <Anchor to={`/`} >   <img src={logo} alt="logo" /></Anchor>
                    </div>

                    <div className='enlaces'>


                        <Anchor to={`/`} >Hogar</Anchor>
                        <Anchor onClick={() => { document.querySelector('.ServiciosContain').scrollIntoView({ behavior: 'smooth' }); }} >Servicios</Anchor>
                        <Anchor onClick={() => { document.querySelector('.TestimoniosConatin').scrollIntoView({ behavior: 'smooth' }); }} >Testimonios</Anchor>
                        <Anchor onClick={() => { document.querySelector('.PortfolioContain').scrollIntoView({ behavior: 'smooth' }); }} >Portafolio</Anchor>
                        <Anchor onClick={() => { document.querySelector('.ContactoContainComponent').scrollIntoView({ behavior: 'smooth' }); }} >Contacto</Anchor>




                        <ButonNav />
                    </div>



                </div>







            </nav>


        </header>
    );
}
