import { keys } from 'lodash'
import React from 'react'
import eventsBase, { getEventsObj } from '../eventsBase'
import CurrentEvent from './CurrentEvent'

const EventPage = ({
    eventKey,
    eventObj = getEventsObj(eventsBase)
}) => {

    return (
        <>
            {
                keys(eventKey).map(eventId => (
                    <CurrentEvent
                        key={eventId}
                        event={eventObj[eventId]}
                    />
                ))
            }            
        </>
    )
}

export default EventPage