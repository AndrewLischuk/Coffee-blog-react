import React, { useState } from 'react'


export const Testimonials = () => {

    const arrTestimonials = [
        {name:"Jack", date: "March 14 2021", text:"A ipsam soluta atque, nesciunt natus ab magnam possimus delectus sint accusamus sequi voluptatum velit id omnis? Deserunt harum voluptas incidunt, obcaecati debitis suscipit ex magnam ullam doloribus temporibus eius laudantium tenetur!"},
        {name:"John", date: "March 14 2021", text:"Quod unde fuga eaque ullam labore illum aliquid debitis reiciendis? Illum maiores inventore ut cum suscipit repellat quo adipisci, temporibus perspiciatis vitae voluptas eius quia placeat, dolorem vel minima deleniti laudantium unde!"}
    ]
    
    const [testimonials, setTestimonials] = useState(arrTestimonials)

    const [newTestimonials, setNewTestimonials] = useState ({
        name:"",
        text:""
    })

    const handleNameChange = (e) => {
        setNewTestimonials(value => ({
            ...value,
            name:e.target.value
        }))
    }

    const handleTextChange = (e) => {
        setNewTestimonials(value => ({
            ...value,
            text:e.target.value
        }))
    }

    const onSend = (e) => {
        e.preventDefault();

        setTestimonials(value => {
            return [...value, newTestimonials]
        })

        setNewTestimonials({
            name:"",
            text:"",
        })
    }

    return (
        <>
            {
                testimonials.map((item, i) => (
                    <div className="container" key={i}>
                        <div className="row">
                            <div className={"testimonials  col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}> 
                                <div className="cathegory-ev" style={{marginBottom:"15px"}}>Name: <span>{item.name} </span>at <i className="far fa-clock"></i> <a href=""><span>{item.date}</span></a> </div>
                                <div className="comment-text">
                                    <div className="text-ev" style={{marginBottom:"15px"}}>{item.text}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            
            <form className="flex-column-left" style={{marginTop:"30px"}} onSubmit={onSend}>
                <div className="container">
                    <div className="row flex-row-between">
                        <div className="comment-send">
                            <input                        
                                type="text"
                                placeholder="Your name"
                                value={newTestimonials.name}
                                onChange={handleNameChange}
                            />                    
                        </div>
                        <div className="comment-send" >
                            <textarea
                                cols="30" rows="10"
                                placeholder="Your text"
                                value={newTestimonials.text}
                                onChange={handleTextChange}
                            ></textarea>
                        </div>
                        <button className="alt-btn" style={{marginTop:"15px"}}>Leave a comment</button>
                    </div>
                </div>    
            </form>            
            
        </>
    )
}