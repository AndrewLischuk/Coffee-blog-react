import React from 'react'
import eventsBase, { getEventsObj } from '../eventsBase'
import '../../../../Components/Testimonials/testimonials.css'
import ScrollFunc from '../../../../Components/ScrollFunc'
import { Link } from 'react-router-dom'
import Likes from '../../../../Components/Likes/Likes'
import Separator from '../../../Separator/Separator'
import { Testimonials } from '../../../../Components/Testimonials/Testimonials'

const EventPage = ({
    event = getEventsObj(eventsBase),                    
    match,
}) => { 
    const id = match.params.id 
    return (
        <>
            <div className="flex-column-center" style={{marginTop: "50px"}}>
            <ScrollFunc/>
            <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="box box-cut"><img className="box-img" src={event[id].image} alt="" style={{maxHeight: "fit-content"}}/></div>
                <div className="event-block">
                    <div className="cathegory-ev">Cathegory: 
                        <Link to={`/event/cathegory_${event[id].cathegory}`}><span> {event[id].cathegory}</span></Link>
                    </div>
                    <div className="date-ev flex-row-between">
                        <div><i className="fas fa-user-tie"></i> <a href=""><span>{event[id].author}</span> </a>
                        at <i className="far fa-clock"></i> <a href=""><span> {event[id].date}</span></a>
                        </div>
                        <div className="more-ev">
                            <Likes
                                id={event[id].id}
                                likesCount={event[id].likesCount}
                                isLiked={event[id].isLiked}
                                addLike={event[id].addLike}
                                removeLike={event[id].removeLike}
                            />                            
                        </div>
                    </div>
                    <div className="title-ev">{event[id].title}</div>
                    <div className="text-ev">{event[id].text}</div>                    
                </div>
                    <Separator/>
                    <Testimonials/>
            </div>            
        </div>            
        </>
    )
}

export default EventPage