import React from 'react'
import './ContactoContain.css'
import Contacto from '../Contacto/Contacto'
import Subrayado from '../Subrayado/Subrayado'
export default function ContactoContain() {
    return (
        <div className='ContactoContainComponent'>
            <h1 className='titleh1'>Empezar</h1>
            <Subrayado />
            <Contacto />
        </div>
    )
}
