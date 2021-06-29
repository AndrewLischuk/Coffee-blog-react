import React from 'react'
import EventBlock from './EventBlock'
import './events.css'
import ScrollFunc from '../../../Components/ScrollFunc'

const Events = () => {
    return (
        <div style={{marginTop: '80px'}}>
            <ScrollFunc/>
            <div className="container">
                <div className="row">
                    <section className="events flex-row-between">
                        <EventBlock/>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Events