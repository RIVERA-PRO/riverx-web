import React from 'react'
import Header from '../Pages/Header/Header'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'
import Developer from '../Components/Developer/Developer'
import ButonScroll from '../Components/ButonScroll/ButonScroll'
import Empresas from '../Components/Empresas/Empresas'
import Servicios from '../Components/Servicios/Servicios'
import Marketing from '../Components/Marketing/Marketing'
import DesarrolloWeb from '../Components/DesarrolloWeb/DesarrolloWeb'
import Alojamiento from '../Components/Alojamiento/Alojamiento'
export default function IndexLayout() {
    return (
        <div>
            <Header />
            <Hero />
            <Empresas />
            <Servicios />
            <Marketing />
            <DesarrolloWeb />
            <Alojamiento />
            <Footer />
            <Developer />
            <ButonScroll />
        </div>
    )
}
