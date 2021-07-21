import React from 'react'
import { useSelector } from 'react-redux'
import Event from './Event'
import eventsBase from './eventsBase'

const EventBlock = () => {

    const eventsBase = useSelector(state => state.eventsBase)
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