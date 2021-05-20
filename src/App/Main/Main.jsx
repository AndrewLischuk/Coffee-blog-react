import React, { useState } from 'react'
import { Route } from 'react-router'
import SectionSeparator from '../SectionSeparator/SectionSeparator'
import About from './About/About'
import Events from './Events/Events'
import AboutPage from './About/AboutPage/AboutPage'
import EventPage from './Events/EventPage/EventPage'
import './main.css'

const Main = () => {

    const [eventKey, setEventKey] = useState(0)

    const handleEventKey = (id, cathegory) => {
        setEventKey({
            [id] : cathegory
        })
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
                    eventKey={eventKey}
                />
            )}/>
            <Route path="/eventpage" render={() => (
                <EventPage
                    eventKey={eventKey}
                />
            )}/>
        </main>
    )    
}

export default Main