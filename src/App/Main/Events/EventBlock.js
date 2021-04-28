import React from 'react'
import Event from './Event'
import eventsBase from './eventsBase'

const EventBlock = () => {
    return (
        <>
        {
            eventsBase.map(({
                image,
                cathegory,
                author,
                date,
                title,
                text
            }) => (
                <Event
                    image={image}
                    cathegory={cathegory}
                    author={author}
                    date={date}
                    title={title}
                    text={text}
                />
            ))
        }
        </>
    )
}

export default EventBlock