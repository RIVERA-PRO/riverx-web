import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './ButonNav.css'
export default function ButonNav() {
    return (
        <button className='ButonNav'>
            <a href="tel:+543875683101">
                +54 3875683101
            </a>
            <FontAwesomeIcon icon={faPhone} className='icon' />
        </button>
    );
}
