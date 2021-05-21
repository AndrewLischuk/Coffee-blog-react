import React from 'react'
import EventBlock from './EventBlock'
import './events.css'

const Events = ({
    handleEventKey,    
    handleCathegoryKey    
}) => {
    return (
        <div style={{marginTop: '80px'}}>
            <div className="container">
                <div className="row">
                    <section className="events flex-row-between">
                        <EventBlock
                            handleEventKey={handleEventKey}                            
                            handleCathegoryKey={handleCathegoryKey}                            
                        />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Events