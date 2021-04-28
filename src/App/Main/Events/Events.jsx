import React from 'react'
import event1 from './event1.jpg'
import event2 from './event2.jpg'
import event3 from './event3.jpg'
import event4 from './event4.jpg'
import event5 from './event5.jpg'
import event6 from './event6.jpg'
import event7 from './event7.jpg'
import event8 from './event8.jpg'
import EventBlock from './EventBlock'
import './events.css'

const Events = () => {
    return (
        <section className="events flex-row-between">
            <EventBlock/>
        </section>
    )
}

export default Events