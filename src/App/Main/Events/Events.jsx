import React from 'react'
import EventBlock from './EventBlock'
import './events.css'

const Events = ({
    handleEventKey,
    eventKey
}) => {
    return (
        <div style={{marginTop: '80px'}}>
            <div className="container">
                <div className="row">
                    <section className="events flex-row-between">
                        <EventBlock
                            handleEventKey={handleEventKey}
                            eventKey={eventKey}
                        />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Events