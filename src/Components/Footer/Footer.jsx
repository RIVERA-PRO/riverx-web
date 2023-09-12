import React from 'react'
import './Footer.css'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import logo from '../../img/logo.png'
import SuscribeFooter from '../SuscribeFooter/SuscribeFooter';
export default function Footer() {
    return (
        <div className='FooterContain'>

            <div className='footerText'>
                <Anchor to={`/`} >   <img src={logo} alt="logo" /></Anchor>

                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui oficia dese mollit anim id est laborum.</p>
                <div class="redes-sociales-footer">

                    <a href="#"><i class='fa fa-instagram'></i></a>
                    <a href="#"> <i class='fa fa-linkedin'></i></a>
                    <a href="#"><i class='fa fa-twitter'></i></a>
                </div>
            </div>

            <div className='footerText'>
                <h3>Recursos</h3>

                <Anchor to={`/`} >Lorem ipsum Lorem </Anchor>
                <Anchor to={`/`} >Lorem ipsum Lorem </Anchor>
                <Anchor to={`/`} >Lorem ipsum Lorem </Anchor>
                <Anchor to={`/`} >Lorem ipsum Lorem </Anchor>

            </div>

            <div className='footerText'>
                <h3>Enlaces rápidos</h3>

                <Anchor to={`/`} >Lorem ipsum Lorem </Anchor>
                <Anchor to={`/`} >Lorem ipsum Lorem </Anchor>
                <Anchor to={`/`} >Lorem ipsum Lorem </Anchor>
                <Anchor to={`/`} >Lorem ipsum Lorem </Anchor>

            </div>

            <div className='footerText'>
                <h3>Síganos</h3>


                <SuscribeFooter />

            </div>

        </div>
    )
}
