import axios from "axios"

export const fetchEvents = () => (dispatch) => {
    axios.get("https://run.mocky.io/v3/4f3f825f-ddcc-4433-ad20-78a1bc37304f")    
    .then(res => res.data)
    // .then(data => console.log(data))

    .then(data => {
        dispatch ({
            type:"EVENTS_FETCH_SUCCESS",
            eventsBase: data.eventsBase
        })
    })
}