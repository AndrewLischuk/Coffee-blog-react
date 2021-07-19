import { keys } from 'lodash'
import CurrentCathegory from '../../Events/EventFilterPage/CurrentCathegory'
import { Link } from 'react-router-dom';
import eventsBase, { getEventsObj } from '../../Events/eventsBase'
import '../../Events/events.css'

const LatestEvents = ({
    eventObj = getEventsObj(eventsBase)
}) => {
   
    let latest = eventsBase.filter((obj) => obj.id >= Object.keys(obj).length - 1 )          

    return (        
        <div className="container">
            <div className="row flex-column-center">
                <div className="title-section fade-in" style={{padding: "30px 0"}}><span>Our Latest Events</span></div>
                <section className="events flex-row-between">
                    {                
                        keys(getEventsObj(latest)).map(eventId => (
                                <CurrentCathegory
                                    key={eventId}
                                    event={eventObj[eventId]} 
                                />
                            ))                                                   
                    }            
                </section>
                <button className="alt-btn"><Link to="/events">SHOW MORE</Link></button>
            </div>
        </div>        
    )
}

export default LatestEvents