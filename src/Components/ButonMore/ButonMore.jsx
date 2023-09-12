import React from 'react'
import './ButonMore.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function ButonMore() {
    return (
        <button className='ButonMore'>

            Aprender más
            <FontAwesomeIcon icon={faArrowRight} className='icon' />

        </button>
    )
}
