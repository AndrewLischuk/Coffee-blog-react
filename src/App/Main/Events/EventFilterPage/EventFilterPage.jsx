import { keys } from 'lodash'
import { connect } from 'react-redux'
import eventsBase, { getEventsObj } from '../eventsBase'
import CurrentCathegory from '../EventFilterPage/CurrentCathegory'
import '../events.css'

const EventFilterPage = ({    
    cathegoryKey,
    eventObj = getEventsObj(eventsBase),
}) => {
   
    let force = eventsBase.filter((obj) => obj.cathegory === cathegoryKey)          
    {console.log(cathegoryKey)}
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
                                    />
                                ))                                                   
                        }            
                    </section>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cathegoryKey: state.eventsKeyState.cathegory
})
export default connect(
    mapStateToProps
) (EventFilterPage)

