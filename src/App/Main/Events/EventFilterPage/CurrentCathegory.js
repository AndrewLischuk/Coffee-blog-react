import React from 'react'
import { Link } from 'react-router-dom'
import ScrollFunc from '../../../../Components/ScrollFunc'
import Likes from '../../../../Components/Likes/Likes'


const CurrentCathegory = ({
    event,
    handleCathegoryKey,
    handleEventKey,
}) => {

    return(
        <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <ScrollFunc/>
            <div className="box box-cut"><img className="box-img" src={event.image} alt="" />
                <div className="links-panel flex-row-between">
                    <a href=""><i className="fas fa-search"></i></a>
                    <Link to={`/event_${event.id}`}  onClick={() => handleEventKey(event.id, event.likesCount)}><i className="fas fa-link"></i></Link>
                </div>
                <div className="box-overlay"></div>
            </div>
            <div className="event-block">
                <div className="cathegory-ev">Cathegory: 
                    <Link to={`/event/cathegory_${event.cathegory}`} onClick={() => handleCathegoryKey(event.cathegory)}><span> {event.cathegory}</span></Link>
                </div>
                <div className="date-ev"><i className="fas fa-user-tie"></i> <a href=""><span>{event.author}</span> </a>at <i className="far fa-clock"></i> <a href=""><span>{event.date}</span></a> </div>
                <div className="title-ev">{event.title}</div>
                <div className="text-ev"> {event.text.substring(0, 197) + "..."}</div>
                <div className="more-ev flex-row-between">
                    <Likes
                        id={event.id}
                        likesCount={event.likesCount}
                        isLiked={event.isLiked}
                        addLike={event.addLike}
                        removeLike={event.removeLike}
                    />                    
                    <Link to={`/event_${event.id}`} onClick={() => handleEventKey(event.id, event.likesCount)}><span><i
                        className="far fa-file-alt"></i> Read more</span></Link>
                </div>
            </div>
        </div>
    )
}

export default CurrentCathegory