import { Link } from 'react-router-dom'
import ScrollFunc from '../../../../Components/ScrollFunc'
import Likes from '../../../../Components/Likes/Likes'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'


const CurrentCathegory = ({
    event
}) => {

    const eventUrl = `http://localhost:3000/event_${event.id}`

    const [copy, setCopy] = useState(" deactivate-el")
    const addedToClipboard = () => {
        setCopy(" activate-el")
        setTimeout(setCopy, 2000, " deactivate-el")
    }
    const [zoomPhoto, setZoomPhoto] = useState(" deactivate-el")
    const handlerPhoto = () => {
        if(zoomPhoto === " deactivate-el") {
            setZoomPhoto(" flex-column-center")
        } else {
            setZoomPhoto(" deactivate-el")
        }
    }

    return(
        <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <ScrollFunc/>
            <div className="box box-cut"><img className="box-img" src={event.image} alt="" />
                <div className="links-panel flex-row-between">
                    <div onClick={() => handlerPhoto()}><i className="fas fa-search"></i></div>
                    <CopyToClipboard text={eventUrl}>
                        <div onClick={() => addedToClipboard()}><i className="fas fa-link"></i></div>
                    </CopyToClipboard>
                </div>
                <div className="box-overlay"></div>
                <p className={"copied-massage slide-copied-fade-out" + copy}>Copied to clipboard</p>
            </div>
            <div className="event-block">
                <div className="cathegory-ev">Cathegory: 
                    <Link to={`/event/cathegory_${event.cathegory}`}><span> {event.cathegory}</span></Link>
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
                    <Link to={`/event_${event.id}`}><span><i
                        className="far fa-file-alt"></i> Read more</span></Link>
                </div>
            </div>
        </div>
    )
}

export default CurrentCathegory
