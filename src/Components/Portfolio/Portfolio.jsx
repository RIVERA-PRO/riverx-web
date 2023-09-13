import { React, useState } from 'react'
import './Portfolio.css'
import Subrayado from '../Subrayado/Subrayado'
import img from '../../img/portfolio/portfolio-1.jpg'
import img2 from '../../img/portfolio/portfolio-2.jpg'
import img3 from '../../img/portfolio/portfolio-3.jpg'
import img4 from '../../img/portfolio/portfolio-4.jpg'
import img5 from '../../img/portfolio/portfolio-5.jpg'
import img6 from '../../img/portfolio/portfolio-6.jpg'
import img7 from '../../img/portfolio/portfolio-7.jpg'
import img8 from '../../img/portfolio/portfolio-8.jpg'
import img9 from '../../img/portfolio/portfolio-9.jpg'

const porftolio = [
    {
        img: img,
        'categoria': 'web',
        'nombre': 'Proyecto'
    },
    {
        img: img2,
        'categoria': 'diseño',
        'nombre': 'Proyecto'
    },
    {
        img: img3,
        'categoria': 'movil',
        'nombre': 'Proyecto'
    },
    {
        img: img4,
        'categoria': 'diseño',
        'nombre': 'Proyecto'
    },
    {
        img: img5,
        'categoria': 'movil',
        'nombre': 'Proyecto'
    },

    {
        img: img6,
        'categoria': 'web',
        'nombre': 'Proyecto'
    },
    {
        img: img7,
        'categoria': 'movil',
        'nombre': 'Proyecto'
    },
    {
        img: img8,
        'categoria': 'diseño',
        'nombre': 'Proyecto'
    },
    {
        img: img9,
        'categoria': 'web',
        'nombre': 'Proyecto'
    },
]

export default function Portfolio() {
    const categorias = [...new Set(porftolio.map((project) => project.categoria))]; // Obtener categorías únicas

    const [filtroCategoria, setFiltroCategoria] = useState('todos'); // Inicialmente, muestra todos los proyectos

    const handleCategoriaChange = (event) => {
        setFiltroCategoria(event.target.value);
    };



    return (
        <div className='PortfolioContain'>
            <h1>Ultimo Trabajo</h1>
            <Subrayado />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro temporibus distintivo.</p>

            <div className='filtroCategoria'>
                <label className={filtroCategoria === 'todos' ? 'bg-red' : 'input'}>
                    <input
                        type='radio'
                        name='categoria'
                        value='todos'
                        checked={filtroCategoria === 'todos'}
                        onChange={handleCategoriaChange}
                    />
                    Todos
                </label>
                {categorias.map((categoria) => (
                    <label key={categoria} className={filtroCategoria === categoria ? 'bg-red' : 'input'}>
                        <input
                            type='radio'
                            name='categoria'
                            value={categoria}
                            checked={filtroCategoria === categoria}
                            onChange={handleCategoriaChange}
                        />
                        {categoria}
                    </label>
                ))}
            </div>

            <div className='porftolioImgGrid'>
                {porftolio
                    .filter((project) => filtroCategoria === 'todos' || project.categoria === filtroCategoria)
                    .map((project, index) => (
                        <div className='card' key={index}>
                            <img src={project.img} alt='' />
                            <p>{project.nombre}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}