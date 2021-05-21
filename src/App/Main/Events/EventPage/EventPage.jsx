import { keys } from 'lodash'
import React from 'react'
import { Route } from 'react-router'
import eventsBase, { getEventsObj } from '../eventsBase'
import CurrentCathegory from '../EventFilterPage/CurrentCathegory'
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