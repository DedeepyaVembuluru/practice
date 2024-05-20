import React, { useState } from 'react'
import Footer from '../components/Footer'
import Collections from '../components/Collections'
//import Banner from '../components/Banner'
import Header from '../components/Header'
import { Gents } from '../data'
import { Ladies } from '../data'
import WomaenCollections from '../components/WomaenCollections'

const Mainpages = () => {
    const [gentsFashion, setGentsFashion] = useState(Gents)
    const [ladiesFashion, setLadiesFashion] = useState(Ladies)
    console.log(Gents)
    return (
        <div>
            <Header />
            <Collections gentsFashion={gentsFashion} />
            <WomaenCollections ladiesFashion={ladiesFashion} />
            <Footer />
        </div>
    )
}

export default Mainpages
