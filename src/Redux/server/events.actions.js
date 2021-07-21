import axios from "axios"

export const fetchEvents = () => (dispatch) => {
    axios.get("https://run.mocky.io/v3/5cf4ba96-341e-4acb-af75-b3507c4a7015")    
    .then(res => res.data)
    // .then(data => console.log(data))

    .then(data => {
        dispatch({
            type:"EVENTS_FETCH_SUCCESS",
            eventsBaseRow: data.eventsBase
        })
    })
}