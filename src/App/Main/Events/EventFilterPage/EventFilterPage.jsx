import { keys } from 'lodash'
import { getEventsObj } from '../eventsBase'
import CurrentCathegory from '../EventFilterPage/CurrentCathegory'
import '../events.css'
import { useSelector } from 'react-redux'

const EventFilterPage = ({
    match
}) => {

    const eventsBase = useSelector(state => state.eventsBase)
    const eventObj = getEventsObj(eventsBase)

    const cathegory = match.params.cathegory   
    const selectedCathegory = eventsBase.filter((obj) => obj.cathegory === cathegory)

    return (
        
        <div style={{marginTop: '80px'}}>
            <div className="container">
                <div className="row">
                    <section className="events flex-row-between fade-in">
                        {                
                            keys(getEventsObj(selectedCathegory)).slice(0)
                            .reverse()
                            .map(eventId => (
                                    <CurrentCathegory
                                        key={eventId}
                                        event={eventObj[eventId]} 
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

