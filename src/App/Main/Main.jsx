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
            <Route path="/" exact render={() => (
                <Events
                    handleEventKey={handleEventKey}                    
                    handleCathegoryKey={handleCathegoryKey}
                />
            )}/>            
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/events" exact render={() => (
                <Events
                    handleEventKey={handleEventKey}                    
                    handleCathegoryKey={handleCathegoryKey}                                        
                />
            )}/>
            <Route path="/event_:id" exact render={() => (
                <EventPage
                    eventKey={eventKey}
                    handleEventKey={handleEventKey}                    
                    handleCathegoryKey={handleCathegoryKey}
                />
            )}/>
            <Route path="/event/cathegory_:cathegory" exact render={() => (
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