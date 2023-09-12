import React from 'react'
import './Alojamiento.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import ButonMore from '../ButonMore/ButonMore';
import TitleService from '../TitleService/TitleService';
import img from '../../img/services/service-3.png'
export default function Alojamiento() {
    return (
        <div className='ServiceContain'>
            <div className='servisText'>
                <div className='deFlex'>
                    <FontAwesomeIcon icon={faCloud} className='iconTitle' />
                    <TitleService text='Alojamiento en la Nube' />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit
                    rem, doloremque autem quibusdam blanditiis harum alias hic accusantium
                    maxime atque ratione magni repellat?
                </p>

                <p> Lorem ipsum dolor</p>
                <ButonMore />
            </div>

            <div className='img'>
                <img src={img} alt="img" />

            </div>

        </div>
    )
}
