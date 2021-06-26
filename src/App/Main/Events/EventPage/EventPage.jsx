import { keys } from 'lodash'
import { connect } from 'react-redux'
import React from 'react'
import eventsBase, { getEventsObj } from '../eventsBase'
import CurrentEvent from './CurrentEvent'

const EventPage = ({
    eventKey,
    eventObj = getEventsObj(eventsBase),                    
    
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

const mapStateToProps = (state) => ({
    eventKey: state.eventsKeyState
})


export default connect(
    mapStateToProps,
) (EventPage)