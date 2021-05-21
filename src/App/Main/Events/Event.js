import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

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
    isLiked,
    addLike,
    removeLike
}) => {

    

    return (
        <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="box box-cut"><img className="box-img" src={image} alt="" />
                    <div className="links-panel flex-row-between">
                        <a href=""><i className="fas fa-search"></i></a>
                        <Link to="/eventpage" onClick={() => handleEventKey(id, cathegory)}><i className="fas fa-link"></i></Link>
                    </div>
                    <div className="box-overlay"></div>
                </div>
                <div className="event-block">
                    <div className="cathegory-ev">Cathegory: 
                        <Link to="/eventcathegory" onClick={() => handleCathegoryKey(cathegory)}><span> {cathegory}</span></Link>
                    </div>
                    <div className="date-ev"><i className="fas fa-user-tie"></i> <a href=""><span>{author}</span> </a>at <i className="far fa-clock"></i> <a href=""><span>{date}</span></a> </div>
                    <div className="title-ev">{title}</div>
                    <div className="text-ev"> {text.substring(0, 197) + "..."}</div>
                    <div className="more-ev flex-row-between">
                        <div onClick={() => isLiked ? removeLike(id) : addLike(id)}>
                            <span>{
                                isLiked ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>
                            }</span>                            
                            <span> 61</span>                             
                        </div>
                            <Link to="/eventpage" onClick={() => handleEventKey(id, cathegory)}><span><i
                            className="far fa-file-alt"></i> Read more</span></Link>
                    </div>
                </div>
            </div>
        )
    }

    const mapStateToProps = (state, {id}) => ({
        isLiked: state[id]
    })

    const mapDispatchToProps = (dispatch, {id}) => ({
        addLike:() => dispatch({
            type:"LIKE",
            id
        }),
        removeLike:() => dispatch({
            type:"DISLIKE",
            id
        })
    })

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (Event)