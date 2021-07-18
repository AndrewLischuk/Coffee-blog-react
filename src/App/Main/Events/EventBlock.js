import React from 'react'
import Event from './Event'
import eventsBase from './eventsBase'

const EventBlock = () => {
    return (        
        <>
        {
            eventsBase.slice(0)
            .reverse()
            .map(({
                    id,
                    image,
                    cathegory,
                    author,
                    date,
                    title,
                    text,
                    likesCount,                
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
                    likesCount={likesCount}
                />
            ))
        }
        </>
    )
}

export default EventBlock