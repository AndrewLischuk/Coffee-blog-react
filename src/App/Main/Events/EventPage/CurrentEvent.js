import { Testimonials } from '../../../../Components/Testimonials/Testimonials'
import Separator from '../../../Separator/Separator'
import '../../../../Components/Testimonials/testimonials.css'
import { Link } from 'react-router-dom'
import ScrollFunc from '../../../../Components/ScrollFunc'
import Likes from '../../../../Components/Likes/Likes'

const CurrentEvent = ({
    event,                   
    handleCathegoryKey
}) => {    
    return (        
        <div className="flex-column-center" style={{marginTop: "50px"}}>
            <ScrollFunc/>
            <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="box box-cut"><img className="box-img" src={event.image} alt="" style={{maxHeight: "fit-content"}} />
                    <div className="links-panel flex-row-between">
                        <a href=""><i className="fas fa-search"></i></a>
                        <a href=""><i className="fas fa-link"></i></a>
                    </div>
                    <div className="box-overlay"></div>
                </div>
                <div className="event-block">
                    <div className="cathegory-ev">Cathegory: 
                        <Link to={`/event/cathegory_${event.cathegory}`} onClick={() => handleCathegoryKey(event.cathegory)}><span> {event.cathegory}</span></Link>
                    </div>
                    <div className="date-ev flex-row-between">
                        <div><i className="fas fa-user-tie"></i> <a href=""><span>{event.author}</span> </a>
                        at <i className="far fa-clock"></i> <a href=""><span> {event.date}</span></a>
                        </div>
                        <div className="more-ev">
                            <Likes
                                id={event.id}
                                likesCount={event.likesCount}
                                isLiked={event.isLiked}
                                addLike={event.addLike}
                                removeLike={event.removeLike}
                            />                            
                        </div>
                    </div>
                    <div className="title-ev">{event.title}</div>
                    <div className="text-ev">{event.text}</div>                    
                </div>
                    <Separator/>
                    <Testimonials/>
            </div>            
        </div>
    )
}

export default CurrentEvent 