import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Marketing.css';
import ButonMore from '../ButonMore/ButonMore';
import TitleService from '../TitleService/TitleService';
import img from '../../img/services/service-1.png'
export default function Marketing() {
    return (
        <div className='ServiceContain'>
            <div className='servisText'>
                <div className='deFlex'>
                    <FontAwesomeIcon icon={faPaperPlane} className='iconTitle' />
                    <TitleService text='Marketing' />
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
    );
}
