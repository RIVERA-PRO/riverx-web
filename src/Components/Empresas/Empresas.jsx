import React from 'react'
import './Empresas.css'
import Subrayado from '../Subrayado/Subrayado'
import img1 from '../../img/campanies/campany-1.png'
import img2 from '../../img/campanies/campany-2.png'
import img3 from '../../img/campanies/campany-3.png'
import img4 from '../../img/campanies/campany-4.png'
import img5 from '../../img/campanies/campany-5.png'
import img6 from '../../img/campanies/campany-6.png'

const companies = [img1, img2, img3, img4, img5, img6]
export default function Empresas() {
    return (
        <div className='EmpresasConatin'>

            <h2>Con la confianza de empresas como</h2>
            <Subrayado />
            <div className='companies'>
                {companies.map(img => (
                    <img src={img} alt="img" />
                ))}
            </div>

        </div>
    )
}
