import React from 'react'
import './Formulario.css'
export default function Formulario() {
    return (
        <form className='Formulario'>
            <label htmlFor="">Comienza Tu Proyecto</label>

            <div className='deFlexInputs'>
                <input type="text" placeholder='Nombre' />
                <input type="text" placeholder='Apellido' />
            </div>
            <input type="email" placeholder='Direccion de correo electronico' />
            <textarea name="text" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
            <button>Entregar</button>
        </form>
    )
}
