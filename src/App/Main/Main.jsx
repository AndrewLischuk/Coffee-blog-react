import React from 'react'
import SectionSeparator from '../SectionSeparator/SectionSeparator'
import About from './About/About'
import Events from './Events/Events'
import './main.css'


const Main = () => {
    return (
        <main className="main">
            <About/>
            <SectionSeparator/>
            <div style={{marginTop: '80px'}}><a href="" name="events"></a>
                <div className="container">
                    <div className="row">
                       <Events/> 
                    </div>
                </div>
            </div>
        </main>
    )    
}

export default Main