import React from 'react'

import '../assets/reset.css'
import '../assets/base.css'
import StickyMenu from './StickyMenu/StickyMenu'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import SectionSeparator from './SectionSeparator/SectionSeparator'

const App = () => {
    return (
        <>
           <StickyMenu/>
           <Header/>
           <SectionSeparator/>           
           <Main/>
           <SectionSeparator/>
           <Footer/>  
        </>
    )
}

export default App