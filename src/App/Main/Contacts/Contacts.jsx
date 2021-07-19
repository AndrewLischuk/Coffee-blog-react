import "./contacts.css"
import map from "../../../assets/Images/map.png"
import facebookIcon from "../../../assets/Images/Profile-icons/facebook-icon.png"
import linkedIcon from "../../../assets/Images/Profile-icons/linked-icon.png"
import twitIcon from "../../../assets/Images/Profile-icons/twit-icon.png"
import ScrollFunc from "../../../Components/ScrollFunc"

const Contacts = () => {
    return (
        <div className="container contacts fade-in" style={{marginTop: '80px'}}>
            <ScrollFunc/>
            <div className="row">
                <div className="flex-row-between-stretch">
                    <div className="flex-column-center col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div><img src={map} alt=""/></div>
                        <p className="cathegory-ev">BeCoffee<br />
                        Level 13, 2 Elizabeth St,<br />
                        Melbourne, Victoria 3000,<br />
                        Australia</p>
                        <p className="date-ev" style={{margin: "30px 0"}}>E-mail: 
                        <a href="" ><span> noreply@envato.com</span></a><br />    
                        Phone: 
                        <a href=""><span> +61 (0) 3 8376 6284</span></a></p>
                        <h1 className="cathegory-ev">Our Profiles:</h1>
                        <div className="flex-row-between">  
                            <div className="profile-icon flex-column-center"><a href="https://www.facebook.com/" className=""><img src={facebookIcon} alt="" className="box-img"/></a></div>
                            <div className="profile-icon flex-column-center"><a href="https://www.linkedin.com/"><img src={linkedIcon} alt=""/></a></div>
                            <div className="profile-icon flex-column-center"><a href="https://twitter.com/"><img src={twitIcon} alt=""/></a></div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6303.668968333661!2d144.9523743!3d-37.8173457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sru!2sua!4v1623342361847!5m2!1sru!2sua" width="100%" height="450" style={{border: 0}} allowFullScreen="0" loading="lazy"></iframe></div>
                </div>
                <div className="flex-column-center" style={{marginTop: '80px'}}>
                    <p className="title-ev">Send us a message</p>
                    <p className="col-xs-12 col-sm-12 col-md-8 col-lg-6 col-xl-6" style={{margin: "30px 0"}}>Ullam ac urna eu felis dapibus. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor:</p>                
                    <form className="col-xs-12 col-sm-12 col-md-9 col-lg-8 col-xl-8 flex-column-center">                            
                        <div className="flex-row-between" style={{width: "100%"}}>
                            <div className="comment-send col-xs-12 col-md-6">                                    
                                <input 
                                    className="" 
                                    type="text" 
                                    placeholder="Your name"
                                />
                            </div>                            
                            <div className="comment-send col-xs-12 col-md-6">
                                <input 
                                    type="text" 
                                    placeholder="Your email"
                                />
                            </div>                            
                        </div>
                        <div className="comment-send col-xs-12">                                    
                            <input 
                                type="text" 
                                placeholder="Subject"
                            />
                        </div>                        
                        <div className="comment-send col-xs-12">
                            <textarea 
                                name="" 
                                id="" 
                                cols="30" 
                                rows="10" 
                                maxlength="1000" 
                                placeholder="Your massage">
                            </textarea>
                        </div>
                        <button className="alt-btn">SEND MASSAGE</button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default Contacts