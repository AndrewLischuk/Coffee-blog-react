import React, { useState } from 'react'
import { Route } from 'react-router'
import SectionSeparator from '../SectionSeparator/SectionSeparator'
import About from './About/About'
import Events from './Events/Events'
import AboutPage from './About/AboutPage/AboutPage'
import EventPage from './Events/EventPage/EventPage'
import EventFilterPage from './Events/EventFilterPage/EventFilterPage'
import './main.css'

const Main = () => {

    const [eventKey, setEventKey] = useState(0)

    const handleEventKey = (id, cathegory) => {
        setEventKey({
            [id] : cathegory
        })
    }
    const [cathegoryKey, setCathegoryKey] = useState ("")

    const handleCathegoryKey = (cathegory) => {
        setCathegoryKey(cathegory)        
    }

    return (
        <main className="main">
            <Route path="/" exact component={About}/>
            <Route path="/" exact component={SectionSeparator}/>
            <Route path="/" exact component={Events}/>
            
            <Route path="/about" component={AboutPage}/>
            <Route path="/events" render={() => (
                <Events
                    handleEventKey={handleEventKey}                    
                    handleCathegoryKey={handleCathegoryKey}                                        
                />
            )}/>
            <Route path="/event/:id" render={() => (
                <EventPage
                    eventKey={eventKey}
                />
            )}/>
            <Route path="/eventcathegory" render={() => (
                <EventFilterPage
                eventKey={eventKey}
                cathegoryKey={cathegoryKey}
                handleEventKey={handleEventKey}                    
                handleCathegoryKey={handleCathegoryKey}
                />
            )}/>
        </main>
    )    
}

export default Main