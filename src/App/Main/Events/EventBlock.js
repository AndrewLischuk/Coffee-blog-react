import React from 'react'
import Event from './Event'
import eventsBase from './eventsBase'

const EventBlock = ({
    handleEventKey,
    eventKey
}) => {
    return (
        <>
        {
            eventsBase.map(({
                id,
                image,
                cathegory,
                author,
                date,
                title,
                text,                
            }) => (
                <Event 
                    key={id}
                    id={id}
                    image={image}
                    cathegory={cathegory}
                    author={author}
                    date={date}
                    title={title}
                    text={text}
                    handleEventKey={handleEventKey}
                />
            ))
        }
        </>
    )
}

export default EventBlock