import React from 'react'
import './DesarrolloWeb.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Utilizamos un icono de código

import ButonMore from '../ButonMore/ButonMore';
import TitleService from '../TitleService/TitleService';
import img from '../../img/services/service-2.png'
export default function DesarrolloWeb() {
    return (
        <div className='ServiceContain'>
            <div className='img2'>
                <img src={img} alt="img" />

            </div>
            <div className='servisText'>
                <div className='deFlex'>
                    <FontAwesomeIcon icon={faCode} className='iconTitle' />
                    <TitleService text='Desarrollo Web' />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit
                    rem, doloremque autem quibusdam blanditiis harum alias hic accusantium
                    maxime atque ratione magni repellat?
                </p>

                <p> Lorem ipsum dolor</p>
                <ButonMore />
            </div>



        </div>
    )
}
