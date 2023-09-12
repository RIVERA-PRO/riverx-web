import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';
import img from '../../img/arts/intro-section-illustration.png'
export default function Hero() {
    return (
        <div className='HeroContain'>
            <div className='HeroText'>
                <h1>¡Oye! Soy Riverx.</h1>
                <p>Este es un diseño responsivo multipropósito creado con las siguientes Técnologias.</p>
                <p>React - Javascript - Css - HTML</p>
                <button className='button'>
                    Ponerse en contacto
                    <FontAwesomeIcon icon={faArrowRight} className='icon' />
                </button>
            </div>

            <div className='HeroImg'>
                <img src={img} alt="img" />
            </div>
        </div>
    );
}
