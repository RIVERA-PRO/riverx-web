import React from 'react'
import Header from '../Pages/Header/Header'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'
import Developer from '../Components/Developer/Developer'
import ButonScroll from '../Components/ButonScroll/ButonScroll'
import Empresas from '../Components/Empresas/Empresas'
export default function IndexLayout() {
    return (
        <div>
            <Header />
            <Hero />
            <Empresas />
            <Footer />
            <Developer />
            <ButonScroll />
        </div>
    )
}
