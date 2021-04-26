import React from 'react'

import '../assets/reset.css'
import '../assets/base.css'
import StickyMenu from './StickyMenu/StickyMenu'
import Header from './Header/Header'
import Separator from './Separator/Separator'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const App = () => {
    return (
        <>
           <StickyMenu/>
           <Header/>
           <Separator/>
           <Main/>
           <Footer/>  
        </>
    )
}

export default App