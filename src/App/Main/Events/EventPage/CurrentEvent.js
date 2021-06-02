import React from 'react'
import { connect } from 'react-redux'
import { Testimonials } from '../Testimonials'
import Separator from '../../../Separator/Separator'
import '../testimonials.css'
import { Link } from 'react-router-dom'

const CurrentEvent = ({
    event,
    isLiked,
    addLike,
    removeLike,
    handleEventKey,                   
    handleCathegoryKey
}) => {    
    return (
        <div className="flex-column-center" style={{marginTop: "50px"}}>
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
                            <div onClick={() => isLiked ? removeLike(event.id) : addLike(event.id)}>
                                <span>{
                                    isLiked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>
                                }</span>                            
                                <span> 61</span>                             
                            </div>                            
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
const mapStateToProps = (state, {event}) => ({
    isLiked: state[event.id]
})

const mapDispatchToProps = (dispatch, {event}) => ({
    addLike:() => dispatch({
        type:"LIKE",
        id : event.id
    }),
    removeLike:() => dispatch({
        type:"DISLIKE",
        id : event.id
    })
})

export default connect (
mapStateToProps,
mapDispatchToProps
) (CurrentEvent) 