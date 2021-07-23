import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import Viewer from 'react-viewer'
import Likes from '../../../Components/Likes/Likes'

const Event = ({
    id,
    image,
    cathegory,
    author,
    date,
    title,
    text,
    likesCount,
    isLiked,
    addLike,
    removeLike,
}) => {
    
    const eventUrl = `https://coffee-blog-react.netlify.app/event_${id}`

    const [copy, setCopy] = useState(" deactivate-el")
    const addedToClipboard = () => {
        setCopy(" activate-el")
        setTimeout(setCopy, 2000, " deactivate-el")
    }
    const [visible, setVisible] = useState(false)

    return (
        <>
        <div className="fade-in flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="box box-cut"><img className="box-img" src={image} alt="" />
                <div className="links-panel flex-row-between">
                        <div onClick={() => {setVisible(true)}}><i className="fas fa-search"></i></div>
                        <Viewer
                            visible={visible}
                            onClose={() => {setVisible(false)}}
                            images={[{src: `${image}`, alt: ""}]}
                        />
                    <CopyToClipboard text={eventUrl}>
                        <div onClick={() => addedToClipboard()}><i className="fas fa-link"></i></div>
                    </CopyToClipboard>
                </div>
                <div className="box-overlay"></div>
                <p className={"copied-massage slide-copied-fade-out" + copy}>Copied to clipboard</p>
            </div>
            <div className="event-block">
                <div className="cathegory-ev">Cathegory: 
                    <Link to={`/event/cathegory_${cathegory}`}><span> {cathegory}</span></Link>
                </div>
                <div className="date-ev"><i className="fas fa-user-tie"></i> <a href=""><span>{author}</span> </a>at <i className="far fa-clock"></i> <a href=""><span>{date}</span></a> </div>
                <div className="title-ev">{title}</div>
                <div className="text-ev"> {text.substring(0, 197) + "..."}</div>
                <div className="more-ev flex-row-between">
                    <Likes
                        id={id}
                        likesCount={likesCount}
                        isLiked={isLiked}
                        addLike={addLike}
                        removeLike={removeLike}
                    />
                    <Link to={`/event_${id}`} ><span><i
                        className="far fa-file-alt"></i> Read more</span></Link>
                </div>
            </div>            
        </div>
        </>
        )
    }
      
    export default Event