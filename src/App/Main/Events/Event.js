import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Likes from '../../../Components/Likes/Likes'

const Event = ({
    id,
    image,
    cathegory,
    author,
    date,
    title,
    text,
    handleEventKey,
    handleCathegoryKey,
    likesCount,
    isLiked,
    addLike,
    removeLike
}) => {  

    return (
        <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="box box-cut"><img className="box-img" src={image} alt="" />
                    <div className="links-panel flex-row-between">
                        <a href=""><i className="fas fa-search"></i></a>
                        <Link to={`/event_${id}`} onClick={() => handleEventKey(id, likesCount)}><i className="fas fa-link"></i></Link>
                    </div>
                    <div className="box-overlay"></div>
                </div>
                <div className="event-block">
                    <div className="cathegory-ev">Cathegory: 
                        <Link to={`/event/cathegory_${cathegory}`} onClick={() => handleCathegoryKey(cathegory)}><span> {cathegory}</span></Link>
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
                        <Link to={`/event_${id}`} onClick={() => handleEventKey(id, likesCount)}><span><i
                            className="far fa-file-alt"></i> Read more</span></Link>
                    </div>
                </div>
            </div>
        )
    }

const mapDispatchToProps = (dispatch) => ({
    handleEventKey:(id, likesCount) => dispatch({
        type:"HANDLE_EVENT_KEY",
        id,
        likesCount,
    }),
    handleCathegoryKey:(cathegory) => dispatch({
        type:"HANDLE_CATHEGORY_KEY",
        cathegory,
    }),    
})    

export default connect (
    null,
    mapDispatchToProps,
) (Event)