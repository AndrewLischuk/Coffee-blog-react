import React from 'react'
import Event from './Event'
import eventsBase from './eventsBase'

const EventBlock = ({
    handleEventKey,
    handleCathegoryKey
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
                    handleEventKey={handleEventKey}
                    handleCathegoryKey={handleCathegoryKey}
                />
            ))
        }
        </>
    )
}

export default EventBlock