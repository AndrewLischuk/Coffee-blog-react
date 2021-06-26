import { Route } from 'react-router'
import SectionSeparator from '../SectionSeparator/SectionSeparator'
import About from './About/About'
import Events from './Events/Events'
import AboutPage from './About/AboutPage/AboutPage'
import EventPage from './Events/EventPage/EventPage'
import EventFilterPage from './Events/EventFilterPage/EventFilterPage'
import './main.css'
import Contacts from './Contacts/Contacts'
import ScrollFunc from '../../Components/ScrollFunc'

const Main = () => { 
    
    return (
        <main className="main">
            <ScrollFunc/>
            <Route path="/" exact component={About}/>
            <Route path="/" exact component={SectionSeparator}/>
            <Route path="/" exact component={Events}/>                          
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/events" exact component={Events}/>                
            <Route path="/event_:id" exact component={EventPage}/>                
            <Route path="/event/cathegory_:cathegory" exact component={EventFilterPage}/>                
            <Route path="/contacts" exact component={Contacts}/>
        </main>
    )    
}

export default Main