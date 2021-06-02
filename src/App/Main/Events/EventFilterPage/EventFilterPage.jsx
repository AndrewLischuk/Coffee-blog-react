import { keys } from 'lodash'
import React from 'react'
import eventsBase, { getEventsObj } from '../eventsBase'
import CurrentCathegory from '../EventFilterPage/CurrentCathegory'
import '../events.css'

const EventFilterPage = ({    
    cathegoryKey,
    eventObj = getEventsObj(eventsBase),
    handleEventKey,                    
    handleCathegoryKey
}) => {
   
    let force = eventsBase.filter((obj) => obj.cathegory === cathegoryKey)          

    return (
        <div style={{marginTop: '80px'}}>
            <div className="container">
                <div className="row">
                    <section className="events flex-row-between">
                        {                
                            keys(getEventsObj(force)).map(eventId => (
                                    <CurrentCathegory
                                        key={eventId}
                                        event={eventObj[eventId]}
                                        handleEventKey={handleEventKey}                    
                                        handleCathegoryKey={handleCathegoryKey} 
                                    />
                                ))                                                   
                        }            
                    </section>
                </div>
            </div>
        </div>
    )
}

export default EventFilterPage