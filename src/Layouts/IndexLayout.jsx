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
import Testimonios from '../Components/Testimonios/Testimonios'
import Portfolio from '../Components/Portfolio/Portfolio'
import ContactoContain from '../Components/ContactoContain/ContactoContain'
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
            <Testimonios />
            <Portfolio />
            <ContactoContain />
            <Footer />
            <Developer />
            <ButonScroll />
        </div>
    )
}
