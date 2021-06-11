import React from 'react'

import '../assets/reset.css'
import '../assets/base.css'
import '../assets/keyframes.css'
import StickyMenu from './StickyMenu/StickyMenu'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import SectionSeparator from './SectionSeparator/SectionSeparator'
import { Route } from 'react-router'
import HeaderAbout from './Header/HeaderAbout'
import HeaderEvents from './Header/HeaderEvents'
import HeaderContact from './Header/HeaderContact'

const App = () => {
    return (
        <>
            <StickyMenu/>
                <Route path="/" exact component={Header}/>
                <Route path="/about" exact component={HeaderAbout}/>
                <Route path="/events" exact component={HeaderEvents}/>
                <Route path="/event_:id" exact component={HeaderEvents}/>                
                <Route path="/event/cathegory_:cathegory" exact component={HeaderEvents}/>                
                <Route path="/contacts" exact component={HeaderContact}/>                    
            <SectionSeparator/>           
            <Main/>
            <SectionSeparator/>
            <Footer/>  
        </>
    )
}

export default App