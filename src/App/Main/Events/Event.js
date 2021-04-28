import React from 'react'

const Event = ({
    image,
    cathegory,
    author,
    date,
    title,
    text
}) => {
    return (
        <div className="flex-column-left col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="box box-cut"><img className="box-img" src={image} alt="" />
                    <div className="links-panel flex-row-between">
                        <a href=""><i className="fas fa-search"></i></a>
                        <a href=""><i className="fas fa-link"></i></a>
                    </div>
                    <div className="box-overlay"></div>
                </div>
                <div className="event-block">
                    <div className="cathegory-ev">Cathegory: <a href=""><span> {cathegory}</span></a> </div>
                    <div className="date-ev"><i className="fas fa-user-tie"></i> <a href=""><span>{author}</span> </a>at <i className="far fa-clock"></i> <a href=""><span>{date}</span></a> </div>
                    <div className="title-ev">{title}</div>
                    <div className="text-ev">{text}</div>
                    <div className="more-ev flex-row-between">
                        <div><i className="far fa-heart"></i> 61</div><a href=""><span><i
                            className="far fa-file-alt"></i> Read more</span></a>
                    </div>
                </div>
            </div>
    )
}

export default Event